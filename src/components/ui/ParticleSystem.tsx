'use client';

import { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
}

interface ParticleSystemProps {
  className?: string;
  particleCount?: number;
  colors?: string[];
  interactive?: boolean;
}

const ParticleSystem = ({
  className = '',
  particleCount = 50,
  colors = ['#3B82F6', '#8B5CF6', '#06B6D4', '#10B981'],
  interactive = true,
}: ParticleSystemProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const isHoveringRef = useRef(false);
  const animationRef = useRef<number>();
  const isInitializedRef = useRef(false);

  // Inicializar partículas apenas uma vez
  const initializeParticles = useCallback(
    (canvas: HTMLCanvasElement) => {
      if (isInitializedRef.current) return;

      particlesRef.current = Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: Math.random() * 100,
        maxLife: 100,
      }));

      isInitializedRef.current = true;
    },
    [particleCount, colors]
  );

  // Sistema de física e animação otimizado
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Limpar canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Atualizar e desenhar partículas
    particlesRef.current.forEach(particle => {
      // Física básica
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Gravidade sutil
      particle.vy += 0.001;

      // Resistência do ar
      particle.vx *= 0.999;
      particle.vy *= 0.999;

      // Bounce nas bordas
      if (particle.x <= 0 || particle.x >= canvas.width) {
        particle.vx *= -0.8;
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
      }
      if (particle.y <= 0 || particle.y >= canvas.height) {
        particle.vy *= -0.8;
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
      }

      // Interação com o mouse
      if (interactive && isHoveringRef.current) {
        const dx = mousePosRef.current.x - particle.x;
        const dy = mousePosRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          const force = (100 - distance) / 100;
          particle.vx += (dx / distance) * force * 0.01;
          particle.vy += (dy / distance) * force * 0.01;
        }
      }

      // Ciclo de vida
      particle.life -= 0.5;
      if (particle.life <= 0) {
        particle.life = particle.maxLife;
        particle.x = Math.random() * canvas.width;
        particle.y = Math.random() * canvas.height;
        particle.vx = (Math.random() - 0.5) * 0.5;
        particle.vy = (Math.random() - 0.5) * 0.5;
      }

      // Desenhar partícula
      ctx.save();
      ctx.globalAlpha = particle.opacity * (particle.life / particle.maxLife);
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();

      // Efeito de brilho
      if (interactive && isHoveringRef.current) {
        const dx = mousePosRef.current.x - particle.x;
        const dy = mousePosRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 80) {
          const glowIntensity = (80 - distance) / 80;
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = glowIntensity * 20;
          ctx.fill();
        }
      }

      ctx.restore();
    });

    // Desenhar conexões entre partículas próximas
    particlesRef.current.forEach((particle1, i) => {
      particlesRef.current.slice(i + 1).forEach(particle2 => {
        const dx = particle1.x - particle2.x;
        const dy = particle1.y - particle2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 80) {
          const opacity = ((80 - distance) / 80) * 0.3;
          ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
          ctx.beginPath();
          ctx.moveTo(particle1.x, particle1.y);
          ctx.lineTo(particle2.x, particle2.y);
          ctx.stroke();
        }
      });
    });

    animationRef.current = requestAnimationFrame(animate);
  }, [interactive]);

  // Inicializar canvas e partículas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configurar canvas
    const resizeCanvas = () => {
      // ✅ Usar viewport em vez de window.innerWidth/Height para evitar overflow
      const vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      );
      const vh = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
      );

      canvas.width = vw;
      canvas.height = vh;

      // Reinicializar partículas apenas se o canvas mudou de tamanho
      if (
        !isInitializedRef.current ||
        canvas.width !== vw ||
        canvas.height !== vh
      ) {
        isInitializedRef.current = false;
        initializeParticles(canvas);

        // Iniciar animação após inicialização
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
        animate();
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Inicializar partículas apenas uma vez
    if (!isInitializedRef.current) {
      initializeParticles(canvas);

      // Iniciar animação após inicialização
      setTimeout(() => {
        if (canvasRef.current && isInitializedRef.current) {
          animate();
        }
      }, 100); // Pequeno delay para garantir que tudo esteja pronto
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [initializeParticles, animate]);

  // Sistema de animação
  useEffect(() => {
    // Só iniciar animação se o canvas estiver pronto
    if (canvasRef.current && isInitializedRef.current) {
      animate();
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  // Eventos do mouse otimizados
  useEffect(() => {
    if (!interactive) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseEnter = () => {
      isHoveringRef.current = true;
    };

    const handleMouseLeave = () => {
      isHoveringRef.current = false;
    };

    const canvas = canvasRef.current;
    if (canvas) {
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mouseenter', handleMouseEnter);
      canvas.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseenter', handleMouseEnter);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [interactive]);

  return (
    <motion.canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-0 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        background: 'transparent',
      }}
    />
  );
};

export default ParticleSystem;
