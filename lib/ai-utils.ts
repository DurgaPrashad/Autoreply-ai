import type { Email } from "./types"

// This is a mock implementation of AI response generation
// In a real application, this would connect to an AI service
export async function generateResponse(email: Email, tone: string, quickAction?: string): Promise<string> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  const sender = email.sender.split(" ")[0]

  // Generate different responses based on tone and quick action
  if (quickAction === "acknowledge") {
    return getAcknowledgementResponse(sender, tone)
  } else if (quickAction === "schedule") {
    return getScheduleResponse(sender, tone, email)
  } else if (quickAction === "info") {
    return getInfoRequestResponse(sender, tone, email)
  }

  // Default response based on email content and tone
  return getDefaultResponse(sender, tone, email)
}

function getAcknowledgementResponse(sender: string, tone: string): string {
  if (tone === "formal") {
    return `Dear ${sender},\n\nThank you for your message. I have received it and will review the information you've provided. I will get back to you with a more detailed response as soon as possible.\n\nBest regards,\n[Your Name]`
  } else if (tone === "concise") {
    return `Got it, ${sender}. I'll review and get back to you soon.\n\nThanks,\n[Your Name]`
  } else {
    return `Hi ${sender},\n\nThanks for reaching out! I've received your message and will look into it right away. I'll get back to you with a proper response soon.\n\nCheers,\n[Your Name]`
  }
}

function getScheduleResponse(sender: string, tone: string, email: Email): string {
  if (tone === "formal") {
    return `Dear ${sender},\n\nThank you for your message. I would be pleased to schedule a meeting to discuss this matter further.\n\nI am available on the following dates and times:\n- Thursday, 2:00 PM - 4:00 PM\n- Friday, 10:00 AM - 12:00 PM\n\nPlease let me know which time works best for you, and I will send a calendar invitation accordingly.\n\nBest regards,\n[Your Name]`
  } else if (tone === "concise") {
    return `Hi ${sender},\n\nHappy to meet. I'm free:\n- Thu 2-4pm\n- Fri 10am-12pm\n\nWhich works?\n\nThanks,\n[Your Name]`
  } else {
    return `Hey ${sender},\n\nThanks for reaching out! I'd love to schedule some time to chat about this.\n\nHow about one of these options?\n- Thursday afternoon between 2-4pm\n- Friday morning between 10am-12pm\n\nLet me know what works best for you and I'll send over a calendar invite.\n\nCheers,\n[Your Name]`
  }
}

function getInfoRequestResponse(sender: string, tone: string, email: Email): string {
  if (tone === "formal") {
    return `Dear ${sender},\n\nThank you for your message. In order to proceed, I would require some additional information:\n\n1. Could you please provide more specific details about [relevant topic]?\n2. What is your preferred timeline for this project?\n3. Are there any specific requirements or constraints I should be aware of?\n\nYour clarification on these points would be greatly appreciated.\n\nBest regards,\n[Your Name]`
  } else if (tone === "concise") {
    return `Hi ${sender},\n\nThanks for your message. Need a few more details:\n1. More info on [topic]?\n2. Timeline?\n3. Any specific requirements?\n\nThanks,\n[Your Name]`
  } else {
    return `Hey ${sender},\n\nThanks for reaching out! I'd be happy to help, but I need a bit more information to make sure I'm on the right track:\n\n1. Could you share more details about [relevant topic]?\n2. What kind of timeline are you thinking for this?\n3. Any specific requirements I should know about?\n\nOnce I have these details, I'll be able to give you a much better response!\n\nCheers,\n[Your Name]`
  }
}

function getDefaultResponse(sender: string, tone: string, email: Email): string {
  // Generate a contextual response based on the email content
  if (email.subject.includes("Meeting")) {
    return getScheduleResponse(sender, tone, email)
  } else if (email.subject.includes("Feedback")) {
    if (tone === "formal") {
      return `Dear ${sender},\n\nThank you for sharing your feedback. I appreciate your thoughtful comments and will carefully consider your suggestions. I believe a discussion would be beneficial to address your points in detail.\n\nWould you be available for a 30-minute call this week? I am free on Thursday afternoon or Friday morning.\n\nBest regards,\n[Your Name]`
    } else if (tone === "concise") {
      return `Hi ${sender},\n\nThanks for the feedback. Let's discuss further. Free for a call Thu PM or Fri AM?\n\nRegards,\n[Your Name]`
    } else {
      return `Hey ${sender},\n\nThanks so much for taking the time to share your feedback! I really appreciate your insights and would love to discuss your points in more detail.\n\nHow about a quick call later this week? I'm free Thursday afternoon or Friday morning if either works for you.\n\nCheers,\n[Your Name]`
    }
  } else if (email.subject.includes("Report")) {
    if (tone === "formal") {
      return `Dear ${sender},\n\nThank you for sharing the quarterly report. I will review it thoroughly before our meeting on Friday. If I have any questions or require clarification on any points, I will reach out to you.\n\nI appreciate your diligent work on this matter.\n\nBest regards,\n[Your Name]`
    } else if (tone === "concise") {
      return `Hi ${sender},\n\nGot the report, will review before Friday's meeting. Will reach out if I have questions.\n\nThanks,\n[Your Name]`
    } else {
      return `Hey ${sender},\n\nThanks for sending over the quarterly report! I'll make sure to go through it before our Friday meeting. The 15% increase in engagement sounds fantastic!\n\nI'll let you know if I have any questions after I've had a chance to dive into the details.\n\nCheers,\n[Your Name]`
    }
  } else {
    // Generic response
    if (tone === "formal") {
      return `Dear ${sender},\n\nThank you for your message. I have received your email and will respond appropriately after careful consideration of the information you have provided.\n\nBest regards,\n[Your Name]`
    } else if (tone === "concise") {
      return `Hi ${sender},\n\nThanks for your message. I'll review and respond soon.\n\nRegards,\n[Your Name]`
    } else {
      return `Hey ${sender},\n\nThanks for reaching out! I've got your message and will get back to you with a thoughtful response soon.\n\nCheers,\n[Your Name]`
    }
  }
}

