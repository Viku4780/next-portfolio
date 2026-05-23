'use client'

import Link from 'next/link'
import AdminSidebarFooter from './AdminSidebarFooter'
import SidebarNav from './SidebarNav';

export default function AdminSidebar({sidebarCollapse}: {sidebarCollapse: boolean}) {

    return (
        <aside
            className={`
                h-screen
                ${sidebarCollapse ? 'w-[80px]' : 'w-[280px]'}
                shrink-0
                border-r
                border-white/10
                bg-[#050816]/80
                backdrop-blur-xl
                sticky
                top-0
                transition-all duration-300 ease-in-out
                hidden
                sm:flex
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
                        {
                            !sidebarCollapse ?
                                (<> <Link href={'/'} className='text-xl font-bold text-primary
                                transition-all duration-300 ease-in-out
                                '>VikrantCodes&trade;</Link>

                                    <p className="text-xs text-slate-400">
                                        Developer Control Center
                                    </p> </>
                                ) :
                                <Link href={'/'} className='text-xl font-bold text-primary'>V</Link>
                                }
                    </div>


                </div>

                {/* NAVIGATION */}
                <SidebarNav sidebarCollapse={sidebarCollapse} />

                <AdminSidebarFooter sidebarCollapse={sidebarCollapse} />
            </div>
        </aside>
    )
}