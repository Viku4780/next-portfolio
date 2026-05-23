import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const ChartDropDownSelect = () => {
    return (
        <Select>
            <SelectTrigger className="w-full max-w-40">
                <SelectValue placeholder="This Month" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 dark:bg-gray-800 opacity-100 z-50 ">
                <SelectGroup>
                    <SelectItem value="this_month">This Month</SelectItem>
                    <SelectItem value="previous_month">Previous Month</SelectItem>
                    <SelectItem value="this_week">This Week</SelectItem>
                    <SelectItem value="previous_week">Previous Week</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export default ChartDropDownSelect
