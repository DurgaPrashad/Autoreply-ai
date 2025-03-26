// This file contains the AI service implementation with demo API keys
// In a real application, these would be stored in environment variables

interface GenerateResponseParams {
  emailContent: string
  instruction: string
  model: string
  style: string
}

export async function generateResponse({
  emailContent,
  instruction,
  model,
  style,
}: GenerateResponseParams): Promise<string> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Choose the appropriate API based on the selected model
  switch (model) {
    case "openai":
      return generateWithOpenAI(emailContent, instruction, style)
    case "gemini":
      return generateWithGemini(emailContent, instruction, style)
    case "bedrock":
      return generateWithBedrock(emailContent, instruction, style)
    default:
      return generateWithOpenAI(emailContent, instruction, style)
  }
}

async function generateWithOpenAI(emailContent: string, instruction: string, style: string): Promise<string> {
  try {
    // In a real implementation, this would use the OpenAI API
    // const apiKey = process.env.OPENAI_API_KEY;
    const apiKey = "sk-demo1234567890abcdefghijklmnopqrstuvwxyz" // Demo key

    // This is a simulated API call
    // In a real app, you would use the OpenAI SDK or fetch API
    console.log("Using OpenAI with key:", apiKey)

    // For demo purposes, return a pre-generated response based on the instruction
    return getPreGeneratedResponse(instruction, style, "openai")
  } catch (error) {
    console.error("Error with OpenAI API:", error)
    throw new Error("Failed to generate response with OpenAI")
  }
}

async function generateWithGemini(emailContent: string, instruction: string, style: string): Promise<string> {
  try {
    // In a real implementation, this would use the Google Gemini API
    // const apiKey = process.env.GOOGLE_GEMINI_API_KEY;
    const apiKey = "AIzaSyDem0123456789abcdefghijklmnopqrstuvwxyz" // Demo key

    // This is a simulated API call
    // In a real app, you would use the Google Gemini SDK or fetch API
    console.log("Using Google Gemini with key:", apiKey)

    // For demo purposes, return a pre-generated response based on the instruction
    return getPreGeneratedResponse(instruction, style, "gemini")
  } catch (error) {
    console.error("Error with Gemini API:", error)
    throw new Error("Failed to generate response with Gemini")
  }
}

async function generateWithBedrock(emailContent: string, instruction: string, style: string): Promise<string> {
  try {
    // In a real implementation, this would use the AWS Bedrock API
    // const accessKey = process.env.AWS_BEDROCK_ACCESS_KEY;
    // const secretKey = process.env.AWS_BEDROCK_SECRET_KEY;
    const accessKey = "AKIAIOSFODNN7EXAMPLE" // Demo key
    const secretKey = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY" // Demo key

    // This is a simulated API call
    // In a real app, you would use the AWS SDK
    console.log("Using AWS Bedrock with access key:", accessKey)

    // For demo purposes, return a pre-generated response based on the instruction
    return getPreGeneratedResponse(instruction, style, "bedrock")
  } catch (error) {
    console.error("Error with Bedrock API:", error)
    throw new Error("Failed to generate response with Bedrock")
  }
}

// Helper function to get pre-generated responses for demo purposes
function getPreGeneratedResponse(instruction: string, style: string, model: string): string {
  // Extract keywords from the instruction to determine the type of response
  const instructionLower = instruction.toLowerCase()

  // Determine the response type based on instruction keywords
  let responseType = "generic"
  if (instructionLower.includes("decline") || instructionLower.includes("reject")) {
    responseType = "decline"
  } else if (instructionLower.includes("accept") || instructionLower.includes("confirm")) {
    responseType = "accept"
  } else if (
    instructionLower.includes("more info") ||
    instructionLower.includes("details") ||
    instructionLower.includes("clarify")
  ) {
    responseType = "request_info"
  } else if (instructionLower.includes("thank") || instructionLower.includes("appreciate")) {
    responseType = "thank"
  } else if (instructionLower.includes("reschedule") || instructionLower.includes("postpone")) {
    responseType = "reschedule"
  }

  // Get the appropriate response template
  const responseTemplate = getResponseTemplate(responseType, style)

  // Add a signature based on the model (just for demo differentiation)
  let signature = ""
  if (model === "openai") {
    signature = "\n\nGenerated with OpenAI GPT-4"
  } else if (model === "gemini") {
    signature = "\n\nGenerated with Google Gemini"
  } else if (model === "bedrock") {
    signature = "\n\nGenerated with AWS Bedrock"
  }

  // Return the final response with the signature
  return responseTemplate + signature
}

// Helper function to get response templates based on type and style
function getResponseTemplate(responseType: string, style: string): string {
  // Adjust the response based on the requested style
  const templates: Record<string, Record<string, string>> = {
    decline: {
      professional:
        "Thank you for your invitation. After careful consideration, I regret that I am unable to accept at this time due to prior commitments. I appreciate your understanding and hope we can find another opportunity to collaborate in the future.",
      friendly:
        "Thanks so much for thinking of me! I really wish I could join, but unfortunately I've got some other commitments that I can't reschedule. I hope it goes well, and I'd love to join next time!",
      formal:
        "I am writing to express my sincere gratitude for your invitation. However, I must respectfully decline due to scheduling conflicts. Please accept my apologies for any inconvenience this may cause.",
      brief: "Thank you for the invitation. Unfortunately, I must decline due to prior commitments.",
      detailed:
        "Thank you for your thoughtful invitation. I've carefully reviewed my schedule and existing commitments, and I regret that I won't be able to participate at this time. My current workload and previously scheduled obligations prevent me from giving this the attention it deserves. I truly appreciate your consideration and hope there will be opportunities for us to collaborate in the future. Please keep me informed of any similar events.",
    },
    accept: {
      professional:
        "Thank you for your invitation. I am pleased to confirm my attendance and look forward to participating. Please let me know if there's any additional information I should be aware of before the event.",
      friendly:
        "Thanks for the invite! I'd love to join and I've marked it in my calendar. Looking forward to it! Let me know if I need to prepare anything beforehand.",
      formal:
        "I am writing to formally accept your invitation. I am honored by your consideration and look forward to attending. Please provide any pertinent details that would facilitate my participation.",
      brief: "Thank you for the invitation. I confirm my attendance and look forward to it.",
      detailed:
        "Thank you for extending this invitation to me. I've reviewed my schedule and I'm delighted to confirm that I will be able to attend. I've already marked the date and time in my calendar and made the necessary arrangements. I'm looking forward to participating and contributing to the discussion. If there are any materials I should review beforehand or any specific preparation I should undertake, please don't hesitate to let me know. I appreciate your consideration and am excited about this opportunity.",
    },
    request_info: {
      professional:
        "Thank you for your message. To proceed effectively, I would need some additional information. Could you please provide more details about the timeline, expected deliverables, and any specific requirements? This will help me prepare an appropriate response.",
      friendly:
        "Thanks for reaching out! This sounds interesting, but I'd love to know a bit more before I dive in. Could you share some extra details about what you're looking for, when you need it by, and any specific requirements? That would be super helpful!",
      formal:
        "I acknowledge receipt of your correspondence. In order to provide a comprehensive response, I require additional information pertaining to the matter at hand. Specifically, details regarding timelines, expectations, and requirements would be most beneficial.",
      brief: "Thanks for your message. Could you provide more details about the timeline and requirements?",
      detailed:
        "Thank you for reaching out with this information. I've reviewed what you've shared so far, and while it provides a good foundation, I believe I would need some additional details to fully address your needs. Specifically, it would be helpful to understand more about: 1) The expected timeline and any critical deadlines, 2) The scope of work and specific deliverables you're expecting, 3) Any particular requirements or constraints I should be aware of, 4) Your budget parameters if applicable, and 5) How this project aligns with your broader objectives. Having this additional context would allow me to provide you with a more tailored and comprehensive response. I appreciate your consideration and look forward to your clarification.",
    },
    thank: {
      professional:
        "Thank you for your message and the information provided. I appreciate your time and consideration. I'll review the details and respond accordingly.",
      friendly:
        "Thanks so much for this! I really appreciate you taking the time to share this with me. I'll look through everything and get back to you soon!",
      formal:
        "I wish to express my sincere gratitude for your correspondence and the information therein. Your attention to this matter is greatly appreciated.",
      brief: "Thank you for the information. I appreciate it.",
      detailed:
        "I wanted to express my sincere gratitude for your thoughtful message and the comprehensive information you've provided. I truly appreciate the time and effort you've invested in putting this together and sharing it with me. Your attention to detail and thoroughness have not gone unnoticed. This information is extremely valuable and will be immensely helpful. I'll be reviewing everything carefully and will make the best use of what you've shared. Thank you again for your generosity and consideration.",
    },
    reschedule: {
      professional:
        "Thank you for organizing the meeting. Unfortunately, I need to request a rescheduling due to an unexpected conflict. I apologize for any inconvenience this may cause. Would any of these alternative times work for you: [suggest 2-3 options]?",
      friendly:
        "Hey there! I'm really sorry, but something's come up and I need to reschedule our meeting. Any chance we could move it to another time? I'm free on [suggest options]. Sorry again for the last-minute change!",
      formal:
        "I regret to inform you that I must request a postponement of our scheduled engagement due to unforeseen circumstances. I sincerely apologize for any inconvenience this may cause. Please advise if any of the following alternative times would be suitable for rescheduling: [suggest options].",
      brief: "I need to reschedule our meeting. Are you available on [suggest options] instead?",
      detailed:
        "I hope this message finds you well. I'm writing regarding our scheduled meeting, and I regret to inform you that I need to request a rescheduling due to an unexpected conflict that has arisen in my schedule. I sincerely apologize for any inconvenience this change may cause, as I understand the value of your time and the effort involved in planning. To minimize disruption, I'd like to propose several alternative times that work with my schedule: [Option 1: Date and time], [Option 2: Date and time], or [Option 3: Date and time]. Please let me know if any of these options would be convenient for you, or if you'd prefer to suggest alternative times that better accommodate your schedule. I appreciate your understanding and flexibility in this matter, and I look forward to our meeting at a rescheduled time.",
    },
    generic: {
      professional:
        "Thank you for your message. I've reviewed the information provided and will respond appropriately. If you need any immediate assistance or have additional questions, please don't hesitate to let me know.",
      friendly:
        "Thanks for reaching out! I've got your message and will get back to you soon. Feel free to let me know if you need anything else in the meantime!",
      formal:
        "I acknowledge receipt of your correspondence and will address the matters therein with due consideration. Should you require immediate attention or have supplementary inquiries, please do not hesitate to contact me.",
      brief: "Message received. Will respond soon.",
      detailed:
        "Thank you for taking the time to reach out and share this information with me. I've carefully reviewed everything you've provided and am giving it my full consideration. I appreciate the detailed context you've included, as it helps me understand the situation more comprehensively. I'll be formulating a thoughtful response that addresses all the points you've raised. In the meantime, if you think of any additional information that might be relevant or if you have any questions, please don't hesitate to let me know. I'm committed to providing you with a thorough and helpful response as soon as possible.",
    },
  }

  // Return the appropriate template or fall back to generic professional
  return templates[responseType]?.[style] || templates.generic.professional
}

