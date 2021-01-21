const bundleAnalyzer = require('@next/bundle-analyzer')
const nextSourceMaps = require('@zeit/next-source-maps')

const withSourceMaps = nextSourceMaps()
const withBundleAnalyzer = bundleAnalyzer({
  // Run with "yarn analyse:bundle" - See https://www.npmjs.com/package/@next/bundle-analyzer
  enabled: process.env.ANALYZE_BUNDLE === 'true'
})

const i18n = require('./i18n.config')
console.log(i18n)

// next.config.js
module.exports = withBundleAnalyzer(
  withSourceMaps({
    target: 'serverless',
    dev: process.env.NODE_ENV !== 'production',
    experimental: {
      sprFlushToDisk: !process.env.NODE_ENV !== 'production'
    },

    /**
     * Rewrites allow you to map an incoming request path to a different destination path.
     *
     * Rewrites are only available on the Node.js environment and do not affect client-side routing.
     * Rewrites are the most commonly used form of custom routing — they're used for dynamic routes (pretty URLs), user-land routing libraries (e.g. next-routes), internationalization, and other advanced use cases.
     *
     * For example, the route /user/:id rendering a specific user's profile page is a rewrite.
     * Rendering your company's about page for both /about and /fr/a-propos is also a rewrite.
     * The destination url can be internal, or external.
     *
     * @return { Promise<Array<{ destination: string, source: string, headers: Array<{ key: string, value: string }> }>> }
     * @see https://nextjs.org/docs/api-reference/next.config.js/rewrites
     * @since 9.5 - See https://nextjs.org/blog/next-9-5#rewrites
     */
    async rewrites() {
      const rewrites = [
        // I18n rewrites
        {
          // XXX Doesn't work locally (maybe because of rewrites), but works online
          source: '/',
          destination: '/api/redirect'
        },
        // {
        //   source: `/:locale((?!${noRedirectBasePaths.join('|')})[^/]+)(.*)`,
        //   destination: '/api/autoRedirectToLocalisedPage'
        // },

        // Robots rewrites
        {
          source: `/robots.txt`,
          destination:
            process.env.NEXT_PUBLIC_APP_STAGE === 'production'
              ? `/robots/production.txt`
              : '/robots/!production.txt'
        }
      ]

      console.info('Using rewrites:', rewrites)

      return rewrites
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
