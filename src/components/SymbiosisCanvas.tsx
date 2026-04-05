import { useEffect, useRef } from 'react';

export default function SymbiosisCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });
  const frameRef = useRef<number>(0);

  class Particle {
    x: number;
    y: number;
    originX: number;
    originY: number;
    isAIParticle: boolean;
    size: number;
    maxSize: number;
    speedX: number;
    speedY: number;
    color: string;
    opacity: number;

    constructor(canvasWidth: number, canvasHeight: number, x?: number, y?: number, isAIParticle = false) {
      this.x = x ?? Math.random() * canvasWidth;
      this.y = y ?? Math.random() * canvasHeight;
      this.originX = this.x;
      this.originY = this.y;
      this.isAIParticle = isAIParticle;
      this.opacity = 0;

      if (this.isAIParticle) {
        this.maxSize = Math.random() * 1.5 + 0.5;
        this.size = 0.1;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
        this.color = "255, 255, 255";
      } else {
        this.maxSize = Math.random() * 2.5 + 1.5;
        this.size = this.maxSize;
        this.speedX = (Math.random() - 0.5) * 2.5;
        this.speedY = (Math.random() - 0.5) * 2.5;
        this.color = "255, 255, 255";
      }
    }

    update(canvasWidth: number, canvasHeight: number, mouse: { x: number | null; y: number | null }) {
      // Mouse interaction: subtle attraction
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const force = Math.max(0, (150 - distance) / 150);
        
        if (distance < 150) {
          this.x += dx * force * 0.02;
          this.y += dy * force * 0.02;
        }
      }

      this.x += this.speedX;
      this.y += this.speedY;

      // Bounce with padding
      const padding = 20;
      if (this.x < -padding) this.x = canvasWidth + padding;
      if (this.x > canvasWidth + padding) this.x = -padding;
      if (this.y < -padding) this.y = canvasHeight + padding;
      if (this.y > canvasHeight + padding) this.y = -padding;

      // Fade in/out
      if (this.isAIParticle) {
        if (this.size < this.maxSize) this.size += 0.01;
        this.opacity = Math.min(0.2, this.opacity + 0.005);
      } else {
        this.size -= 0.02;
        this.opacity = Math.max(0, this.size / this.maxSize);
      }
    }

    draw(ctx: CanvasRenderingContext2D) {
      ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      
      // Subtle glow for larger particles
      if (!this.isAIParticle && this.size > 1) {
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(${this.color}, ${this.opacity * 0.5})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const banner = canvas.parentElement;
    if (!banner) return;

    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const width = banner.offsetWidth;
      const height = banner.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
      init();
    };

    const init = () => {
      particlesRef.current = [];
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;
      const particleCount = Math.floor(width / 15);
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(new Particle(width, height, undefined, undefined, true));
      }
    };

    const handleParticles = () => {
      const particles = particlesRef.current;
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update(width, height, mouseRef.current);
        p1.draw(ctx);

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distanceSq = dx * dx + dy * dy;
          const maxDist = 100;
          const maxDistSq = maxDist * maxDist;

          if (distanceSq < maxDistSq) {
            const distance = Math.sqrt(distanceSq);
            const opacity = (1 - distance / maxDist) * 0.2;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = (1 - distance / maxDist) * 1.2;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        if (!p1.isAIParticle && p1.size <= 0.2) {
          particles.splice(i, 1);
          i--;
        }
      }

      // Maintain background particle count
      if (particles.filter(p => p.isAIParticle).length < width / 15) {
        particles.push(new Particle(width, height, undefined, undefined, true));
      }
    };

    const animate = () => {
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;
      
      // Slightly darker trail for smoother motion
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, width, height);
      
      handleParticles();
      frameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      mouseRef.current.x = x;
      mouseRef.current.y = y;

      // Spawn interactive particles
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;
      for (let i = 0; i < 1; i++) {
        particlesRef.current.push(new Particle(width, height, x, y, false));
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="block absolute top-0 left-0 w-full h-full"
    />
  );
}
