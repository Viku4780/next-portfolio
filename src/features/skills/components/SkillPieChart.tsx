import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { skillsOverview } from "@/contents/skills";

const SkillPieChart = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const total = skillsOverview.reduce((sum, entry) => sum + entry.value,0);

  // Active data
  const activeData =
    activeIndex !== null ? skillsOverview[activeIndex] : null;

  return (
    <div
      style={{ width: "100%", height: 400 }}
      className="rounded-lg p-3"
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          {/* Pie */}
          <Pie
            data={skillsOverview}
            dataKey="value"
            nameKey="label"
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={115}
            paddingAngle={3}
            onMouseEnter={(_, index) =>
              setActiveIndex(index)
            }
            onMouseLeave={() =>
              setActiveIndex(null)
            }
          >
            {skillsOverview.map((entry, index) => {
              console.log(entry)
              return (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  stroke={
                    index === activeIndex
                      ? "#ffffff"
                      : "none"
                  }
                  strokeWidth={
                    index === activeIndex ? 4 : 1
                  }
                />
              );
            })}
          </Pie>

          {/* Tooltip */}
          <Tooltip />

          {/* Center Text */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {/* Value */}
            <tspan
              x="50%"
              dy="-0.3em"
              fontSize="32"
              fontWeight="700"
              fill="#ffffff"
            >
              {activeData
                ? activeData.value
                : total}
            </tspan>

            {/* Label */}
            <tspan
              x="50%"
              dy="1.8em"
              fontSize="16"
              fill="#94a3b8"
            >
              {activeData
                ? activeData.label
                : "Total Skills"}
            </tspan>
          </text>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillPieChart;