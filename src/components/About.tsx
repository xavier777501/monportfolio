import { motion } from 'framer-motion'
import { Code2, Rocket, Server } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Counter from './Counter'
import { profile, projects, skills } from '../data/content'

const stats = [
  { icon: Server, value: projects.length, suffix: '+', label: "Projets déployés en production" },
  { icon: Code2, value: skills.length, suffix: '+', label: 'Technologies maîtrisées' },
  { icon: Rocket, value: profile.yearsExperience, suffix: '+', label: "Années de pratique" },
]

export default function About() {
  return (
    <section id="apropos" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="À propos" title="Qui je suis" />

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-5 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-3"
          >
            <p className="text-lg leading-relaxed text-ink">{profile.bio}</p>
            <p className="mt-4 leading-relaxed text-muted">
              Curieux et rigoureux, j'aime comprendre chaque brique d'un projet — de la modélisation des données à
              l'expérience utilisateur finale. J'accorde une attention particulière à la qualité du code, aux bonnes
              pratiques CI/CD et à la fiabilité des systèmes que je construis.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {['Résolution de problèmes', 'Travail d’équipe', 'Apprentissage continu', 'Sens du détail'].map((t) => (
                <span key={t} className="font-display panel rounded px-3 py-1.5 text-xs text-muted">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 gap-4 md:col-span-2"
          >
            {stats.map(({ icon: Icon, value, suffix, label }) => (
              <div key={label} className="panel panel-hover flex items-center gap-4 rounded-md p-5">
                <div className="rounded bg-panel-2 p-3 text-accent">
                  <Icon size={22} />
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-ink">
                    <Counter to={value} suffix={suffix} />
                  </p>
                  <p className="text-sm text-muted">{label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
