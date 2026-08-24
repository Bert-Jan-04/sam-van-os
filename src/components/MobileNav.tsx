'use client'

import { useState } from 'react'
import Link from 'next/link'

import { LinkFieldLink } from '@/components/LinkFieldLink'
import type { Header as HeaderGlobal } from '@/payload-types'

type MobileNavProps = {
  navItems: NonNullable<HeaderGlobal['navItems']>
  showCta: boolean
  ctaUrl?: string | null
}

export function MobileNav({ navItems, showCta, ctaUrl }: MobileNavProps) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? 'Sluit menu' : 'Open menu'}
        aria-expanded={open}
        className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-[5px]"
      >
        <span
          className={`block h-0.5 w-6 bg-white transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`}
        />
        <span className={`block h-0.5 w-6 bg-white transition-opacity ${open ? 'opacity-0' : ''}`} />
        <span
          className={`block h-0.5 w-6 bg-white transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
        />
      </button>

      {open && (
        <div className="bg-navy border-divider absolute inset-x-0 top-full flex flex-col gap-1 border-t px-6 py-6 shadow-xl">
          {navItems.map((item, index) => (
            <LinkFieldLink
              key={index}
              link={item.link}
              onClick={close}
              className="py-3 text-base text-muted hover:text-white"
            />
          ))}

          {showCta && ctaUrl && (
            <Link
              href={ctaUrl}
              onClick={close}
              className="bg-gold mt-2 inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-bold text-navy-text"
            >
              Start traject
            </Link>
          )}
        </div>
      )}
    </div>
  )
}
