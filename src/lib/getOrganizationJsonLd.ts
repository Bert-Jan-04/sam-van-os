import { getSettings } from '@/lib/getSettings'
import { getMediaUrl } from '@/lib/getMediaUrl'
import { SERVER_URL } from '@/lib/env'

export async function getOrganizationJsonLd() {
  const settings = await getSettings()
  const { contact, socialMedia } = settings

  const address = contact?.address
  const hasAddress = address?.street || address?.postalCode || address?.city

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: settings.companyName,
    url: SERVER_URL,
    ...(getMediaUrl(settings.logo) ? { logo: getMediaUrl(settings.logo) } : {}),
    ...(contact?.email ? { email: contact.email } : {}),
    ...(contact?.phone ? { telephone: contact.phone } : {}),
    ...(hasAddress
      ? {
          address: {
            '@type': 'PostalAddress',
            ...(address?.street ? { streetAddress: address.street } : {}),
            ...(address?.postalCode ? { postalCode: address.postalCode } : {}),
            ...(address?.city ? { addressLocality: address.city } : {}),
            ...(address?.country ? { addressCountry: address.country } : {}),
          },
        }
      : {}),
    ...(socialMedia && socialMedia.length > 0
      ? { sameAs: socialMedia.map((item) => item.url).filter(Boolean) }
      : {}),
  }
}
