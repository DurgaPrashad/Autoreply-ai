import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Paperclip } from "lucide-react"
import type { Email } from "@/lib/types"

interface EmailPreviewProps {
  email: Email
}

export default function EmailPreview({ email }: EmailPreviewProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-start gap-3">
            <Avatar>
              <AvatarFallback>
                {email.sender
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
              <AvatarImage src={email.avatar} />
            </Avatar>
            <div>
              <CardTitle className="text-base">{email.subject}</CardTitle>
              <div className="flex items-center mt-1">
                <span className="text-sm font-medium">{email.sender}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">{email.email}</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-gray-500 dark:text-gray-400">{email.time}</span>
                <Badge variant="outline" className="text-xs">
                  {email.category}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="prose dark:prose-invert max-w-none text-sm">
          <p>Hi there,</p>
          <p>{email.content}</p>
          <p>
            Best regards,
            <br />
            {email.sender}
          </p>
        </div>

        {email.attachments && email.attachments.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-medium mb-2">Attachments</h4>
            <div className="flex flex-wrap gap-2">
              {email.attachments.map((attachment, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 text-xs bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded"
                >
                  <Paperclip className="w-3 h-3" />
                  {attachment}
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

