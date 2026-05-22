'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
import AdminSidebarFooter from './AdminSidebarFooter'

const SIDEBAR_ITEMS = [
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

export default function AdminSidebar() {
    const pathname = usePathname()

    return (
        <aside
            className="
        h-screen
        w-[280px]
        shrink-0
        border-r
        border-white/10
        bg-[#050816]/80
        backdrop-blur-xl
        sticky
        top-0
      "
        >
            <div className="flex h-full flex-col">
                {/* LOGO */}
                <div
                    className="
            flex
            items-center
            gap-3
            border-b
            border-white/10
            px-6
            py-6
          "
                >

                    <div>
                        <Link href={'/'} className='text-xl font-bold text-primary'>VikrantCodes&trade;</Link>

                        <p className="text-xs text-slate-400">
                            Developer Control Center
                        </p>
                    </div>


                </div>

                {/* NAVIGATION */}
                <nav className="flex-1 space-y-2 overflow-y-auto scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-4 py-6">
                    {SIDEBAR_ITEMS.map((item) => {
                        const isActive =
                            pathname === item.href

                        const Icon = item.icon

                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`
                  group
                  relative
                  flex
                  items-center
                  gap-4
                  overflow-hidden
                  rounded-2xl
                  px-4
                  py-3
                  transition-all
                  duration-300

                  ${isActive
                                        ? `
                        bg-gradient-to-r
                        from-pink-500/15
                        to-cyan-500/10
                        text-primary
                        border
                        border-pink-500/20
                        shadow-[0_0_25px_rgba(236,72,153,0.15)]
                      `
                                        : `
                        text-slate-400
                        hover:bg-white/5
                        hover:text-white
                      `
                                    }
                `}
                            >
                                {/* ACTIVE GLOW */}
                                {isActive && (
                                    <div
                                        className="
                      absolute
                      left-0
                      top-1/2
                      h-10
                      w-1
                      -translate-y-1/2
                      rounded-full
                     
                    "
                                    />
                                )}

                                {/* ICON */}
                                <div
                                    className={`
                    transition-all
                    duration-300

                    ${isActive
                                            ? 'text-primary'
                                            : 'text-slate-500 group-hover:text-cyan-400'
                                        }
                  `}
                                >
                                    <Icon size={21} />
                                </div>

                                {/* LABEL */}
                                <span
                                    className="
                    text-sm
                    font-medium
                    tracking-wide
                  "
                                >
                                    {item.label}
                                </span>
                            </Link>
                        )
                    })}
                </nav>

                {/* FOOTER */}
                {/* <div
                    className="
            border-t
            border-white/10
            p-4
          "
                >
                    <div
                        className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-4
              backdrop-blur-md
            "
                    >
                        <p className="text-xs text-slate-400">
                            Current Focus
                        </p>

                        <h3
                            className="
                mt-2
                text-sm
                font-semibold
                text-white
              "
                        >
                            Full Stack Architecture
                        </h3>

                        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                            <div
                                className="
                  h-full
                  w-[72%]
                  rounded-full
                  bg-gradient-to-r
                  from-pink-500
                  to-cyan-500
                "
                            />
                        </div>

                        <p className="mt-2 text-xs text-slate-500">
                            72% learning progress
                        </p>
                    </div>
                </div> */}

                <AdminSidebarFooter />
            </div>
        </aside>
    )
}