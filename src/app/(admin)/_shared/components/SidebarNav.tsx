import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {SIDEBAR_ITEMS} from '@/contents/sidebarItem'

const SidebarNav = ({sidebarCollapse}: {sidebarCollapse: boolean}) => {
    const pathname = usePathname();
  return (
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
                                {!sidebarCollapse && <span
                                    className="
                                        text-sm
                                        font-medium
                                        tracking-wide
                                        transition-all duration-300 ease-in-out
                                    "
                                >
                                    {item.label}
                                </span>}
                            </Link>
                        )
                    })}
                </nav>
  )
}

export default SidebarNav
