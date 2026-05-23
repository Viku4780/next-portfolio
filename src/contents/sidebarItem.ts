import {
    LayoutDashboard,
    FolderKanban,
    Brain,
    GraduationCap,
    FileText,
    ImageIcon,
    BookOpenCheck,
    BarChart3,
    Palette,
    Settings,
    Users
} from 'lucide-react'

export const SIDEBAR_ITEMS = [
    {
        label: 'Dashboard',
        href: '/admin_vikrant/dashboard',
        icon: LayoutDashboard
    },
    {
        label: 'Projects',
        href: '/admin/projects',
        icon: FolderKanban
    },
    {
        label: 'Skills',
        href: '/admin/skills',
        icon: Brain
    },
    {
        label: 'Education',
        href: '/admin/education',
        icon: GraduationCap
    },
    {
        label: 'Blogs / Articles',
        href: '/admin/blogs',
        icon: FileText
    },
    {
        label: 'Media Library',
        href: '/admin/media',
        icon: ImageIcon
    },
    {
        label: 'Learning Tracker',
        href: '/admin/learning',
        icon: BookOpenCheck
    },
    {
        label: 'Analytics',
        href: '/admin/analytics',
        icon: BarChart3
    },
    {
        label: 'Appearance',
        href: '/admin/appearance',
        icon: Palette
    },
    {
        label: 'SEO & Settings',
        href: '/admin/settings',
        icon: Settings
    },
    {
        label: 'Users',
        href: '/admin/users',
        icon: Users
    }
]