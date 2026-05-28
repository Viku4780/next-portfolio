// ======================================================
// SkillAdditionPage.tsx
// ======================================================

"use client";

import { useState } from "react";
import {
    ChevronDown,
    Search,
    Filter,
    Plus,
    X,
} from "lucide-react";

// ======================================================
// DATA
// ======================================================

const categories = [
    "Frontend",
    "Backend",
    "Database",
    "DevOps",
    "Cloud",
];

const levels = [
    "Beginner",
    "Intermediate",
    "Advanced",
    "Expert",
];

const initialSkills = [
    {
        id: 1,
        name: "Next.js",
        category: "Frontend",
        proficiency: 90,
        level: "Advanced",
        status: "Active",
    },
    {
        id: 2,
        name: "React",
        category: "Frontend",
        proficiency: 85,
        level: "Advanced",
        status: "Active",
    },
    {
        id: 3,
        name: "TypeScript",
        category: "Frontend",
        proficiency: 80,
        level: "Advanced",
        status: "Active",
    },
    {
        id: 4,
        name: "Node.js",
        category: "Backend",
        proficiency: 75,
        level: "Intermediate",
        status: "Active",
    },
    {
        id: 5,
        name: "MongoDB",
        category: "Database",
        proficiency: 70,
        level: "Intermediate",
        status: "Active",
    },
];

// ======================================================
// MAIN COMPONENT
// ======================================================

export default function AddSkill() {
    const [skills, setSkills] = useState(initialSkills);

    const [search, setSearch] = useState("");

    const [filters, setFilters] = useState({
        category: "",
        level: "",
        status: "",
    });

    const [form, setForm] = useState({
        name: "",
        category: "Frontend",
        proficiency: 80,
        level: "Intermediate",
        description: "",
        status: "Active",
    });

    // ======================================================
    // ADD SKILL
    // ======================================================

    const addSkill = () => {
        if (!form.name.trim()) return;

        const newSkill = {
            id: Date.now(),
            ...form,
        };

        setSkills((prev) => [...prev, newSkill]);

        setForm({
            name: "",
            category: "Frontend",
            proficiency: 80,
            level: "Intermediate",
            description: "",
            status: "Active",
        });
    };

    // ======================================================
    // FILTERED DATA
    // ======================================================

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
        <div className="min-h-screen bg-[#020817] p-6 text-white">
            <div className="mx-auto max-w-7xl">
                {/* ======================================================
            TOP SECTION
        ====================================================== */}

                <div className="grid gap-6 lg:grid-cols-[420px_1fr]">
                    {/* ======================================================
              ADD SKILL FORM
          ====================================================== */}

                    <div className="rounded-3xl border border-white/10 bg-[#071224]/80 p-7 backdrop-blur-xl">
                        {/* Header */}
                        <div className="mb-8">
                            <h1 className="text-3xl font-bold">
                                Add New Skill
                            </h1>

                            <p className="mt-2 text-gray-400">
                                Add a new skill to showcase your expertise.
                            </p>
                        </div>

                        {/* Form */}
                        <div className="space-y-6">
                            {/* Skill Name */}
                            <div>
                                <label className="mb-2 block text-sm text-gray-300">
                                    Skill Name
                                </label>

                                <input
                                    value={form.name}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            name: e.target.value,
                                        })
                                    }
                                    placeholder="e.g. Next.js"
                                    className="h-12 w-full rounded-xl border border-white/10 bg-[#081425] px-4 text-sm outline-none transition focus:border-pink-500"
                                />
                            </div>

                            {/* Category */}
                            <div>
                                <label className="mb-2 block text-sm text-gray-300">
                                    Category
                                </label>

                                <Select
                                    value={form.category}
                                    onChange={(value) =>
                                        setForm({
                                            ...form,
                                            category: value,
                                        })
                                    }
                                    options={categories}
                                />
                            </div>

                            {/* Proficiency */}
                            <div>
                                <div className="mb-3 flex items-center justify-between">
                                    <label className="text-sm text-gray-300">
                                        Proficiency (%)
                                    </label>

                                    <span className="text-sm text-pink-400">
                                        {form.proficiency}%
                                    </span>
                                </div>

                                <input
                                    type="range"
                                    min={0}
                                    max={100}
                                    value={form.proficiency}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            proficiency: Number(
                                                e.target.value
                                            ),
                                        })
                                    }
                                    className="slider h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-pink-500"
                                />
                            </div>

                            {/* Experience Level */}
                            <div>
                                <label className="mb-2 block text-sm text-gray-300">
                                    Experience Level
                                </label>

                                <Select
                                    value={form.level}
                                    onChange={(value) =>
                                        setForm({
                                            ...form,
                                            level: value,
                                        })
                                    }
                                    options={levels}
                                />
                            </div>

                            {/* Description */}
                            <div>
                                <label className="mb-2 block text-sm text-gray-300">
                                    Description
                                </label>

                                <textarea
                                    rows={5}
                                    value={form.description}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            description:
                                                e.target.value,
                                        })
                                    }
                                    placeholder="Add a short description..."
                                    className="w-full resize-none rounded-2xl border border-white/10 bg-[#081425] p-4 text-sm outline-none transition focus:border-pink-500"
                                />
                            </div>

                            {/* Status */}
                            <div>
                                <label className="mb-2 block text-sm text-gray-300">
                                    Status
                                </label>

                                <Select
                                    value={form.status}
                                    onChange={(value) =>
                                        setForm({
                                            ...form,
                                            status: value,
                                        })
                                    }
                                    options={[
                                        "Active",
                                        "Inactive",
                                    ]}
                                />
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-end gap-4 pt-4">
                                <button className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-300 transition hover:bg-white/10">
                                    Cancel
                                </button>

                                <button
                                    onClick={addSkill}
                                    className="rounded-xl bg-gradient-to-r from-pink-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white"
                                >
                                    Add Skill
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ======================================================
              SKILLS TABLE
          ====================================================== */}

                    
                </div>
            </div>
        </div>
    );
}

// ======================================================
// REUSABLE SELECT COMPONENT
// ======================================================

function Select({
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
        <div className="relative">
            <select
                value={value}
                onChange={(e) =>
                    onChange(e.target.value)
                }
                className="h-12 w-full appearance-none rounded-xl border border-white/10 bg-[#081425] px-4 text-sm outline-none transition focus:border-pink-500"
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