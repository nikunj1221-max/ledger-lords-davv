"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Building2, TrendingUp, ArrowRight, Mail, Lock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true)
    const [role, setRole] = useState("founder") // founder | investor

    const toggleAuthMode = () => setIsLogin(!isLogin)

    return (
        <div className="min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden bg-gray-50">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-200/30 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-200/30 rounded-full blur-[100px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 w-full max-w-md"
            >
                <div className="text-center mb-8">
                    <Link href="/" className="inline-block">
                        <h1 className="text-3xl font-bold tracking-tighter text-gray-900">CapScout</h1>
                    </Link>
                    <p className="text-gray-500 mt-2">
                        {isLogin ? "Welcome back to the future." : "Join the innovation ecosystem."}
                    </p>
                </div>

                <Tabs defaultValue="founder" className="w-full" onValueChange={(v) => setRole(v)}>
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                        <TabsTrigger value="founder" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                            <Building2 className="w-4 h-4 mr-2" />
                            Founder
                        </TabsTrigger>
                        <TabsTrigger value="investor" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                            <TrendingUp className="w-4 h-4 mr-2" />
                            Investor
                        </TabsTrigger>
                    </TabsList>

                    <Card className="border-none shadow-xl bg-white/80 backdrop-blur-sm">
                        <CardHeader>
                            <CardTitle className="text-xl">
                                {isLogin ? "Sign In" : "Create Account"}
                            </CardTitle>
                            <CardDescription>
                                {isLogin
                                    ? `Access your ${role === "founder" ? "startup" : "investment"} dashboard`
                                    : `Start your journey as a ${role === "founder" ? "founder" : "visionary investor"}`}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                                {!isLogin && (
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Full Name</Label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                            <Input id="name" placeholder="John Doe" className="pl-9 bg-gray-50/50" />
                                        </div>
                                    </div>
                                )}

                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                        <Input id="email" type="email" placeholder="hello@example.com" className="pl-9 bg-gray-50/50" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="password">Password</Label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                        <Input id="password" type="password" placeholder="••••••••" className="pl-9 bg-gray-50/50" />
                                    </div>
                                </div>

                                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white" size="lg">
                                    {isLogin ? "Sign In" : "Get Started"}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </form>
                        </CardContent>
                        <CardFooter>
                            <div className="text-center w-full text-sm text-gray-500">
                                {isLogin ? "Don't have an account? " : "Already have an account? "}
                                <button
                                    onClick={toggleAuthMode}
                                    className="font-semibold text-gray-900 hover:underline transition-all"
                                >
                                    {isLogin ? "Sign up" : "Log in"}
                                </button>
                            </div>
                        </CardFooter>
                    </Card>
                </Tabs>
            </motion.div>
        </div>
    )
}
