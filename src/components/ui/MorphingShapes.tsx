'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface MorphingShapesProps {
  className?: string;
  shapeCount?: number;
  colors?: string[];
  morphingSpeed?: number;
}

const MorphingShapes = ({
  className = '',
  shapeCount = 3,
  colors = ['#3B82F6', '#8B5CF6', '#06B6D4'],
  morphingSpeed = 8000,
}: MorphingShapesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  // Sistema de morphing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Formas para morphing (movido para dentro do useEffect)
    const shapes = [
      // Círculo
      (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
      },
      // Triângulo
      (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
        ctx.beginPath();
        ctx.moveTo(x, y - size);
        ctx.lineTo(x - size * 0.866, y + size * 0.5);
        ctx.lineTo(x + size * 0.866, y + size * 0.5);
        ctx.closePath();
      },
      // Quadrado
      (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
        ctx.beginPath();
        ctx.rect(x - size, y - size, size * 2, size * 2);
      },
      // Estrela
      (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
        const spikes = 5;
        const outerRadius = size;
        const innerRadius = size * 0.5;

        ctx.beginPath();
        for (let i = 0; i < spikes * 2; i++) {
          const radius = i % 2 === 0 ? outerRadius : innerRadius;
          const angle = (i * Math.PI) / spikes;
          const px = x + Math.cos(angle) * radius;
          const py = y + Math.sin(angle) * radius;

          if (i === 0) {
            ctx.moveTo(px, py);
          } else {
            ctx.lineTo(px, py);
          }
        }
        ctx.closePath();
      },
      // Hexágono
      (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (i * Math.PI) / 3;
          const px = x + Math.cos(angle) * size;
          const py = y + Math.sin(angle) * size;

          if (i === 0) {
            ctx.moveTo(px, py);
          } else {
            ctx.lineTo(px, py);
          }
        }
        ctx.closePath();
      },
    ];

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
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Variáveis de animação
    let morphProgress = 0;
    const startTime = Date.now();

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;

      // Calcular progresso do morphing
      morphProgress = (elapsed % morphingSpeed) / morphingSpeed;

      // Limpar canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Desenhar formas com morphing
      for (let i = 0; i < shapeCount; i++) {
        const x = (canvas.width / (shapeCount + 1)) * (i + 1);
        const y = canvas.height / 2;
        const size = 60 + Math.sin(morphProgress * Math.PI * 2 + i) * 20;

        // Interpolação entre formas
        const currentShapeIndex = Math.floor(morphProgress * shapes.length);
        const nextShapeIndex = (currentShapeIndex + 1) % shapes.length;
        const localProgress = (morphProgress * shapes.length) % 1;

        // Desenhar forma atual
        ctx.save();
        ctx.globalAlpha = 1 - localProgress;
        ctx.fillStyle = colors[i % colors.length];
        ctx.shadowColor = colors[i % colors.length];
        ctx.shadowBlur = 20;

        shapes[currentShapeIndex](ctx, x, y, size);
        ctx.fill();
        ctx.restore();

        // Desenhar próxima forma
        ctx.save();
        ctx.globalAlpha = localProgress;
        ctx.fillStyle = colors[i % colors.length];
        ctx.shadowColor = colors[i % colors.length];
        ctx.shadowBlur = 20;

        shapes[nextShapeIndex](ctx, x, y, size);
        ctx.fill();
        ctx.restore();
      }

      // Efeitos de partículas flutuantes
      for (let i = 0; i < 20; i++) {
        const angle = morphProgress * Math.PI * 2 + i * 0.3;
        const radius = 100 + Math.sin(morphProgress * Math.PI * 4 + i) * 50;
        const px = canvas.width / 2 + Math.cos(angle) * radius;
        const py = canvas.height / 2 + Math.sin(angle) * radius;

        ctx.save();
        ctx.globalAlpha = 0.3;
        ctx.fillStyle = colors[i % colors.length];
        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [shapeCount, colors, morphingSpeed]); // ✅ Removida dependência 'shapes'

  return (
    <motion.canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-0 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      style={{
        background: 'transparent',
      }}
    />
  );
};

export default MorphingShapes;
