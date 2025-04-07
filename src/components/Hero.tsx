import React, { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { heroData } from '../data/heroData';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars = useRef<Star[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initStars = () => {
      stars.current = Array.from({ length: 200 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3,
        opacity: Math.random() * 0.5 + 0.2,
        speed: Math.random() * 0.4 + 0.1,
      }));
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDarkMode = document.documentElement.classList.contains('dark');

      stars.current.forEach((star) => {
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }

        const dx = star.x - mousePosition.current.x;
        const dy = star.y - mousePosition.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 100;

        if (distance < maxDistance) {
          const angle = Math.atan2(dy, dx);
          const push = (1 - distance / maxDistance) * 2;
          star.x += Math.cos(angle) * push;
          star.y += Math.sin(angle) * push;
        }

        ctx.fillStyle = isDarkMode
            ? `rgba(255, 255, 255, ${star.opacity})`
            : `rgba(0, 0, 0, ${star.opacity * 0.7})`;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleResize = () => {
      setCanvasSize();
      initStars();
    };

    setCanvasSize();
    initStars();
    animate();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
      <div className="relative min-h-screen">
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0"
            style={{ background: 'transparent' }}
        />
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
          <img
              src={heroData.profilePicture}
              alt={heroData.name}
              className="mb-8 h-48 w-48 rounded-full border-4 border-primary object-cover shadow-lg"
          />
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-6xl">
            {heroData.name}
          </h1>
          <p className="mb-6 text-xl text-muted-foreground sm:text-2xl">
            {heroData.title}
          </p>
          <p className="mb-8 max-w-2xl text-muted-foreground">
            {heroData.description}
          </p>

          {/* Boutons d'action */}
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            {/* GitHub */}
            <Button variant="outline" size="icon" className="rounded-full" asChild>
              <a href={heroData.contact.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>

            {/* LinkedIn */}
            <Button asChild variant="default" size="lg" className="rounded-full">
              <a href={heroData.contact.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>

            {/* Email */}
            <Button variant="outline" size="icon" className="rounded-full" asChild>
              <a href={`mailto:${heroData.contact.email}`} target="_blank" rel="noopener noreferrer">
                <Mail className="h-5 w-5" />
              </a>
            </Button>

            {/* Voir mon CV */}
            <Button
                asChild
                variant="default"
                size="lg"
                className="rounded-full flex items-center gap-2"
            >
              <a href={heroData.contact.cv} target="_blank" rel="noopener noreferrer">
                <FileText className="h-4 w-4" />
                Voir mon CV
              </a>
            </Button>
          </div>

          {/* Skills */}
          <div className="mb-4 flex flex-wrap gap-2">
            {heroData.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Hero;
