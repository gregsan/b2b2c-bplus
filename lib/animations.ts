import { Transition, Variants } from 'framer-motion'

// Animation variants for Framer Motion
export const pageTransition = {
  initial: { x: '100%', opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: '100%', opacity: 0 },
}

export const pageTransitionConfig = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.2,
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export const slideUp = {
  initial: { y: '100%', opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: '100%', opacity: 0 },
}

export const slideUpSpring: Transition = {
  type: 'spring',
  damping: 30,
  stiffness: 300,
}

export const scaleIn = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.9, opacity: 0 },
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

export const staggerItem = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
}

export const tapScale = {
  scale: 0.95,
}

export const hoverLift = {
  y: -4,
  transition: { duration: 0.2 },
}