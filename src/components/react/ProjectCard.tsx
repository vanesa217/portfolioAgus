import React from 'react';
import { motion } from 'framer-motion';
import { cardHoverVariants } from '../../animations/variants';
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
  const mailtoHref = `mailto:${email}?subject=${encodeURIComponent(project.inquirySubject)}&body=${encodeURIComponent(`Hola Agustín, vi tu proyecto "${project.title}" en tu portfolio y me gustaría conversar sobre algo similar para mi negocio.`)}`;

  return (
    <motion.article
      variants={cardHoverVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      className="relative h-full rounded-3xl bg-[#11181C]/90 border border-teal-500/20 hover:border-teal-400/50 overflow-hidden flex flex-col justify-between p-6 sm:p-7 shadow-[0_16px_36px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(45,212,191,0.15)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.7),0_0_25px_rgba(45,212,191,0.2)] transition-all duration-200 select-none group backdrop-blur-xl"
    >
      {/* Sutil resplandor de iluminación superior en Verde Teal */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-teal-400/40 to-transparent pointer-events-none" />

      <div>
        {/* Eyebrow limpio editorial */}
        <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/[0.08]">
          <span className="text-[11px] font-mono uppercase tracking-wider text-teal-400 font-bold">
            0{index + 1} // {project.category}
          </span>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-teal-300 font-bold bg-[#132A29] px-2.5 py-0.5 rounded-full border border-teal-400/30">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            PRODUCCIÓN
          </span>
        </div>

        {/* Título Principal */}
        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2 group-hover:text-teal-300 transition-colors">
          {project.title}
        </h3>

        {/* Métrica de Impacto: Píldora cálida fuego integrada */}
        {project.impactMetric && (
          <div className="mb-3.5">
            <span className="text-xs font-mono font-bold text-orange-300 bg-orange-500/15 border border-orange-500/30 px-3 py-1 rounded-lg inline-flex items-center gap-1.5 shadow-sm">
              <span className="text-[#FF7043]">✦</span>
              <span>{project.impactMetric}</span>
            </span>
          </div>
        )}

        {/* Descripción fluida */}
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5 text-pretty font-normal">
          {project.description}
        </p>

        {/* Puntos de Valor directos en el flujo */}
        <div className="mb-6 space-y-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold block mb-2">
            Entregables & Funcionalidad:
          </span>
          <ul className="space-y-2">
            {project.businessHighlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300 font-medium leading-normal">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF7043] mt-1.5 shrink-0 shadow-[0_0_6px_#FF7043]" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer con Tecnologías y Botón */}
      <div>
        {/* Tags de Tecnologías sutiles */}
        <div className="flex flex-wrap gap-1.5 pt-4 pb-4 border-t border-white/[0.08]">
          {project.techTags.map((tech) => (
            <span 
              key={tech}
              className="text-[11px] font-mono font-semibold text-slate-300 bg-[#182126] border border-white/10 px-2.5 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Botón de Consulta Ergonómico (44px) estilo Cápsula Fuego */}
        <a 
          href={mailtoHref}
          className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#FF5722] to-[#FF4500] hover:from-[#FF6E40] hover:to-[#FF5722] active:scale-[0.97] text-xs font-mono font-bold text-white shadow-[0_6px_20px_rgba(255,87,34,0.35)] hover:shadow-[0_8px_25px_rgba(255,87,34,0.55)] transition-all cursor-pointer"
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
