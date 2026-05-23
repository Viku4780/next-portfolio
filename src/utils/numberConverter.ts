export function convertInThousand(num: number): string{
   if(num >= 1000){
    return `${(num/1000).toFixed(2)}K`;
   }else{
    return `${num}`
   }
}

export function chartData(num: number): string{
    if(num >= 1000){
    return `${(num/1000).toFixed(1)}K`;
   }else{
    return `${num}`
   }
}

export function percentCalculator(num: number, total: number): string {
    return ((num/total)*100).toFixed(0);
}