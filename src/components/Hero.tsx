import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { profile } from '../data/content'
import xavierPhoto from '../assets/xavier-photo.jpeg'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export default function Hero() {
  return (
    <section id="accueil" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-16">
      <div className="mx-auto grid max-w-6xl w-full grid-cols-1 items-center gap-16 md:grid-cols-2">
        <div>
          <motion.h1
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="font-display text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Xavier <span className="text-accent">Tchalla</span>
          </motion.h1>

          <motion.p custom={1} initial="hidden" animate="show" variants={fadeUp} className="mt-5 max-w-xl text-lg text-muted">
            {profile.role} — je conçois des <span className="text-ink">API</span> et des{' '}
            <span className="text-ink">backends</span> robustes, et je les habille d'interfaces{' '}
            <span className="text-ink">React</span> modernes.
          </motion.p>

          <motion.div custom={2} initial="hidden" animate="show" variants={fadeUp} className="mt-6 flex flex-wrap gap-2">
            {profile.roleTags.map((tag) => (
              <span key={tag} className="font-display panel rounded px-3 py-1 text-[11px] text-muted">
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div custom={3} initial="hidden" animate="show" variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projets"
              data-cursor-hover
              className="group inline-flex items-center gap-2 rounded bg-accent px-6 py-3 font-display text-sm font-semibold text-accent-ink transition-colors hover:bg-[#ffb15e]"
            >
              voir mes projets
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              data-cursor-hover
              className="panel panel-hover inline-flex items-center gap-2 rounded px-6 py-3 font-display text-sm font-semibold text-ink"
            >
              me contacter
            </a>
          </motion.div>

          <motion.p custom={4} initial="hidden" animate="show" variants={fadeUp} className="font-display mt-8 text-[11px] text-faint">
            <span className="text-accent">■</span> disponible pour un stage &amp; les hackathons
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex w-full max-w-sm items-center justify-center"
        >
          <div className="animate-float relative">
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-md bg-accent" />
            <div className="panel relative overflow-hidden rounded-md p-2">
              <img
                src={xavierPhoto}
                alt={profile.displayName}
                className="h-[420px] w-[320px] rounded object-cover object-top grayscale-[15%] sm:h-[460px] sm:w-[340px]"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="panel absolute -left-10 top-8 hidden rounded px-4 py-3 sm:block"
            >
              <p className="font-display text-sm font-semibold text-ink">{profile.yearsExperience}+ ans</p>
              <p className="font-display text-[10px] text-faint">d'expérience</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="panel absolute -right-8 bottom-10 hidden rounded px-4 py-3 sm:block"
            >
              <p className="font-display text-sm font-semibold text-ink">backend & api</p>
              <p className="font-display text-[10px] text-faint">python · fastapi</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#apropos"
        data-cursor-hover
        aria-label="Défiler vers le bas"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-faint hover:text-accent sm:block"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  )
}
