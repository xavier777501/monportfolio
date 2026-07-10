import { type FormEvent, useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { Facebook, Github, Linkedin, Mail, MapPin, MessageCircle, Send } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { profile, socials } from '../data/content'

type Status = 'idle' | 'sending' | 'success' | 'error' | 'fallback'

const contactLinks = [
  { icon: Mail, label: profile.email, href: socials.email },
  { icon: MessageCircle, label: 'Discuter sur WhatsApp', href: socials.whatsapp },
  { icon: MapPin, label: profile.location, href: undefined },
]

const socialIcons = [
  { icon: Linkedin, href: socials.linkedin, label: 'LinkedIn' },
  { icon: Github, href: socials.github, label: 'GitHub' },
  { icon: Facebook, href: socials.facebook, label: 'Facebook' },
]

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const emailjsConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '')
    const email = String(data.get('email') ?? '')
    const message = String(data.get('message') ?? '')

    if (!emailjsConfigured) {
      const subject = encodeURIComponent(`Contact portfolio — ${name}`)
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      setStatus('fallback')
      return
    }

    try {
      setStatus('sending')
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, { from_name: name, from_email: email, message }, PUBLIC_KEY)
      setStatus('success')
      form.reset()
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Contact" title="Discutons de votre projet" />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            <p className="text-slate-400">
              Une idée, un projet backend, une API à concevoir ? Écrivez-moi, je réponds rapidement.
            </p>

            <div className="mt-8 space-y-4">
              {contactLinks.map(({ icon: Icon, label, href }) => {
                const content = (
                  <div className="glass glow-border flex items-center gap-4 rounded-2xl p-4">
                    <div className="rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 p-3 text-cyan-300">
                      <Icon size={20} />
                    </div>
                    <span className="text-sm text-slate-200">{label}</span>
                  </div>
                )
                return href ? (
                  <a key={label} href={href} target="_blank" rel="noreferrer" data-cursor-hover className="block">
                    {content}
                  </a>
                ) : (
                  <div key={label}>{content}</div>
                )
              })}
            </div>

            <div className="mt-8 flex gap-3">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  data-cursor-hover
                  className="glass flex h-11 w-11 items-center justify-center rounded-full text-slate-300 transition-all hover:-translate-y-1 hover:text-white hover:shadow-lg hover:shadow-violet-900/30"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleSubmit}
            className="glass glow-border space-y-5 rounded-3xl p-6 lg:col-span-3 sm:p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm text-slate-300">
                  Nom
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Votre nom"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-400/60"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm text-slate-300">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="vous@exemple.com"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-400/60"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm text-slate-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Parlez-moi de votre projet..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-400/60"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              data-cursor-hover
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-violet-900/30 transition-transform hover:scale-[1.02] disabled:opacity-60 sm:w-auto"
            >
              <Send size={18} />
              {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>

            {status === 'success' && (
              <p className="text-sm text-emerald-400">Message envoyé avec succès, merci !</p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-400">Une erreur est survenue, réessayez ou écrivez directement à {profile.email}.</p>
            )}
            {status === 'fallback' && (
              <p className="text-sm text-slate-400">
                Votre client email s'est ouvert avec le message pré-rempli — il ne reste qu'à l'envoyer.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
