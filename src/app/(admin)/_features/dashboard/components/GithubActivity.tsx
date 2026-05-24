import Link from "next/link";


const months = ["Dec", "Jan", "Feb", "Mar", "Apr", "May"];

const days = ["Mon", "Wed", "Fri"];

const contributionData = Array.from({ length: 78 }, (_, i) => {
    const levels = [
        "bg-[#1c2333]",
        "bg-purple-950",
        "bg-purple-800",
        "bg-fuchsia-700",
        "bg-pink-500",
    ];

    return levels[Math.floor(Math.random() * levels.length)];
});

export default function GithubActivity() {
    return (
        <div className="py-2  bg-gray-800/50 h-auto  rounded-sm  backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.35)]">
            {/* Header */}
            <div className="px-4 flex items-center justify-between">
                <h3 className="text-xs font-semibold text-white">
                    GitHub Activity
                </h3>

                <Link href={'/'} className='border border-gray-700 p-2 text-xs rounded-sm'>
                    View all
                </Link>
            </div>

            {/* Months */}
            <div className="my-2 ml-10 flex justify-between px-4 text-xs text-gray-500">
                {months.map((month) => (
                    <span key={month}>{month}</span>
                ))}
            </div>

            {/* Graph */}
            <div className="flex gap-3 px-4">
                {/* Days */}
                <div className="flex flex-col justify-between py-1 text-xs text-gray-500">
                    {days.map((day) => (
                        <span key={day}>{day}</span>
                    ))}
                </div>

                {/* Heatmap */}
                <div className="grid grid-flow-col grid-rows-7 gap-[5px]">
                    {contributionData.map((color, index) => (
                        <div
                            key={index}
                            className={`h-2 w-2 rounded-[1px] ${color}`}
                        />
                    ))}
                </div>
            </div>

            {/* Bottom Stats */}
            <div className="mt-2 grid grid-cols-3 gap-6 border-t border-white/5 pt-2 px-4">
                <div>
                    <h3 className="text-md font-semibold text-white">145</h3>
                    <p className="mt-1 text-xs text-gray-400">Contributions</p>
                </div>

                <div>
                    <h3 className="text-md font-semibold text-white">12</h3>
                    <p className="mt-1 text-xs text-gray-400">Repositories</p>
                </div>

                <div>
                    <h3 className="text-md font-semibold text-white">8</h3>
                    <p className="mt-1 text-xs text-gray-400">Pull Requests</p>
                </div>
            </div>
        </div>
    );
}