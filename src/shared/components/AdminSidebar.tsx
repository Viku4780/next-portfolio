'use client'

import Link from 'next/link'
import AdminSidebarFooter from './AdminSidebarFooter'
import SidebarNav from './SidebarNav';
import { useSidebar } from '@/app/(users)/context/SidebarCollapseContext';

export default function AdminSidebar() {
    const { sidebarCollapse } = useSidebar();
    return (
        <aside
            className={`
                h-screen
                ${sidebarCollapse ? 'w-[80px]' : 'w-[250px]'}
                shrink-0
                border-r
                border-white/10
                dark:bg-[#050816]/80

             bg-gray-200
                backdrop-blur-xl
                sticky
                top-0
                transition-[width] duration-300 ease-in-out
                hidden
                sm:flex
                overflow-hidden
            `}
        >
            <div className="flex h-full flex-col w-full">
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
                    "
                >

                    <div className='px-2'>

                        <Link href={'/'} className='text-xl font-bold text-primary
                        '>V
                            <span className={` overflow-hidden
                            transition-all duration-300 ease-in-out
                            ${sidebarCollapse
                                    ? "max-w-0 opacity-0 translate-x-[-10px]"
                                    : "max-w-[200px] opacity-100 translate-x-0"
                                }
                            `}>
                                ikrantCodes&trade;
                            </span>
                        </Link>

                        <p className={`text-xs text-slate-400 
                        whitespace-nowrap overflow-hidden
                        transition-all duration-300 ease-in-out
                        ${sidebarCollapse
                                ? "max-w-0 opacity-0 "
                                : "max-w-[200px] opacity-100 "
                            }`}>
                            Developer Control Center
                        </p>
                    </div>


                </div>

                {/* NAVIGATION */}
                <SidebarNav sidebarCollapse={sidebarCollapse} />

                <AdminSidebarFooter sidebarCollapse={sidebarCollapse} />
            </div>
        </aside>
    )
}