import { learningData } from "@/contents/dashboard";
import Link from "next/link";

export default function LearningProgress() {
    return (
        <div className="py-2  bg-gray-800/50 h-auto  rounded-sm backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.35)] w-full flex-1">
            {/* Header */}
            <div className="px-4 flex items-center justify-between">
                <h3 className="text-xs sm:text-md lg:text-lg font-semibold text-white">
                    Learning Progress
                </h3>

                <Link href={'/'} className='border border-gray-700 p-2 text-xs rounded-sm'>
                    View all
                </Link>
            </div>

            {/* Progress Items */}
            <div className="mt-2">
                {learningData.map((item) => (
                    <div key={item.title} className="flex flex-col items-center justify-between px-4 py-1  gap-1 ">
                        {/* Top */}
                        <div className=" flex items-center justify-between  w-full">
                            <h4 className="text-xs font-medium text-white">
                                {item.title}
                            </h4>
                            <span className="text-xs text-gray-400">
                                {item.progress}%
                            </span>

                        </div>

                        {/* Progress Bar */}
                        <div className="h-[6px] w-full overflow-hidden rounded-full bg-white/5">

                            <div
                                style={{ width: `${item.progress}%` }}
                                className={`h-full rounded-full bg-gradient-to-r ${item.gradient}`}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}