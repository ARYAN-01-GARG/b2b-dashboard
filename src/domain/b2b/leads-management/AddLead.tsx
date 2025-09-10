import { useState } from "react";
import { Button } from "@/components/ui/button";
import { addLead, nextLeadId } from "./store";
import type { Lead } from "./types";
import { useNavigate } from "react-router-dom";
import { FormInput, FormSelect, FormDateInput } from "@/components/ui/form-inputs";
import { CustomNotes, type CustomNote } from "@/components/ui/custom-notes";
import { FORM_OPTIONS } from "@/constants";

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
              <FormInput
                label="Gym Name"
                value={formData.gymName}
                onChange={(value: string) => handleInputChange('gymName', value)}
                required
              />

              <FormSelect
                label="Country"
                value={formData.country}
                onChange={(value: string) => handleInputChange('country', value)}
                options={FORM_OPTIONS.countries}
                required
              />

              <FormSelect
                label="Lead Source"
                value={formData.leadSource}
                onChange={(value: string) => handleInputChange('leadSource', value)}
                options={FORM_OPTIONS.leadSources}
                required
              />

              <FormSelect
                label="Assigned Sales Executive"
                value={formData.assignedSalesExecutive}
                onChange={(value: string) => handleInputChange('assignedSalesExecutive', value)}
                options={FORM_OPTIONS.salesExecutives}
                required
              />
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <FormInput
                label="City"
                value={formData.city}
                onChange={(value: string) => handleInputChange('city', value)}
                required
              />

              <FormDateInput
                label="Manually Added/ Demo Sign Up Date"
                value={formData.signUpDate}
                onChange={(value: string) => handleInputChange('signUpDate', value)}
                required
              />

              <FormSelect
                label="Lead Status"
                value={formData.leadStatus}
                onChange={(value: string) => handleInputChange('leadStatus', value)}
                options={FORM_OPTIONS.leadStatuses}
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