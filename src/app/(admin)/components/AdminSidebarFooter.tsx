import React from 'react'
import DropDown from './DropDown'
import Image from 'next/image'

const AdminSidebarFooter = () => {
    return (
        <div className='flex items-center border-t
            border-white/10
            p-4 justify-between'>
            <div className='relative w-16 h-16 rounded-full'>
                <Image src={'/profile.jpg'} alt='profile_pic' fill
                    className="object-cover rounded-full" />
            </div>

            <div className='flex flex-col gap-1'>
                <p className='text-white font-medium'>Vikrant Kumar</p>
                <p className='text-gray-400 text-sm'>Admin</p>
            </div>

            <DropDown />
        </div>
    )
}

export default AdminSidebarFooter
