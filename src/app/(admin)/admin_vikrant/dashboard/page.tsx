import DashboardHeader from '@/app/(admin)/_features/dashboard/components/DashboardHeader'
import { DASHBOARD_ELEMENTS } from '@/contents/dashboard'
import DashboardElementCard from '@/app/(admin)/_features/dashboard/components/DashboardElementCard'
import ProfileOverview from '@/app/(admin)/_features/dashboard/components/ProfileOverview'
import AudienceOverview from '@/app/(admin)/_features/dashboard/components/AudienceOverview'
import QuickActions from '@/app/(admin)/_features/dashboard/components/QuickActions'
import RecentProjects from '@/app/(admin)/_shared/components/RecentProjects'
import ActivityFeed from '@/app/(admin)/_features/dashboard/components/ActivityFeed'
import LearningProgress from '@/app/(admin)/_features/dashboard/components/LearningProgress'
import GithubActivity from '@/app/(admin)/_features/dashboard/components/GithubActivity'


const page = () => {
  return (
    <div className='overflow-y-auto'>
      <DashboardHeader />
      <div className='grid lg:grid-cols-3  xl:grid-cols-6 items-center px-4 gap-3 mt-4  grid-cols-2  w-full'>
        {
          DASHBOARD_ELEMENTS.map((el, index) => {
            return (
              <DashboardElementCard key={index} item={el} />
            )
          })
        }
      </div>
      <div className='grid lg:grid-cols-11 sm:grid-cols-2 grid-cols-1  items-center px-4 gap-3 mt-4'>
        <ProfileOverview />
        <AudienceOverview />
        <QuickActions />
      </div>

      <div className='grid grid-cols-1 xl:grid-cols-12 items-center px-4 gap-3 mt-4 h-auto'>
        <RecentProjects />
        <ActivityFeed />
        <div className='xl:col-span-4 flex flex-col gap-2'>
          <LearningProgress />
          <GithubActivity />
        </div>
      </div>
      
      <footer className="mt-6 border-t border-white/5 py-5">
        <div className="flex items-center justify-center">
          <p className="text-sm text-gray-500">
            © 2024{" "}
            <span className="font-medium text-gray-400">
              VikrantCodes
            </span>
            . All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  )
}

export default page
