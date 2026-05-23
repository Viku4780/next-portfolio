import { MoveUp } from 'lucide-react';
import React from 'react'

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-gray-800 p-3 shadow-lg rounded-lg ">
                <p className="text-xs font-semibold text-secondary mb-1">Total Views</p>
                <div className='flex items-center gap-10'>
                    <p className="text-sm font-bold text-white text-xl">
                        {/* payload[0].value extracts the current hovered numerical value */}
                        {payload[0].value}
                    </p>

                    <span className='text-green-400 flex items-center text-xs'>
                        <MoveUp size={10} />
                        18.5%
                        </span>
                </div>
            </div>
        );
    }
    return null;
}

export default CustomTooltip
