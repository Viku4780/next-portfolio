import ChartDropDownSelect from '@/app/(admin)/_shared/components/ChartDropDownSelect'
import SimpleAreaChart from '@/app/(admin)/_shared/components/SimpleAreaChart'
import React from 'react'

const ProfileOverview = () => {
    return (
        <div className='py-2 px-4 bg-gray-800/50 sm:col-span-2 lg:col-span-5 rounded-sm '>
            <div className='flex items-center justify-between'>
                <h3 className='text-xs'>Profile Views Overview</h3>
                <ChartDropDownSelect />
            </div>

            <SimpleAreaChart />

        </div>
    )
}

export default ProfileOverview
