import { stats } from '@/contents/learning_tracker'

import LearningCard from './LearningCard'
import LearningTable from './LearningTable'

const LearningTrackerMain = () => {
    return (
        <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {stats.map((item, index) => {
                    return <LearningCard item={item} key={index} />
                })}
            </div>

            {/* TABLE CONTAINER */}
            <LearningTable />
    
    </>
  )
}

export default LearningTrackerMain
