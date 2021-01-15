const bundleAnalyzer = require('@next/bundle-analyzer')
const nextSourceMaps = require('@zeit/next-source-maps')

const withSourceMaps = nextSourceMaps()
const withBundleAnalyzer = bundleAnalyzer({
  // Run with "yarn analyse:bundle" - See https://www.npmjs.com/package/@next/bundle-analyzer
  enabled: process.env.ANALYZE_BUNDLE === 'true'
})

// next.config.js
module.exports = withBundleAnalyzer(
  withSourceMaps({
    dev: process.env.NODE_ENV !== 'production',
    experimental: {
      sprFlushToDisk: !process.env.NODE_ENV !== 'production'
    },
    /**
     * Environment variables added to JS bundle
     *
     * XXX All env variables defined in ".env*" files that aren't public (those that don't start with "NEXT_PUBLIC_") MUST manually be made available at build time below.
     *  They're necessary on Vercel for runtime execution (SSR, SSG with revalidate, everything that happens server-side will need those).
     *
     * XXX This is a duplication of the environment variables.
     *  The variables defined below are only used locally, while those in "vercel.*.json:build:env" will be used on the Vercel platform.
     *  See https://vercel.com/docs/v2/build-step/#providing-environment-variables
     *
     * @see https://nextjs.org/docs/api-reference/next.config.js/environment-variables
     */
    env: {
      SENTRY_DSN: process.env.SENTRY_DSN
    },

    poweredByHeader: false,
    i18n: {
      // These are all the locales you want to support in
      // your application
      locales: ['en', 'de'],
      // This is the default locale you want to be used when visiting
      // a non-locale prefixed path e.g. `/hello`
      defaultLocale: 'en'
    }
  })
)
