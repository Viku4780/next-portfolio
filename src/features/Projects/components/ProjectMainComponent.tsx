
import ProjectTable from './ProjectTable'
import EmptyProjectSkeleton from './EmptyProjectSkeleton'
import { Filter, Search } from 'lucide-react'
import { PROJECT_ELEMENT_DATA, projects } from '@/contents/Project'
import ProjectElementCard from './ProjectElementCard'

const ProjectMainComponent = () => {
  return (

    projects.length > 0 ?
      <>
        <div className="grid xl:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-5 mb-10 w-full">
          {
            PROJECT_ELEMENT_DATA.map((item, index) => <ProjectElementCard item={item} key={index} />)
          }

        </div>

        <div className="rounded-sm   w-full">
          <div className="mb-5 flex sm:flex-row flex-col items-start sm:items-center sm:justify-between gap-2">
            <div className="relative sm:w-[320px] w-full">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                size={18}
              />

              <input
                type="text"
                placeholder="Search projects..."
                className="w-full rounded-md border border-gray-800 bg-black py-3 pl-11 pr-4 outline-none"
              />
            </div>

            <button className="flex items-center gap-2 rounded-md border border-gray-800 bg-black px-4 py-3 text-sm text-slate-300">
              <Filter size={16} />
              Filter
            </button>
          </div>

          <div className="overflow-hidden rounded-sm border border-gray-800 bg-gray-800/50 ">
            <ProjectTable data={projects} />
          </div>

        </div>
      </>
      :
      <div className="flex justify-center items-center  ">
        <EmptyProjectSkeleton />
      </div>

  )
}

export default ProjectMainComponent
