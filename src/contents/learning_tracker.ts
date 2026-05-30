import {
     BookOpen,
  Eye,
  Server,
  Database,
  Cloud,
  GitBranch,
  Layers3
} from 'lucide-react'

export const stats = [
  {
    label: 'Active Goals',
    count: 8,
    increaseBy: 3,
    icon: BookOpen,
    bgClass: 'bg-purple-500/10 text-purple-400'
  },
  {
    label: 'Completed',
    count: 15,
    increaseBy: 3,
    icon: Eye,
    bgClass: 'bg-emerald-500/10 text-emerald-400'
  },
  {
    label: 'In Progress',
    count: 6,
    increaseBy: 0,
    icon: Layers3,
    bgClass: 'bg-orange-500/10 text-orange-400'
  },
  {
    label: 'Total Progress',
    count: '72%',
    increaseBy: '+12%',
    icon: Eye,
    bgClass: 'bg-cyan-500/10 text-cyan-400'
  }
]

export type LearningGoal = {
    title: string;
    category: string;
    progress: string;
    width: string;
    status: string;
    date: string;
    icon: string;
    categoryColor: string;
}

export const learningGoals: LearningGoal[] = [
  {
    title: 'System Design Fundamentals',
    category: 'Backend',
    progress: '75%',
    width: '75%',
    status: 'In Progress',
    date: 'Jun 30, 2024',
    icon: Server,
    categoryColor: 'bg-purple-500/10 text-purple-400'
  },
  {
    title: 'Advanced TypeScript',
    category: 'Frontend',
    progress: '60%',
    width: '60%',
    status: 'In Progress',
    date: 'Jun 15, 2024',
    icon: BookOpen,
    categoryColor: 'bg-blue-500/10 text-blue-400'
  },
  {
    title: 'Docker & Kubernetes',
    category: 'DevOps',
    progress: '40%',
    width: '40%',
    status: 'In Progress',
    date: 'Jul 10, 2024',
    icon: Cloud,
    categoryColor: 'bg-cyan-500/10 text-cyan-400'
  },
  {
    title: 'AWS Cloud Practitioner',
    category: 'Cloud',
    progress: '30%',
    width: '30%',
    status: 'In Progress',
    date: 'Jul 20, 2024',
    icon: Cloud,
    categoryColor: 'bg-yellow-500/10 text-yellow-400'
  },
  {
    title: 'Next.js 15 Deep Dive',
    category: 'Frontend',
    progress: '90%',
    width: '90%',
    status: 'Completed',
    date: 'May 20, 2024',
    icon: BookOpen,
    categoryColor: 'bg-blue-500/10 text-blue-400'
  },
  {
    title: 'MongoDB Advanced',
    category: 'Database',
    progress: '100%',
    width: '100%',
    status: 'Completed',
    date: 'May 5, 2024',
    icon: Database,
    categoryColor: 'bg-green-500/10 text-green-400'
  },
  {
    title: 'GraphQL Mastery',
    category: 'Backend',
    progress: '100%',
    width: '100%',
    status: 'Completed',
    date: 'Apr 28, 2024',
    icon: Server,
    categoryColor: 'bg-purple-500/10 text-purple-400'
  },
  {
    title: 'CI/CD with GitHub Actions',
    category: 'DevOps',
    progress: '100%',
    width: '100%',
    status: 'Completed',
    date: 'Apr 15, 2024',
    icon: GitBranch,
    categoryColor: 'bg-cyan-500/10 text-cyan-400'
  }
]