import * as Sentry from '@sentry/node'
import { Integrations as TracingIntegrations } from '@sentry/tracing'

export const init = (): void => {
  if (!process.env.SENTRY_DSN) return

  const integrations = []

  if (process.browser) {
    integrations.push(new TracingIntegrations.BrowserTracing())
  }

  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    enabled: process.env.NODE_ENV === 'production',
    environment: process.env.NEXT_PUBLIC_APP_STAGE,
    release: process.env.NEXT_PUBLIC_APP_VERSION_RELEASE,

    // This enables automatic instrumentation (highly recommended), but is not
    // necessary for purely manual usage
    integrations: [new TracingIntegrations.BrowserTracing()],

    // To set a uniform sample rate
    tracesSampleRate: 0.2
  })
}

export default init
