import React from 'react'

const QuickActionListCard = ({ list }) => {
    const Icon = list.icon;
    return (
        <div className='flex items-center justify-between bg-gray-800/80 hover:bg-gray-800 transition-all p-1 rounded'>
            <div className='flex items-center gap-2 '>
               <div className={`${list.bgClass} p-2 rounded`}>
                 <Icon size={16} />
               </div>

                <p className='text-xs'>{list.label}</p>
            </div>

            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>

            </div>
        </div>
    )
}

export default QuickActionListCard
