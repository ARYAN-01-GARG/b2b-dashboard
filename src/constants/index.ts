
export const FORM_OPTIONS = {
  countries: ["India", "USA", "UK", "Canada", "Australia"],
  leadSources: ["Wellvantage Demo", "Website", "Referral", "Cold Call", "Ad Campaign"],
  leadStatuses: ["In Negotiation", "Contacted", "Won", "New", "Lost"],
  salesExecutives: ["Satish Kumar", "John Doe", "Jane Smith", "Mike Johnson"],
};

export const TABLE_HEADERS = {
  leads: [
    "Gym Name",
    "City",
    "Country",
    "Manually Added/Demo Sign Up Date",
    "Assigned Sales Executive",
    "Lead Status",
    "Lead Source",
    "Action"
  ],
  tickets: [
    "Ticket ID",
    "Issue Type",
    "Assigned To",
    "Status",
    "Last Update"
  ],
  dataDeletion: [
    "Request ID",
    "User Email",
    "Entity",
    "Type",
    "Status"
  ],
  memberRevenue: [
    "Gym Name",
    "City",
    "Country",
    "Registration Date",
    "Member Count",
    "Active Member Count",
    "Membership Revenue",
    "Trial Users"
  ]
};

// Common filter options
export const FILTER_OPTIONS = {
  status: ["Active", "Inactive", "Pending"],
  source: ["Website", "Referral", "Cold Call", "Ad Campaign"],
  dateRanges: [
    "1 June 2025 - 1 July 2025",
    "15 Dec 24 - 01 Feb 25",
    "1 Feb 24 - 01 Mar 25"
  ]
};

// Badge color mappings
export const BADGE_COLORS = {
  leadStatus: {
    "In Negotiation": "bg-yellow-100 text-yellow-800",
    "Contacted": "bg-blue-100 text-blue-800",
    "Won": "bg-green-100 text-green-800",
    "New": "bg-purple-100 text-purple-800",
    "Lost": "bg-red-100 text-red-800"
  },
  leadSource: {
    "Website": "bg-green-100 text-green-800",
    "Referral": "bg-purple-100 text-purple-800",
    "Cold Call": "bg-blue-100 text-blue-800",
    "Ad Campaign": "bg-yellow-100 text-yellow-800",
    "Wellvantage Demo": "bg-pink-100 text-pink-800"
  },
  ticketStatus: {
    "Open": "bg-purple-100 text-purple-800",
    "In Progress": "bg-yellow-100 text-yellow-800",
    "Resolved": "bg-green-100 text-green-800",
    "Verified": "bg-blue-100 text-blue-800",
    "Completed": "bg-green-100 text-green-800",
    "Denied": "bg-red-100 text-red-800"
  }
};
