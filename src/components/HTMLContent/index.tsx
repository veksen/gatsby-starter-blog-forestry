import React from "react"

interface HTMLContentProps {
  content?: string
  className?: string
}

export const HTMLContent = ({ content, className }: HTMLContentProps): JSX.Element => (
  <div className={className} dangerouslySetInnerHTML={content ? { __html: content } : undefined} />
)
