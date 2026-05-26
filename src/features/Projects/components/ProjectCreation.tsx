"use client";

import { useState } from "react";
import {
    ImagePlus,
    Link2,
    X,
    Bold,
    Italic,
    List,
    ListOrdered,
    Heading1,
    Heading2,
    Heading3,
    AlignLeft,
    Paperclip,
} from "lucide-react";
import ProjectCreationHeader from "./ProjectCreationHeader";
import ProjectStatusDropDown from "./ProjectStatusDropDown";

const techSuggestions = [
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "Node.js",
    "Prisma",
    "MongoDB",
    "PostgreSQL",
];

export default function ProjectCreation() {
    const [techInput, setTechInput] = useState("");
    const [techs, setTechs] = useState([
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Node.js",
    ]);

    const addTech = (value: string) => {
        if (!value.trim()) return;

        if (!techs.includes(value)) {
            setTechs([...techs, value]);
        }

        setTechInput("");
    };

    const removeTech = (value: string) => {
        setTechs(techs.filter((item) => item !== value));
    };

    return (
        <div className="min-h-screen  py-2 sm:py-4 text-white ">
            {/* Container */}
            <div className="mx-auto px-4 max-w-5xl">
                <ProjectCreationHeader />

                {/* Main Card */}
                <div className="rounded-lg border border-gray-800 p-2 sm:p-8 ">
                    {/* Basic Information */}
                    <div className="mb-5 sm:mb-10">
                        <h2 className="mb-6 sm:text-lg font-semibold">
                            Basic Information
                        </h2>

                        <div className="space-y-6">
                            {/* Project Title */}
                            <div>
                                <label className="mb-2 block text-sm text-gray-300">
                                    Project Title
                                </label>

                                <input
                                    type="text"
                                    placeholder="e.g. AI SaaS Dashboard"
                                    className="h-10 sm:h-12 w-full rounded-sm border border-white/10 bg-[#081425] px-3 text-sm outline-none transition placeholder:text-gray-500 focus:border-pink-500"
                                />
                            </div>

                            {/* Short Description */}
                            <div>
                                <label className="mb-2 block text-sm text-gray-300">
                                    Short Description
                                </label>

                                <input
                                    type="text"
                                    placeholder="Brief description about the project..."
                                    className="h-10 sm:h-12 w-full rounded-sm border border-white/10 bg-[#081425] px-4 text-sm outline-none transition placeholder:text-gray-500 focus:border-pink-500"
                                />
                            </div>

                            {/* Detailed Description */}
                            <div>
                                <label className="mb-2 block text-sm text-gray-300">
                                    Detailed Description
                                </label>

                                <div className="overflow-hidden rounded-sm border border-white/10 bg-[#081425]">
                                    {/* Toolbar */}
                                    <div className="flex items-center gap-2 border-b border-white/10 p-3">
                                        <ToolbarButton icon={Bold} />
                                        <ToolbarButton icon={Italic} />
                                        <ToolbarButton icon={Heading1} />
                                        <ToolbarButton icon={Heading2} />
                                        <ToolbarButton icon={Heading3} />
                                        <ToolbarButton icon={List} />
                                        <ToolbarButton icon={ListOrdered} />
                                        <ToolbarButton icon={AlignLeft} />
                                        <ToolbarButton icon={Paperclip} />
                                    </div>

                                    {/* Textarea */}
                                    <textarea
                                        rows={8}
                                        placeholder="Write something about the project..."
                                        className="w-full resize-none bg-transparent p-3 sm:p-4 text-sm outline-none placeholder:text-gray-500"
                                    />
                                </div>
                            </div>

                            {/* Tech Stack */}
                            <div>
                                <label className="mb-2 block text-sm text-gray-300">
                                    Tech Stack
                                </label>

                                <input
                                    type="text"
                                    value={techInput}
                                    onChange={(e) =>
                                        setTechInput(e.target.value)
                                    }
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            e.preventDefault();
                                            addTech(techInput);
                                        }
                                    }}
                                    placeholder="Type and press enter"
                                    className="h-10 sm:h-12 w-full rounded-sm border border-white/10 bg-[#081425] px-3 text-sm outline-none transition placeholder:text-gray-500 focus:border-pink-500"
                                />

                                {/* Suggestions */}
                                <div className="mt-4 flex flex-wrap gap-3">
                                    {techSuggestions.map((item) => (
                                        <button
                                            key={item}
                                            onClick={() => addTech(item)}
                                            className="rounded-lg border border-pink-500/20 bg-pink-500/10 px-3 py-1.5 text-xs text-pink-300 transition hover:bg-pink-500/20"
                                        >
                                            {item}
                                        </button>
                                    ))}
                                </div>

                                {/* Selected Tech */}
                                <div className="mt-4 flex flex-wrap gap-3">
                                    {techs.map((tech) => (
                                        <div
                                            key={tech}
                                            className="flex items-center gap-2 rounded-lg border border-pink-500/20 bg-pink-500/10 px-3 py-2 text-sm text-pink-300"
                                        >
                                            {tech}

                                            <button
                                                onClick={() => removeTech(tech)}
                                            >
                                                <X className="h-4 w-4" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Links */}
                            <div className="grid gap-6 md:grid-cols-2">
                                {/* Project Link */}
                                <div>
                                    <label className="mb-2 block text-sm text-gray-300">
                                        Project Link
                                    </label>

                                    <div className="relative">
                                        <Link2 className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />

                                        <input
                                            type="text"
                                            placeholder="https://"
                                            className="h-10 sm:h-12 w-full rounded-sm border border-white/10 bg-[#081425] pl-11 pr-4 text-sm outline-none transition placeholder:text-gray-500 focus:border-pink-500"
                                        />
                                    </div>
                                </div>

                                {/* Github Link */}
                                <div>
                                    <label className="mb-2 block text-sm text-gray-300">
                                        GitHub Link
                                    </label>

                                    <div className="relative">
                                        
                                        <svg 
                                        className="
                                        absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500
                                        "
                                        xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>

                                        <input
                                            type="text"
                                            placeholder="https://github.com/username/repo"
                                            className="h-10 sm:h-12 w-full rounded-sm border border-white/10 bg-[#081425] pl-11 pr-4 text-sm outline-none transition placeholder:text-gray-500 focus:border-pink-500"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Project Image */}
                            <div>
                                <label className="mb-2 block text-sm text-gray-300">
                                    Project Image
                                </label>

                                <div className="group flex min-h-[240px] cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-pink-500/30 bg-[#081425] transition hover:border-pink-500">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-500/10">
                                        <ImagePlus className="h-8 w-8 text-pink-400" />
                                    </div>

                                    <h3 className="mt-4 sm:text-lg font-medium">
                                        Click to upload or drag and drop
                                    </h3>

                                    <p className="mt-2
                                    text-xs sm:text-sm text-gray-400">
                                       MP4, PNG, JPG or WEBP (MAX. 30MB)
                                    </p>
                                </div>
                            </div>

                            {/* Status */}
                            <div>
                                <label className="mb-2 block text-sm text-gray-300">
                                    Status
                                </label>

                                <ProjectStatusDropDown />
                            </div>
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="flex items-center justify-end sm:gap-4 gap-2 pt-6">
                        <button className="rounded-sm border border-white/10 bg-white/5 px-4 py-2 sm:px-6 sm:py-3 text-sm font-medium text-gray-300 transition hover:bg-white/10">
                            Cancel
                        </button>

                        <button className="rounded-sm bg-gradient-to-r from-pink-500 to-fuchsia-500 px-4 py-2 sm:px-6 sm:py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/20 transition hover:scale-[1.02]">
                            Create Project
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ===========================================
// Toolbar Button
// ===========================================

function ToolbarButton({
    icon: Icon,
}: {
    icon: any;
}) {
    return (
        <button className="flex h-9 w-9 items-center justify-center rounded-sm border border-white/10 bg-white/5 text-gray-400 transition hover:bg-pink-500/10 hover:text-pink-400">
            <Icon className="h-4 w-4" />
        </button>
    );
}