import React, { useEffect, useRef, useState, useCallback } from "react";
import '../assets/styles/ParallaxBackground.scss';

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  depth: number;
  type: 'circle' | 'square' | 'triangle' | 'confetti';
  opacity: number;
  rotation: number;
  color: string;
}

const COLORS = [
  'rgba(99, 102, 241, VAR)',   // indigo
  'rgba(139, 92, 246, VAR)',   // violet
  'rgba(168, 85, 247, VAR)',   // purple
  'rgba(59, 130, 246, VAR)',   // blue
  'rgba(14, 165, 233, VAR)',   // sky
  'rgba(236, 72, 153, VAR)',   // pink
  'rgba(250, 204, 21, VAR)',   // yellow
];

function generateElements(count: number): FloatingElement[] {
  const elements: FloatingElement[] = [];
  const types: FloatingElement['type'][] = ['circle', 'square', 'triangle', 'confetti'];

  for (let i = 0; i < count; i++) {
    const depth = 0.2 + Math.random() * 0.8;
    // Increase base opacity to make confetti more visible
    const baseOpacity = 0.15 + depth * 0.3;

    elements.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 8 + Math.random() * 25 * depth,
      depth,
      type: types[Math.floor(Math.random() * types.length)],
      opacity: baseOpacity,
      rotation: Math.random() * 360,
      color: COLORS[Math.floor(Math.random() * COLORS.length)].replace('VAR', baseOpacity.toString()),
    });
  }

  return elements;
}

interface ParallaxBackgroundProps {
  elementCount?: number;
  className?: string;
}

function ParallaxBackground({ elementCount = 35, className = '' }: ParallaxBackgroundProps) {
  const [elements] = useState<FloatingElement[]>(() => generateElements(elementCount));
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });

  const animate = useCallback(() => {
    // Increased lerp for faster following
    const lerp = 0.25;
    currentRef.current.x += (targetRef.current.x - currentRef.current.x) * lerp;
    currentRef.current.y += (targetRef.current.y - currentRef.current.y) * lerp;

    setMouse({ x: currentRef.current.x, y: currentRef.current.y });
    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  const renderElement = (el: FloatingElement) => {
    // Increased distance multiplier for stronger effect
    const translateX = mouse.x * el.depth * 120;
    const translateY = mouse.y * el.depth * 120;

    const baseStyle: React.CSSProperties = {
      left: `${el.x}%`,
      top: `${el.y}%`,
      width: el.size,
      height: el.size,
      transform: `translate(${translateX}px, ${translateY}px) rotate(${el.rotation}deg)`,
      animationDelay: `${el.id * 0.3}s`,
      background: el.color,
    };

    switch (el.type) {
      case 'circle':
        return <div key={el.id} className="parallax-element parallax-circle" style={baseStyle} />;
      case 'square':
        return <div key={el.id} className="parallax-element parallax-square" style={baseStyle} />;
      case 'confetti':
        return (
          <div
            key={el.id}
            className="parallax-element parallax-confetti"
            style={{
              ...baseStyle,
              height: el.size * 2, // make it rectangular
            }}
          />
        );
      case 'triangle':
        return (
          <div
            key={el.id}
            className="parallax-element parallax-triangle"
            style={{
              ...baseStyle,
              background: 'transparent',
              borderLeft: `${el.size / 2}px solid transparent`,
              borderRight: `${el.size / 2}px solid transparent`,
              borderBottom: `${el.size}px solid ${el.color}`,
              width: 0,
              height: 0,
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={`parallax-background ${className}`}>
      {elements.map(renderElement)}
    </div>
  );
}

export default ParallaxBackground;
