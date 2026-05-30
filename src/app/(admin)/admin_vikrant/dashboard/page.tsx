'use client';

import AdminElementTemplate from '@/shared/components/AdminElementTemplate'
import DashboardHeaderSide from '@/features/dashboard/components/DashboardHeaderSide'
import DashboardMain from '@/features/dashboard/components/DashboardMain'


const page = () => {
  return (
    <AdminElementTemplate metaData={{ title: "Dashboard", desc: "Welcome back, Vikrant Here's what's happening with your portfolio" }} children1={<DashboardHeaderSide />} children2={<DashboardMain /> } />
  )
}

export default page
