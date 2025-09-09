import { X } from "lucide-react";
import type { Ticket } from "./data";

interface DeleteTicketProps {
  setShowTicketDialog: (show: boolean) => void;
  selectedTicket: Ticket;
  handleSoftDelete: () => void;
}

function DeleteTicket({ setShowTicketDialog, selectedTicket, handleSoftDelete }: DeleteTicketProps) {
  return (
    <div className="fixed inset-0 bg-neutral-700/70 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-md relative">
        <button
          onClick={() => setShowTicketDialog(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6 cursor-pointer" />
        </button>

        <h2 className="text-2xl font-semibold text-gray-800 mb-6">WellVantage Gym Detailed View</h2>

        <div className="text-center mb-8">
          <div className="text-4xl font-bold text-blue-600 mb-6">{selectedTicket.id}</div>

          <div className="space-y-4 text-left">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Requested On</label>
              <input
                type="text"
                value="12 July 2024"
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Actioned On</label>
              <input
                type="text"
                value="14 July 2024"
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Actioned By</label>
              <input
                type="text"
                value="Ashutosh Bagla"
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-600"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={handleSoftDelete}
            className="px-6 py-3 bg-red-600 cursor-pointer text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Soft Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteTicket;