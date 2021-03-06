import React from 'react'
// import { Amplitude, AmplitudeProvider } from '@amplitude/react-amplitude'
// import { AmplitudeClient } from 'amplitude-js'
// import { useTheme } from 'emotion-theming'
// import userConsentContext from '../../stores/userConsentContext'
// import { userSessionContext } from '../../stores/userSessionContext'
// import { Theme } from '../../types/data/Theme'
import { MultiversalAppBootstrapPageProps } from '../../types/nextjs/MultiversalAppBootstrapPageProps'
import { MultiversalAppBootstrapProps } from '../../types/nextjs/MultiversalAppBootstrapProps'
import { MultiversalPageProps } from '@type/page/MultiversalPageProps'
import { OnlyBrowserPageProps } from '@type/page/OnlyBrowserPageProps'
// import { UserConsent } from '../../types/UserConsent'
// import { UserSemiPersistentSession } from '../../types/UserSemiPersistentSession'
// import { getAmplitudeInstance } from '../../utils/analytics/amplitude'

// import initCookieConsent, {
//   getUserConsent
// } from '../../utils/cookies/cookieConsent'
// import UniversalCookiesManager from '../../utils/cookies/UniversalCookiesManager'
// import { getIframeReferrer, isRunningInIframe } from '../../utils/iframe'

export type BrowserPageBootstrapProps = MultiversalAppBootstrapProps<
  MultiversalPageProps & MultiversalAppBootstrapPageProps
>

/**
 * Bootstraps the page, only when rendered on the browser
 *
 * @param props
 */
const BrowserPageBootstrap = (
  props: BrowserPageBootstrapProps
): JSX.Element => {
  const { Component, err, router } = props
  // When the page is served by the browser, some browser-only properties are available
  // const pageProps = (props.pageProps as unknown) as MultiversalPageProps<
  //   OnlyBrowserPageProps
  // >
  // const { customerRef, lang, locale } = pageProps
  // const isInIframe: boolean = isRunningInIframe()
  // const iframeReferrer: string = getIframeReferrer()
  // const cookiesManager: UniversalCookiesManager = new UniversalCookiesManager() // On browser, we can access cookies directly (doesn't need req/res or page context)
  // const userSession: UserSemiPersistentSession = cookiesManager.getUserData()
  // const userId = userSession.id
  const injectedPageProps: MultiversalPageProps<OnlyBrowserPageProps> = {
    ...props.pageProps
    // isInIframe,
    // iframeReferrer,
    // cookiesManager
    // userSession
  }
  // const theme = useTheme<Theme>()

  // const userConsent: UserConsent = getUserConsent()
  // const {
  //   isUserOptedOutOfAnalytics,
  //   hasUserGivenAnyCookieConsent
  // } = userConsent
  // const amplitudeInstance: AmplitudeClient = getAmplitudeInstance({
  //   customerRef,
  //   iframeReferrer,
  //   isInIframe,
  //   lang,
  //   locale,
  //   userId,
  //   userConsent
  // })

  // In non-production stages, bind some utilities to the browser's DOM, for ease of quick testing
  // if (process.env.NEXT_PUBLIC_APP_STAGE !== 'production') {
  //   // window['amplitudeInstance'] = amplitudeInstance
  //   window['i18n'] = i18n
  //   window['router'] = router
  //   window['t'] = t
  //   logger.info(`Utilities have been bound to the DOM for quick testing (only in non-production stages):
  //       - amplitudeInstance
  //       - i18n
  //       - router
  //       - t
  //   `)
  // }

  return (
    // <AmplitudeProvider
    //   amplitudeInstance={amplitudeInstance}
    //   apiKey={process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY}
    //   userId={userId}
    // >
    //   <Amplitude
    //     // DA Know that we decided to duplicate the tracking of the same properties through event props and user props
    //     //  This is because charts are sometimes easier to build using events props, or user users props
    //     //  Duplicating them facilitates the data analysis and grants more flexibility regarding how to create charts
    //     eventProperties={{
    //       app: {
    //         name: process.env.NEXT_PUBLIC_APP_NAME,
    //         version: process.env.NEXT_PUBLIC_APP_VERSION,
    //         stage: process.env.NEXT_PUBLIC_APP_STAGE,
    //         preset: process.env.NEXT_PUBLIC_NRN_PRESET
    //       },
    //       page: {
    //         url: location.href,
    //         path: location.pathname,
    //         origin: location.origin,
    //         name: null // XXX Will be set by the page (usually through its layout)
    //       },
    //       customer: {
    //         ref: customerRef
    //       },
    //       lang: lang,
    //       locale: locale,
    //       iframe: isInIframe,
    //       iframeReferrer: iframeReferrer,
    //       isUserOptedOutOfAnalytics: isUserOptedOutOfAnalytics,
    //       hasUserGivenAnyCookieConsent: hasUserGivenAnyCookieConsent
    //     }}
    //     // XXX Do not use "userProperties" here, add default user-related properties in getAmplitudeInstance instead
    //     //  Because "event" had priority over "user event" and will be executed before
    //     //  So, userProperties defined here then it will NOT be applied until the NEXT Amplitude event and this is likely gonna cause analytics issues
    //     // userProperties={{}}
    //   >
    <Component
      {...injectedPageProps}
      // @ts-ignore
      error={err}
    />
    //     {/* <userSessionContext.Provider value={{ ...userSession }}>
    //       <userConsentContext.Provider value={{ ...userConsent }}>
    //         <Component
    //           {...injectedPageProps}
    //           // @ts-ignore
    //           error={err}
    //         />
    //       </userConsentContext.Provider>
    //     </userSessionContext.Provider> */}
    //   </Amplitude>
    // </AmplitudeProvider>
  )
}

export default BrowserPageBootstrap
