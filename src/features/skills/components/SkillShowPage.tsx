import SkillsHeader from '@/features/skills/components/SkillsHeader'
import SkillPieChart from '@/features/skills/components/SkillPieChart'
import PieChartCustomLegend from '@/features/skills/components/PieChartCustomLegend'
import TopSkill from '@/features/skills/components/TopSkill'
import AllSkillTable from '@/features/skills/components/AllSkillTable'
import { useState } from 'react'
import { initialSkills } from '@/contents/skills'
import { X } from 'lucide-react'

const SkillShowPage = () => {

    const [search, setSearch] = useState("");
    const [skills, setSkills] = useState(initialSkills);
    const [filters, setFilters] = useState({
        category: "",
        level: "",
        status: "",
    });

    const filteredSkills = skills.filter((skill) => {
        const matchesSearch = skill.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesCategory =
            !filters.category ||
            skill.category === filters.category;

        const matchesLevel =
            !filters.level ||
            skill.level === filters.level;

        const matchesStatus =
            !filters.status ||
            skill.status === filters.status;

        return (
            matchesSearch &&
            matchesCategory &&
            matchesLevel &&
            matchesStatus
        );
    });

    return (
        <main className="min-h-screen  text-white">
            <div className="space-y-6">
                {/* HEADER */}
                <SkillsHeader />

                {/* TOP SECTION */}
                <div className="grid lg:grid-cols-2 px-4 gap-6">
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

                <div className=" px-4 ">

                    <AllSkillTable />

                </div>

            </div>
        </main>



    )
}




export default SkillShowPage
