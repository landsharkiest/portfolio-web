/**
 * Overlay.tsx - Single-page portfolio with scroll fade-in sections
 * Hero, Tech Stack, Projects (orbital showcase), Contact
 */
import { useState } from 'react'
import { Home, Briefcase, Mail, Send, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import RadialOrbitalTimeline from '@/components/ui/radial-orbital-timeline'
import { NavBar } from '@/components/ui/tubelight-navbar'
import { TechIcons } from './TechIcons'
import { projectsData } from '@/data/projectsData'

const NAV_ITEMS = [
  { name: 'Home', url: '#home', icon: Home },
  { name: 'Projects', url: '#projects', icon: Briefcase },
  { name: 'Contact', url: '#contact', icon: Mail },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: 'easeOut' },
}

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/landsharkiest', icon: '↗' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/owen-kirchenstien/', icon: '↗' },
]

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 100 100" className={className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M50 1C22.39 1 0 23.386 0 51c0 22.092 14.327 40.834 34.193 47.446 2.499.462 3.417-1.085 3.417-2.406 0-1.192-.047-5.131-.068-9.309-13.91 3.025-16.846-5.9-16.846-5.9-2.274-5.779-5.551-7.315-5.551-7.315-4.537-3.104.341-3.04.341-3.04 5.022.353 7.665 5.153 7.665 5.153 4.46 7.644 11.697 5.434 14.55 4.156.449-3.232 1.745-5.437 3.175-6.686-11.106-1.264-22.78-5.552-22.78-24.71 0-5.459 1.953-9.92 5.151-13.42-.519-1.26-2.23-6.346.485-13.233 0 0 4.198-1.344 13.753 5.125 3.988-1.108 8.266-1.663 12.515-1.682 4.25.019 8.53.574 12.526 1.682 9.544-6.469 13.736-5.125 13.736-5.125 2.722 6.887 1.01 11.973.49 13.232 3.206 3.502 5.146 7.962 5.146 13.42 0 19.205-11.697 23.434-22.83 24.671 1.793 1.552 3.391 4.595 3.391 9.26 0 6.69-.058 12.074-.058 13.721 0 1.33.9 2.89 3.435 2.399C85.692 91.819 100 73.085 100 51c0-27.614-22.386-50-50-50" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className}>
      <path d="M17.0391667,17.0433333 L14.0775,17.0433333 L14.0775,12.4025 C14.0775,11.2958333 14.055,9.87166667 12.5341667,9.87166667 C10.99,9.87166667 10.7541667,11.0758333 10.7541667,12.3208333 L10.7541667,17.0433333 L7.7925,17.0433333 L7.7925,7.5 L10.6375,7.5 L10.6375,8.80083333 L10.6758333,8.80083333 C11.0733333,8.05083333 12.04,7.25916667 13.4841667,7.25916667 C16.485,7.25916667 17.04,9.23416667 17.04,11.805 L17.04,17.0433333 L17.0391667,17.0433333 Z M4.4475,6.19416667 C3.49416667,6.19416667 2.72833333,5.4225 2.72833333,4.47333333 C2.72833333,3.525 3.495,2.75416667 4.4475,2.75416667 C5.3975,2.75416667 6.1675,3.525 6.1675,4.47333333 C6.1675,5.4225 5.39666667,6.19416667 4.4475,6.19416667 Z M5.9325,17.0433333 L2.9625,17.0433333 L2.9625,7.5 L5.9325,7.5 L5.9325,17.0433333 Z M18.5208333,0 L1.47583333,0 C0.66,0 0,0.645 0,1.44083333 L0,18.5591667 C0,19.3558333 0.66,20 1.47583333,20 L18.5183333,20 C19.3333333,20 20,19.3558333 20,18.5591667 L20,1.44083333 C20,0.645 19.3333333,0 18.5183333,0 L18.5208333,0 Z" />
    </svg>
  )
}

function Hero() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col justify-center px-6"
    >
      <p className="font-display text-zinc-400 font-semibold text-sm uppercase tracking-widest mb-2">
        Software Engineer
      </p>
      <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4">
        Hi, I'm{' '}
        <span className="text-zinc-200">Owen Kirchenstien</span>
      </h1>
      <p className="text-zinc-400 max-w-xl text-lg mb-8">
        I am a software engineer with a passion for integrating AI into real
        world applications and solving complex problems.
      </p>
      <a
        href="#projects"
        className="inline-flex items-center justify-center w-40 py-3 px-6 bg-zinc-100 text-zinc-900 font-semibold rounded transition-colors hover:bg-white"
      >
        View Work
      </a>
    </motion.section>
  )
}

function TechStack() {
  return (
    <motion.section
      {...fadeInUp}
      className="py-24 px-6"
    >
      <h2 className="font-display text-2xl font-semibold text-white mb-12 text-center">
        Tech Stack
      </h2>
      <TechIcons />
    </motion.section>
  )
}

function Projects() {
  return (
    <motion.section
      id="projects"
      {...fadeInUp}
      className="min-h-screen py-12"
    >
      <h2 className="font-display text-2xl font-semibold text-white mb-8 px-6 text-center">
        Projects
      </h2>
      <RadialOrbitalTimeline
        timelineData={projectsData}
        className="h-[85vh]"
        energyLabel="Completion"
        relatedLabel="Related Projects"
      />
    </motion.section>
  )
}

function Connect() {
  return (
    <motion.section
      id="connect"
      {...fadeInUp}
      className="relative z-20 py-20 px-6 border-t border-zinc-800"
    >
      <h2 className="font-display text-2xl font-semibold text-white mb-4 text-center">
        Connect
      </h2>
      <p className="text-zinc-400 text-center max-w-md mx-auto mb-12">
        Find me on GitHub and LinkedIn — let&apos;s build something together.
      </p>
      <div className="relative z-20 flex flex-wrap items-stretch justify-center gap-6">
        <a
          href="https://github.com/landsharkiest"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex-1 min-w-[280px] sm:min-w-[320px] flex items-center gap-4 px-8 py-5 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800/50 transition-all duration-300 cursor-pointer"
        >
          <span className="w-12 h-12 shrink-0 flex items-center justify-center text-zinc-300 group-hover:text-white transition-colors">
            <GitHubIcon className="w-10 h-10" />
          </span>
          <div className="text-left flex-1 min-w-0">
            <span className="font-display font-semibold text-white block">GitHub</span>
            <span className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">
              github.com/landsharkiest
            </span>
          </div>
          <span className="shrink-0 text-zinc-500 group-hover:text-zinc-400 transition-colors">→</span>
        </a>
        <a
          href="https://www.linkedin.com/in/owen-kirchenstien/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex-1 min-w-[280px] sm:min-w-[320px] flex items-center gap-4 px-8 py-5 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800/50 transition-all duration-300 cursor-pointer"
        >
          <span className="w-12 h-12 shrink-0 flex items-center justify-center text-zinc-300 group-hover:text-white transition-colors">
            <LinkedInIcon className="w-10 h-10" />
          </span>
          <div className="text-left flex-1 min-w-0">
            <span className="font-display font-semibold text-white block">LinkedIn</span>
            <span className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">
              Owen Kirchenstien
            </span>
          </div>
          <span className="shrink-0 text-zinc-500 group-hover:text-zinc-400 transition-colors">→</span>
        </a>
      </div>
    </motion.section>
  )
}

function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const formId = import.meta.env.VITE_FORMSPREE_ID

    if (!formId) {
      setStatus('error')
      return
    }

    setStatus('loading')
    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <motion.footer
      id="contact"
      {...fadeInUp}
      className="py-20 px-6 border-t border-zinc-800"
    >
      <div className="max-w-xl mx-auto">
        <h2 className="font-display text-2xl font-semibold text-white mb-2">
          Get in touch
        </h2>
        <p className="text-zinc-400 text-sm mb-8">
          Have a project in mind or want to connect? Send me a message.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg bg-zinc-900/50 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-transparent transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-lg bg-zinc-900/50 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-transparent transition-colors"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="Your message..."
              className="w-full px-4 py-3 rounded-lg bg-zinc-900/50 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-transparent transition-colors resize-none"
            />
          </div>
          <Button
            type="submit"
            disabled={status === 'loading'}
            className="w-full sm:w-auto bg-zinc-100 text-zinc-900 hover:bg-white font-semibold gap-2"
          >
            {status === 'loading' ? (
              'Sending...'
            ) : status === 'success' ? (
              <>
                <CheckCircle size={18} className="mr-2" />
                Sent!
              </>
            ) : (
              <>
                <Send size={18} className="mr-2" />
                Send
              </>
            )}
          </Button>
          {status === 'error' && (
            <p className="text-red-400 text-sm">
              Something went wrong. Please try again or reach out via{' '}
              <a
                href="https://www.linkedin.com/in/owen-kirchenstien/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                LinkedIn
              </a>
              .
            </p>
          )}
        </form>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl mx-auto mt-16 pt-8 border-t border-zinc-800">
        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()}
        </p>
        <nav className="flex gap-6">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors text-sm flex items-center gap-1"
            >
              {link.label}
              <span className="text-xs">{link.icon}</span>
            </a>
          ))}
        </nav>
      </div>
    </motion.footer>
  )
}

export function Overlay() {
  return (
    <div className="max-w-6xl mx-auto">
      <NavBar items={NAV_ITEMS} />
      <Hero />
      <TechStack />
      <Projects />
      <Connect />
      <Contact />
    </div>
  )
}
