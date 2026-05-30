import React from 'react'
import AllSkillTable from './AllSkillTable'
import TopSkill from './TopSkill'
import PieChartCustomLegend from './PieChartCustomLegend'
import SkillPieChart from './SkillPieChart'

const SkillMain = () => {
    return (
        <>
            {/* TOP SECTION */}
            <div className="grid lg:grid-cols-2 gap-6">
                {/* SKILLS OVERVIEW */}
                <div
                    className="
              rounded-lg
              border
              border-white/10
              p-3
              backdrop-blur-xl
            "
                >
                    <h2 className="mb-8 text-xl font-semibold">
                        Skills Overview
                    </h2>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center justify-between">
                        <SkillPieChart />

                        {/* LEGENDS */}
                        <PieChartCustomLegend />
                    </div>
                </div>

                {/* TOP SKILLS */}
                <TopSkill />
            </div>

            {/* ALL SKILLS TABLE */}

            <div className="mt-5 ">

                <AllSkillTable />

            </div>
        </>
    )
}

export default SkillMain
