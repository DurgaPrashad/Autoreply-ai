import type { Email } from "./types"

export const sampleEmails: Email[] = [
  {
    id: "1",
    sender: "Sarah Johnson",
    email: "sarah.j@acmecorp.com",
    subject: "Project Timeline Update",
    content:
      "I wanted to check in about the timeline for the current project. We're approaching the deadline and I'd like to know if we're still on track to deliver as planned. Could you provide an update on your progress and let me know if there are any obstacles that might delay completion?\n\nAlso, the client has requested a brief status meeting next week. Would you be available on Tuesday or Wednesday afternoon?",
    preview: "I wanted to check in about the timeline for the current project...",
    time: "10:23 AM",
    category: "Work",
    attachments: ["ProjectTimeline.pdf", "ClientRequirements.docx"],
  },
  {
    id: "2",
    sender: "Michael Chen",
    email: "m.chen@techsolutions.io",
    subject: "Meeting Request: Product Demo",
    content:
      "I hope this email finds you well. I'd like to schedule a meeting to demonstrate our new product features that align with your company's needs. Based on our previous conversation, I believe these updates will significantly improve your workflow efficiency.\n\nWould you have 30 minutes available this week for a quick demo? I'm flexible and can work around your schedule.",
    preview: "I hope this email finds you well. I'd like to schedule a meeting...",
    time: "Yesterday",
    category: "Sales",
  },
  {
    id: "3",
    sender: "Alex Rodriguez",
    email: "alex.r@designteam.co",
    subject: "Feedback on Latest Designs",
    content:
      "Thanks for sharing the latest design mockups. I've had a chance to review them and I have some thoughts I'd like to share. Overall, I think the direction is promising, but there are a few areas where I think we could make improvements to better meet the project goals.\n\nCould we schedule a call to discuss these points in more detail? I've also attached some notes with specific feedback.",
    preview: "Thanks for sharing the  I've also attached some notes with specific feedback.",
    preview: "Thanks for sharing the latest design mockups. I've had a chance to review...",
    time: "Tuesday",
    category: "Design",
    attachments: ["DesignFeedback.pdf"],
  },
  {
    id: "4",
    sender: "Emily Watson",
    email: "e.watson@marketing.net",
    subject: "Quarterly Marketing Report",
    content:
      "I've completed the quarterly marketing report and wanted to share it with you before our team meeting on Friday. The results are quite positive, showing a 15% increase in engagement across all channels compared to last quarter.\n\nPlease review the attached report and let me know if you have any questions or if there's anything specific you'd like me to highlight during the presentation.",
    preview: "I've completed the quarterly marketing report and wanted to share...",
    time: "Monday",
    category: "Marketing",
    attachments: ["Q2_Marketing_Report.pdf", "EngagementMetrics.xlsx"],
  },
  {
    id: "5",
    sender: "David Park",
    email: "d.park@support.com",
    subject: "Your Recent Support Ticket #45892",
    content:
      "I'm following up on the support ticket you submitted last week regarding the integration issue. Our technical team has investigated the problem and identified a solution.\n\nWe've prepared a detailed guide on how to implement the fix. Would you like me to schedule a call with one of our technical specialists to walk you through the process, or would you prefer to try implementing it yourself with our documentation?",
    preview: "I'm following up on the support ticket you submitted last week...",
    time: "Last week",
    category: "Support",
  },
]

