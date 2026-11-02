import React from 'react';
import { motion } from 'framer-motion';
import { springTransition } from '../../animations/variants';

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

export const ModernHero: React.FC<ModernHeroProps> = ({ email = "agusllama1@gmail.com" }) => {
  const [isAnimatingFlame, setIsAnimatingFlame] = React.useState(true);

  // La animación con gradiente de fuego corre al entrar a la web y luego desaparece
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimatingFlame(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section 
      id="hero" 
      className="relative w-full min-h-[calc(100vh-4.5rem)] min-h-[calc(100dvh-4.5rem)] flex flex-col justify-between border-b border-white/[0.08] bg-transparent text-white overflow-hidden"
    >
      {/* 1. Resplandor Ambiental Teal / Mint (Esquina superior izquierda y fondo general) */}
      <div 
        className="absolute -top-24 -left-24 w-[360px] sm:w-[550px] lg:w-[650px] h-[360px] sm:h-[550px] bg-teal-500/[0.12] rounded-full blur-[110px] pointer-events-none -z-0" 
      />

      {/* 2. Resplandor Cálido Fuego (Detrás del título y la llama) */}
      <div 
        className="absolute top-1/4 left-1/4 w-[280px] sm:w-[420px] h-[280px] sm:h-[350px] bg-orange-600/[0.08] rounded-full blur-[95px] pointer-events-none -z-0" 
      />

      {/* 3. Resplandor Teal sutil en la tarjeta derecha */}
      <div 
        className="absolute top-1/4 -right-16 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-teal-400/[0.08] rounded-full blur-[120px] pointer-events-none -z-0" 
      />

      {/* 4. Resplandor Ambiental Térmico en el borde inferior central (Calor residual) */}
      <div 
        className="absolute inset-x-0 bottom-0 h-48 sm:h-64 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-orange-950/25 via-transparent to-transparent pointer-events-none -z-0" 
      />

      {/* Contenedor Principal: Centrado verticalmente */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center py-6 sm:py-10 lg:py-14 relative z-10">
        
        {/* Grid Responsivo: 1 Columna en Mobile/Tablet, 2 Columnas en Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Columna Izquierda / Principal */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-4 sm:space-y-6">
            
            {/* 1. Badge Pill: DISPONIBLE PARA NUEVOS PROYECTOS */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#122A28]/90 border border-teal-400/40 text-teal-300 text-[11px] sm:text-xs font-mono font-bold tracking-wider shadow-[0_0_16px_rgba(45,212,191,0.2)] backdrop-blur-sm">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400 shadow-[0_0_8px_#2DD4BF]" />
              </span>
              <span>DISPONIBLE PARA NUEVOS PROYECTOS</span>
            </div>

            {/* 2. Título H1: "AgusLlama" con gradiente de fuego en "Llama" al entrar que luego desaparece */}
            <div className="space-y-2">
              <h1 className="text-[44px] xs:text-[54px] sm:text-6xl md:text-7xl lg:text-[80px] font-black tracking-[-0.035em] leading-[1.02] text-white">
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
                        backgroundImage: "linear-gradient(115deg, #FF3D00 0%, #FFB300 28%, #FF5722 55%, #FFE082 78%, #FF3D00 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                      className="absolute inset-0 pointer-events-none filter drop-shadow-[0_0_18px_rgba(255,87,34,0.85)]"
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
                      className="absolute -inset-1.5 bg-gradient-to-r from-orange-600/40 via-amber-500/35 to-red-600/20 blur-xl rounded-full pointer-events-none -z-10"
                      aria-hidden="true"
                    />
                  </span>
                  {/* Punto Coral Naranja al final */}
                  <span className="text-[#FF5722] font-black text-4xl sm:text-6xl md:text-7xl lg:text-[80px] leading-none select-none inline-block drop-shadow-[0_0_14px_rgba(255,87,34,0.6)] ml-0.5 sm:ml-1">
                    .
                  </span>
                </span>
              </h1>

              {/* Sub-título en Blanco Puro destacado */}
              <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug pt-2">
                Desarrollo software web y e-commerce listos para escalar.
              </h2>
            </div>

            {/* 3. Párrafo Descriptivo */}
            <p className="text-[13.5px] sm:text-base text-slate-400 leading-relaxed max-w-xl text-pretty font-normal">
              Transformo procesos comerciales en plataformas rápidas, visualmente memorables y fáciles de usar. Foco en experiencia de usuario, arquitectura limpia y trato directo 1 a 1.
            </p>

            {/* 4. Botones de Acción: Fuego Térmico Limpio + Cápsula Oscura con Glow Sutil */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto pt-1">
              {/* Botón Primario ("VER PROYECTOS") con gradiente térmico de llama limpia */}
              <motion.a 
                href="#proyectos" 
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                transition={springTransition}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-500 hover:via-amber-500 hover:to-orange-500 text-white text-xs sm:text-sm font-black tracking-wider uppercase shadow-[0_0_20px_rgba(249,115,22,0.35)] hover:shadow-[0_0_28px_rgba(249,115,22,0.55)] transition-all cursor-pointer border border-amber-400/30"
              >
                <span>VER PROYECTOS</span>
                <svg className="w-4 h-4 stroke-[3] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.a>

              {/* Botón Secundario ("Contactarme") con destello de brasa y glow tenue en hover */}
              <motion.a 
                href="#contacto" 
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                transition={springTransition}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#151D22]/90 hover:bg-[#1A252B] text-slate-200 hover:text-white text-xs sm:text-sm font-bold border border-white/10 hover:border-orange-500/40 shadow-[0_4px_16px_rgba(0,0,0,0.4)] hover:shadow-[0_0_12px_rgba(249,115,22,0.2)] transition-all duration-300 cursor-pointer backdrop-blur-md"
              >
                <span className="w-2 h-2 rounded-full bg-[#FF5722] shadow-[0_0_8px_#FF5722]" />
                <span>Contactarme</span>
              </motion.a>
            </div>

            {/* 5. Separador Térmico y Fila de Micro-atributos */}
            <div className="w-full max-w-md flex flex-col gap-3 pt-2">
              {/* Separador horizontal superior a los badges: Línea ultra fina de 1px con gradiente difuminado térmico */}
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

              <div className="flex flex-wrap items-center gap-5 sm:gap-7 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="text-teal-400 font-bold drop-shadow-[0_0_6px_rgba(45,212,191,0.35)]">&lt;&gt;</span>
                  <span className="tracking-wide">Stack 100% Moderno</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold drop-shadow-[0_0_6px_rgba(249,115,22,0.4)]">⚡</span>
                  <span className="tracking-wide">Performance & SEO First</span>
                </div>
              </div>
            </div>

          </div>

          {/* Columna Derecha en Desktop (PC): Tarjeta // STACK & ENFOQUE */}
          <div className="hidden lg:flex lg:col-span-5 flex-col">
            <motion.div 
              whileHover={{ y: -3, scale: 1.01 }}
              transition={springTransition}
              className="rounded-3xl p-[1px] bg-gradient-to-b from-teal-500/20 via-teal-500/10 to-orange-500/25 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative group"
            >
              <div className="rounded-[23px] bg-[#11181C]/90 p-6 sm:p-7 backdrop-blur-xl relative overflow-hidden h-full">
                {/* Sutil Rim Light Superior en Teal */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-teal-400/50 to-transparent pointer-events-none" />

                {/* Header de la tarjeta */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_8px_#2DD4BF]" />
                    <span className="text-xs font-mono text-slate-300 font-bold tracking-wider">// STACK & ENFOQUE</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-teal-300 bg-[#132A29] px-3 py-1 rounded-full border border-teal-400/35">
                    FULL STACK
                  </span>
                </div>

                {/* Tecnologías Clave */}
                <div className="mb-5">
                  <span className="text-[10.5px] font-mono text-slate-400 uppercase tracking-wider block mb-2.5 font-bold">
                    TECNOLOGÍAS CLAVE:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {techPills.map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs font-mono font-medium text-slate-200 bg-[#182126] border border-white/10 px-3.5 py-1.5 rounded-xl hover:border-amber-500/40 hover:text-amber-300 transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metodología de Trabajo con Viñetas de Diamante */}
                <div className="space-y-3 mb-5 pt-3.5 border-t border-white/[0.06]">
                  <span className="text-[10.5px] font-mono text-slate-400 uppercase tracking-wider block mb-2 font-bold">
                    METODOLOGÍA DE TRABAJO:
                  </span>
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="text-[#FF7043] font-bold text-sm shrink-0 leading-none">✦</span>
                    <span><strong className="text-white font-bold">Arquitectura limpia</strong>, modular y escalable.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="text-[#FFA726] font-bold text-sm shrink-0 leading-none">✦</span>
                    <span><strong className="text-white font-bold">Rendimiento extremo</strong> y Core Web Vitals en verde.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="text-teal-400 font-bold text-sm shrink-0 leading-none">✦</span>
                    <span><strong className="text-white font-bold">Trato directo 1 a 1</strong> de principio a fin.</span>
                  </div>
                </div>

                {/* Footer de la tarjeta: Ubicación & Lighthouse */}
                <div className="pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#FF7043] text-sm">📍</span>
                    <span>Buenos Aires (GMT-3)</span>
                  </div>
                  <span className="text-teal-400 font-bold flex items-center gap-1.5">
                    <span>✓</span>
                    <span>Lighthouse 100/100</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

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
