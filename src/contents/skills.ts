import {Code2,
  Database,
  Server} from 'lucide-react';
  
export const skillsOverview = [
  {
    label: 'Frontend',
    value: 7,
    color: '#ec4899'
  },
  {
    label: 'Backend',
    value: 8,
    color: '#3b82f6'
  },
  {
    label: 'Database',
    value: 3,
    color: '#a855f7'
  },
  {
    label: 'DevOps',
    value: 3,
    color: '#f97316'
  },
  {
    label: 'Tools',
    value: 3,
    color: '#06b6d4'
  }
]

export const topSkills = [
  {
    name: 'Next.js',
    progress: '90%',
    width: '90%',
    color: 'from-pink-500 to-fuchsia-500'
  },
  {
    name: 'React',
    progress: '85%',
    width: '85%',
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'TypeScript',
    progress: '80%',
    width: '80%',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Node.js',
    progress: '75%',
    width: '75%',
    color: 'from-cyan-500 to-teal-500'
  },
  {
    name: 'MongoDB',
    progress: '70%',
    width: '70%',
    color: 'from-green-500 to-emerald-500'
  }
]

export type AllSkill = {
  name: string;
  category: string;
  proficiency: string;
  width: string;
  status: string;
  icon: string;
  categoryColor: string;
}

export const allSkills: AllSkill[] = [
  {
    name: 'Next.js',
    category: 'Frontend',
    proficiency: '90%',
    width: '90%',
    status: 'Active',
    icon: Code2,
    categoryColor: 'bg-purple-500/10 text-purple-400'
  },
  {
    name: 'React',
    category: 'Frontend',
    proficiency: '85%',
    width: '85%',
    status: 'Active',
    icon: Code2,
    categoryColor: 'bg-purple-500/10 text-purple-400'
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    proficiency: '80%',
    width: '80%',
    status: 'Active',
    icon: Code2,
    categoryColor: 'bg-purple-500/10 text-purple-400'
  },
  {
    name: 'Node.js',
    category: 'Backend',
    proficiency: '75%',
    width: '75%',
    status: 'Active',
    icon: Server,
    categoryColor: 'bg-red-500/10 text-red-400'
  },
  {
    name: 'MongoDB',
    category: 'Database',
    proficiency: '70%',
    width: '70%',
    status: 'Active',
    icon: Database,
    categoryColor: 'bg-orange-500/10 text-orange-400'
  }
]