"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Brain, CloudLightning, Bot } from "lucide-react"

interface AIModelSelectorProps {
  selectedModel: string
  setSelectedModel: (model: string) => void
}

export default function AIModelSelector({ selectedModel, setSelectedModel }: AIModelSelectorProps) {
  return (
    <div className="space-y-2">
      <Label>AI Model</Label>
      <RadioGroup
        value={selectedModel}
        onValueChange={setSelectedModel}
        className="grid grid-cols-1 md:grid-cols-3 gap-2"
      >
        <div
          className={`flex items-center space-x-2 border rounded-md p-3 cursor-pointer ${
            selectedModel === "openai"
              ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
              : "border-gray-200 dark:border-gray-800"
          }`}
        >
          <RadioGroupItem value="openai" id="openai" className="sr-only" />
          <Label htmlFor="openai" className="flex items-center cursor-pointer w-full">
            <Brain className="h-4 w-4 mr-2 text-blue-500" />
            <div className="flex flex-col">
              <span className="font-medium">OpenAI</span>
              <span className="text-xs text-muted-foreground">GPT-4</span>
            </div>
          </Label>
        </div>

        <div
          className={`flex items-center space-x-2 border rounded-md p-3 cursor-pointer ${
            selectedModel === "gemini"
              ? "border-green-500 bg-green-50 dark:bg-green-900/20"
              : "border-gray-200 dark:border-gray-800"
          }`}
        >
          <RadioGroupItem value="gemini" id="gemini" className="sr-only" />
          <Label htmlFor="gemini" className="flex items-center cursor-pointer w-full">
            <Bot className="h-4 w-4 mr-2 text-green-500" />
            <div className="flex flex-col">
              <span className="font-medium">Google</span>
              <span className="text-xs text-muted-foreground">Gemini</span>
            </div>
          </Label>
        </div>

        <div
          className={`flex items-center space-x-2 border rounded-md p-3 cursor-pointer ${
            selectedModel === "bedrock"
              ? "border-orange-500 bg-orange-50 dark:bg-orange-900/20"
              : "border-gray-200 dark:border-gray-800"
          }`}
        >
          <RadioGroupItem value="bedrock" id="bedrock" className="sr-only" />
          <Label htmlFor="bedrock" className="flex items-center cursor-pointer w-full">
            <CloudLightning className="h-4 w-4 mr-2 text-orange-500" />
            <div className="flex flex-col">
              <span className="font-medium">AWS</span>
              <span className="text-xs text-muted-foreground">Bedrock</span>
            </div>
          </Label>
        </div>
      </RadioGroup>
    </div>
  )
}

