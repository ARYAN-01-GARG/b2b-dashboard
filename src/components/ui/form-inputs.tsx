import { ChevronDown } from "lucide-react";

// Reusable Input Component
interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  type?: "text" | "email" | "number" | "tel";
}

export const FormInput = ({ label, value, onChange, placeholder, required = false, type = "text" }: InputProps) => (
  <div className="space-y-1">
    <label className="block text-xl font-medium text-muted-foreground mt-8 mb-4">
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full p-4 text-muted-foreground cursor-pointer border-2 border-[#A0A0A042] rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
    />
  </div>
);

// Reusable Select Component
interface SelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  required?: boolean;
}

export const FormSelect = ({ label, value, onChange, options, required = false }: SelectProps) => (
  <div className="space-y-1">
    <label className="block text-xl font-medium text-muted-foreground mt-8 mb-4">
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-4 border-2 cursor-pointer border-[#A0A0A042] rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 appearance-none bg-white text-gray-900"
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
    </div>
  </div>
);

// Reusable Date Input Component
interface DateInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

export const FormDateInput = ({ label, value, onChange, required = false }: DateInputProps) => (
  <div className="space-y-1">
    <label className="block text-xl font-medium text-muted-foreground mt-8 mb-4">
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-4 border-2 border-[#A0A0A042] cursor-pointer rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900"
      />
    </div>
  </div>
);
