import { X } from "lucide-react";

interface GymDetailViewProps {
  isOpen: boolean;
  onClose: () => void;
  gymName: string;
  ownerName: string;
  email: string;
  phoneNumber: string;
  lastLogin: string;
  staffCount: string;
  onArchiveLead: () => void;
}

function GymDetailView({
  isOpen,
  onClose,
  gymName,
  ownerName,
  email,
  phoneNumber,
  lastLogin,
  staffCount,
  onArchiveLead
}: GymDetailViewProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-neutral-700/70 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6 cursor-pointer" />
        </button>

        <div className="text-center mb-8">
          <div className="text-4xl font-bold text-gray-800 mb-8">{gymName}</div>

          <div className="space-y-4 text-left">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Owner Name</label>
              <input
                type="text"
                value={ownerName}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="text"
                value={email}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="text"
                value={phoneNumber}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Login</label>
              <input
                type="text"
                value={lastLogin}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Staff Count</label>
              <input
                type="text"
                value={staffCount}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-600"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onArchiveLead}
            className="px-6 py-3 bg-green-600 cursor-pointer text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
          >
            Archived Lead Status
          </button>
        </div>
      </div>
    </div>
  );
}

export default GymDetailView;
