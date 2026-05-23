'use client';

import React, { useState } from 'react'
import AdminSidebar from '@/app/(admin)/_shared/components/AdminSidebar'
import DashboardHeader from '@/app/(admin)/_features/dashboard/components/DashboardHeader'
import MobileSidebar from '@/app/(admin)/_shared/components/MobileSidebar';

const page = () => {
  const [sidebarCollapse, setSidebarCollapse] = useState<boolean>(false);
  return (
    <div className='flex w-full'>
      <AdminSidebar sidebarCollapse={sidebarCollapse} />
      <MobileSidebar sidebarCollapse={sidebarCollapse} setSidebarCollapse={setSidebarCollapse} />
      <main className='flex-1 h-screen'>
        <DashboardHeader sidebarCollapse={sidebarCollapse} setSidebarCollapse={setSidebarCollapse} />
      </main>
    </div>
  )
}

export default page
