export type LeadStatus = 'In Negotiation' | 'Contacted' | 'Won' | 'New' | 'Lost';
export type LeadSource = 'Website' | 'Referral' | 'Cold Call' | 'Ad Campaign' | 'Wellvantage Demo';

export interface Lead {
	id: number;
	gymName: string;
	city: string;
	country: string;
	signUpDate: string; // e.g., "26 July 2025"
	assignedSalesExecutive: string;
	leadStatus: LeadStatus;
	leadSource: LeadSource;
}


