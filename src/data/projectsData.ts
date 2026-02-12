import { Calendar, Cpu, Code } from 'lucide-react'
import type { TimelineItem } from '@/components/ui/radial-orbital-timeline'

export const projectsData: TimelineItem[] = [
  {
    id: 1,
    title: 'Music Sheet Classifier',
    date: 'October 2025',
    content: 'A machine learning project that uses a convolutional neural network to classify music notes from images of sheet music.',
    category: 'Machine Learning',
    icon: Calendar,
    relatedIds: [2],
    status: 'completed',
    energy: 100,
  },
  {
    id: 2,
    title: 'Rocket League Computer Vision Project',
    date: 'January 2026',
    content: 'A computer vision project that uses a convolutional neural network to track the movement of a rocket league player.',
    category: 'Computer Vision',
    icon: Cpu,
    relatedIds: [1],
    status: 'completed',
    energy: 100,
  },
  {
    id: 4,
    title: 'Rust Github Contribution',
    date: 'February 2026',
    content: 'Implemented mul_add_relaxed for f16, f32, f64, and f128 types in the Rust standard library.',
    category: 'Contribution',
    icon: Code,
    relatedIds: [1, 2],
    status: 'completed',
    energy: 100,
  },
]
