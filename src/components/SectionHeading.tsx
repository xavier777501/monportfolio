import { motion } from 'framer-motion'

export default function SectionHeading({
  kicker,
  title,
  align = 'center',
}: {
  kicker: string
  title: string
  align?: 'center' | 'left'
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={align === 'center' ? 'mx-auto max-w-xl text-center' : 'max-w-xl'}
    >
      <span className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">{kicker}</span>
      <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      <div className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 ${align === 'center' ? 'mx-auto' : ''}`} />
    </motion.div>
  )
}
