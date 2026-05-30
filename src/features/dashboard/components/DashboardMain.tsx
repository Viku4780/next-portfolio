import { DASHBOARD_ELEMENTS } from '@/contents/dashboard'
import DashboardElementCard from './DashboardElementCard'
import ProfileViewsOverview from '@/shared/components/ProfileViewsOverview'
import AudienceOverview from './AudienceOverview'
import QuickActions from './QuickActions'
import RecentProjects from '@/shared/components/RecentProjects'
import ActivityFeed from './ActivityFeed'
import LearningProgress from './LearningProgress'
import GithubActivity from './GithubActivity'

const DashboardMain = () => {
  return (
    <>
      <div className='grid lg:grid-cols-3  xl:grid-cols-6 items-center  gap-3 mt-4  grid-cols-2  w-full'>
        {
          DASHBOARD_ELEMENTS.map((el, index) => {
            return (
              <DashboardElementCard key={index} item={el} />
            )
          })
        }
      </div>
      <div className='grid lg:grid-cols-11 sm:grid-cols-2 grid-cols-1  items-center gap-3 mt-4'>
        <ProfileViewsOverview />
        <AudienceOverview />
        <QuickActions />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 items-center gap-3 mt-4 h-auto'>
        <RecentProjects />
        <ActivityFeed />
        <div className='xl:col-span-4 flex flex-col sm:flex-row xl:flex-col sm:col-span-2 gap-2'>
          <LearningProgress />
          <GithubActivity />
        </div>
      </div>
    </>
  )
}

export default DashboardMain
