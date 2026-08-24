import Link from 'next/link'
import type { ReactNode } from 'react'

type LinkFieldLinkProps = {
  link: { label: string; url: string; newTab?: boolean | null }
  className?: string
  children?: ReactNode
  onClick?: () => void
}

export function LinkFieldLink({ link, className, children, onClick }: LinkFieldLinkProps) {
  return (
    <Link
      href={link.url}
      target={link.newTab ? '_blank' : undefined}
      rel={link.newTab ? 'noopener noreferrer' : undefined}
      className={className}
      onClick={onClick}
    >
      {children ?? link.label}
    </Link>
  )
}
