import { motion } from 'framer-motion'
import { Facebook, Github, Linkedin, MessageCircle } from 'lucide-react'
import { profile, socials } from '../data/content'

const links = [
  { icon: Linkedin, href: socials.linkedin, label: 'LinkedIn' },
  { icon: Github, href: socials.github, label: 'GitHub' },
  { icon: Facebook, href: socials.facebook, label: 'Facebook' },
  { icon: MessageCircle, href: socials.whatsapp, label: 'WhatsApp' },
]

export default function SocialSidebar() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="fixed bottom-0 left-6 z-30 hidden flex-col items-center gap-6 lg:flex"
      >
        <ul className="flex flex-col items-center gap-5">
          {links.map(({ icon: Icon, href, label }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                data-cursor-hover
                className="block text-slate-400 transition-all hover:-translate-y-1 hover:text-cyan-300"
              >
                <Icon size={19} />
              </a>
            </li>
          ))}
        </ul>
        <div className="h-24 w-px bg-gradient-to-b from-slate-500 to-transparent" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="fixed bottom-0 right-6 z-30 hidden flex-col items-center gap-6 lg:flex"
      >
        <a
          href={socials.email}
          data-cursor-hover
          className="tracking-[0.2em] text-xs font-medium text-slate-400 [writing-mode:vertical-rl] hover:text-cyan-300"
        >
          {profile.email}
        </a>
        <div className="h-24 w-px bg-gradient-to-b from-slate-500 to-transparent" />
      </motion.div>
    </>
  )
}
