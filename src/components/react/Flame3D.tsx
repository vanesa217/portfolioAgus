import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  startX: number;
  startY: number;
  targetX: number;
  targetY: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

export const Flame3D: React.FC<{ className?: string }> = ({ className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [burstKey, setBurstKey] = useState(0);

  // Generador de partículas / chispas flotantes orgánicas
  const particles: Particle[] = useMemo(() => {
    const colors = ['#FFE082', '#FFD54F', '#FFB300', '#FF7043', '#FF5722', '#FF3D00'];
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      startX: (Math.random() - 0.5) * 16,
      startY: 20 + Math.random() * 10,
      targetX: (Math.random() - 0.5) * 36,
      targetY: -35 - Math.random() * 45,
      size: 2 + Math.random() * 3.5,
      duration: 1.4 + Math.random() * 1.2,
      delay: Math.random() * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  }, []);

  // Chispas extra cuando el usuario hace clic o hover
  const triggerBurst = () => {
    setBurstKey((prev) => prev + 1);
  };

  return (
    <div 
      className={`relative inline-flex items-center justify-center cursor-pointer select-none group ${className}`}
      onMouseEnter={() => { setIsHovered(true); triggerBurst(); }}
      onMouseLeave={() => setIsHovered(false)}
      onClick={triggerBurst}
      title="¡Llama viva! Haz clic para avivar el fuego"
      style={{ verticalAlign: 'middle' }}
    >
      {/* 1. Resplandor Ambiental Térmico (Aura 3D que ilumina el entorno) */}
      <motion.div 
        animate={{
          scale: isHovered ? [1.2, 1.35, 1.2] : [1, 1.15, 0.98, 1.1, 1],
          opacity: isHovered ? [0.65, 0.85, 0.65] : [0.45, 0.6, 0.4, 0.55, 0.45],
        }}
        transition={{
          repeat: Infinity,
          duration: isHovered ? 1.2 : 2.2,
          ease: "easeInOut",
        }}
        className="absolute -inset-2 sm:-inset-3 rounded-full bg-gradient-to-t from-orange-600 via-amber-500 to-yellow-400 blur-xl pointer-events-none -z-10"
      />

      {/* 2. Microiluminación puntual reflejada */}
      <div className="absolute -inset-1 rounded-full bg-amber-400/30 blur-md pointer-events-none -z-0" />

      {/* 3. Sistema de Partículas / Chispas Ascendentes */}
      <div className="absolute inset-0 pointer-events-none overflow-visible">
        {particles.map((p) => (
          <motion.span
            key={`flame-spark-${p.id}`}
            animate={{
              y: [p.startY, p.targetY],
              x: [p.startX, p.startX + (p.targetX - p.startX) * 0.5 + Math.sin(p.id) * 6, p.targetX],
              opacity: [0, 1, 0.8, 0],
              scale: [0.3, 1.2, 0.8, 0.1],
            }}
            transition={{
              duration: isHovered ? p.duration * 0.75 : p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeOut",
            }}
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              boxShadow: `0 0 6px 1px ${p.color}, 0 0 10px ${p.color}`,
            }}
            className="absolute left-1/2 bottom-3 rounded-full"
          />
        ))}

        {/* Chispas rápidas de estallido dinámico al interactuar */}
        {burstKey > 0 && Array.from({ length: 8 }).map((_, i) => (
          <motion.span
            key={`burst-${burstKey}-${i}`}
            initial={{ y: 15, x: 0, opacity: 1, scale: 1.5 }}
            animate={{
              y: -50 - Math.random() * 50,
              x: (Math.random() - 0.5) * 60,
              opacity: 0,
              scale: 0.1,
            }}
            transition={{
              duration: 0.8 + Math.random() * 0.4,
              ease: "easeOut",
            }}
            className="absolute left-1/2 bottom-3 w-1.5 h-1.5 rounded-full bg-yellow-200 shadow-[0_0_8px_#FFF59D]"
          />
        ))}
      </div>

      {/* 4. Cuerpo 3D Ultra HD de la Llama (Geometría Volumétrica con Multi-gradientes) */}
      <motion.div
        animate={{
          scaleY: isHovered ? [1.12, 1.24, 1.08, 1.2, 1.12] : [1, 1.06, 0.97, 1.04, 1],
          scaleX: isHovered ? [1.05, 0.98, 1.06, 1.02, 1.05] : [1, 0.96, 1.03, 0.98, 1],
          rotate: isHovered ? [-2.5, 3, -1.8, 2.2, -2.5] : [-1.5, 1.8, -0.8, 1.2, -1.5],
        }}
        transition={{
          repeat: Infinity,
          duration: isHovered ? 1.1 : 1.9,
          ease: "easeInOut",
        }}
        className="relative w-9 h-11 sm:w-11 sm:h-14 md:w-12 md:h-16 flex items-center justify-center filter drop-shadow-[0_4px_16px_rgba(255,87,34,0.7)] group-hover:drop-shadow-[0_6px_24px_rgba(255,100,20,0.9)] transition-all duration-300"
      >
        <svg 
          viewBox="0 0 100 130" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
        >
          <defs>
            {/* Gradiente Capa 1: Llama Exterior Incandescente (Rojo Rubí a Naranja Fuego) */}
            <linearGradient id="flameOuterGrad" x1="50" y1="125" x2="50" y2="5" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#C62828" />
              <stop offset="25%" stopColor="#E64A19" />
              <stop offset="60%" stopColor="#FF5722" />
              <stop offset="90%" stopColor="#FF9100" />
              <stop offset="100%" stopColor="#FFD700" />
            </linearGradient>

            {/* Gradiente Capa 2: Relieve 3D y Volumen Lateral */}
            <linearGradient id="flameSpecular3D" x1="20" y1="20" x2="80" y2="120" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
              <stop offset="35%" stopColor="#FFE082" stopOpacity="0.3" />
              <stop offset="70%" stopColor="#FF5722" stopOpacity="0" />
            </linearGradient>

            {/* Gradiente Capa 3: Llama Media Dorada Ultra Luminosa */}
            <linearGradient id="flameMidGrad" x1="50" y1="120" x2="50" y2="30" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FF6D00" />
              <stop offset="40%" stopColor="#FFAB00" />
              <stop offset="80%" stopColor="#FFD600" />
              <stop offset="100%" stopColor="#FFF9C4" />
            </linearGradient>

            {/* Gradiente Capa 4: Núcleo Blanco Puro de Alta Temperatura + Raíz Cian */}
            <linearGradient id="flameCoreGrad" x1="50" y1="122" x2="50" y2="55" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.9" />
              <stop offset="18%" stopColor="#E0F7FA" />
              <stop offset="45%" stopColor="#FFFFFF" />
              <stop offset="85%" stopColor="#FFFDE7" />
              <stop offset="100%" stopColor="#FFF59D" />
            </linearGradient>

            {/* Filtro de Resplandor Neón */}
            <filter id="coreGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* CAPA 1: CUERPO EXTERIOR VOLUMÉTRICO DE LA LLAMA */}
          <path
            d="M50 5C48 22 36 34 26 48C14 65 12 84 21 103C28 117 40 126 55 126C72 126 86 114 89 97C92 81 83 67 76 56C71 49 68 41 68 33C68 25 72 18 73 11C64 16 57 24 53 34C51 24 51 14 50 5Z"
            fill="url(#flameOuterGrad)"
          />

          {/* CAPA 2: RESALTADO ESPECULAR 3D CURVO (Da la sensación de esfera y volumen tridimensional) */}
          <path
            d="M50 7C48 23 37 35 28 49C18 64 16 80 23 97C24 92 26 84 31 75C37 64 45 53 48 40C49 30 49 19 50 7Z"
            fill="url(#flameSpecular3D)"
          />

          {/* CAPA 3: LENGUA INTERNA DORADA CON MOVIMIENTO SINUOSO */}
          <motion.path
            animate={{
              d: isHovered 
                ? [
                    "M50 35C44 47 36 57 32 68C26 80 27 94 33 106C38 115 46 120 54 120C64 120 73 112 75 101C77 89 71 78 66 69C63 63 62 56 63 50C58 54 53 60 50 67C49 57 49 46 50 35Z",
                    "M50 32C42 45 34 56 30 67C24 79 26 95 32 108C37 117 47 122 56 121C66 120 75 111 76 99C77 87 70 76 65 67C61 60 61 53 61 46C56 51 51 58 49 66C48 55 48 43 50 32Z",
                    "M50 35C44 47 36 57 32 68C26 80 27 94 33 106C38 115 46 120 54 120C64 120 73 112 75 101C77 89 71 78 66 69C63 63 62 56 63 50C58 54 53 60 50 67C49 57 49 46 50 35Z",
                  ]
                : [
                    "M50 38C44 49 37 59 34 69C29 80 30 93 35 104C40 113 47 118 54 118C63 118 71 111 73 101C75 90 70 80 66 72C63 66 62 60 63 54C58 58 54 64 51 70C50 60 50 49 50 38Z",
                    "M50 34C42 46 35 57 32 68C27 79 28 94 34 106C39 115 48 119 55 119C64 119 72 110 74 99C76 88 69 78 65 70C62 64 61 57 61 50C57 55 52 61 50 68C49 57 49 45 50 34Z",
                    "M50 38C44 49 37 59 34 69C29 80 30 93 35 104C40 113 47 118 54 118C63 118 71 111 73 101C75 90 70 80 66 72C63 66 62 60 63 54C58 58 54 64 51 70C50 60 50 49 50 38Z",
                  ],
            }}
            transition={{
              repeat: Infinity,
              duration: isHovered ? 0.9 : 1.5,
              ease: "easeInOut",
            }}
            fill="url(#flameMidGrad)"
          />

          {/* CAPA 4: NÚCLEO BLANCO INCANDESCENTE + RAÍZ CIAN DE COMBUSTIÓN */}
          <motion.ellipse
            cx="50"
            cy="104"
            rx="14"
            ry="20"
            animate={{
              rx: isHovered ? [14, 16, 13, 15, 14] : [13, 14.5, 12.5, 14, 13],
              ry: isHovered ? [20, 23, 19, 22, 20] : [19, 21, 18.5, 20.5, 19],
              y: isHovered ? [0, -3, 1, -2, 0] : [0, -2, 1, -1.5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: "easeInOut",
            }}
            fill="url(#flameCoreGrad)"
            filter="url(#coreGlow)"
          />

          {/* CAPA 5: DESTALLO CENTRAL BLANCO PURO */}
          <motion.circle
            cx="50"
            cy="108"
            r="6"
            animate={{
              r: [5.5, 7, 5.5],
              opacity: [0.85, 1, 0.85],
            }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              ease: "easeInOut",
            }}
            fill="#FFFFFF"
          />
        </svg>
      </motion.div>
    </div>
  );
};
