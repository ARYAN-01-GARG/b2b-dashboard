import { Route, Routes } from "react-router-dom"
import HomeLayout from "@/components/home/HomeLayout"
import Dashboard from "@/domain/b2b/dashboard/Dashboard"
import LeadManagement from "./domain/b2b/leads-management/LeadManagement"
import AddLead from "./domain/b2b/leads-management/AddLead"
import MemberAndRevenue from "./domain/b2b/member-and-revenue/MemberAndRevenue"
import SupportManagement from "./domain/b2b/support-management/SupportManagement"


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="gym-leads" element={<LeadManagement />} />
        <Route path="gym-leads/add" element={<AddLead />} />
        <Route path="gym-members" element={<MemberAndRevenue />} />
        <Route path="support" element={<SupportManagement />} />
        <Route path="*" element={<div className="flex items-center justify-center min-h-screen text-4xl">404 Not Found</div>} />
      </Route>
    </Routes>
  )
}

export default App