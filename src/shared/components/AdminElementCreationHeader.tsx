import { useSidebar } from '@/app/(users)/context/SidebarCollapseContext'

interface AdminHeader {
    element: string;
    desc: string;
}

const AdminElementCreationHeader = ({metaData}: {metaData: AdminHeader}) => {
    const {toggleSidebar} = useSidebar()
    return (
        <>
            {/* Breadcrumb */}
            <div className=" border-b border-gray-800 flex p-3 sm:p-5  items-center gap-2  text-sm sm:text-md lg:text-lg text-gray-400">
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
                <span className="text-primary">{metaData.element}</span>

                <span>›</span>

                <span className="text-white">Add New {metaData.element}</span>
            </div>

            {/* Heading */}
            <div className=" p-3 sm:p-5">
                <h1 className="text-lg lg:text-3xl font-bold">
                    Add New {metaData.element}
                </h1>

                <p className="mt-2 text-sm text-secondary">
                    {metaData.desc}
                </p>
            </div>
        </>
    )
}

export default AdminElementCreationHeader
