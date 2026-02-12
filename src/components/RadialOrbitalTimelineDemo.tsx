import { Link } from 'react-router-dom'
import RadialOrbitalTimeline from '@/components/ui/radial-orbital-timeline'
import { projectsData } from '@/data/projectsData'

export function RadialOrbitalTimelineDemo() {
  return (
    <div className="relative">
      <Link
        to="/"
        className="fixed top-6 left-6 z-[300] text-sm text-white/70 hover:text-accent transition-colors border border-white/20 hover:border-accent/50 px-4 py-2 rounded backdrop-blur-sm"
      >
        ← Back to Portfolio
      </Link>
      <RadialOrbitalTimeline timelineData={projectsData} />
    </div>
  )
}
