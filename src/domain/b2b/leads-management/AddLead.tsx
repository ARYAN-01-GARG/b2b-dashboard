import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Calendar, Plus, X } from "lucide-react";
import { addLead, nextLeadId } from "./store";
import type { Lead } from "./types";
import { useNavigate } from "react-router-dom";

// Types for form data
interface LeadFormData {
  gymName: string;
  city: string;
  country: string;
  signUpDate: string;
  leadSource: string;
  leadStatus: string;
  assignedSalesExecutive: string;
}

interface CustomNote {
  id: number;
  date: string;
  note: string;
}

// Reusable Input Component
interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
}

const Input = ({ label, value, onChange, placeholder, required = false }: InputProps) => (
  <div className="space-y-1">
    <label className="block text-xl font-medium text-muted-foreground mt-8 mb-4">
      {label}
      {required && <span>*</span>}
    </label>
    <input
      type="text"
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

const Select = ({ label, value, onChange, options, required = false }: SelectProps) => (
  <div className="space-y-1">
    <label className="block text-xl font-medium text-muted-foreground mt-8 mb-4">
      {label}
      {required && <span>*</span>}
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

const DateInput = ({ label, value, onChange, required = false }: DateInputProps) => (
  <div className="space-y-1">
    <label className="block text-xl font-medium text-muted-foreground mt-8 mb-4">
      {label}
      {required && <span>*</span>}
    </label>
    <div className="relative">
      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-4 border-2 border-[#A0A0A042] cursor-pointer rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900"
      />
      {/* <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" /> */}
    </div>
  </div>
);

// Custom Notes Component
interface CustomNotesProps {
  notes: CustomNote[];
  onAddNote: () => void;
  onUpdateNote: (id: number, field: 'date' | 'note', value: string) => void;
  onRemoveNote: (id: number) => void;
}

const CustomNotes = ({ notes, onAddNote, onUpdateNote, onRemoveNote }: CustomNotesProps) => (
  <div className="space-y-4">
    <div className="flex items-center gap-3">
      <h3 className="text-xl font-medium text-muted-foreground">Custom Notes</h3>
      <Button
        onClick={onAddNote}
        variant={'custom'}
        className="rounded-full p-5 transition-colors"
      >
        <Plus className="w-5 h-5" />
      </Button>
    </div>

    <div className="space-y-4">
      {notes.map((note) => (
        <div key={note.id} className="flex items-center gap-4 lg:gap-16">
          <div className="flex items-center justify-start gap-4  flex-1">
            <input
              type="date"
              value={note.date}
              onChange={(e) => onUpdateNote(note.id, 'date', e.target.value)}
              className="p-4 cursor-pointer border-2 border-[#A0A0A042] rounded-md w-[80%] focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-muted-foreground"
            />
            <Calendar className="w-8 h-8 text-muted-foreground" />
          </div>
          <input
            type="text"
            value={note.note}
            onChange={(e) => onUpdateNote(note.id, 'note', e.target.value)}
            placeholder="Enter note..."
            className="flex-1 p-4 border-2 cursor-pointer border-[#A0A0A042] rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-muted-foreground"
          />
          <button
            onClick={() => onRemoveNote(note.id)}
            className="p-2 text-red-500 hover:text-red-700 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  </div>
);

function AddLead() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LeadFormData>({
    gymName: "",
    city: "",
    country: "India",
    signUpDate: "",
    leadSource: "Wellvantage Demo",
    leadStatus: "In Negotiation",
    assignedSalesExecutive: "Satish Kumar"
  });

  const [customNotes, setCustomNotes] = useState<CustomNote[]>([
    { id: 1, date: "2025-07-30", note: "Gym said they want free trial" },
    { id: 2, date: "2025-07-14", note: "Contacted the gym for demo" },
    { id: 3, date: "2025-07-02", note: "Demo Account" }
  ]);

  const [nextNoteId, setNextNoteId] = useState(4);

  // Options for dropdowns
  const countryOptions = ["India", "USA", "UK", "Canada", "Australia"];
  const leadSourceOptions = ["Wellvantage Demo", "Website", "Referral", "Cold Call", "Ad Campaign"];
  const leadStatusOptions = ["In Negotiation", "Contacted", "Won", "New", "Lost"];
  const salesExecutiveOptions = ["Satish Kumar", "John Doe", "Jane Smith", "Mike Johnson"];

  const handleInputChange = (field: keyof LeadFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAddNote = () => {
    const newNote: CustomNote = {
      id: nextNoteId,
      date: new Date().toISOString().split('T')[0],
      note: ""
    };
    setCustomNotes(prev => [...prev, newNote]);
    setNextNoteId(prev => prev + 1);
  };

  const handleUpdateNote = (id: number, field: 'date' | 'note', value: string) => {
    setCustomNotes(prev =>
      prev.map(note =>
        note.id === id ? { ...note, [field]: value } : note
      )
    );
  };

  const handleRemoveNote = (id: number) => {
    setCustomNotes(prev => prev.filter(note => note.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = nextLeadId();
    const formattedDate = new Date(formData.signUpDate).toLocaleDateString('en-GB', {
      day: '2-digit', month: 'long', year: 'numeric'
    });
    const payload: Lead = {
      id,
      gymName: formData.gymName,
      city: formData.city,
      country: formData.country,
      signUpDate: formattedDate,
      assignedSalesExecutive: formData.assignedSalesExecutive,
      leadStatus: formData.leadStatus as Lead['leadStatus'],
      leadSource: formData.leadSource as Lead['leadSource'],
    };
    addLead(payload);
    navigate('/gym-leads');
  };

  return (
    <div className="">
      <h1 className="p-4 bg-secondary text-muted-foreground w-full font-semibold text-3xl">Add Gym Lead</h1>
      <div className="px-12 mt-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Main Form Fields - Two Column Layout */}
          <div className="grid grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <Input
                label="Gym Name"
                value={formData.gymName}
                onChange={(value) => handleInputChange('gymName', value)}
                required
              />

              <Select
                label="Country"
                value={formData.country}
                onChange={(value) => handleInputChange('country', value)}
                options={countryOptions}
                required
              />

              <Select
                label="Lead Source"
                value={formData.leadSource}
                onChange={(value) => handleInputChange('leadSource', value)}
                options={leadSourceOptions}
                required
              />

              <Select
                label="Assigned Sales Executive"
                value={formData.assignedSalesExecutive}
                onChange={(value) => handleInputChange('assignedSalesExecutive', value)}
                options={salesExecutiveOptions}
                required
              />
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <Input
                label="City"
                value={formData.city}
                onChange={(value) => handleInputChange('city', value)}
                required
              />

              <DateInput
                label="Manually Added/ Demo Sign Up Date"
                value={formData.signUpDate}
                onChange={(value) => handleInputChange('signUpDate', value)}
                required
              />

              <Select
                label="Lead Status"
                value={formData.leadStatus}
                onChange={(value) => handleInputChange('leadStatus', value)}
                options={leadStatusOptions}
                required
              />

            </div>
          </div>

          {/* Custom Notes Section */}
          <div className="mt-12">
            <CustomNotes
              notes={customNotes}
              onAddNote={handleAddNote}
              onUpdateNote={handleUpdateNote}
              onRemoveNote={handleRemoveNote}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-12">
            <Button
              type="submit"
              variant="custom"
              className="px-12 py-4 text-lg font-medium rounded-lg"
            >
              Update
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddLead;