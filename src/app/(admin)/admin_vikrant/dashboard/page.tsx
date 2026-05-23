import DashboardHeader from '@/app/(admin)/_features/dashboard/components/DashboardHeader'
import { DASHBOARD_ELEMENTS } from '@/contents/dashboard'
import DashboardElementCard from '../../_features/dashboard/components/DashboardElementCard'


const page = () => {
  return (
    <div className=''>
      <DashboardHeader />
      <div className='grid lg:grid-cols-3   xl:grid-cols-6 items-center px-4 gap-3 mt-4  grid-cols-2  w-full'>
        {
          DASHBOARD_ELEMENTS.map((el, index) => {
            return (
                <DashboardElementCard key={index} item={el} />
            )
          })
        }
      </div>
    </div>
  )
}

export default page
