import type { Variants, Transition } from "framer-motion";

/**
 * Física de Resortes Apple (WWDC Fluid Interfaces):
 * Proporciona movimiento natural, velocidad heredada y respuesta instantánea sin rebote excesivo.
 */
export const springTransition: Transition = {
  type: "spring",
  stiffness: 280,
  damping: 24,
  mass: 0.8
};

export const snappySpring: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 28,
  mass: 0.6
};

/**
 * Orquestación escalonada para entradas limpias
 */
export const containerStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04
    }
  }
};

/**
 * Revelación suave con filtro de desenfoque progresivo
 */
export const blurFadeUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 18, 
    filter: "blur(6px)" 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: springTransition
  }
};

/**
 * Microinteracción de tarjetas de proyectos: elevación sutil, luz y resorte al tap
 */
export const cardHoverVariants: Variants = {
  initial: { 
    scale: 1, 
    y: 0,
    borderColor: "rgba(255, 255, 255, 0.07)"
  },
  hover: { 
    scale: 1.012, 
    y: -4,
    borderColor: "rgba(56, 189, 248, 0.35)",
    transition: { type: "spring", stiffness: 350, damping: 22 }
  },
  tap: { 
    scale: 0.985,
    transition: { type: "spring", stiffness: 500, damping: 25 }
  }
};
