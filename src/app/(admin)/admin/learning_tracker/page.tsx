'use client'

import {
  Plus,
  Pencil,
  Trash2,
  MoreVertical,
} from 'lucide-react'

import { stats,learningGoals } from '@/contents/learning_tracker'
import LearningCard from '@/features/learning_tracker/components/LearningCard'
import { useState } from 'react'
import AdminElementTemplate from '@/shared/components/AdminElementTemplate'
import AdminElementCreationBtn from '@/shared/components/AdminElementCreationBtn'
import LearningTrackerMain from '@/features/learning_tracker/components/LearningTrackerMain'


export default function page() {
  const [addGoal, setAddGoal] = useState<boolean>(false);

  return (
    // <main className="min-h-screen bg-[#050816] p-6 text-white">
    //   <div className="space-y-6">
    //     {/* HEADER */}
    //     <div className="flex items-start justify-between">
    //       <div>
    //         <div className="flex items-center gap-2 text-sm text-slate-500">
    //           <span>Dashboard</span>
    //           <span>/</span>
    //           <span>Learning Tracker</span>
    //         </div>

    //         <h1 className="mt-3 text-3xl font-bold tracking-tight">
    //           Learning Tracker
    //         </h1>
    //       </div>

    //       <button
    //         className="
    //           flex
    //           items-center
    //           gap-2
    //           rounded-2xl
    //           bg-gradient-to-r
    //           from-pink-500
    //           to-fuchsia-500
    //           px-5
    //           py-3
    //           text-sm
    //           font-medium
    //           shadow-lg
    //           shadow-pink-500/20
    //           transition-all
    //           duration-300
    //           hover:scale-[1.03]
    //         "
    //       >
    //         <Plus size={18} />
    //         Add New Goal
    //       </button>
    //     </div>

    //     {/* STATS */}
    //   

    !addGoal ? <AdminElementTemplate metaData={{ title: "Learning Tracker", desc: "Manage and organize your learning tracker." }} children1={<AdminElementCreationBtn setCreateElement={setAddGoal} val={'Learning'} />} children2={<LearningTrackerMain /> } /> : <></>
  )
}