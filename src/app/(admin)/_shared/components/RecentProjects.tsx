import React from 'react'
import BasicTable from './BasicTable'
import Link from 'next/link'
import { RECENT_PROJECTS_DATA } from '@/contents/dashboard'

const RecentProjects = () => {
    return (
        <div className=' col-span-5 py-2  bg-gray-800/50 h-full  rounded-sm'>
            <div className='text-xs px-4 flex items-center justify-between  '>
                <h3 className=' font-semibold'>Recent Projects</h3>

                <Link href={'/'} className='border border-gray-700 p-2 rounded-sm'>
                    View all
                </Link>
            </div>

            <div className=' mt-2 flex flex-col '>
                {
                    RECENT_PROJECTS_DATA.map((data, index) => {
                        return  <BasicTable data={data} key={index} />
                    })
                }
               
            </div>
        </div>
    )
}

export default RecentProjects
