import React, { useState } from 'react'
import {
    ChevronDown,
    Search,
} from "lucide-react";
import { levels, categories, initialSkills } from '@/contents/skills';

const SkillFilter = () => {
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
        <div className="grid gap-4 lg:gap-3 sm:grid-cols-2 lg:grid-cols-4 ">
            {/* Search */}
            <div className="relative">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />

                <input
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                    placeholder="Search skills..."
                    className="h-10 sm:h-12  rounded-sm border border-white/10  
                                    pl-8 pr-3 text-sm outline-none transition focus:border-pink-500"
                />
            </div>

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
                    "Active",
                    "Inactive",
                ]}
                placeholder="All Status"
            />
        </div>
    )
}


export function Select({
    value,
    onChange,
    options,
    placeholder,
}: {
    value: string;
    onChange: (value: string) => void;
    options: string[];
    placeholder?: string;
}) {
    return (
        <div className="relative ">
            <select
                value={value}
                onChange={(e) =>
                    onChange(e.target.value)
                }
                className="h-10 sm:h-12  appearance-none rounded-sm border border-white/10  px-4 text-sm outline-none transition focus:border-pink-500
                bg-[#081425] w-full"
            >
                {placeholder && (
                    <option value="">
                        {placeholder}
                    </option>
                )}

                {options
                    .filter(Boolean)
                    .map((option) => (
                        <option
                            key={option}
                            value={option}
                        >
                            {option}
                        </option>
                    ))}
            </select>

            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
        </div>
    );
}

export default SkillFilter
