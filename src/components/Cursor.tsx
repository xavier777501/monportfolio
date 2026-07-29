import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springConfig = { damping: 30, stiffness: 400, mass: 0.5 }
  const ringX = useSpring(x, springConfig)
  const ringY = useSpring(y, springConfig)

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    setEnabled(canHover)
    if (!canHover) return

    const move = (e: MouseEvent) => {
      x.set(e.clientX - 16)
      y.set(e.clientY - 16)
    }
    const overInteractive = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      setHovering(!!target.closest('a, button, input, textarea, [data-cursor-hover]'))
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', overInteractive)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', overInteractive)
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[100] h-8 w-8 rounded-full border border-accent/70"
      style={{ x: ringX, y: ringY }}
      animate={{ scale: hovering ? 1.8 : 1, opacity: 1 }}
      transition={{ scale: { duration: 0.25 } }}
    />
  )
}
