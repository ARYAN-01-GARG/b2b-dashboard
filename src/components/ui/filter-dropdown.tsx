import { ChevronDown } from "lucide-react";

interface FilterDropdownProps {
  label: string;
  value?: string;
  options?: string[];
  onChange?: (value: string) => void;
  className?: string;
}

export const FilterDropdown = ({
  label,
  value,
  options = [],
  onChange,
  className = "w-[15%]"
}: FilterDropdownProps) => (
  <div className={`border-2 shadow border-[#A0A0A042] p-4 bg-muted flex text-muted-foreground rounded-lg cursor-pointer items-center justify-between ${className}`}>
    {options.length > 0 ? (
      <select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="bg-transparent outline-none cursor-pointer flex-1"
      >
        <option value="">{label}</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    ) : (
      <p>{label}</p>
    )}
    <ChevronDown className="w-6 h-6" />
  </div>
);

export default FilterDropdown;
