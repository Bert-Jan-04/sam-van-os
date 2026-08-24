import type { Styling } from '@/payload-types'

const googleFontFamilyParam = (family: string, weights: string) =>
  `family=${family.trim().replace(/\s+/g, '+')}:wght@${weights.trim()}`

export function buildGoogleFontsHref(typography: Styling['typography']) {
  const params = [
    googleFontFamilyParam(typography.headingFontFamily, typography.headingWeights),
    googleFontFamilyParam(typography.bodyFontFamily, typography.bodyWeights),
  ]
  return `https://fonts.googleapis.com/css2?${params.join('&')}&display=swap`
}

export function buildStylingVars(styling: Styling) {
  const { colors, typography } = styling

  return [
    `--color-navy: ${colors.pageBackground}`,
    `--color-navy-card: ${colors.cardBackground}`,
    `--color-ivory: ${colors.lightCard}`,
    `--gradient-from: ${colors.cardGradientFrom}`,
    `--gradient-to: ${colors.cardGradientTo}`,
    `--color-white: ${colors.primaryText}`,
    `--color-navy-border: ${colors.standardBorder}`,
    `--color-divider: ${colors.thinDivider}`,
    `--color-bronze: ${colors.bronzeBorder}`,
    `--color-navy-text: ${colors.navyTextOnGold}`,
    `--color-ivory-text: ${colors.darkTextOnIvory}`,
    `--color-muted: ${colors.mutedBodyText}`,
    `--color-caption: ${colors.smallText}`,
    `--color-faint: ${colors.vagueLabels}`,
    `--color-star: ${colors.starRating}`,
    `--color-gold: ${colors.primaryGold}`,
    `--color-gold-hover: ${colors.goldHover}`,
    `--color-gold-light: ${colors.lightGold}`,
    `--color-gold-light-hover: ${colors.lightGoldHover}`,
    `--font-display: '${typography.headingFontFamily}', sans-serif`,
    `--font-sans: '${typography.bodyFontFamily}', sans-serif`,
    `--heading-weight: ${typography.headingWeight}`,
    `--heading-letter-spacing: ${typography.headingLetterSpacing}`,
    `--wordmark-letter-spacing: ${typography.wordmarkLetterSpacing}`,
  ].join(';\n  ')
}
