'use client';

// 1. Make sure to import ResponsiveContainer
import { Cell, Pie, PieChart, ResponsiveContainer,  } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import { convertInThousand } from '@/utils/numberConverter';



const PieChartWithGap = ({ isAnimationActive = true , totalValue, data, COLORS}: { isAnimationActive?: boolean }) => {
  

  return (
    <div className="w-full max-w-[200px] aspect-square ">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            innerRadius="70%"
            outerRadius="90%"
            paddingAngle={3}
            dataKey="value"
            cx="50%"
            cy="50%"
            isAnimationActive={isAnimationActive}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}


          </Pie>

          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            <tspan
              x="50%"
              dy="-5"
              fontSize="20"
              fontWeight="700"
              fill="#fff"
            >
              {convertInThousand(totalValue)}
            </tspan>

            <tspan
              x="50%"
              dy="20"
              fontSize="14"
              fill="#94A3B8"
            >
              Views
            </tspan>


          </text>

          <RechartsDevtools />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PieChartWithGap;
