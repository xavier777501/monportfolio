import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#accueil', label: 'accueil' },
  { href: '#apropos', label: 'apropos' },
  { href: '#competences', label: 'competences' },
  { href: '#projets', label: 'projets' },
  { href: '#contact', label: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#accueil')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-40% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? 'panel border-x-0 border-t-0 py-3' : 'border-b border-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#accueil" data-cursor-hover className="font-display text-lg font-semibold tracking-tight text-ink">
          xavier<span className="text-accent">.</span>tchalla
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href} className="relative">
              <a
                href={link.href}
                data-cursor-hover
                className={`font-display text-xs tracking-wide transition-colors ${
                  active === link.href ? 'text-ink' : 'text-muted hover:text-ink'
                }`}
              >
                {link.label}
              </a>
              {active === link.href && (
                <motion.span layoutId="nav-underline" className="absolute -bottom-1.5 left-0 h-[2px] w-full bg-accent" />
              )}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          data-cursor-hover
          className="hidden rounded bg-accent px-5 py-2 font-display text-xs font-semibold text-accent-ink transition-colors hover:bg-[#ffb15e] md:inline-block"
        >
          me contacter
        </a>

        <button
          data-cursor-hover
          aria-label="Ouvrir le menu"
          className="text-ink md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="panel mt-3 overflow-hidden border-x-0 md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display block rounded px-3 py-3 text-sm text-muted transition-colors hover:bg-panel-2 hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
