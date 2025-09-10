import { Button } from "@/components/ui/button";
import { Calendar, Plus, X } from "lucide-react";

interface CustomNote {
  id: number;
  date: string;
  note: string;
}

interface CustomNotesProps {
  notes: CustomNote[];
  onAddNote: () => void;
  onUpdateNote: (id: number, field: 'date' | 'note', value: string) => void;
  onRemoveNote: (id: number) => void;
}

export const CustomNotes = ({ notes, onAddNote, onUpdateNote, onRemoveNote }: CustomNotesProps) => (
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

export type { CustomNote };
