'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useSidebar } from '@/app/(users)/context/SidebarCollapseContext';
import { useTheme } from '@/app/(users)/context/ThemeContext';

const DashboardHeader = () => {
    const { toggleSidebar} = useSidebar();
    const {theme, toggleTheme} = useTheme();

    // implement on screen lower then lg screen when clicking this a box openfrom above to take a query of string
    const [activateSearch, setActivateSearch] = useState(false);
    

    return (
        <div className='flex items-center justify-between p-4 border-b border-gray-800 w-full'>
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
                    <h2 className='text-lg '>Dashboard</h2>
                    <p className='text-xs text-secondary hidden lg:inline-block whitespace-nowrap'>Welcome back, Vikrant Here's what's happening with your portfolio</p>
                </div>

            </div>

            <div className='flex items-center mr-5 md:gap-5'>

                <div className='flex items-center lg:border border-secondary p-2 rounded gap-2 text-sm lg:w-[300px]'>

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
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.604 10.604z"
                        />
                    </svg>

                    <input type="text" placeholder='Search anything...                  Ctrl + K' className='outline-none hidden lg:inline-block flex-1 text-secondary' />

                </div>

                <motion.button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {theme === 'dark' ? (
                        <SunIcon className="h-5 w-5" />
                    ) : (
                        <MoonIcon className="h-5 w-5" />
                    )}
                </motion.button>

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
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                </svg>

            </div>
        </div>
    )
}

export default DashboardHeader
