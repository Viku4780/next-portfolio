import React from 'react'
import AdminSidebar from '../../components/AdminSidebar'
import DashboardHeader from '../../components/DashboardHeader'

const page = () => {
  return (
    <div className='flex w-full'>
      <AdminSidebar />
      <main className='flex-1'>
        <DashboardHeader />
      </main>
    </div>
  )
}

export default page
