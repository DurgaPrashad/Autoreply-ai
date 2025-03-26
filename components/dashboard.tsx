"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Inbox, Settings, History, Zap, Mail, MessageSquare } from "lucide-react"
import EmailPreview from "@/components/email-preview"
import ResponseGenerator from "@/components/response-generator"
import IntegrationSettings from "@/components/integration-settings"
import { sampleEmails } from "@/lib/sample-data"

export default function Dashboard() {
  const [activeEmail, setActiveEmail] = useState(sampleEmails[0])
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="flex flex-col min-h-screen">
        <header className="border-b bg-white dark:bg-slate-950 dark:border-slate-800">
          <div className="container flex items-center justify-between h-16 px-4 mx-auto">
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-blue-500" />
              <h1 className="text-xl font-bold">AutoReply AI</h1>
              <Badge variant="outline" className="ml-2">
                Beta
              </Badge>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center space-x-2">
                <Switch id="dark-mode" checked={darkMode} onCheckedChange={toggleDarkMode} />
                <Label htmlFor="dark-mode">Dark Mode</Label>
              </div>
              <Button variant="outline" size="sm">
                Upgrade
              </Button>
              <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">JS</div>
            </div>
          </div>
        </header>

        <div className="flex flex-1">
          <aside className="w-16 md:w-64 border-r bg-white dark:bg-slate-950 dark:border-slate-800">
            <div className="flex flex-col h-full p-3">
              <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <Inbox className="w-4 h-4 mr-2" />
                  <span className="hidden md:inline">Inbox</span>
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <History className="w-4 h-4 mr-2" />
                  <span className="hidden md:inline">History</span>
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <Settings className="w-4 h-4 mr-2" />
                  <span className="hidden md:inline">Settings</span>
                </Button>
              </div>

              <div className="mt-8">
                <h3 className="mb-2 text-xs font-medium text-gray-500 dark:text-gray-400 hidden md:block">
                  INTEGRATIONS
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-blue-500" />
                      <span className="text-sm hidden md:inline">Gmail</span>
                    </div>
                    <Badge className="hidden md:inline" variant="outline">
                      Connected
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-blue-500" />
                      <span className="text-sm hidden md:inline">Outlook</span>
                    </div>
                    <Badge className="hidden md:inline" variant="outline">
                      Connected
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <MessageSquare className="w-4 h-4 mr-2 text-green-500" />
                      <span className="text-sm hidden md:inline">WhatsApp</span>
                    </div>
                    <Badge className="hidden md:inline" variant="secondary">
                      Setup
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <MessageSquare className="w-4 h-4 mr-2 text-purple-500" />
                      <span className="text-sm hidden md:inline">Slack</span>
                    </div>
                    <Badge className="hidden md:inline" variant="outline">
                      Connected
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1 p-4 md:p-6 bg-slate-50 dark:bg-slate-900">
            <Tabs defaultValue="inbox">
              <div className="flex justify-between items-center mb-4">
                <TabsList>
                  <TabsTrigger value="inbox">Inbox</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">AI Credits: 245</span>
                  <Button size="sm">
                    <Zap className="w-4 h-4 mr-2" />
                    Get More
                  </Button>
                </div>
              </div>

              <TabsContent value="inbox" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-1 space-y-4">
                    <Card className="p-4">
                      <h2 className="text-lg font-medium mb-2">Messages</h2>
                      <div className="space-y-2">
                        {sampleEmails.map((email, index) => (
                          <div
                            key={index}
                            className={`p-3 rounded-lg cursor-pointer transition-colors ${
                              activeEmail.id === email.id
                                ? "bg-blue-50 dark:bg-blue-900/20"
                                : "hover:bg-gray-100 dark:hover:bg-slate-800"
                            }`}
                            onClick={() => setActiveEmail(email)}
                          >
                            <div className="flex justify-between items-start">
                              <div className="font-medium">{email.sender}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">{email.time}</div>
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 truncate">{email.subject}</div>
                            <div className="text-xs truncate mt-1">{email.preview}</div>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </div>

                  <div className="md:col-span-2 space-y-4">
                    <EmailPreview email={activeEmail} />
                    <ResponseGenerator email={activeEmail} />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="settings">
                <IntegrationSettings />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

