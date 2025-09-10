import BiLineCard from "@/domain/graphs/BiLineCard"
import { ChevronDown } from "lucide-react"
import { useState } from "react";
import { mockTickets, mockDataDeletionRequests, mockChatMessages, type Ticket, type ChatMessage } from "./data";
import SupportChat from "./SupportChat";
import DeleteTicket from "./DeleteTicket";
import Badge from "@/components/ui/Badge";
import SearchBar from "@/components/ui/search-bar";
import FilterDropdown from "@/components/ui/filter-dropdown";
import TabNavigation from "@/components/ui/tab-navigation";
import Pagination from "@/components/ui/pagination";


const ticketHeaders = [
  "Ticket ID",
  "Issue Type",
  "Assigned To",
  "Status",
  "Last Update"
];

const dataDeletionHeaders = [
  "Request ID",
  "User Email",
  "Entity",
  "Type",
  "Status"
];

function SupportManagement() {
    const [data, setData] = useState<'active' | 'archived'>('active');
    const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
    const [showTicketDialog, setShowTicketDialog] = useState(false);
    const [showChatDialog, setShowChatDialog] = useState(false);
    const [chatMessages, setChatMessages] = useState<ChatMessage[]>(mockChatMessages);
    const [currentPage] = useState(1);
    const itemsPerPage = 10;

    const handleTicketClick = (ticket: Ticket) => {
        setSelectedTicket(ticket);
        setShowTicketDialog(true);
    };

    const handleSupportTicketClick = (ticket: Ticket) => {
        setSelectedTicket(ticket);
        setShowChatDialog(true);
    };

    const handleSoftDelete = () => {
        console.log('Soft delete ticket:', selectedTicket?.id);
        setShowTicketDialog(false);
        setSelectedTicket(null);
    };

    const handleSendMessage = (message: string) => {
        const newMessage: ChatMessage = {
            id: Date.now().toString(),
            sender: 'user',
            message,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            type: 'text'
        };
        setChatMessages(prev => [...prev, newMessage]);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentTickets = mockTickets.slice(startIndex, endIndex);
    const currentDataDeletionRequests = mockDataDeletionRequests.slice(startIndex, endIndex);

    return (
        <div className="flex-1 min-h-screen">
            <h1 className="p-4 bg-secondary text-muted-foreground w-full font-semibold text-3xl">Support Center</h1>
            <div className="p-4 mt-2 w-full">
                <div className="w-full flex justify-end items-center mb-4">
                    <select className="px-4 py-2 m-1 border-2 bg-muted border-[#A0A0A042] rounded-sm">
                        <option>15 Dec 24 - 01 Feb 25</option>
                        <option>1 Feb 24 - 01 Mar 25</option>
                    </select>
                </div>

                {/* Ticket Volume Chart */}
                <div className="bg-primary p-10 mb-6">
                    <h3 className="text-2xl font-bold mb-8">Ticket Volume Over Time</h3>
                    <BiLineCard
                        title=""
                        yLabel="Tickets"
                        series={[
                            {
                                name: "Tickets Resolved",
                                color: "#FFA726",
                                data: [
                                    { name: "Mon", value: 65 },
                                    { name: "Tue", value: 80 },
                                    { name: "Wed", value: 100 },
                                    { name: "Thu", value: 140 },
                                    { name: "Fri", value: 95 },
                                    { name: "Sat", value: 120 },
                                    { name: "Sun", value: 150 },
                                ],
                            },
                            {
                                name: "Total open tickets",
                                color: "#28A745",
                                data: [
                                    { name: "Mon", value: 65 },
                                    { name: "Tue", value: 60 },
                                    { name: "Wed", value: 120 },
                                    { name: "Thu", value: 100 },
                                    { name: "Fri", value: 80 },
                                    { name: "Sat", value: 100 },
                                    { name: "Sun", value: 130 },
                                ],
                            },
                        ]}
                    />
                </div>

                <div className="bg-primary px-6 py-8">
                    <div className="w-full flex justify-between items-center text-2xl font-semibold mb-12">
                    <span className="">Manage & Assign Support Tickets</span>
                    <TabNavigation
                        activeTab={data}
                        onTabChange={(tab) => setData(tab as 'active' | 'archived')}
                        tabs={[
                            { key: 'active', label: 'Active' },
                            { key: 'archived', label: 'Archived' }
                        ]}
                    />
                    </div>
                    <div className="flex items-center gap-4">
                        {/* Search Bar */}
                        <SearchBar placeholder="Search..." className="w-full" />
                    </div>

                    {/* Filters */}
                    <div className="flex justify-start gap-10 mt-8 w-full">
                    <FilterDropdown label="Status" />
                    <FilterDropdown label="Source" />
                    <FilterDropdown label="Last Update : 1 June 2025 - 1 July 2025" className="min-w-[15%]" />
                    </div>

                    {/* Tickets Table */}
                    <div className="overflow-x-auto border-2 border-[#A0A0A042] rounded-2xl mt-8">
                        <table className="w-full bg-white">
                            <thead>
                                <tr className="border-b border-[#A0A0A042] font-semibold text-gray-700">
                                    {ticketHeaders.map((header) => (
                                        <th key={header} className="text-left py-4 px-4">
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {currentTickets.map((ticket, index) => (
                                    <tr key={`${ticket.id}-${index}`} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                         <td className="py-4 px-4">
                                             <button
                                                 onClick={() => handleSupportTicketClick(ticket)}
                                                 className="text-blue-600 underline-none hover:text-blue-800 cursor-pointer hover:underline font-medium"
                                             >
                                                 {ticket.id}
                                             </button>
                                         </td>
                                        <td className="py-4 px-4">
                                            <Badge label={ticket.issueType} />
                                        </td>
                                        <td className="py-4 px-4 text-gray-700 flex items-center gap-2">
                                            {ticket.assignedTo}
                                            <ChevronDown className="w-4 h-4" />
                                        </td>
                                        <td className="py-4 px-4">
                                            <Badge label={ticket.status} variant="ticketStatus" />
                                        </td>
                                        <td className="py-4 px-4 text-gray-700">{ticket.lastUpdated}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <Pagination 
                        currentPage={currentPage}
                        totalPages={Math.ceil(mockTickets.length / itemsPerPage)}
                        onPageChange={() => {}} // Add state management for page changes
                        itemsPerPage={itemsPerPage}
                        totalItems={mockTickets.length}
                    />
                </div>

                <div className="bg-primary px-6 py-8 mt-12">
                   <div className="w-full flex justify-between items-center text-2xl font-semibold mb-12">
                    <span className="">Data Deletion Requests</span>
                    <TabNavigation 
                        activeTab={data}
                        onTabChange={(tab) => setData(tab as 'active' | 'archived')}
                        tabs={[
                            { key: 'active', label: 'Active' },
                            { key: 'archived', label: 'Archived' }
                        ]}
                    />
                    </div>
                    <div className="flex items-center gap-4">
                        {/* Search Bar */}
                        <SearchBar placeholder="Search..." className="max-w-[70%] w-full" />
                        <FilterDropdown 
                            label="Last Update : 1 June 2025 - 1 July 2025" 
                            className="flex-1 min-w-[15%]"
                        />
                    </div>
                    {/* Data Deletion Table */}
                    <div className="overflow-x-auto border-2 border-[#A0A0A042] rounded-2xl mt-8">
                        <table className="w-full bg-white">
                            <thead>
                                <tr className="border-b border-[#A0A0A042] font-semibold text-gray-700">
                                    {dataDeletionHeaders.map((header) => (
                                        <th key={header} className="text-left py-4 px-4">
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {currentDataDeletionRequests.map((request, index) => (
                                    <tr key={`${request.id}-${index}`} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-4">
                                            <button
                                                onClick={() => handleTicketClick({ id: request.id, issueType: request.type, assignedTo: 'System', status: request.status, lastUpdated: '02 Feb 2025' })}
                                                className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer font-medium"
                                            >
                                                {request.id}
                                            </button>
                                        </td>
                                        <td className="py-4 px-4 text-gray-700">{request.userEmail}</td>
                                        <td className="py-4 px-4 text-gray-700">{request.entity}</td>
                                        <td className="py-4 px-4">
                                            <Badge label={request.type} />
                                        </td>
                                        <td className="py-4 px-4">
                                            <Badge label={request.status} variant="ticketStatus" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <Pagination 
                        currentPage={currentPage}
                        totalPages={Math.ceil(mockDataDeletionRequests.length / itemsPerPage)}
                        onPageChange={() => {}} // Add state management for page changes
                        itemsPerPage={itemsPerPage}
                        totalItems={mockDataDeletionRequests.length}
                    />
                </div>

                 {/* Support Chat Dialog */}
                 {showChatDialog && selectedTicket && (
                     <SupportChat
                         isOpen={showChatDialog}
                         onClose={() => setShowChatDialog(false)}
                         assignedTo={selectedTicket.assignedTo}
                         messages={chatMessages}
                         onSendMessage={handleSendMessage}
                     />
                 )}

                 {/* Ticket Detail Dialog */}
                 {showTicketDialog && selectedTicket && (
                     <DeleteTicket
                            setShowTicketDialog={setShowTicketDialog}
                            selectedTicket={selectedTicket}
                            handleSoftDelete={handleSoftDelete}
                     />
                 )}
            </div>
        </div>
    )
}

export default SupportManagement