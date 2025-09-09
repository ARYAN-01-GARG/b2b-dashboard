export interface Ticket {
  id: string;
  issueType: string;
  assignedTo: string;
  status: string;
  lastUpdated: string;
}

export interface DataDeletionRequest {
  id: string;
  userEmail: string;
  entity: string;
  type: string;
  status: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'support';
  message: string;
  timestamp: string;
  type: 'text' | 'image';
  imageUrl?: string;
}

export const mockTickets: Ticket[] = [
  { id: "T-101", issueType: "Billing", assignedTo: "Satish Kumar", status: "Open", lastUpdated: "02 Feb 2025" },
  { id: "T-101", issueType: "Technical", assignedTo: "Satish Kumar", status: "In Progress", lastUpdated: "02 Feb 2025" },
  { id: "T-101", issueType: "Biometric", assignedTo: "Satish Kumar", status: "Resolved", lastUpdated: "02 Feb 2025" },
  { id: "T-101", issueType: "Login", assignedTo: "Satish Kumar", status: "Open", lastUpdated: "02 Feb 2025" },
  { id: "T-101", issueType: "Refund Gym", assignedTo: "Satish Kumar", status: "In Progress", lastUpdated: "02 Feb 2025" },
  { id: "T-101", issueType: "Technical", assignedTo: "Satish Kumar", status: "Resolved", lastUpdated: "02 Feb 2025" },
  { id: "T-101", issueType: "Billing", assignedTo: "Satish Kumar", status: "Open", lastUpdated: "02 Feb 2025" },
  { id: "T-101", issueType: "Biometric", assignedTo: "Satish Kumar", status: "In Progress", lastUpdated: "02 Feb 2025" },
  { id: "T-101", issueType: "Login", assignedTo: "Satish Kumar", status: "Resolved", lastUpdated: "02 Feb 2025" },
  { id: "T-101", issueType: "Refund Gym", assignedTo: "Satish Kumar", status: "Open", lastUpdated: "02 Feb 2025" },
];

export const mockDataDeletionRequests: DataDeletionRequest[] = [
  { id: "T-101", userEmail: "johnsmith@gmail.com", entity: "User", type: "Delete", status: "In Progress" },
  { id: "T-101", userEmail: "johnsmith@gmail.com", entity: "Gym", type: "Disable", status: "Verified" },
  { id: "T-101", userEmail: "johnsmith@gmail.com", entity: "Employee", type: "Delete", status: "Completed" },
  { id: "T-101", userEmail: "johnsmith@gmail.com", entity: "User", type: "Disable", status: "Denied" },
  { id: "T-101", userEmail: "johnsmith@gmail.com", entity: "Gym", type: "Delete", status: "In Progress" },
  { id: "T-101", userEmail: "johnsmith@gmail.com", entity: "Employee", type: "Disable", status: "Verified" },
  { id: "T-101", userEmail: "johnsmith@gmail.com", entity: "User", type: "Delete", status: "Completed" },
  { id: "T-101", userEmail: "johnsmith@gmail.com", entity: "Gym", type: "Disable", status: "Denied" },
  { id: "T-101", userEmail: "johnsmith@gmail.com", entity: "Employee", type: "Delete", status: "In Progress" },
  { id: "T-101", userEmail: "johnsmith@gmail.com", entity: "User", type: "Disable", status: "Verified" },
];

export const mockChatMessages: ChatMessage[] = [
  {
    id: "1",
    sender: "user",
    message: "Hey John, I am looking for the best admin template. Could you please help me to find it out? 👋",
    timestamp: "4:02 PM",
    type: "text"
  },
  {
    id: "2",
    sender: "support",
    message: "Stack admin is the responsive bootstrap 4 admin template",
    timestamp: "4:02 PM",
    type: "text"
  },
  {
    id: "3",
    sender: "user",
    message: "Looks clean and fresh UI 😊",
    timestamp: "4:02 PM",
    type: "text"
  },
  {
    id: "4",
    sender: "user",
    message: "",
    timestamp: "4:02 PM",
    type: "image",
    imageUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop&crop=center"
  }
];