"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Wand2, Send, Calendar, Info, Check, Copy, Loader2 } from "lucide-react"
import type { Email } from "@/lib/types"
import { generateResponse } from "@/lib/ai-utils"

interface ResponseGeneratorProps {
  email: Email
}

export default function ResponseGenerator({ email }: ResponseGeneratorProps) {
  const [tone, setTone] = useState("friendly")
  const [response, setResponse] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleGenerateResponse = async () => {
    setIsGenerating(true)
    const generatedResponse = await generateResponse(email, tone)
    setResponse(generatedResponse)
    setIsGenerating(false)
  }

  const handleQuickAction = async (action: string) => {
    setIsGenerating(true)
    const generatedResponse = await generateResponse(email, tone, action)
    setResponse(generatedResponse)
    setIsGenerating(false)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(response)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-base">Generate Response</CardTitle>
          <div className="flex items-center gap-2">
            <Select value={tone} onValueChange={(value) => setTone(value)}>
              <SelectTrigger className="w-[140px] h-8 text-xs">
                <SelectValue placeholder="Select tone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="formal">Formal</SelectItem>
                <SelectItem value="friendly">Friendly</SelectItem>
                <SelectItem value="concise">Concise</SelectItem>
                <SelectItem value="enthusiastic">Enthusiastic</SelectItem>
                <SelectItem value="professional">Professional</SelectItem>
              </SelectContent>
            </Select>
            <Button size="sm" onClick={handleGenerateResponse} disabled={isGenerating}>
              {isGenerating ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Wand2 className="w-4 h-4 mr-2" />}
              Generate
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="text-sm font-medium mb-2">Quick Actions</div>
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleQuickAction("acknowledge")}
              disabled={isGenerating}
            >
              <Check className="w-4 h-4 mr-2" />
              Acknowledge
            </Button>
            <Button variant="outline" size="sm" onClick={() => handleQuickAction("schedule")} disabled={isGenerating}>
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Meeting
            </Button>
            <Button variant="outline" size="sm" onClick={() => handleQuickAction("info")} disabled={isGenerating}>
              <Info className="w-4 h-4 mr-2" />
              Request Info
            </Button>
          </div>
        </div>

        <Textarea
          placeholder="Your AI-generated response will appear here..."
          className="min-h-[200px] mb-4"
          value={response}
          onChange={(e) => setResponse(e.target.value)}
        />

        <div className="flex justify-between">
          <div className="text-xs text-gray-500 dark:text-gray-400">
            AI will learn from your edits to improve future responses
          </div>
          <div className="flex gap-2">
            {response && (
              <Button variant="outline" size="sm" onClick={copyToClipboard}>
                {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                {copied ? "Copied" : "Copy"}
              </Button>
            )}
            <Button size="sm" disabled={!response}>
              <Send className="w-4 h-4 mr-2" />
              Send
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

