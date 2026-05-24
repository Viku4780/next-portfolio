'use client';

import Image from 'next/image';
import React from 'react'
import TripleDot from './TripleDot';

const BasicTable = ({data}) => {
    const stack = data.projectStack.join(', ');

  return (
    <div className='flex items-center justify-between border-t px-4 py-2 border-gray-800'>
        <div className=' relative w-10 h-8 sm:w-15 sm:h-10'>
            <Image src={`${data.projectImg}`} fill className='object-cover rounded-sm' alt='project_img' />
        </div>

        <div className='w-[100px] sm:w-[200px] whitespace-nowrap'>
            <h4 className='sm:text-xs font-semibold text-[10px] hover:text-primary'>{data.projectName}</h4>
            <p className='text-[10px] text-secondary hidden sm:inline-block'>{stack}</p>
        </div>

        <p className={`text-xs w-18 text-center p-1 rounded ${data.state === 'Published' ? 'text-dash-ternary bg-dash-ternary/10' : 'text-dash-fiv bg-dash-fiv/10'}`}>{data.state}</p>

        <p className='text-xs w-20 hidden sm:inline-block'>{data.publishedDate}</p>

        <TripleDot />
      
    </div>
  )
}

export default BasicTable
