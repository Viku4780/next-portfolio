import React, { useState } from 'react'
import { allSkills } from '@/contents/skills'
import { Pencil, Trash2 } from 'lucide-react'
import { AllSkill } from '@/contents/skills'
import { createColumnHelper, useReactTable, flexRender, getCoreRowModel } from '@tanstack/react-table'
import { Filter, X } from 'lucide-react'
import SkillFilter from './SkillFilter'

const AllSkillTable = () => {
    const columnHelper = createColumnHelper<AllSkill>();
    const [filterActive, setFilterActive] = useState<boolean>(false);

   

    const columns = [
        columnHelper.accessor('name', {
            header: 'Skill',

            cell: info => {
                const row = info.row.original;
                const Icon = row.icon;

                return (
                    <div className="flex items-center gap-2  md:gap-4 max-w-[200px]">
                        <div
                            className="
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-sm
                                border
                                border-white/10
                                bg-white/5
                              "
                        >
                            <Icon
                                size={18}
                                className="text-slate-300"
                            />
                        </div>

                        <span className="font-medium text-xs md:text-sm">
                            {row.name}
                        </span>
                    </div >
                )
            },
        }),

        columnHelper.accessor('category', {
            header: 'Category',
            cell: info => {
                const row = info.row.original;
                return (
                    <span
                        className={`
                              rounded-full
                              px-3
                              py-1
                              text-xs
                              font-medium
                              ${row.categoryColor}
                              border
                            `}
                    >
                        {row.category}
                    </span>
                )
            },
        }),
        columnHelper.accessor('proficiency', {
            header: 'Proficiency',
            cell: info => {
                const row = info.row.original;
                return (
                    <div className="flex items-center gap-2 md:gap-4  max-w-[200px]">
                        <span className="w-[45px] text-xs text-slate-300">
                            {info.getValue()}
                        </span>

                        <div className="h-2 w-[90px] md:w-[120px] overflow-hidden  rounded-full bg-white/10">
                            <div
                                style={{
                                    width: row.width
                                }}
                                className="
                                  h-full
                                  rounded-full
                                  bg-gradient-to-r
                                  from-pink-500
                                  to-cyan-500
                                "
                            />
                        </div>
                    </div>
                );
            },
        }),
        columnHelper.accessor('status', {
            header: 'Status',
            cell: info => {
                return (
                    <span
                        className="
                              rounded-full
                              bg-emerald-500/10
                              px-3
                              py-1
                              text-xs
                              font-medium
                              text-emerald-400
                            "
                    >
                        {info.getValue()}
                    </span>
                )
            },
        }),

        columnHelper.display({
            id: 'actions',
            header: 'Action',
            cell: ({ row }) => (
                <div className="flex items-center gap-2">
                    <button
                        className="
                                flex
                                h-8
                                w-8
                                items-center
                                justify-center
                                rounded-xl
                                border
                                border-white/10
                                bg-white/5
                                text-slate-400
                                transition-all
                                duration-300
                                hover:border-cyan-500/30
                                hover:bg-cyan-500/10
                                hover:text-cyan-400
                              "
                    >
                        <Pencil size={12} />
                    </button>

                    <button
                        className="
                                flex
                                h-8
                                w-8
                                items-center
                                justify-center
                                rounded-xl
                                border
                                border-white/10
                                bg-white/5
                                text-slate-400
                                transition-all
                                duration-300
                                hover:border-red-500/30
                                hover:bg-red-500/10
                                hover:text-red-400
                              "
                    >
                        <Trash2 size={12} />
                    </button>
                </div>
            ),
        }),
    ];

    const table = useReactTable({
        data: allSkills,
        columns,
        getCoreRowModel: getCoreRowModel()
    })

    return (
        <div
            className="
            rounded-lg
            overflow-x-auto
            border
            border-white/10
            backdrop-blur-xl
            max-w-5xl
          "
        >
            {/* TABLE HEADER */}
            <div className="flex justify-between items-center p-3 ">


                {!filterActive ? <><h2 className="text-xl font-semibold shrink-0">
                    All Skills
                </h2>
                    <button onClick={() => setFilterActive(true)} className='flex text-sm items-center gap-1 sm:gap-2 border outline-none border-gray-800 py-2 px-4 rounded-sm cursor-pointer'>
                        <Filter size={13} />
                        Filter
                    </button>
                </>
                    :
                    <SkillFilter />}
            </div>

            {/* TABLE */}
            <table className="w-full ">
                <thead className="border-t border-white/10">
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr
                            key={headerGroup.id}
                            className="text-left text-sm text-slate-500"
                        >
                            {headerGroup.headers.map(header => (
                                <th
                                    key={header.id}
                                    className="
                                    px-3 py-2 md:py-4 font-medium"
                                >
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>

                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr
                            key={row.id}
                            className="
                                    transition-all
                                    duration-300
                                    hover:bg-white/[0.03]
                                    border-t border-white/10
                                    "
                        >
                            {row.getVisibleCells().map(cell => (
                                <td
                                    key={cell.id}
                                    className="
                                    px-3 py-2 md:py-4"
                                >
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>

            </table>

            <div className=' border-t border-gray-800 w-full p-3 flex items-center justify-between'>
                <p className="text-sm text-gray-400">
                    Showing 5 skills
                </p>

                <button
                    onClick={() => {
                        setSearch("");
                        setFilters({
                            category: "",
                            level: "",
                            status: "",
                        });
                    }}
                    className="flex items-center gap-2 rounded-md border border-white/10  px-4 py-2 text-xs sm:text-sm transition hover:bg-white/10"
                >
                    <X className="sm:h-6 sm:w-6 h-4 w-4" />
                    Clear Filters
                </button>
            </div>
        </div>
    )
}

export default AllSkillTable
