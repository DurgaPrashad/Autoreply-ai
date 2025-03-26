"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, Trash2 } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

// Sample history data - in a real app, this would come from a database
const sampleHistory = [
  {
    id: "1",
    date: "2023-06-15",
    instruction: "Politely decline meeting invitation",
    response:
      "Thank you for the invitation to the project kickoff meeting. Unfortunately, I have a scheduling conflict and won't be able to attend. I'd be happy to review any meeting notes or materials afterward, and I'm available for a follow-up discussion if needed. Please keep me in the loop on any key decisions or action items.",
    model: "openai",
  },
  {
    id: "2",
    date: "2023-06-14",
    instruction: "Request more information about project timeline",
    response:
      "I appreciate the project overview you've shared. To better understand the scope and prepare accordingly, could you provide more details about the expected timeline? Specifically, I'm interested in key milestones, deliverable dates, and any dependencies I should be aware of. This information will help me allocate resources appropriately and ensure we meet all deadlines.",
    model: "gemini",
  },
  {
    id: "3",
    date: "2023-06-12",
    instruction: "Accept job interview invitation",
    response:
      "Thank you for considering my application and inviting me for an interview. I'm excited about the opportunity to discuss how my skills and experience align with the position. I confirm that I'm available on Tuesday, June 20th at 2:00 PM. I look forward to meeting with you and learning more about the role and your company.",
    model: "bedrock",
  },
]

export default function ResponseHistory() {
  const [history, setHistory] = useState(sampleHistory)
  const { toast } = useToast()

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied to clipboard",
      description: "Response has been copied to your clipboard.",
    })
  }

  const deleteHistoryItem = (id: string) => {
    setHistory(history.filter((item) => item.id !== id))
    toast({
      title: "Response deleted",
      description: "The response has been removed from your history.",
    })
  }

  const clearHistory = () => {
    setHistory([])
    toast({
      title: "History cleared",
      description: "All responses have been cleared from your history.",
    })
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Response History</h2>
        {history.length > 0 && (
          <Button variant="outline" onClick={clearHistory}>
            Clear All
          </Button>
        )}
      </div>

      {history.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-10">
            <p className="text-muted-foreground text-center">
              No response history yet. Generate some responses to see them here.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {history.map((item) => (
            <Card key={item.id}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-base">{item.instruction}</CardTitle>
                    <CardDescription>
                      {item.date} • {getModelName(item.model)}
                    </CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" onClick={() => copyToClipboard(item.response)}>
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => deleteHistoryItem(item.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-sm whitespace-pre-wrap">{item.response}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

function getModelName(model: string): string {
  switch (model) {
    case "openai":
      return "OpenAI GPT-4"
    case "gemini":
      return "Google Gemini"
    case "bedrock":
      return "AWS Bedrock"
    default:
      return model
  }
}

