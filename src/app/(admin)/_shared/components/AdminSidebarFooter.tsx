import Image from 'next/image'
import { SidebarDropDown } from './SidebarDropDown'

const AdminSidebarFooter = ({ sidebarCollapse }: { sidebarCollapse: boolean }) => {
    return (
        <div className='flex items-center border-t
            border-white/10
            p-4 justify-between '
        >
            <div className='relative w-12 h-12 rounded-full'>
                <Image src={'/profile.jpg'} alt='profile_pic'
                    fill
                    className="object-cover rounded-full" />
            </div>

            {
                !sidebarCollapse && (
                    <>
                        <div className={`flex flex-col transition-all duration-300 ease-in-out ${sidebarCollapse ? 'hidden' : 'flex'}`}>
                            <p className='text-white font-medium'>Vikrant Kumar</p>
                            <p className='text-gray-400 text-sm'>Admin</p>
                        </div>
                        <SidebarDropDown />
                    </>
                )
            }

        </div>
    )
}

export default AdminSidebarFooter
