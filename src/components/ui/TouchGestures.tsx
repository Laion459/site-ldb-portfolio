'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface TouchGesturesProps {
  children: React.ReactNode;
  className?: string;
  onSwipe?: (direction: 'left' | 'right' | 'up' | 'down') => void;
  onPinch?: (scale: number) => void;
  onRotate?: (rotation: number) => void;
  onDoubleTap?: () => void;
}

const TouchGestures = ({
  children,
  className = '',
  onSwipe,
  onPinch,
  onRotate,
  onDoubleTap,
}: TouchGesturesProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isTouching, setIsTouching] = useState(false);
  const [touchStart, setTouchStart] = useState<{
    x: number;
    y: number;
    time: number;
  } | null>(null);
  const [lastTap, setLastTap] = useState(0);

  // Motion values para animações
  const scale = useMotionValue(1);
  const rotate = useMotionValue(0);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Transformações
  const scaleTransform = useTransform(scale, [0.5, 2], [0.5, 2]);
  const rotateTransform = useTransform(rotate, [-180, 180], [-180, 180]);
  const xTransform = useTransform(x, [-100, 100], [-100, 100]);
  const yTransform = useTransform(y, [-100, 100], [-100, 100]);

  // Detectar se é dispositivo touch
  const isTouchDevice = () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  };

  // Calcular distância entre dois pontos
  const getDistance = (p1: Touch, p2: Touch) => {
    const dx = p1.clientX - p2.clientX;
    const dy = p1.clientY - p2.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  // Calcular ângulo entre dois pontos
  const getAngle = (p1: Touch, p2: Touch) => {
    return (
      (Math.atan2(p2.clientY - p1.clientY, p2.clientX - p1.clientX) * 180) /
      Math.PI
    );
  };

  // Eventos de touch
  useEffect(() => {
    if (!isTouchDevice() || !containerRef.current) return;

    const container = containerRef.current;
    let initialDistance = 0;
    let initialAngle = 0;
    let initialScale = 1;
    let initialRotation = 0;

    const handleTouchStart = (e: TouchEvent) => {
      // Só prevenir default para gestos específicos, não para scroll
      if (e.touches.length === 2) {
        e.preventDefault(); // Apenas para pinch/rotate
      }

      setIsTouching(true);

      const touches = Array.from(e.touches);

      if (touches.length === 1) {
        // Single touch - detectar tap e swipe
        const touch = touches[0];
        setTouchStart({
          x: touch.clientX,
          y: touch.clientY,
          time: Date.now(),
        });
      } else if (touches.length === 2) {
        // Two touches - detectar pinch e rotate
        const [touch1, touch2] = touches;
        initialDistance = getDistance(touch1, touch2);
        initialAngle = getAngle(touch1, touch2);
        initialScale = scale.get();
        initialRotation = rotate.get();
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      // Só prevenir default para gestos específicos
      if (e.touches.length === 2) {
        e.preventDefault(); // Apenas para pinch/rotate
      }

      const touches = Array.from(e.touches);

      if (touches.length === 2) {
        // Pinch e rotate
        const [touch1, touch2] = touches;
        const currentDistance = getDistance(touch1, touch2);
        const currentAngle = getAngle(touch1, touch2);

        // Calcular mudanças
        const scaleChange = currentDistance / initialDistance;
        const angleChange = currentAngle - initialAngle;

        // Aplicar transformações
        const newScale = Math.max(0.5, Math.min(2, initialScale * scaleChange));
        const newRotation = initialRotation + angleChange;

        scale.set(newScale);
        rotate.set(newRotation);

        // Callbacks
        onPinch?.(newScale);
        onRotate?.(newRotation);
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      // Não prevenir default para permitir scroll natural
      setIsTouching(false);

      if (touchStart && e.touches.length === 0) {
        const touch = e.changedTouches[0];
        const deltaX = touch.clientX - touchStart.x;
        const deltaY = touch.clientY - touchStart.y;
        const deltaTime = Date.now() - touchStart.time;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        // Detectar swipe apenas se for um gesto claro
        if (distance > 50 && deltaTime < 300) {
          const absX = Math.abs(deltaX);
          const absY = Math.abs(deltaY);

          // Só detectar swipe se for claramente horizontal ou vertical
          if (absX > absY * 1.5) {
            // Swipe horizontal
            if (deltaX > 0) {
              onSwipe?.('right');
            } else {
              onSwipe?.('left');
            }
          } else if (absY > absX * 1.5) {
            // Swipe vertical
            if (deltaY > 0) {
              onSwipe?.('down');
            } else {
              onSwipe?.('up');
            }
          }
        }

        // Detectar double tap
        const currentTime = Date.now();
        if (currentTime - lastTap < 300 && distance < 10) {
          onDoubleTap?.();
        }
        setLastTap(currentTime);

        setTouchStart(null);
      }

      // Resetar transformações
      scale.set(1);
      rotate.set(0);
      x.set(0);
      y.set(0);
    };

    // Adicionar event listeners
    container.addEventListener('touchstart', handleTouchStart, {
      passive: false,
    });
    container.addEventListener('touchmove', handleTouchMove, {
      passive: false,
    });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [
    onSwipe,
    onPinch,
    onRotate,
    onDoubleTap,
    lastTap,
    scale,
    rotate,
    x,
    y,
    touchStart,
  ]);

  // Eventos de mouse para desktop
  useEffect(() => {
    if (isTouchDevice() || !containerRef.current) return;

    const container = containerRef.current;
    let isDragging = false;
    let startPos = { x: 0, y: 0 };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      startPos = { x: e.clientX, y: e.clientY };
      setIsTouching(true);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      const deltaX = e.clientX - startPos.x;
      const deltaY = e.clientY - startPos.y;

      x.set(deltaX * 0.1);
      y.set(deltaY * 0.1);
    };

    const handleMouseUp = () => {
      isDragging = false;
      setIsTouching(false);
      x.set(0);
      y.set(0);
    };

    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [x, y]);

  return (
    <motion.div
      ref={containerRef}
      className={`touch-gestures ${className}`}
      style={{
        scale: scaleTransform,
        rotate: rotateTransform,
        x: xTransform,
        y: yTransform,
        touchAction: 'pan-y', // ✅ Permitir scroll vertical, bloquear horizontal
      }}
      whileHover={!isTouchDevice() ? { scale: 1.02 } : {}}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
    >
      {children}

      {/* Indicador visual de touch */}
      {isTouching && (
        <motion.div
          className='absolute inset-0 bg-blue-500/10 rounded-lg pointer-events-none'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </motion.div>
  );
};

export default TouchGestures;
