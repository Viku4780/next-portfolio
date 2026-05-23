
import PieChartWithGap from '@/app/(admin)/_shared/components/PieChartWithGap'
import { percentCalculator } from '@/utils/numberConverter';

const data = [
    { name: 'India', value: 400 },
    { name: 'United States', value: 300 },
    { name: 'Other Countries', value: 200 },
    { name: 'Europe', value: 100 },
];

const COLORS = ['#C13383', '#3B82F6', '#10B981', '#F59E0B'];

const totalValue = data.reduce((sum, item) => sum + item.value, 0);

const AudienceOverview = () => {
    return (
        <div className='py-2 px-4 bg-gray-800/50 h-full  rounded-sm flex flex-col sm:col-span-1 lg:col-span-3'>
            <h3 className='text-xs'>Audience Overview</h3>

            <div className='flex items-center gap-2 flex-1'>
                <PieChartWithGap COLORS={COLORS} data={data} totalValue={totalValue} />

                <div className='flex flex-col gap-5  flex-1'>
                    {data.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="flex items-center justify-between text-xs "
                            >
                                <div className="flex items-center gap-2">
                                    <span
                                        className="w-2 h-2 rounded-full inline-block"
                                        style={{
                                            backgroundColor: COLORS[index],
                                        }}
                                    />

                                    <span>{item.name}</span>
                                </div>

                                <p>
                                    {percentCalculator(item.value, totalValue)}%
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>

        </div>
    )
}

export default AudienceOverview
