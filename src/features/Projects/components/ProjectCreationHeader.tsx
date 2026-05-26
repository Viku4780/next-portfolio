'use client';

import { useSidebar } from '@/app/(users)/context/SidebarCollapseContext'
import React from 'react'

const ProjectCreationHeader = () => {
    const {toggleSidebar} = useSidebar()
    return (
        <>
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-sm sm:text-md lg:text-lg text-gray-400">
                <div onClick={toggleSidebar} className='p-1 border border-gray-500 rounded mr-4'>
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
                <span className="text-primary">Projects</span>

                <span>›</span>

                <span className="text-white">Add New Project</span>
            </div>

            {/* Heading */}
            <div className="mb-8">
                <h1 className="text-lg lg:text-3xl font-bold">
                    Add New Project
                </h1>

                <p className="mt-2 text-sm text-secondary">
                    Create a new project to showcase in your portfolio.
                </p>
            </div>
        </>
    )
}

export default ProjectCreationHeader
