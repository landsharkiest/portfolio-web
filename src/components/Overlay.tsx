/**
 * Overlay.tsx - Single-page portfolio with scroll fade-in sections
 * Hero, Tech Stack, Projects (orbital showcase), Contact
 */
import { Home, Briefcase, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
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

function Contact() {
  return (
    <motion.footer
      id="contact"
      {...fadeInUp}
      className="py-16 px-6 border-t border-zinc-800"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl mx-auto">
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
      <Contact />
    </div>
  )
}
