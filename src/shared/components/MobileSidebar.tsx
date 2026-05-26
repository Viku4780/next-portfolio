'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import AdminSidebarFooter from './AdminSidebarFooter'
import { SIDEBAR_ITEMS } from '@/contents/sidebarItem'
import { useSidebar } from '@/app/(users)/context/SidebarCollapseContext'


export default function MobileSidebar() {
    const pathname = usePathname();

    const { sidebarCollapse, toggleSidebar } = useSidebar()

    return (
        <aside
            className={`
                h-screen
                ${sidebarCollapse ? '-translate-x-full' : 'translate-x-0'}
                border-r
                w-[280px]
                border-white/10
                bg-[#050816]/80
                backdrop-blur-xl
                top-0
                transition-all duration-300 ease-in-out
                inset-0
                fixed
                sm:hidden
                z-50
                
            `}
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
                        py-4
                        justify-between
                    "
                >

                    <div className='px-2'>
                        <Link href={'/'} className='text-xl font-bold text-primary'>VikrantCodes&trade;</Link>

                        <p className="text-xs text-slate-400">
                            Developer Control Center
                        </p>
                    </div>

                    <svg onClick={toggleSidebar} xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6 6 18M6 6l12 12" />
                    </svg>

                </div>

                {/* NAVIGATION */}
                <nav className="flex-1 space-y-2 overflow-y-auto scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-4 py-4">
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
                                    px-3
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

                <AdminSidebarFooter sidebarCollapse={sidebarCollapse} />
            </div>
        </aside>
    )
}