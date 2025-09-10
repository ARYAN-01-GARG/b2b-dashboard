import { Search } from "lucide-react";

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export const SearchBar = ({ 
  placeholder = "Search...", 
  value, 
  onChange, 
  className = "w-full" 
}: SearchBarProps) => (
  <div className={`border-3 border-[#A0A0A042] px-4 py-2 rounded-md flex items-center gap-2 ${className}`}>
    <Search className="w-6 h-6 text-black/40" />
    <input 
      type="text" 
      placeholder={placeholder} 
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className="outline-none p-2 font-medium flex-1" 
    />
  </div>
);

export default SearchBar;
