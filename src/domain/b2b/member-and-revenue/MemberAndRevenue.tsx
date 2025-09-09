import BiLineCard from "@/domain/graphs/BiLineCard";
import LineCard from "@/domain/graphs/LineCard";
import PieCard from "@/domain/graphs/PieCard";
import { ChevronDown, Search } from "lucide-react";
import { useState } from "react";

const mockLeads = [
  {
    id: 1,
    gymName: "Mars Gym",
    city: "Delhi",
    country: "India",
    SubscriptionPlan  : "Premium",
    Amount : "$ 500",
    paymentStatus : "active",
    renewalDueDate : "26 July 2025",
    aggregateRev : "6000",
    executiveName : "Satish Kumar"
  },
  {
    id: 2,
    gymName: "Mars Gym",
    city: "Delhi",
    country: "India",
    SubscriptionPlan  : "Premium",
    Amount : "$ 600",
    paymentStatus : "past",
    renewalDueDate : "26 July 2025",
    aggregateRev : "6000",
    executiveName : "Satish Kumar"
  },
  {
    id: 3,
    gymName: "Mars Gym",
    city: "Delhi",
    country: "India",
    SubscriptionPlan  : "Premium",
    Amount : "$ 500",
    paymentStatus : "active",
    renewalDueDate : "26 July 2025",
    aggregateRev : "6000",
    executiveName : "Satish Kumar"
  },
  {
    id: 4,
    gymName: "Mars Gym",
    city: "Delhi",
    country: "India",
    SubscriptionPlan  : "Premium",
    Amount : "$ 500",
    paymentStatus : "past",
    renewalDueDate : "26 July 2025",
    aggregateRev : "6000",
    executiveName : "Satish Kumar"
  },
  {
    id: 5,
    gymName: "Mars Gym",
    city: "Delhi",
    country: "India",
    SubscriptionPlan  : "Premium",
    Amount : "$ 500",
    paymentStatus : "active",
    renewalDueDate : "26 July 2025",
    aggregateRev : "6000",
    executiveName : "Satish Kumar"
  },
  {
    id: 6,
    gymName: "Mars Gym",
    city: "Delhi",
    country: "India",
    SubscriptionPlan  : "Premium",
    Amount : "$ 500",
    paymentStatus : "past",
    renewalDueDate : "26 July 2025",
    aggregateRev : "6000",
    executiveName : "Satish Kumar"
  },
  {
    id: 7,
    gymName: "Mars Gym",
    city: "Delhi",
    country: "India",
    SubscriptionPlan  : "Premium",
    Amount : "$ 500",
    paymentStatus : "active",
    renewalDueDate : "26 July 2025",
    aggregateRev : "6000",
    executiveName : "Satish Kumar"
  },
  {
    id: 8,
    gymName: "Mars Gym",
    city: "Delhi",
    country: "India",
    SubscriptionPlan  : "Premium",
    Amount : "$ 500",
    paymentStatus : "past",
    renewalDueDate : "26 July 2025",
    aggregateRev : "6000",
    executiveName : "Satish Kumar"
  },
];

const PaymentBadge = ({ status }: { status: string }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-[#CCFBF1] text-[#08BA94]';
      default:
        return 'bg-[#EDE9FE] text-[#8B5CF6]';
    }
  };


  return (
    <span className={`px-4 py-2 text-sm w-20 text-center font-semibold ${getStatusColor(status)}`}>
      {status[0].toUpperCase() + status.slice(1)}
    </span>
  );
};


const tableHeaders = [
  "Gym Name",
  "City",
  "Country",
  "Subscription Plan",
  "Fee collected to date",
  "Payment Status",
  "Renewal Due Date",
  "Aggregate Rev",
  "Assigned Sales Executive",
];

function MemberAndRevenue() {
    const [data, setData] = useState<'active' | 'archived'>('active');
    // const [userLeads, setUserLeads] = useState([]);

    // useEffect(() => {
    //   setUserLeads(getLeads());
    // }, []);

    return (
        <div className="flex-1">
        <h1 className="p-4 bg-secondary text-muted-foreground w-full font-semibold text-3xl">Member and Revenue Management</h1>
        <div className="p-4 mt-2 w-full">
            <div className="w-full flex justify-end items-center mb-4">
                <select className="px-4 py-2 m-1 border-2 bg-muted border-[#A0A0A042] rounded-sm ">
                    {/* This is a temp data */}
                    <option>15 Dec 24 - 01 Feb 25</option>
                    <option>1 Feb 24 - 01 Mar 25</option>
                </select>
            </div>
            <div className="">
                {/* Graphs */}
                <div className="mt-2 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-primary p-10">
                        <LineCard
                            title="Total Revenue"
                            yLabel="No. of Revenue"
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
                            title="New Signups Over Time"
                            yLabel="No. of New Signups"
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
                <div className="mt-2 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-primary p-10">
                        <PieCard
                            title="Subscription Status"
                            data={[
                                { name: "Auto Renewal On", value: 60, color: "#28A745" },
                                { name: "Auto Renewal Off", value: 35, color: "#FFA726" },
                                { name: "Expired", value: 40, color: "#E53935" },
                            ]}
                        />
                    </div>
                    <div className="bg-primary p-10">
                        <BiLineCard
                            title="New Signups Over Time"
                            yLabel="No. of New Signups"
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
                    <span className="">Gym Status, Gym Admin & Staff Details</span>
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
                    <div className="border-2 shadow border-[#A0A0A042] p-4 flex text-muted-foreground rounded-lg cursor-pointer items-center justify-between w-[15%]">
                    <p>Status</p>
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
                                {mockLeads.map((lead) => (
                                    <tr key={lead.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-4">
                                            <a
                                                href="#"
                                                className="text-blue-600 hover:text-blue-800 underline font-medium"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                {lead.gymName}
                                            </a>
                                        </td>
                                        <td className="py-4 px-4 text-gray-700">{lead.city}</td>
                                        <td className="py-4 px-4 text-gray-700">{lead.country}</td>
                                        <td className="py-4 px-4 text-gray-700">{lead.SubscriptionPlan}</td>
                                        <td className="py-4 px-4 text-gray-700">{lead.Amount}</td>
                                        <td className="py-4 px-4 flex justify-center">
                                            <PaymentBadge status={lead.paymentStatus} />
                                        </td>
                                        <td className="py-4 px-4">
                                            {lead.renewalDueDate}
                                        </td>
                                        <td className="py-4 px-4">
                                           {lead.aggregateRev}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MemberAndRevenue