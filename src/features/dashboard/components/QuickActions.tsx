import React from 'react'
import { QUICK_ACTIONS } from '@/contents/dashboard'
import QuickActionListCard from './QuickActionListCard'

const QuickActions = () => {
  return (
    <div className='py-2 px-4 bg-gray-800/50 h-full  rounded-sm flex flex-col sm:col-span-1 lg:col-span-3 '>
        <h3 className='text-xs sm:text-md lg:text-lg font-semibold'>Quick Actions</h3>

        <div className='flex flex-col justify-between gap-1 rounded-sm mt-2 '>
            {
                QUICK_ACTIONS.map((list,index) => (
                    <QuickActionListCard key={index} list={list} />
                ))
            }
        </div>
      
    </div>
  )
}

export default QuickActions
