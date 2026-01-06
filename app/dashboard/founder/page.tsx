"use client"

import { useState } from "react"
import Link from "next/link"
import {
    LayoutDashboard,
    Building2,
    TrendingUp,
    Users,
    Settings,
    Clock,
    DollarSign,
    Target,
    AlertCircle,
    CheckCircle2,
    ArrowRight,
    LogOut
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function FounderDashboard() {
    const [investorRequests, setInvestorRequests] = useState([
        { id: 1, name: "Horizon Ventures", status: "Pending", match: "High" },
        { id: 2, name: "Angel Syndicate", status: "Pending", match: "Medium" },
        { id: 3, name: "Sarah Jenkins", status: "Approved", match: "High" },
    ])

    const handleApprove = (id: number) => {
        setInvestorRequests(requests =>
            requests.map(req => req.id === id ? { ...req, status: "Approved" } : req)
        )
    }

    return (
        <div className="flex min-h-screen bg-gray-50/50">

            {/* Sidebar Navigation */}
            <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col fixed inset-y-0">
                <div className="p-6 border-b border-gray-100">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="bg-gray-900 text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm">
                            C
                        </div>
                        <span className="font-bold text-gray-900 text-lg tracking-tight">CapScout</span>
                    </Link>
                </div>

                <nav className="flex-1 p-4 space-y-1">
                    <NavItem icon={<LayoutDashboard size={18} />} label="Dashboard" active />
                    <NavItem icon={<Building2 size={18} />} label="My Startup Profile" />
                    <NavItem icon={<TrendingUp size={18} />} label="Investor Interest" />
                    <NavItem icon={<Users size={18} />} label="Shortlisted Investors" />
                    <NavItem icon={<Settings size={18} />} label="Settings" />
                </nav>

                <div className="p-4 border-t border-gray-100">
                    <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-red-600 hover:bg-red-50">
                        <LogOut size={18} className="mr-2" />
                        Log Out
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 md:ml-64 p-8 max-w-7xl mx-auto w-full">

                {/* Welcome Header */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">Welcome back, Founder 👋</h1>
                    <p className="text-gray-500 mt-1">Here’s a snapshot of your funding readiness and investor interest.</p>
                </div>

                {/* Funding Readiness Overview */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <StatCard
                        title="Readiness Score"
                        value="Early Stage"
                        icon={<Clock className="text-blue-500" />}
                        badge={<Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100">Development</Badge>}
                    />
                    <StatCard
                        title="Runway"
                        value="4 Months"
                        icon={<Target className="text-orange-500" />}
                        status="Risky"
                        statusColor="text-red-600 bg-red-50"
                    />
                    <StatCard
                        title="Monthly Revenue"
                        value="$2,400"
                        icon={<DollarSign className="text-green-500" />}
                        subtext="+12% vs last month"
                    />
                    <StatCard
                        title="Funding Ask"
                        value="$500,000"
                        icon={<Building2 className="text-purple-500" />}
                        subtext="Seed Round"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column (Main Stats & Info) */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Startup Profile Summary */}
                        <Card className="shadow-sm border-gray-200">
                            <CardHeader className="pb-3 border-b border-gray-50">
                                <div className="flex justify-between items-center">
                                    <CardTitle className="text-lg font-semibold">Startup Profile</CardTitle>
                                    <Button variant="outline" size="sm" className="h-8">Edit Profile</Button>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-6">
                                <div className="flex items-start justify-between mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">NexGen AI Solutions</h3>
                                        <p className="text-gray-500 text-sm">Artificial Intelligence • B2B SaaS</p>
                                    </div>
                                    <Badge variant="outline" className="border-gray-200 text-gray-700">MVP Stage</Badge>
                                </div>

                                <div className="grid grid-cols-2 gap-6 bg-gray-50 p-4 rounded-lg border border-gray-100">
                                    <div>
                                        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Monthly Burn</span>
                                        <p className="text-lg font-semibold text-gray-900 mt-1">$12,500</p>
                                    </div>
                                    <div>
                                        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Cash in Bank</span>
                                        <p className="text-lg font-semibold text-gray-900 mt-1">$50,000</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Investor Requests */}
                        <Card className="shadow-sm border-gray-200">
                            <CardHeader className="pb-3">
                                <CardTitle className="text-lg font-semibold">Investor Requests</CardTitle>
                                <CardDescription>Investors who have shortlisted your profile.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {investorRequests.map((investor) => (
                                        <div key={investor.id} className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-lg hover:border-gray-200 transition-colors">
                                            <div className="flex items-center gap-4">
                                                <Avatar className="h-10 w-10 border border-gray-100">
                                                    <AvatarImage src={`/placeholder-user.jpg`} />
                                                    <AvatarFallback className="bg-gray-100 text-gray-600">{investor.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <p className="font-medium text-gray-900">{investor.name}</p>
                                                    <p className="text-xs text-gray-500">Match Score: {investor.match}</p>
                                                </div>
                                            </div>

                                            {investor.status === "Approved" ? (
                                                <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-0 px-3 py-1">
                                                    <CheckCircle2 size={14} className="mr-1.5" />
                                                    Approved
                                                </Badge>
                                            ) : (
                                                <div className="flex items-center gap-2">
                                                    <Badge variant="secondary" className="bg-gray-100 text-gray-600 hover:bg-gray-100">Pending</Badge>
                                                    <Button size="sm" onClick={() => handleApprove(investor.id)} className="bg-gray-900 text-white hover:bg-gray-800 h-8 text-xs">
                                                        Approve
                                                    </Button>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                    </div>

                    {/* Right Column (Sidebars & Actions) */}
                    <div className="space-y-8">

                        {/* Investor Interest Summary */}
                        <Card className="shadow-sm border-gray-200 bg-gray-900 text-white">
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold text-white">Investor Interest</CardTitle>
                                <CardDescription className="text-gray-400">Activity in the last 30 days</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                                    <span className="text-gray-400 text-sm">Profile Views</span>
                                    <span className="text-2xl font-bold">124</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400 text-sm">Shortlists</span>
                                    <span className="text-2xl font-bold">8</span>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full bg-white text-gray-900 hover:bg-gray-100 font-medium">
                                    View Interested Investors
                                </Button>
                            </CardFooter>
                        </Card>

                        {/* Action Recommendations */}
                        <Card className="shadow-sm border-gray-200">
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                                    <AlertCircle size={20} className="text-amber-500" />
                                    Recommendations
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="p-3 bg-amber-50 border border-amber-100 rounded-md">
                                    <p className="text-sm text-amber-900 font-medium mb-1">Low Runway Warning</p>
                                    <p className="text-xs text-amber-700 mb-2">Your runway is below 6 months. Investors prefer ≥ 6 months.</p>
                                    <Link href="#" className="text-xs font-semibold text-amber-900 hover:underline flex items-center">
                                        Update Financials <ArrowRight size={12} className="ml-1" />
                                    </Link>
                                </div>
                                <div className="p-3 bg-blue-50 border border-blue-100 rounded-md">
                                    <p className="text-sm text-blue-900 font-medium mb-1">Increase Visibility</p>
                                    <p className="text-xs text-blue-700 mb-2">Revenue-positive startups receive 3x more shortlists.</p>
                                    <Link href="#" className="text-xs font-semibold text-blue-900 hover:underline flex items-center">
                                        Add Revenue Data <ArrowRight size={12} className="ml-1" />
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>

                    </div>
                </div>
            </main>
        </div>
    )
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
    return (
        <div className={`
      flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer transition-all
      ${active ? 'bg-gray-100 text-gray-900 font-medium' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
    `}>
            {icon}
            <span className="text-sm">{label}</span>
            {active && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-gray-900" />}
        </div>
    )
}

function StatCard({ title, value, icon, badge, subtext, status, statusColor }: any) {
    return (
        <Card className="shadow-sm border-gray-200">
            <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div className="bg-gray-50 p-2 rounded-lg text-gray-600">
                        {icon}
                    </div>
                    {badge}
                    {status && (
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusColor}`}>
                            {status}
                        </span>
                    )}
                </div>
                <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
                <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
                {subtext && <p className="text-xs text-gray-400 mt-1">{subtext}</p>}
            </CardContent>
        </Card>
    )
}
