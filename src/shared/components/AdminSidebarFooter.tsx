import Image from 'next/image'
import { SidebarDropDown } from './SidebarDropDown'

const AdminSidebarFooter = ({ sidebarCollapse }: { sidebarCollapse: boolean }) => {
    return (
        <div className='flex items-center border-t
            border-white/10
            p-4  '
        >
            <div className='relative w-12 h-12 rounded-full shrink-0'>
                <Image src={'/profile.jpg'} alt='profile_pic'
                    fill
                    className="object-cover rounded-full" />
            </div>

            <div className={`
            ml-3
            overflow-hidden
            transition-all duration-300 ease-in-out
            ${sidebarCollapse
                    ? "max-w-0 opacity-0 translate-x-[-10px]"
                    : "max-w-[200px] opacity-100 translate-x-0"
                }
        `}>
                <p className='text-white font-medium whitespace-nowrap'>Vikrant Kumar</p>

                <p className='text-gray-400 text-sm whitespace-nowrap'>Admin</p>
            </div>

            <div className={`
            ml-auto
            overflow-hidden
            transition-all duration-300 ease-in-out
            ${sidebarCollapse
                    ? "max-w-0 opacity-0 translate-x-[-10px]"
                    : "max-w-[200px] opacity-100 translate-x-0"
                }
        `}>
                <SidebarDropDown />
            </div>

        </div>
    )
}

export default AdminSidebarFooter
