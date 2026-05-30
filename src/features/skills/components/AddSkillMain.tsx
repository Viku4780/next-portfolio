import React, { useState } from 'react'
import { Select } from './SkillFilter';
import { categories, levels } from '@/contents/skills';

const AddSkillMain = () => {
    const [form, setForm] = useState({
        name: "",
        category: "Frontend",
        proficiency: 80,
        level: "Intermediate",
        description: "",
        status: "Active",
    });

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

    return (
        <div className="space-y-6 px-3 sm:px-5">
            {/* Skill Name */}
            <div className=''>
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
                    className="h-10 sm:h-12 w-full rounded-sm border border-white/10  px-4 text-sm outline-none transition focus:border-pink-500"
                />
            </div>

            {/* Category */}
            <div className=''>
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
            <div className=''>
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
                    className="w-full resize-none rounded-sm border border-white/10  p-3 sm:p-4 text-sm outline-none transition focus:border-pink-500"
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
                <button className="rounded-sm border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-300 transition hover:bg-white/10">
                    Cancel
                </button>

                <button
                    onClick={addSkill}
                    className="rounded-sm bg-gradient-to-r from-pink-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white"
                >
                    Add Skill
                </button>
            </div>
        </div>
    )
}

export default AddSkillMain
