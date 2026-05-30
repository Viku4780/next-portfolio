import React, { useState } from 'react'
import {
    Search,
} from "lucide-react";
import { levels, categories, initialSkills } from '@/contents/skills';
import { Select } from '@/shared/components/Select';

const LearningTrackerFilter = () => {
    const [search, setSearch] = useState("");
    const [filters, setFilters] = useState({
        category: "",
        level: "",
        status: "",
    });

    const [skills, setSkills] = useState(initialSkills);

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
        <div className="grid gap-3 lg:gap-4 sm:grid-cols-3 ">

            {/* Category */}
            <Select
                value={filters.category}
                onChange={(value) =>
                    setFilters({
                        ...filters,
                        category: value,
                    })
                }
                options={[
                    "",
                    ...categories,
                ]}
                placeholder="All Categories"
            />

            {/* Level */}
            <Select
                value={filters.level}
                onChange={(value) =>
                    setFilters({
                        ...filters,
                        level: value,
                    })
                }
                options={["", ...levels]}
                placeholder="All Levels"
            />

            {/* Status */}
            <Select
                value={filters.status}
                onChange={(value) =>
                    setFilters({
                        ...filters,
                        status: value,
                    })
                }
                options={[
                    "",
                    "In Progress",
                    "Completed",
                ]}
                placeholder="All Status"
            />
        </div>
    )
}

export default LearningTrackerFilter
