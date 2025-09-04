import type { Lead } from "./types";

const STORAGE_KEY = "b2b_leads";

function readLeads(): Lead[] {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		return raw ? (JSON.parse(raw) as Lead[]) : [];
	} catch {
		return [];
	}
}

function writeLeads(leads: Lead[]): void {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
}

export function addLead(newLead: Lead): void {
	const existing = readLeads();
	writeLeads([newLead, ...existing]);
}

export function getLeads(): Lead[] {
	return readLeads();
}

export function nextLeadId(): number {
	const all = readLeads();
	const maxId = all.reduce((m, l) => (l.id > m ? l.id : m), 0);
	return maxId + 1;
}


