'use client';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import CustomTooltip from './CustomTooltip';
import { chartData } from '@/utils/numberConverter';

// #region Sample data
const data = [
    {
        name: 'May 1',
        Views: 100
    },
    {
        name: 'May 6',
        Views: 500
    },
    {
        name: 'May 11',
        Views: 400
    },
    {
        name: 'May 16',
        Views: 800
    },
    {
        name: 'May 21',
        Views: 700
    },
    {
        name: 'May 26',
        Views: 1600
    },
    {
        name: 'May 31',
        Views: 1800
    },
];

// #endregion
const SimpleAreaChart = () => {
    return (
        <AreaChart
            style={{ width: '100%', maxWidth: '100%', aspectRatio: 2.5 }}
            responsive
            data={data}
            margin={{
                top: 15,
                right: 0,
                left: 0,
                bottom: 0,
            }}
            onContextMenu={(_, e) => e.preventDefault()}
        >
            <CartesianGrid vertical={false} strokeWidth={0.1} />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={chartData} domain={[0, 'auto']} />
            <Tooltip content={<CustomTooltip />} />
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#C13383" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#C13383" stopOpacity={0} />
                </linearGradient>
            </defs>
            <Area type="monotone" dataKey="Views" stroke="#C13383" fill="url(#colorUv)" />
            <RechartsDevtools />
        </AreaChart>
    );
};

export default SimpleAreaChart;