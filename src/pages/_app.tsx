import React from 'react'
import { GetServerSideProps } from 'next'
import MultiversalAppBootstrap from '@components/bootstrap/MultiversalAppBootstrap'
import { MultiversalAppBootstrapProps } from '@type/nextjs/MultiversalAppBootstrapProps'
import { SSGPageProps } from '@type/page/SSGPageProps'
import { SSRPageProps } from '@type/page/SSRPageProps'

import 'react-datepicker/dist/react-datepicker.css'
import '../components/layout/ChatButton.css'

/**
 * WDYR (why-did-you-render) helps locate unnecessary re-renders and fix them
 * Applied in development environment, on the frontend only
 *
 * @see https://github.com/welldone-software/why-did-you-render
 */

if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const whyDidYouRender = require('@welldone-software/why-did-you-render')
  // eslint-disable-next-line no-console
  console.debug(
    'Applying whyDidYouRender, to help you locate unnecessary re-renders during development. See https://github.com/welldone-software/why-did-you-render'
  )
  whyDidYouRender(React, {
    trackAllPureComponents: true,
    trackHooks: true,
    logOwnerReasons: true,
    collapseGroups: true
  })
}

type Props =
  | MultiversalAppBootstrapProps<SSGPageProps>
  | MultiversalAppBootstrapProps<SSRPageProps>

// /**
//  * Will be called once for every metric that has to be reported
//  *
//  * There are, at minimum, 3 metrics being received (Next.js-hydration, FCP and TTFB)
//  * Then, 2 other metrics can be received optionally (FID, LCP)
//  *
//  * @param metrics
//  * @see https://web.dev/vitals/ Essential metrics for a healthy site
//  * @see https://nextjs.org/blog/next-9-4#integrated-web-vitals-reporting Initial release notes
//  */
// export function reportWebVitals(metric: NextWebVitalsMetric) {

// }

/**
 * Renders the whole page
 * For the sake of readability/maintainability, we have decoupled what happens in the "render" to our "MultiversalAppBootstrap" component.
 *
 * All props returned by "getInitialProps", "getServerSideProps" or "getStaticProps" are available in "props.pageProps".
 * The "Component" prop within "props.pageProps" contains the page that is being rendered.
 *
 * XXX Multiversal - Executed in any case
 *  req, res are NOT accessible here
 *
 * @return {JSX.Element}
 */
const MultiversalPageEntryPoint = (props: Props): JSX.Element => {
  return <MultiversalAppBootstrap {...props} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {} // will be passed to the page component as props
  }
}

export default MultiversalPageEntryPoint
