import { Button } from "@/components/ui/button";
import LineCard from "@/domain/graphs/LineCard";
import { PlusIcon, ArrowRightCircle, Search, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLeads } from "./store";
import type { Lead } from "./types";
import GymDetailView from "./GymDetailView";

// Lead type moved to ./types

const mockLeads: Lead[] = [
  {
    id: 1,
    gymName: "Mars Gym",
    city: "Delhi",
    country: "India",
    signUpDate: "26 July 2025",
    assignedSalesExecutive: "Satish Kumar",
    leadStatus: "In Negotiation",
    leadSource: "Website"
  },
  {
    id: 2,
    gymName: "Mars Gym",
    city: "Delhi",
    country: "India",
    signUpDate: "26 July 2025",
    assignedSalesExecutive: "Satish Kumar",
    leadStatus: "Contacted",
    leadSource: "Referral"
  },
  {
    id: 3,
    gymName: "Mars Gym",
    city: "Delhi",
    country: "India",
    signUpDate: "26 July 2025",
    assignedSalesExecutive: "Satish Kumar",
    leadStatus: "Won",
    leadSource: "Cold Call"
  },
  {
    id: 4,
    gymName: "Mars Gym",
    city: "Delhi",
    country: "India",
    signUpDate: "26 July 2025",
    assignedSalesExecutive: "Satish Kumar",
    leadStatus: "New",
    leadSource: "Ad Campaign"
  },
  {
    id: 5,
    gymName: "Mars Gym",
    city: "Delhi",
    country: "India",
    signUpDate: "26 July 2025",
    assignedSalesExecutive: "Satish Kumar",
    leadStatus: "Lost",
    leadSource: "Website"
  },
  {
    id: 6,
    gymName: "Mars Gym",
    city: "Delhi",
    country: "India",
    signUpDate: "26 July 2025",
    assignedSalesExecutive: "Satish Kumar",
    leadStatus: "In Negotiation",
    leadSource: "Referral"
  },
  {
    id: 7,
    gymName: "Mars Gym",
    city: "Delhi",
    country: "India",
    signUpDate: "26 July 2025",
    assignedSalesExecutive: "Satish Kumar",
    leadStatus: "Contacted",
    leadSource: "Cold Call"
  },
  {
    id: 8,
    gymName: "Mars Gym",
    city: "Delhi",
    country: "India",
    signUpDate: "26 July 2025",
    assignedSalesExecutive: "Satish Kumar",
    leadStatus: "Won",
    leadSource: "Ad Campaign"
  },
  {
    id: 9,
    gymName: "Mars Gym",
    city: "Delhi",
    country: "India",
    signUpDate: "26 July 2025",
    assignedSalesExecutive: "Satish Kumar",
    leadStatus: "New",
    leadSource: "Cold Call"
  },
  {
    id: 10,
    gymName: "Mars Gym",
    city: "Delhi",
    country: "India",
    signUpDate: "26 July 2025",
    assignedSalesExecutive: "Satish Kumar",
    leadStatus: "Lost",
    leadSource: "Ad Campaign"
  }
];

// Status badge component
const StatusBadge = ({ status }: { status: Lead['leadStatus'] }) => {
  const getStatusColor = (status: Lead['leadStatus']) => {
    switch (status) {
      case 'In Negotiation':
        return 'bg-yellow-100 text-yellow-800';
      case 'Contacted':
        return 'bg-blue-100 text-blue-800';
      case 'Won':
        return 'bg-green-100 text-green-800';
      case 'New':
        return 'bg-purple-100 text-purple-800';
      case 'Lost':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(status)}`}>
      {status}
    </span>
  );
};

// Source badge component
const SourceBadge = ({ source }: { source: Lead['leadSource'] }) => {
  const getSourceColor = (source: Lead['leadSource']) => {
    switch (source) {
      case 'Website':
        return 'bg-green-100 text-green-800';
      case 'Referral':
        return 'bg-purple-100 text-purple-800';
      case 'Cold Call':
        return 'bg-blue-100 text-blue-800';
      case 'Ad Campaign':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSourceColor(source)}`}>
      {source}
    </span>
  );
};

const tableHeaders = [
  "Gym Name",
  "City",
  "Country",
  "Manually Added/Demo Sign Up Date",
  "Assigned Sales Executive",
  "Lead Status",
  "Lead Source",
  "Action"
];

function LeadManagement() {
    const navigate = useNavigate();
    const [data, setData] = useState<'active' | 'archived'>('active');
    const [userLeads, setUserLeads] = useState<Lead[]>([]);
    const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
    const [showDetailDialog, setShowDetailDialog] = useState(false);

    useEffect(() => {
      setUserLeads(getLeads());
    }, []);

    const handleGymNameClick = (lead: Lead) => {
        setSelectedLead(lead);
        setShowDetailDialog(true);
    };

    const handleArchiveLead = () => {
        console.log('Archive lead:', selectedLead?.id);
        setShowDetailDialog(false);
        setSelectedLead(null);
    };
  return (
    <div className="flex-1 overflow-auto">
        <h1 className="p-4 bg-secondary text-muted-foreground w-full font-semibold text-3xl">Lead Management</h1>
         <div className="p-4 mt-4 w-full">
            <div className="min-h-[30vh]">
              <div className="flex justify-end gap-6 w-full">
                  <div className="border-2 shadow border-[#A0A0A042] p-4 bg-muted flex text-muted-foreground rounded-lg cursor-pointer items-center justify-between w-[15%]">
                    <p>{`Month : ${'July'}`}</p>
                    <ChevronDown className="w-6 h-6" />
                  </div>
                  <div className="border-2 shadow border-[#A0A0A042] bg-muted p-4 flex text-muted-foreground rounded-lg cursor-pointer items-center justify-between w-[15%]">
                    <p>{`Sales Exceutive`}</p>
                    <ChevronDown className="w-6 h-6" />
                  </div>
                  <div className="border-2 shadow border-[#A0A0A042] bg-muted p-4 flex text-muted-foreground rounded-lg cursor-pointer items-center justify-between min-w-[15%]">
                    <p>{`Region/Country`}</p>
                    <ChevronDown className="w-6 h-6" />
                  </div>
                </div>
                <div className="px-8 py-8 mt-2 grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-primary p-10">
                      <LineCard
                          title="New Gyms Signed"
                          yLabel="No. of New Gyms"
                          data={[
                              { name: "Jun", value: 0 },
                              { name: "Jul", value: 20 },
                              { name: "Aug", value: 12 },
                              { name: "Sep", value: 30 },
                              { name: "Oct", value: 25 },
                              { name: "Nov", value: 40 },
                          ]}
                      />
                  </div>
                  <div className="bg-primary p-10">
                      <LineCard
                          title="Monthly Conversion Rate"
                          yLabel="No. of Conversion"
                          data={[
                              { name: "Jun", value: 5 },
                              { name: "Jul", value: 20 },
                              { name: "Aug", value: 14 },
                              { name: "Sep", value: 28 },
                              { name: "Oct", value: 26 },
                              { name: "Nov", value: 40 },
                          ]}
                      />
                  </div>
              </div>
            </div>
            <div className="bg-primary px-6 py-8">
                <div className="w-full flex justify-between items-center text-2xl font-semibold mb-12">
                    <span className="">Leads</span>
                    <span className="text-lg">
                        <span className={`${
                            data === 'active' ? "text-green-500 border-b-2 border-green-500" : ""
                        } border-b-1 px-2 cursor-pointer`}
                            onClick={() => setData('active')}
                        >
                            Active
                        </span>
                        <span
                            className={`${data === 'archived' ? "text-green-600 border-b-2 border-green-600" : ""} border-b-1 px-2 cursor-pointer`}
                            onClick={() => setData('archived')}
                        >
                                Archived
                        </span>
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    {/* Search Bar */}
                    <div className="border-3 border-[#A0A0A042] px-4 py-2 rounded-md w-full flex items-center gap-2">
                      <Search className="w-6 h-6 text-black/40" />
                      <input type="text" placeholder="Search..." className="outline-none p-2 font-medium" />
                    </div>
                    <Button variant="custom" className="rounded-full cursor-pointer p-6 w-12"
                      onClick={() => { navigate('/gym-leads/add') }}
                    >
                        <PlusIcon className="w-8 h-8" />
                    </Button>
                </div>

                {/* Filters */}
                <div className="flex justify-start gap-10 mt-8 w-full">
                  <div className="border-2 shadow border-[#A0A0A042] p-4 flex text-muted-foreground rounded-lg cursor-pointer items-center justify-between w-[15%]">
                    <p>Status</p>
                    <ChevronDown className="w-6 h-6" />
                  </div>
                  <div className="border-2 shadow border-[#A0A0A042] p-4 flex text-muted-foreground rounded-lg cursor-pointer items-center justify-between w-[15%]">
                    <p>Source</p>
                    <ChevronDown className="w-6 h-6" />
                  </div>
                  <div className="border-2 shadow border-[#A0A0A042] p-4 flex text-muted-foreground rounded-lg cursor-pointer items-center justify-between min-w-[15%]">
                    <p>Last Update : 1 June 2025 - 1 July 2025</p>
                    <ChevronDown className="w-6 h-6" />
                  </div>
                </div>

                {/* Table */}
                <div className="mt-8">
                    <div className="overflow-x-auto border-2 border-[#A0A0A042] rounded-2xl">
                        <table className="w-full bg-white ">
                            <thead>
                                <tr className="border-b border-[#A0A0A042] rounded-2xl font-semibold text-gray-700">
                                    {tableHeaders.map((header) => (
                                        <th key={header} className="text-left py-4 px-4 ">
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {[...userLeads, ...mockLeads].map((lead) => (
                                    <tr key={lead.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-4">
                                            <button
                                                onClick={() => handleGymNameClick(lead)}
                                                className="text-blue-600 hover:text-blue-800 underline font-medium"
                                            >
                                                {lead.gymName}
                                            </button>
                                        </td>
                                        <td className="py-4 px-4 text-gray-700">{lead.city}</td>
                                        <td className="py-4 px-4 text-gray-700">{lead.country}</td>
                                        <td className="py-4 px-4 text-gray-700">{lead.signUpDate}</td>
                                        <td className="py-4 px-4 text-gray-700">{lead.assignedSalesExecutive}</td>
                                        <td className="py-4 px-4">
                                            <StatusBadge status={lead.leadStatus} />
                                        </td>
                                        <td className="py-4 px-4">
                                            <SourceBadge source={lead.leadSource} />
                                        </td>
                                        <td className="py-4 px-4">
                                            <button
                                                className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                                                onClick={() => console.log('View details for lead:', lead.id)}
                                            >
                                                <ArrowRightCircle className="w-6 h-6 text-gray-600" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Gym Detail Dialog */}
            {showDetailDialog && selectedLead && (
                <GymDetailView
                    isOpen={showDetailDialog}
                    onClose={() => setShowDetailDialog(false)}
                    gymName={selectedLead.gymName}
                    ownerName="Deepak Singh"
                    email="Deepakingh@gmail.com"
                    phoneNumber="9198205182"
                    lastLogin="10 July 2024"
                    staffCount="10"
                    onArchiveLead={handleArchiveLead}
                />
            )}
         </div>
    </div>
  )
}

export default LeadManagement