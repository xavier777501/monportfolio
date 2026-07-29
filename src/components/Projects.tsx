import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { projects } from '../data/content'

function slug(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
}

export default function Projects() {
  return (
    <section id="projets" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Projets" title="Ce que j'ai construit" />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="panel panel-hover overflow-hidden rounded-md"
            >
              <div className="flex items-center gap-2 border-b border-line bg-panel-2 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-sm border border-line" />
                <span className="h-2.5 w-2.5 rounded-sm border border-line" />
                <span className="h-2.5 w-2.5 rounded-sm bg-accent" />
                <span className="font-display ml-2 text-[11px] text-faint">~/projets/{slug(project.title)}</span>
              </div>

              <div className="p-6">
                <p className="font-display text-[11px] text-accent">{project.subtitle}</p>
                <h3 className="font-display mt-1 text-xl font-bold text-ink">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-display rounded bg-panel-2 px-2.5 py-1 text-[10px] text-faint">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor-hover
                    className="font-display inline-flex items-center gap-2 rounded bg-accent px-4 py-2 text-xs font-semibold text-accent-ink transition-colors hover:bg-[#ffb15e]"
                  >
                    <ExternalLink size={14} />
                    voir en ligne
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor-hover
                    className="font-display panel panel-hover inline-flex items-center gap-2 rounded px-4 py-2 text-xs font-semibold text-ink"
                  >
                    <Github size={14} />
                    code source
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
