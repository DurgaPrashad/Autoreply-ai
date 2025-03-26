"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, Send, Copy, Check, Wand2, Settings, Mail, History } from "lucide-react"
import { generateResponse } from "@/lib/ai-service"
import { useToast } from "@/hooks/use-toast"
import AIModelSelector from "@/components/ai-model-selector"
import ResponseHistory from "@/components/response-history"
import UserSettings from "@/components/user-settings"

export default function AutoResponder() {
  const [receivedEmail, setReceivedEmail] = useState("")
  const [instruction, setInstruction] = useState("")
  const [generatedResponse, setGeneratedResponse] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [copied, setCopied] = useState(false)
  const [selectedModel, setSelectedModel] = useState("openai")
  const [responseStyle, setResponseStyle] = useState("professional")
  const { toast } = useToast()

  const handleGenerateResponse = async () => {
    if (!receivedEmail.trim()) {
      toast({
        title: "Email content required",
        description: "Please paste the email you received.",
        variant: "destructive",
      })
      return
    }

    if (!instruction.trim()) {
      toast({
        title: "Instruction required",
        description: "Please provide instructions on how to respond.",
        variant: "destructive",
      })
      return
    }

    setIsGenerating(true)
    try {
      const response = await generateResponse({
        emailContent: receivedEmail,
        instruction,
        model: selectedModel,
        style: responseStyle,
      })

      setGeneratedResponse(response)

      toast({
        title: "Response generated",
        description: "Your AI response is ready!",
      })
    } catch (error) {
      console.error("Error generating response:", error)
      toast({
        title: "Error",
        description: "Failed to generate response. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedResponse)
    setCopied(true)
    toast({
      title: "Copied to clipboard",
      description: "Response has been copied to your clipboard.",
    })
    setTimeout(() => setCopied(false), 2000)
  }

  const sendEmail = () => {
    // In a real implementation, this would connect to the email API
    toast({
      title: "Email sent",
      description: "Your response has been sent successfully.",
    })
  }

  const clearForm = () => {
    setReceivedEmail("")
    setInstruction("")
    setGeneratedResponse("")
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">📧 AI AutoResponder</h1>
        <p className="text-muted-foreground">Generate professional email responses with AI assistance</p>
      </div>

      <Tabs defaultValue="compose" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="compose" className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>Compose</span>
          </TabsTrigger>
          <TabsTrigger value="history" className="flex items-center gap-2">
            <History className="h-4 w-4" />
            <span>History</span>
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            <span>Settings</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="compose" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Input</CardTitle>
                <CardDescription>Paste the email you received and provide instructions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="received-email">Received Email</Label>
                  <Textarea
                    id="received-email"
                    placeholder="Paste the email you received here..."
                    className="min-h-[200px]"
                    value={receivedEmail}
                    onChange={(e) => setReceivedEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="instruction">Your Instructions</Label>
                  <Input
                    id="instruction"
                    placeholder="e.g., 'Politely decline', 'Accept the meeting', 'Request more details'..."
                    value={instruction}
                    onChange={(e) => setInstruction(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Response Style</Label>
                  <Select value={responseStyle} onValueChange={setResponseStyle}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="friendly">Friendly</SelectItem>
                      <SelectItem value="formal">Formal</SelectItem>
                      <SelectItem value="brief">Brief</SelectItem>
                      <SelectItem value="detailed">Detailed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <AIModelSelector selectedModel={selectedModel} setSelectedModel={setSelectedModel} />
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={clearForm}>
                  Clear
                </Button>
                <Button onClick={handleGenerateResponse} disabled={isGenerating}>
                  {isGenerating ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Wand2 className="mr-2 h-4 w-4" />
                      Generate Response
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Generated Response</CardTitle>
                <CardDescription>Edit the response before sending if needed</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Your AI-generated response will appear here..."
                  className="min-h-[300px]"
                  value={generatedResponse}
                  onChange={(e) => setGeneratedResponse(e.target.value)}
                />
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={copyToClipboard} disabled={!generatedResponse}>
                  {copied ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-4 w-4" />
                      Copy
                    </>
                  )}
                </Button>
                <Button onClick={sendEmail} disabled={!generatedResponse}>
                  <Send className="mr-2 h-4 w-4" />
                  Send Email
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="history">
          <ResponseHistory />
        </TabsContent>

        <TabsContent value="settings">
          <UserSettings />
        </TabsContent>
      </Tabs>
    </div>
  )
}

