import { useSidebar } from '@/app/(users)/context/SidebarCollapseContext'
import React from 'react'

interface HeaderMetadata {
  title: string;
  desc: string;
}


interface AdminHeaderProps {
  metadata: HeaderMetadata;
  children: React.ReactNode;
}

const AdminElementHeaderTemplate = ({metaData, children }: AdminHeaderProps) => {
    const {toggleSidebar} = useSidebar()
    return (
        <header className='flex items-center justify-between px-4 py-3 border-b border-gray-800 w-full'>
            <div className='flex items-center gap-4'>
                <div onClick={toggleSidebar} className='p-1 border border-gray-500 rounded'>
                    <svg
                        xmlns="http://w3.org"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </div>

                <div className='overflow-hidden'>
                    <h2 className='text-lg '>{metaData.title}</h2>
                    <p className='text-xs text-secondary hidden lg:inline-block whitespace-nowrap'>{metaData.desc}</p>
                </div>

            </div>

            <div>
                {children}
            </div>

        </header>
    )
}

export default AdminElementHeaderTemplate
