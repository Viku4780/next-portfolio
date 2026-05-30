import { ChevronDown } from "lucide-react";

export function Select({
    value,
    onChange,
    options,
    placeholder,
}: {
    value: string;
    onChange: (value: string) => void;
    options: string[];
    placeholder?: string;
}) {
    return (
        <div className="relative min-w-[250px] sm:min-w-[200px] ">
            <select
                value={value}
                onChange={(e) =>
                    onChange(e.target.value)
                }
                className="h-10 sm:h-12  appearance-none rounded-sm border border-white/10  px-4 text-sm outline-none transition focus:border-pink-500
                bg-[#081425] w-full"
            >
                {placeholder && (
                    <option value="">
                        {placeholder}
                    </option>
                )}

                {options
                    .filter(Boolean)
                    .map((option) => (
                        <option
                            key={option}
                            value={option}
                        >
                            {option}
                        </option>
                    ))}
            </select>

            <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
        </div>
    );
}