'use client'
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { RECENT_PROJECTS_DATA } from "@/contents/dashboard"

import { recentProject } from "@/contents/dashboard"
import Image from "next/image"
import TripleDot from "./TripleDot"

const columnHelper = createColumnHelper<recentProject>()

const columns = [
    columnHelper.accessor("projectImg", {
        header: () => (
            <div className="text-red-500">
                Image
            </div>
        ),

        cell: info => (
            <div className=' relative w-10 h-8 sm:w-15 sm:h-10'>
                <Image src={info.getValue()} fill className='object-cover rounded-sm' alt='project_img' />
            </div>
        ),
    }),

    columnHelper.accessor("projectName", {
        header: "Name",
        size: 200,

        cell: info => {
            const row = info.row.original;
            const stack = row.projectStack.join(', ');

            return (<div className=' whitespace-nowrap' >
                <h4 className='sm:text-xs font-semibold text-[10px] hover:text-primary'>{row.projectName}</h4>
                <p className='text-[10px] text-secondary hidden sm:inline-block'>{stack}</p>
            </div >
            )
        },
    }),

    columnHelper.accessor("state", {
        header: "Status",

        cell: info => {
            const state = info.getValue()

            return (
                <p className={`text-xs w-18 text-center p-1 rounded ${state === 'Published' ? 'text-dash-ternary bg-dash-ternary/10' : 'text-dash-fiv bg-dash-fiv/10'}`}>{state}</p>
            )
        },
    }),

    columnHelper.accessor("publishedDate", {
        header: "Date",

        cell: info => {
            const state = info.getValue()

            return (
                <p className='text-xs w-20 hidden sm:inline-block'>{state}</p>
            )
        },
    }),

    columnHelper.display({
        id: "actions",

        header: "Actions",

        cell: ({ row }) => (
            <TripleDot />
        ),
    }),

]

export default function RecentProjectTable() {
    const table = useReactTable({
        data: RECENT_PROJECTS_DATA,
        columns,

        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <div className="overflow-x-auto rounded-lg ">
            <table className="w-full border-collapse">

                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr
                            key={row.id}
                            className=" "
                        >
                            {row.getVisibleCells().map(cell => (
                                <td
                                    key={cell.id}
                                    className="border-t px-4 py-1 sm:py-2 xl:py-3 border-gray-800 "
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
    )
}