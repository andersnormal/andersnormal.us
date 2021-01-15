import { NextApiRequest, NextApiResponse } from 'next'
import { acceptLanguageHeaderLookup } from '@utils/i18n'
import size from 'lodash.size'
import { supportedLocales } from '../../../i18n.config'
import { DEFAULT_LOCALE } from '@utils/i18n'
import redirect from '@utils/redirect'

/**
 * I18n language/locale auto-detection.
 *
 * Meant to be used to redirect a non i18n-page towards its i18n page counterpart.
 * Used automatically by Next.js "rewrites" rules (next.config.js) that match the pattern.
 *
 * @param req
 * @param res
 * @method GET
 */
export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const detections: string[] = acceptLanguageHeaderLookup(req) || []
  let localeFound // Will contain the most preferred browser locale (e.g: fr-FR, fr, en-US, en, etc.)

  if (detections && !!size(detections)) {
    detections.forEach(language => {
      if (localeFound || typeof language !== 'string') return

      const lookedUpLocale = supportedLocales.find(
        allowedLocale => allowedLocale.name === language
      )

      if (lookedUpLocale) {
        localeFound = lookedUpLocale.lang
      }
    })
  } else {
  }

  if (!localeFound) {
    localeFound = DEFAULT_LOCALE
  }

  let redirectTo: string

  if (req.url === '/' || req.url === '/api/autoRedirectToLocalisedPage') {
    redirectTo = `/${localeFound}`
  } else if (req.url.charAt(0) === '/' && req.url.charAt(1) === '?') {
    // XXX Other routes (e.g: "/fr/terms?utm=source", "/terms?utm=source") are properly handled (they don't need custom routing/rewrites)
    redirectTo = `/${localeFound}${req.url.slice(1)}`
  } else {
    redirectTo = `/${localeFound}${req.url}`
  }

  return redirect(res, redirectTo)
}
