import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const AnimatedHero3D = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const particles = [];
    const particleCount = 100;
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 1000;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.speedZ = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.z -= this.speedZ;
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.z < 1 || this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset();
          this.z = 1000;
        }
      }

      draw() {
        const scale = 1000 / this.z;
        const x2d = (this.x - canvas.width / 2) * scale + canvas.width / 2;
        const y2d = (this.y - canvas.height / 2) * scale + canvas.height / 2;
        const size2d = this.size * scale;

        if (x2d < 0 || x2d > canvas.width || y2d < 0 || y2d > canvas.height) {
          return;
        }

        ctx.beginPath();
        ctx.arc(x2d, y2d, size2d, 0, Math.PI * 2);
        
        // Red glow effect
        const gradient = ctx.createRadialGradient(x2d, y2d, 0, x2d, y2d, size2d * 3);
        gradient.addColorStop(0, `rgba(255, 59, 59, ${this.opacity * scale / 10})`);
        gradient.addColorStop(0.5, `rgba(255, 59, 59, ${this.opacity * scale / 20})`);
        gradient.addColorStop(1, 'rgba(255, 59, 59, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core particle
        ctx.fillStyle = `rgba(255, 59, 59, ${this.opacity * scale / 5})`;
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Geometric shapes
    let rotation = 0;

    const drawGeometricShapes = () => {
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);

      // Rotating wireframe cube
      const size = 150;
      rotation += 0.005;

      ctx.strokeStyle = 'rgba(255, 59, 59, 0.15)';
      ctx.lineWidth = 2;

      // Draw rotating hexagon
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i + rotation;
        const x = Math.cos(angle) * size;
        const y = Math.sin(angle) * size;
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      ctx.stroke();

      // Draw inner rotating hexagon
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - rotation * 1.5;
        const x = Math.cos(angle) * (size * 0.5);
        const y = Math.sin(angle) * (size * 0.5);
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      ctx.stroke();

      // Connecting lines
      ctx.strokeStyle = 'rgba(255, 59, 59, 0.08)';
      ctx.lineWidth = 1;
      for (let i = 0; i < 6; i++) {
        const angle1 = (Math.PI / 3) * i + rotation;
        const angle2 = (Math.PI / 3) * i - rotation * 1.5;
        const x1 = Math.cos(angle1) * size;
        const y1 = Math.sin(angle1) * size;
        const x2 = Math.cos(angle2) * (size * 0.5);
        const y2 = Math.sin(angle2) * (size * 0.5);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      ctx.restore();
    };

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw geometric shapes
      drawGeometricShapes();

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Connect nearby particles
      ctx.strokeStyle = 'rgba(255, 59, 59, 0.1)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.globalAlpha = (100 - distance) / 100 * 0.2;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'transparent' }}
      />
      
      {/* Floating orbs */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-[#ff3b3b]/20 blur-3xl"
      />
      
      <motion.div
        animate={{
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-1/3 left-1/3 w-40 h-40 rounded-full bg-[#ff3b3b]/15 blur-3xl"
      />
      
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-1/2 right-1/3 w-24 h-24 rounded-full bg-[#ff3b3b]/25 blur-2xl"
      />
    </div>
  );
};
