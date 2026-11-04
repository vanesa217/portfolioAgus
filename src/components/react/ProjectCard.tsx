import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
  email?: string;
  index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  email = "agusllama1@gmail.com",
  index = 0
}) => {
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });

  const mailtoHref = `mailto:${email}?subject=${encodeURIComponent(project.inquirySubject)}&body=${encodeURIComponent(`Hola Agustín, vi tu proyecto "${project.title}" en tu portfolio y me gustaría conversar sobre algo similar para mi negocio.`)}`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSpotlightPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.article
      onMouseMove={handleMouseMove}
      className="relative h-full rounded-3xl bg-slate-900/60 backdrop-blur-md border border-white/[0.08] hover:border-orange-500/30 transition-all duration-300 overflow-hidden flex flex-col justify-between p-6 sm:p-7 shadow-[0_16px_36px_rgba(0,0,0,0.4)] group select-none"
    >
      {/* Spotlight Card Effect: brillo radial que sigue el cursor sobre el borde */}
      <div 
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-0"
        style={{
          background: `radial-gradient(450px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(255, 77, 0, 0.12), transparent 80%)`,
        }}
      />

      <div className="relative z-10">
        {/* Eyebrow limpio monocromático */}
        <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/[0.08]">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
            0{index + 1} // {project.category}
          </span>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-zinc-400 font-medium bg-white/[0.04] px-2.5 py-0.5 rounded-full border border-white/[0.08]">
            PRODUCCIÓN
          </span>
        </div>

        {/* Título Principal con tracking-tight */}
        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2 group-hover:text-orange-400/90 transition-colors">
          {project.title}
        </h3>

        {/* Métrica de Impacto: KPI Highlight (tabular-nums, texto blanco brillante, cápsula sutil) */}
        {project.impactMetric && (
          <div className="mb-3.5">
            <span className="font-mono tabular-nums font-semibold text-white text-xs bg-white/[0.04] border border-white/[0.08] px-2.5 py-1 rounded-md inline-flex items-center gap-1.5 shadow-xs">
              <span className="text-[#FF4D00] text-[10px]">✦</span>
              <span>{project.impactMetric}</span>
            </span>
          </div>
        )}

        {/* Descripción fluida */}
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5 text-pretty font-normal">
          {project.description}
        </p>

        {/* Puntos de Valor directos */}
        <div className="mb-6 space-y-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold block mb-2">
            Entregables & Funcionalidad:
          </span>
          <ul className="space-y-2">
            {project.businessHighlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300 font-medium leading-normal">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D00] mt-1.5 shrink-0 shadow-[0_0_6px_#FF4D00]" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer con Tecnologías y Botón */}
      <div className="relative z-10">
        {/* Tags de Tecnologías monocromáticos sutiles */}
        <div className="flex flex-wrap gap-1.5 pt-4 pb-4 border-t border-white/[0.08]">
          {project.techTags.map((tech) => (
            <span 
              key={tech}
              className="text-[11px] font-mono font-medium text-slate-300 bg-slate-950/60 border border-white/[0.08] px-2.5 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Botón CTA Linear/Vercel (bg-orange-600 hover:bg-orange-500, elevación y compresión) */}
        <a 
          href={mailtoHref}
          className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white shadow-[0_0_20px_-3px_rgba(255,77,0,0.4)] hover:shadow-[0_0_25px_0px_rgba(255,77,0,0.6)] transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] text-xs font-mono font-bold cursor-pointer"
        >
          <span>Consultar desarrollo similar</span>
          <svg className="w-3.5 h-3.5 ml-0.5 text-white group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.4" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </motion.article>
  );
};
