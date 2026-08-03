import { useEffect, useState } from 'react'
import type { MouseEvent } from 'react'
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

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const goTo = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      history.pushState(null, '', href)
    }
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'panel border-x-0 border-t-0 py-3' : 'border-b border-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a
          href="#accueil"
          onClick={(e) => goTo(e, '#accueil')}
          data-cursor-hover
          className="font-display text-lg font-semibold tracking-tight text-ink"
        >
          xavier<span className="text-accent">.</span>tchalla
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href} className="relative">
              <a
                href={link.href}
                onClick={(e) => goTo(e, link.href)}
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
          onClick={(e) => goTo(e, '#contact')}
          data-cursor-hover
          className="hidden rounded bg-accent px-5 py-2 font-display text-xs font-semibold text-accent-ink transition-colors hover:bg-[#ffb15e] md:inline-block"
        >
          me contacter
        </a>

        <button
          data-cursor-hover
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="relative z-50 text-ink md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-bg fixed inset-0 z-40 md:hidden"
          >
            <ul className="flex h-full flex-col items-center justify-center gap-8">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 + i * 0.05, duration: 0.3 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => goTo(e, link.href)}
                    className="font-display block px-6 py-2 text-2xl text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
