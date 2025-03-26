export interface Email {
  id: string
  sender: string
  email: string
  avatar?: string
  subject: string
  content: string
  preview: string
  time: string
  category: string
  attachments?: string[]
}

