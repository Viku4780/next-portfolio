import React from 'react'
import { skillsOverview } from '@/contents/skills'
import { percentCalculator } from '@/utils/numberConverter';

const PieChartCustomLegend = () => {
    const total = skillsOverview.reduce((sum, entry) => sum + entry.value, 0);

    return (
        <div className="space-y-5 px-2">
                {skillsOverview.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4"
                  >
                    <div
                    style={{
                        backgroundColor: item.color
                    }}
                      className={`h-3 w-3 rounded-full `}
                    />

                    <span className="w-[90px] text-sm text-slate-300">
                      {item.label}
                    </span>

                    <span className="text-sm text-slate-400">
                      {percentCalculator(item.value,total).toFixed()}%
                    </span>
                  </div>
                ))}
              </div>
    )
}

export default PieChartCustomLegend
