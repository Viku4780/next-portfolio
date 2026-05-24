import Link from 'next/link'
import RecentProjectTable from './RecentProjectTable'

const RecentProjects = () => {
    return (
        <div className=' xl:col-span-5 py-2  bg-gray-800/50 h-full  rounded-sm'>
            <div className='text-xs px-4 flex items-center justify-between  '>
                <h3 className=' font-semibold'>Recent Projects</h3>

                <Link href={'/'} className='border border-gray-700 p-2 rounded-sm'>
                    View all
                </Link>
            </div>

            <div className=' mt-2'>
                <RecentProjectTable />
            </div>
        </div>
    )
}

export default RecentProjects
