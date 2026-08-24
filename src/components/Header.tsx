import Link from 'next/link'
import NextImage from 'next/image'

import { getSettings } from '@/lib/getSettings'
import { getHeaderSettings } from '@/lib/getHeaderSettings'
import { getCta } from '@/lib/getCta'
import { getMediaPath } from '@/lib/getMediaUrl'
import { LinkFieldLink } from '@/components/LinkFieldLink'
import { MobileNav } from '@/components/MobileNav'

export async function Header() {
  const [settings, header, cta] = await Promise.all([getSettings(), getHeaderSettings(), getCta()])

  const logoUrl = getMediaPath(settings.logo)
  const navItems = header.navItems ?? []
  const ctaUrl = cta.buttonUrl

  return (
    <header className="bg-navy sticky top-0 z-50">
      <nav className="relative mx-auto flex max-w-[1200px] items-center justify-between px-6 py-[22px] max-md:px-5">
        <Link href="/" className="flex items-center gap-2.5">
          {logoUrl && (
            <NextImage
              src={logoUrl}
              alt={settings.companyName}
              width={28}
              height={28}
              className="rounded-md"
            />
          )}
          <span className="font-display text-gold text-[15px] tracking-[var(--wordmark-letter-spacing)]">REBUILD</span>
        </Link>

        <div className="flex items-center gap-8 max-md:hidden">
          {navItems.map((item, index) => (
            <LinkFieldLink
              key={index}
              link={item.link}
              className="text-sm text-muted hover:text-white"
            />
          ))}

          {header.showCta && ctaUrl && (
            <Link
              href={ctaUrl}
              className="bg-gold rounded-lg px-5 py-[11px] text-sm font-bold text-navy-text hover:bg-gold-hover"
            >
              Start traject
            </Link>
          )}
        </div>

        <MobileNav navItems={navItems} showCta={header.showCta ?? false} ctaUrl={ctaUrl} />
      </nav>
    </header>
  )
}
