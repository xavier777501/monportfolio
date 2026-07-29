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

function Meter({ level, delay }: { level: number; delay: number }) {
  const filled = Math.round(level / 20)
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.3, delay: delay + i * 0.05 }}
          className={`h-2.5 w-4 rounded-sm ${i < filled ? 'bg-accent' : 'bg-panel-2 border border-line'}`}
        />
      ))}
    </div>
  )
}

export default function Skills() {
  return (
    <section id="competences" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Compétences" title="Ma boîte à outils" />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: catIndex * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="panel panel-hover rounded-md p-6"
            >
              <h3 className="font-display mb-5 text-sm text-ink">{category}</h3>
              <div className="space-y-4">
                {skills
                  .filter((s) => s.category === category)
                  .map((skill, i) => {
                    const Icon = icons[skill.name]
                    return (
                      <div key={skill.name} className="flex items-center justify-between gap-4">
                        <span className="flex items-center gap-2 text-sm text-muted">
                          {Icon && <Icon size={15} className="text-faint" />}
                          {skill.name}
                        </span>
                        <Meter level={skill.level} delay={i * 0.08} />
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
          className="mt-10 flex flex-wrap items-center justify-center gap-6"
        >
          {extras.map((Icon, i) => (
            <Icon key={i} size={24} className="text-faint transition-colors hover:text-accent" />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
