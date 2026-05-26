'use client'

import { useSidebar } from '@/app/(users)/context/SidebarCollapseContext';
import { Plus } from 'lucide-react';

const ProjectHeader = ({ setCreateProject }) => {
    const { toggleSidebar } = useSidebar();


    return (

        <div className="flex items-center justify-between p-4 border-b border-gray-800 w-full">
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
                <div>
                    <h2 className="text-lg font-bold">Projects</h2>
                    <p className='text-xs text-secondary hidden lg:inline-block whitespace-nowrap'>
                        Manage and organize your portfolio projects.
                    </p>
                </div>
            </div>
            <button onClick={() => setCreateProject(true)} className="flex items-center gap-2 rounded-sm bg-primary  px-3 py-2 sm:px-5 sm:py-3 text-xs sm:text-sm font-medium shadow-lg shadow-pink-500/20 transition hover:scale-105">
                <Plus size={18} />
                Add New Project
            </button>
        </div>
    )
}

export default ProjectHeader
