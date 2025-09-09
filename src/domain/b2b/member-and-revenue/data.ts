export interface MemberAndRevenueLead {
  id: number;
  gymName: string;
  city: string;
  country: string;
  SubscriptionPlan: string;
  Amount: string;
  paymentStatus: "active" | "past";
  renewalDueDate: string;
  aggregateRev: string;
  executiveName: string;
}



export const mockLeads : MemberAndRevenueLead[] = [
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

export const tableHeaders = [
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