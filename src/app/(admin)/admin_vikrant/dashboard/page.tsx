import DashboardHeader from '@/app/(admin)/_features/dashboard/components/DashboardHeader'
import { DASHBOARD_ELEMENTS } from '@/contents/dashboard'
import DashboardElementCard from '../../_features/dashboard/components/DashboardElementCard'
import ProfileOverview from '../../_features/dashboard/components/ProfileOverview'
import AudienceOverview from '../../_features/dashboard/components/AudienceOverview'


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
        <div className='flex-1'></div>
      </div>
    </div>
  )
}

export default page
