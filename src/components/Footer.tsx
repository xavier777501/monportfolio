import { ArrowUp, Facebook, Github, Linkedin, MessageCircle } from 'lucide-react'
import { profile, socials } from '../data/content'

const links = [
  { icon: Linkedin, href: socials.linkedin, label: 'LinkedIn' },
  { icon: Github, href: socials.github, label: 'GitHub' },
  { icon: Facebook, href: socials.facebook, label: 'Facebook' },
  { icon: MessageCircle, href: socials.whatsapp, label: 'WhatsApp' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-line px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="font-display text-xs text-faint">
          © {new Date().getFullYear()} {profile.displayName}. Fait avec passion.
        </p>

        <div className="flex items-center gap-2">
          {links.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              data-cursor-hover
              className="flex h-9 w-9 items-center justify-center rounded text-muted transition-colors hover:bg-panel-2 hover:text-accent"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <a
          href="#accueil"
          data-cursor-hover
          aria-label="Retour en haut"
          className="panel panel-hover flex h-10 w-10 items-center justify-center rounded text-muted hover:text-accent"
        >
          <ArrowUp size={18} />
        </a>
      </div>
    </footer>
  )
}
