import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ModernHeroProps {
  email?: string;
}

const techPills = [
  "React",
  "Astro",
  "TypeScript",
  "Node.js",
  "Tailwind",
  "PostgreSQL"
];

// Curva cúbica Linear / Vercel estándar: cubic-bezier(0.16, 1, 0.3, 1)
const linearEase = [0.16, 1, 0.3, 1] as const;

// Stagger fade-in de abajo hacia arriba (opacity 0 -> 1, translateY 14px -> 0px)
const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: linearEase,
    },
  },
};

export const ModernHero: React.FC<ModernHeroProps> = ({ email = "agusllama1@gmail.com" }) => {
  const [isAnimatingFlame, setIsAnimatingFlame] = useState(true);
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });

  // La animación con gradiente de fuego corre al entrar a la web y luego desaparece
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimatingFlame(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  // Spotlight Card Effect: calcula coordenadas del cursor sobre la tarjeta lateral
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSpotlightPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      id="hero" 
      className="relative w-full min-h-[calc(100vh-4.5rem)] min-h-[calc(100dvh-4.5rem)] flex flex-col justify-between border-b border-white/[0.08] bg-[#0B0F17] text-white overflow-hidden"
    >
      {/* Resplandor Ambiental Sutil: radial gradient de nivel Linear / Vercel */}
      <div 
        className="absolute inset-x-0 top-0 h-[650px] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,77,0,0.15),rgba(255,255,255,0))] pointer-events-none -z-0" 
      />

      {/* Contenedor Principal: Centrado verticalmente con stagger fade-in */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center py-6 sm:py-10 lg:py-14 relative z-10">
        
        {/* Grid Responsivo: 1 Columna en Mobile/Tablet, 2 Columnas en Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Columna Izquierda / Principal con Stagger */}
          <motion.div 
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start space-y-4 sm:space-y-6"
          >
            
            {/* 1. Badge Pill: DISPONIBLE PARA NUEVOS PROYECTOS (Verde reservado exclusivamente para pulso) */}
            <motion.div variants={heroItemVariants}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/[0.08] text-slate-300 text-[11px] sm:text-xs font-mono font-medium tracking-wider shadow-xs backdrop-blur-md">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_8px_#34D399]" />
                </span>
                <span>DISPONIBLE PARA NUEVOS PROYECTOS</span>
              </div>
            </motion.div>

            {/* 2. Título H1: "AgusLlama." con tracking-tight refinado y gradiente efímero */}
            <motion.div variants={heroItemVariants} className="space-y-2">
              <h1 className="text-[44px] xs:text-[54px] sm:text-6xl md:text-7xl lg:text-[80px] font-black tracking-tight leading-[1.02] text-white">
                <span className="inline-flex items-center flex-wrap">
                  <span className="text-white">Agus</span>
                  <span 
                    className="relative inline-block cursor-default select-none"
                    onMouseEnter={() => {
                      if (!isAnimatingFlame) {
                        setIsAnimatingFlame(true);
                        setTimeout(() => setIsAnimatingFlame(false), 2600);
                      }
                    }}
                  >
                    {/* Capa de texto base blanco permanente */}
                    <span className="text-white">Llama</span>

                    {/* Capa ardiente con gradiente de fuego animado al entrar */}
                    <motion.span
                      initial={{ opacity: 1 }}
                      animate={isAnimatingFlame ? {
                        opacity: [1, 1, 0.7, 0],
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      } : {
                        opacity: 0,
                      }}
                      transition={{
                        opacity: { duration: 2.8, times: [0, 0.6, 0.85, 1], ease: "easeInOut" },
                        backgroundPosition: { duration: 2.4, ease: "linear", repeat: Infinity },
                      }}
                      style={{
                        backgroundSize: "220% auto",
                        backgroundImage: "linear-gradient(115deg, #FF4D00 0%, #FFA726 28%, #FF5500 55%, #FFD54F 78%, #FF4D00 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                      className="absolute inset-0 pointer-events-none filter drop-shadow-[0_0_18px_rgba(255,77,0,0.85)]"
                      aria-hidden="true"
                    >
                      Llama
                    </motion.span>

                    {/* Resplandor térmico de aura de fuego que se extingue al disiparse */}
                    <motion.span
                      initial={{ opacity: 0.8 }}
                      animate={isAnimatingFlame ? {
                        opacity: [0.8, 0.9, 0.4, 0],
                        scale: [0.95, 1.06, 1],
                      } : {
                        opacity: 0,
                      }}
                      transition={{ duration: 2.8, times: [0, 0.3, 0.75, 1], ease: "easeOut" }}
                      className="absolute -inset-1.5 bg-gradient-to-r from-orange-600/35 via-amber-500/30 to-orange-500/20 blur-xl rounded-full pointer-events-none -z-10"
                      aria-hidden="true"
                    />
                  </span>
                  {/* Punto Naranja Acento Exclusivo al final */}
                  <span className="text-[#FF4D00] font-black text-4xl sm:text-6xl md:text-7xl lg:text-[80px] leading-none select-none inline-block drop-shadow-[0_0_14px_rgba(255,77,0,0.6)] ml-0.5 sm:ml-1">
                    .
                  </span>
                </span>
              </h1>

              {/* Sub-título en Blanco Puro con tracking-tight */}
              <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug pt-2">
                Desarrollo software web y e-commerce listos para escalar.
              </h2>
            </motion.div>

            {/* 3. Párrafo Descriptivo */}
            <motion.p variants={heroItemVariants} className="text-[13.5px] sm:text-base text-slate-400 leading-relaxed max-w-xl text-pretty font-normal">
              Transformo procesos comerciales en plataformas rápidas, visualmente memorables y fáciles de usar. Foco en experiencia de usuario, arquitectura limpia y trato directo 1 a 1.
            </motion.p>

            {/* 4. Botones de Acción (CTAs estándar Linear / Vercel) */}
            <motion.div variants={heroItemVariants} className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto pt-1">
              {/* Botón Primario ("VER PROYECTOS") */}
              <a 
                href="#proyectos" 
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-orange-600 hover:bg-orange-500 text-white text-xs sm:text-sm font-bold tracking-wider uppercase shadow-[0_0_20px_-3px_rgba(255,77,0,0.4)] hover:shadow-[0_0_25px_0px_rgba(255,77,0,0.6)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 cursor-pointer border border-white/10"
              >
                <span>VER PROYECTOS</span>
                <svg className="w-4 h-4 stroke-[2.6] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>

              {/* Botón Secundario ("Contactarme") con elevación y compresión suave */}
              <a 
                href="#contacto" 
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-slate-900/60 hover:bg-slate-800/80 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold border border-white/10 hover:border-orange-500/40 shadow-sm backdrop-blur-md hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-[#FF4D00] shadow-[0_0_8px_#FF4D00]" />
                <span>Contactarme</span>
              </a>
            </motion.div>

            {/* 5. Separador Térmico y Fila de Micro-atributos Monocromáticos */}
            <motion.div variants={heroItemVariants} className="w-full max-w-md flex flex-col gap-3 pt-2">
              {/* Línea horizontal ultra fina con gradiente sutil */}
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />

              <div className="flex flex-wrap items-center gap-5 sm:gap-7 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="text-slate-400 font-bold">&lt;&gt;</span>
                  <span className="tracking-wide">Stack 100% Moderno</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#FF4D00] font-bold drop-shadow-[0_0_6px_rgba(255,77,0,0.4)]">⚡</span>
                  <span className="tracking-wide">Performance & SEO First</span>
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* Columna Derecha en Desktop (PC): Tarjeta // STACK & ENFOQUE con Spotlight Effect */}
          <motion.div 
            variants={heroItemVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex lg:col-span-5 flex-col"
          >
            <div 
              onMouseMove={handleMouseMove}
              className="relative rounded-3xl bg-slate-900/60 backdrop-blur-md border border-white/[0.08] hover:border-orange-500/30 transition-all duration-300 p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group"
            >
              {/* Spotlight Card Effect: brillo radial que sigue el cursor */}
              <div 
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(400px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(255, 77, 0, 0.12), transparent 80%)`,
                }}
              />

              {/* Sutil Rim Light Superior en Naranja suave */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/40 to-transparent pointer-events-none" />

              {/* Header de la tarjeta monocromático elegante */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08] relative z-10">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <span className="text-xs font-mono text-slate-300 font-bold tracking-wider">// STACK & ENFOQUE</span>
                </div>
                <span className="text-[10px] font-mono font-medium text-zinc-400 bg-white/[0.04] px-2.5 py-0.5 rounded-full border border-white/[0.08]">
                  FULL STACK
                </span>
              </div>

              {/* Tecnologías Clave */}
              <div className="mb-5 relative z-10">
                <span className="text-[10.5px] font-mono text-slate-400 uppercase tracking-wider block mb-2.5 font-bold">
                  TECNOLOGÍAS CLAVE:
                </span>
                <div className="flex flex-wrap gap-2">
                  {techPills.map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs font-mono font-medium text-slate-300 bg-slate-950/60 border border-white/[0.08] px-3.5 py-1.5 rounded-xl hover:-translate-y-0.5 hover:border-orange-500/40 hover:bg-white/[0.06] transition-all duration-200 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metodología de Trabajo con Viñetas Monocromáticas con Acento */}
              <div className="space-y-3 mb-5 pt-3.5 border-t border-white/[0.06] relative z-10">
                <span className="text-[10.5px] font-mono text-slate-400 uppercase tracking-wider block mb-2 font-bold">
                  METODOLOGÍA DE TRABAJO:
                </span>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <span className="text-[#FF4D00] font-bold text-sm shrink-0 leading-none">✦</span>
                  <span><strong className="text-white font-bold">Arquitectura limpia</strong>, modular y escalable.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <span className="text-orange-400/90 font-bold text-sm shrink-0 leading-none">✦</span>
                  <span><strong className="text-white font-bold">Rendimiento extremo</strong> y Core Web Vitals en verde.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <span className="text-slate-400 font-bold text-sm shrink-0 leading-none">✦</span>
                  <span><strong className="text-white font-bold">Trato directo 1 a 1</strong> de principio a fin.</span>
                </div>
              </div>

              {/* Footer de la tarjeta: Ubicación & Lighthouse (Icono de verificación monocromático) */}
              <div className="pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400 relative z-10">
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-400 text-sm">📍</span>
                  <span>Buenos Aires (GMT-3)</span>
                </div>
                <span className="text-slate-300 font-medium flex items-center gap-1.5">
                  <span className="text-zinc-400 font-bold">✓</span>
                  <span>Lighthouse 100/100</span>
                </span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Indicador Inferior: Señal hacia los proyectos destacados */}
      <div className="w-full pb-3 pt-1 flex items-center justify-center shrink-0 relative z-10">
        <a 
          href="#proyectos" 
          className="inline-flex items-center gap-1.5 text-[10.5px] sm:text-xs font-mono text-slate-400 hover:text-white transition-colors py-1 px-3.5 rounded-full hover:bg-white/[0.05] group"
          aria-label="Ver proyectos destacados más abajo"
        >
          <span className="tracking-wider uppercase text-[10px] font-semibold">Proyectos destacados abajo</span>
          <svg className="w-3.5 h-3.5 text-slate-400 group-hover:text-white group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};
