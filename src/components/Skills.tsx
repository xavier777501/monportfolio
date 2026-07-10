import type { ComponentType } from 'react'
import { motion } from 'framer-motion'
import {
  SiCss,
  SiFastapi,
  SiGit,
  SiGithubactions,
  SiMysql,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import SectionHeading from './SectionHeading'
import { skills } from '../data/content'

const icons: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  Python: SiPython,
  FastAPI: SiFastapi,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  'React.js': SiReact,
  TypeScript: SiTypescript,
  'CI/CD': SiGithubactions,
  'Git & GitHub': SiGit,
}

const extras = [SiTailwindcss, SiCss]

const categories = Array.from(new Set(skills.map((s) => s.category)))

export default function Skills() {
  return (
    <section id="competences" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Compétences" title="Ma boîte à outils" />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: catIndex * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="glass glow-border rounded-2xl p-6"
            >
              <h3 className="font-display mb-5 text-lg font-semibold text-white">{category}</h3>
              <div className="space-y-5">
                {skills
                  .filter((s) => s.category === category)
                  .map((skill, i) => {
                    const Icon = icons[skill.name]
                    return (
                      <div key={skill.name}>
                        <div className="mb-2 flex items-center justify-between">
                          <span className="flex items-center gap-2 text-sm font-medium text-slate-200">
                            {Icon && <Icon size={16} className="text-cyan-300" />}
                            {skill.name}
                          </span>
                          <span className="text-xs text-slate-500">{skill.level}%</span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true, amount: 0.8 }}
                            transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="h-full rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-400 to-cyan-400"
                          />
                        </div>
                      </div>
                    )
                  })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 opacity-60"
        >
          {extras.map((Icon, i) => (
            <Icon key={i} size={28} className="text-slate-400 transition-colors hover:text-cyan-300" />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
