import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import type { Project } from '../../data/projects';
import { containerStagger } from '../../animations/variants';

interface ProjectsGridProps {
  projects: Project[];
  email?: string;
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ 
  projects, 
  email = "agusllama1@gmail.com" 
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Detectar si el usuario puede scrollear hacia la derecha
  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      // Si está a menos de 20px del final, ocultamos la flecha
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 20);
    }
  };

  useEffect(() => {
    checkScroll();
    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', checkScroll, { passive: true });
    }
    window.addEventListener('resize', checkScroll);

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', checkScroll);
      }
      window.removeEventListener('resize', checkScroll);
    };
  }, [projects]);

  // Desplazar suavemente a la siguiente tarjeta al tocar la flechita
  const scrollNext = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.clientWidth * 0.85;
      scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full">
      
      {/* Degradado lateral sutil en el borde derecho en mobile para sugerir continuidad */}
      {canScrollRight && (
        <div className="absolute -right-4 sm:-right-6 top-0 bottom-4 w-12 bg-gradient-to-l from-[#0A0E11] via-[#0A0E11]/70 to-transparent pointer-events-none z-10 lg:hidden" />
      )}

      {/* Flechita flotante latente indicadora (Solo en mobile cuando hay más tarjetas) */}
      <AnimatePresence>
        {canScrollRight && (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: [0, 5, 0]
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              x: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
              opacity: { duration: 0.25 },
              scale: { duration: 0.25 }
            }}
            onClick={scrollNext}
            aria-label="Ver siguiente proyecto"
            className="absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#151D22]/95 border border-white/20 text-teal-300 flex items-center justify-center shadow-[0_4px_24px_rgba(0,0,0,0.8),0_0_18px_rgba(45,212,191,0.45)] backdrop-blur-xl lg:hidden active:scale-90 transition-transform cursor-pointer"
          >
            {/* Icono de flecha con latido de luz verde teal */}
            <svg 
              className="w-5 h-5 text-teal-300 drop-shadow-[0_0_6px_rgba(45,212,191,0.7)]" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.8" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Contenedor del Carrusel Snap en mobile / Grilla 3 columnas en desktop */}
      <motion.div 
        ref={scrollRef}
        variants={containerStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 pt-1 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:pb-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project, index) => (
          <div 
            key={project.id}
            className="w-[85vw] max-w-[360px] sm:w-[380px] lg:w-auto snap-center flex-shrink-0 lg:flex-shrink"
          >
            <ProjectCard 
              project={project} 
              email={email} 
              index={index}
            />
          </div>
        ))}
      </motion.div>

      {/* Indicador de Swipe inferior con flechita latente y contador */}
      <div className="flex items-center justify-between pt-2.5 px-1 lg:hidden text-xs font-mono text-slate-400">
        <span className="flex items-center gap-1.5 text-[11px] text-slate-300 font-semibold">
          <span>Desliza para explorar</span>
          {/* Flechita latente en el texto */}
          <motion.span 
            animate={{ x: [0, 4, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="inline-flex text-[#FF7043] font-extrabold text-sm"
          >
            →
          </motion.span>
        </span>
        <span className="text-[10px] font-bold text-teal-300 bg-[#182126] px-2.5 py-0.5 rounded-full border border-white/10 shadow-sm">
          {projects.length} proyectos
        </span>
      </div>

    </div>
  );
};
