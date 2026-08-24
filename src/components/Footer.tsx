import Link from 'next/link'

import { getSettings } from '@/lib/getSettings'
import { getCta } from '@/lib/getCta'
import { LinkFieldLink } from '@/components/LinkFieldLink'
import type { Setting } from '@/payload-types'

function SocialIcon({
  platform,
}: {
  platform: NonNullable<Setting['socialMedia']>[number]['platform']
}) {
  switch (platform) {
    case 'instagram':
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <rect x="3" y="3" width="18" height="18" rx="5"></rect>
          <circle cx="12" cy="12" r="4"></circle>
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"></circle>
        </svg>
      )
    case 'tiktok':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.5 3c.4 2.3 2 4 4.5 4.2v3.1c-1.6.1-3-.4-4.5-1.3v6.5c0 3.6-2.9 6.5-6.5 6.5S3.5 19.1 3.5 15.5 6.4 9 10 9c.4 0 .8 0 1.2.1v3.2c-.4-.1-.8-.2-1.2-.2-1.8 0-3.2 1.4-3.2 3.2S8.2 18.5 10 18.5s3.2-1.4 3.2-3.2V3h3.3z"></path>
        </svg>
      )
    case 'youtube':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M21.6 7.2s-.2-1.5-.8-2.1c-.8-.8-1.7-.8-2.1-.9C15.9 4 12 4 12 4s-3.9 0-6.7.2c-.4 0-1.3.1-2.1.9-.6.6-.8 2.1-.8 2.1S2.2 9 2.2 10.7v1.6c0 1.7.2 3.5.2 3.5s.2 1.5.8 2.1c.8.8 1.8.8 2.3.9 1.7.2 6.5.2 6.5.2s3.9 0 6.7-.2c.4 0 1.3-.1 2.1-.9.6-.6.8-2.1.8-2.1s.2-1.8.2-3.5v-1.6c0-1.7-.2-3.5-.2-3.5z"
            stroke="none"
          ></path>
          <path d="M9.9 15.3V9.4l5.1 3z" fill="#0a0a0a" stroke="none"></path>
        </svg>
      )
    default:
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <circle cx="12" cy="12" r="9"></circle>
        </svg>
      )
  }
}

const socialLabels: Record<string, string> = {
  instagram: 'Instagram',
  facebook: 'Facebook',
  linkedin: 'LinkedIn',
  tiktok: 'TikTok',
  youtube: 'YouTube',
  other: 'Website',
}

export async function Footer() {
  const [settings, cta] = await Promise.all([getSettings(), getCta()])

  const columns = settings.footer?.columns ?? []
  const legalLinks = settings.footer?.legalLinks ?? []
  const socialMedia = settings.socialMedia ?? []
  const address = settings.contact?.address

  return (
    <footer className="bg-navy">
      <div className="mx-auto max-w-[1200px] px-20 pt-11 pb-8 max-md:px-5">
        <div className="mb-7 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className="font-display text-gold text-[15px] tracking-[var(--wordmark-letter-spacing)]">REBUILD</span>
          </div>

          {socialMedia.length > 0 && (
            <div className="flex items-center gap-5">
              {socialMedia.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-muted hover:text-white"
                >
                  <SocialIcon platform={item.platform} />
                  {socialLabels[item.platform] ?? item.platform}
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="border-divider mb-9 grid grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-12 border-t pt-9 max-md:grid-cols-1 max-md:gap-8">
          <div className="flex flex-col items-start gap-4">
            <span className="text-[17px] font-bold tracking-wide text-white">Rebuild</span>
            {settings.footer?.tagline && (
              <p className="max-w-[280px] text-sm leading-relaxed text-muted">
                {settings.footer.tagline}
              </p>
            )}
            {cta?.buttonLabel && cta?.buttonUrl && (
              <Link
                href={cta.buttonUrl}
                className="bg-gold inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-navy-text hover:bg-gold-hover"
              >
                {cta.buttonLabel} →
              </Link>
            )}
          </div>

          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-3">
              <span className="text-xs font-bold tracking-widest text-white uppercase">
                {column.title}
              </span>
              {(column.links ?? []).map((item, itemIndex) => (
                <LinkFieldLink
                  key={itemIndex}
                  link={item.link}
                  className="text-sm text-muted hover:text-white"
                />
              ))}
            </div>
          ))}

          {(settings.contact?.email || settings.contact?.phone) && (
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold tracking-widest text-white uppercase">
                Contact
              </span>
              {settings.contact.email && (
                <a
                  href={`mailto:${settings.contact.email}`}
                  className="text-sm text-muted hover:text-white"
                >
                  {settings.contact.email}
                </a>
              )}
              {settings.contact.phone && (
                <a
                  href={`tel:${settings.contact.phone.replace(/\s+/g, '')}`}
                  className="text-sm text-muted hover:text-white"
                >
                  {settings.contact.phone}
                </a>
              )}
            </div>
          )}

          {(settings.contact?.legalName || address || legalLinks.length > 0) && (
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold tracking-widest text-white uppercase">
                Juridisch
              </span>
              {settings.contact?.legalName && (
                <span className="text-sm text-muted">{settings.contact.legalName}</span>
              )}
              {address?.street && (
                <span className="text-sm leading-relaxed text-muted">
                  {address.street}
                  <br />
                  {[address.postalCode, address.city].filter(Boolean).join(' ')}
                </span>
              )}
              {settings.contact?.kvkNumber && (
                <span className="text-sm text-muted">KvK: {settings.contact.kvkNumber}</span>
              )}
              {settings.contact?.vatNumber && (
                <span className="text-sm text-muted">
                  BTW-nummer: {settings.contact.vatNumber}
                </span>
              )}
              {legalLinks.length > 0 && (
                <div className="mt-1 flex flex-col gap-3">
                  {legalLinks.map((item, index) => (
                    <LinkFieldLink
                      key={index}
                      link={item.link}
                      className="text-sm text-muted hover:text-white"
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="border-divider flex flex-wrap items-center justify-between gap-3 border-t pt-5">
          <span className="text-[13px] text-faint">{settings.footer?.copyrightText}</span>
          <a
            href="https://www.sportseospecialist.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-faint hover:text-white"
          >
            Gemaakt door SportSeoSpecialist
          </a>
        </div>
      </div>
    </footer>
  )
}
