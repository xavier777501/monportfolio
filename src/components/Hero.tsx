import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, Download } from 'lucide-react'
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
          <motion.p
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Disponible pour de nouveaux projets
          </motion.p>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Salut, je suis{' '}
            <span className="text-gradient animate-gradient-shift bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text">
              {profile.displayName}
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-5 max-w-xl text-lg text-slate-300"
          >
            {profile.role} — je conçois des <span className="text-white">API</span> et des{' '}
            <span className="text-white">backends</span> robustes, et je les habille d'interfaces{' '}
            <span className="text-white">React</span> modernes.
          </motion.p>

          <motion.div custom={3} initial="hidden" animate="show" variants={fadeUp} className="mt-6 flex flex-wrap gap-2">
            {profile.roleTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div custom={4} initial="hidden" animate="show" variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projets"
              data-cursor-hover
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-900/40 transition-transform hover:scale-105"
            >
              Voir mes projets
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              data-cursor-hover
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/5"
            >
              Me contacter
            </a>
            <a
              href={`mailto:${profile.email}`}
              data-cursor-hover
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-slate-400 transition-colors hover:text-white"
            >
              <Download size={16} />
              {profile.email}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex w-full max-w-sm items-center justify-center"
        >
          <div className="animate-float relative">
            <div className="absolute -inset-4 animate-gradient-shift rounded-[2.5rem] bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-cyan-400 opacity-70 blur-2xl" />
            <div className="glow-border relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/5 p-2 shadow-2xl">
              <img
                src={xavierPhoto}
                alt={profile.displayName}
                className="h-[420px] w-[320px] rounded-[1.75rem] object-cover object-top sm:h-[460px] sm:w-[340px]"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="glass absolute -left-10 top-8 hidden rounded-2xl px-4 py-3 text-sm sm:block"
            >
              <p className="font-display font-semibold text-white">{profile.yearsExperience}+ ans</p>
              <p className="text-xs text-slate-400">d'expérience</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="glass absolute -right-8 bottom-10 hidden rounded-2xl px-4 py-3 text-sm sm:block"
            >
              <p className="font-display font-semibold text-white">Backend & API</p>
              <p className="text-xs text-slate-400">Python · FastAPI</p>
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
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-slate-500 hover:text-white sm:block"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  )
}
