'use client'
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table"


import Image from "next/image"
import { ProjectType } from "@/contents/Project"
import { PencilIcon, MoreVertical, ChevronLeft, ChevronRight } from "lucide-react"

const columnHelper = createColumnHelper<ProjectType>()

const columns = [
    columnHelper.accessor("projectImg", {
        header: 'Project',

        cell: info => {
            const row = info.row.original;

            return (
                <div className=' flex gap-2 sm:gap-5 items-center'>
                    <div className="relative w-20 h-15 sm:w-35 sm:h-20 shrink-0">
                        <Image src={row.projectImg} className='rounded-sm object-cover' alt='project_img' fill />
                    </div>

                    <h4 className='sm:text-sm font-semibold text-xs hover:text-primary'>{row.projectName}</h4>
                </div>
            )
        },
    }),

    columnHelper.accessor("projectName", {
        header: "Tech Stack",
        size: 200,

        cell: info => {
            const row = info.row.original;
            const stack = row.projectStack.join(', ');

            return (<p className='text-xs sm:text-sm text-secondary   sm:inline-block'>{stack}</p>
            )
        },
    }),

    columnHelper.accessor("state", {
        header: "Status",

        cell: info => {
            const state = info.getValue()

            return (
                <p className={`sm:text-sm text-xs w-18 sm:w-22 text-center p-1 rounded ${state === 'Published' ? 'text-dash-ternary bg-dash-ternary/10' : 'text-dash-fiv bg-dash-fiv/10'}`}>{state}</p>
            )
        },
    }),

    columnHelper.accessor("views", {
        header: "View",

        cell: info => {
            const state = info.getValue()

            return (
                <p className={`text-xs sm:text-sm w-18 text-left p-1 text-secondary }`}>{state}</p>
            )
        },
    }),

    columnHelper.accessor("publishedDate", {
        header: "Updated",

        cell: info => {
            const state = info.getValue()

            return (
                <p className='sm:text-sm sm:w-30  text-xs sm:w-20 text-secondary'>{state}</p>
            )
        },
    }),

    columnHelper.display({
        id: "actions",

        header: "Actions",

        cell: ({ row }) => (
            <div className="flex items-center gap-2">
                <PencilIcon size={18} />
                <MoreVertical size={18} />
            </div>
        ),
    }),

]

export default function ProjectTable({ data }) {
    const table = useReactTable({
        data,
        columns,

        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <div className="overflow-x-auto rounded-lg ">
            <div>
                <table className="w-full border-collapse">
                    <thead className="">
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <th
                                        key={header.id}
                                        className="py-2 text-left lg:py-4 px-4 text-xs sm:text-sm"
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
                                className=" border-t border-gray-800 "
                            >
                                {row.getVisibleCells().map(cell => (
                                    <td
                                        key={cell.id}
                                        className="  py-1 sm:py-2 xl:py-3  px-4"
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
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-2 px-4 border-t border-gray-800 py-2 md:py-4 ">
                <p className="sm:text-sm text-xs text-secondary">Showing 1 to 5 of 12 projects</p>

                <div className="flex  text-xs items-center gap-1">
                    <ChevronLeft size={15} />
                    <div className="flex gap-2 ">
                        {
                        [1,2,3].map((num, i) => <button key={i} className="py-1 rounded px-3 bg-primary/20">{num}</button>)
                    }
                    </div>

                    <ChevronRight size={15} />
                </div>
            </div>
        </div>
    )
}