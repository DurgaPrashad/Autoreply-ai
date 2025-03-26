import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Mail, MessageSquare, Brain, Shield, Sliders } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function IntegrationSettings() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="integrations">
        <TabsList className="mb-4">
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="ai">AI Settings</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
        </TabsList>

        <TabsContent value="integrations">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-blue-500" />
                  Email Services
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="font-medium">Gmail</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Connected as john.smith@gmail.com</div>
                  </div>
                  <Button variant="outline" size="sm">
                    Disconnect
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="font-medium">Outlook</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Connected as j.smith@company.com</div>
                  </div>
                  <Button variant="outline" size="sm">
                    Disconnect
                  </Button>
                </div>
                <Button variant="outline" className="w-full">
                  <Mail className="w-4 h-4 mr-2" />
                  Connect Another Email
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2 text-green-500" />
                  Messaging Platforms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="font-medium">WhatsApp</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Not connected</div>
                  </div>
                  <Button size="sm">Connect</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="font-medium">Slack</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Connected to Company Workspace</div>
                  </div>
                  <Button variant="outline" size="sm">
                    Disconnect
                  </Button>
                </div>
                <Button variant="outline" className="w-full">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Connect Another Platform
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="preferences">
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center">
                <Sliders className="w-5 h-5 mr-2 text-orange-500" />
                Response Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="font-medium">Default Response Tone</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Choose your preferred tone for AI responses
                    </div>
                  </div>
                  <select className="p-2 border rounded-md dark:bg-slate-800 dark:border-slate-700">
                    <option>Friendly</option>
                    <option>Formal</option>
                    <option>Concise</option>
                    <option>Enthusiastic</option>
                    <option>Professional</option>
                  </select>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="font-medium">Signature</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Automatically add your signature to responses
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="signature" />
                    <Label htmlFor="signature">Enabled</Label>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="font-medium">Notifications</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Get notified when new messages arrive
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="notifications" defaultChecked />
                    <Label htmlFor="notifications">Enabled</Label>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="font-medium">Auto-Reply</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Automatically send AI responses without review
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="auto-reply" />
                    <Label htmlFor="auto-reply">Disabled</Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ai">
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center">
                <Brain className="w-5 h-5 mr-2 text-purple-500" />
                AI Learning Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="font-medium">Learning Mode</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Allow AI to learn from your edits and improve over time
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="learning-mode" defaultChecked />
                    <Label htmlFor="learning-mode">Enabled</Label>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="font-medium">Response Length</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Set your preferred response length</div>
                  </div>
                  <select className="p-2 border rounded-md dark:bg-slate-800 dark:border-slate-700">
                    <option>Short</option>
                    <option>Medium</option>
                    <option>Long</option>
                  </select>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="font-medium">Data Privacy</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Control how your data is used for AI training
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Shield className="w-4 h-4 mr-2" />
                    Manage
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Account Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <input
                    id="name"
                    className="w-full p-2 border rounded-md dark:bg-slate-800 dark:border-slate-700"
                    defaultValue="John Smith"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <input
                    id="email"
                    className="w-full p-2 border rounded-md dark:bg-slate-800 dark:border-slate-700"
                    defaultValue="john.smith@gmail.com"
                  />
                </div>

                <div className="pt-4 flex justify-between">
                  <Button variant="outline">Change Password</Button>
                  <Button>Save Changes</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

