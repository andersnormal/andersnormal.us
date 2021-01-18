import React from 'react'
import { DocumentInitialProps } from 'next/dist/next-server/lib/utils'
import { ColorModeScript } from '@chakra-ui/react'
import Document, {
  DocumentProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'
import theme from '@theme/theme'

/**
 * Additional props depending on our App
 *
 * Must be returned by getInitialProps and will be available in render function
 */
type Props = {
  lang: string
}

type DocumentGetInitialPropsOutput = Props & DocumentInitialProps
type DocumentRenderProps = Props & DocumentProps

class AppDocument extends Document<DocumentRenderProps> {
  // static async getInitialProps(
  //   ctx: DocumentContext
  // ): Promise<DocumentGetInitialPropsOutput> {
  //   const initialProps: DocumentInitialProps = await Document.getInitialProps(
  //     ctx
  //   )
  //   const { query } = ctx
  //   const hasLocaleFromUrl = !!query?.locale
  //   const locale: string = hasLocaleFromUrl
  //     ? (query?.locale as string)
  //     : DEFAULT_LOCALE // If the locale isn't found (e.g: 404 page)
  //   const lang: string = locale.split('-')?.[0]

  //   return {
  //   }
  // }

  render(): JSX.Element {
    // const { lang }: DocumentRenderProps = this.props

    return (
      <Html>
        {/* <Html lang={lang}> */}
        <Head />
        <body
        // className={classnames(
        //   // XXX Those variables are added to grant more flexibility if ever needed. They're not used at the moment
        //   'nrn', // All styles are bound to this, if you remove/rename, it'll break all CSS in src/components/appBootstrap/MultiversalGlobalStyles.tsx
        //   `${process.env.NEXT_PUBLIC_APP_NAME}`, // From package.json:name

        //   // Localisation-based styles are very useful (e.g: resize text based on locale or language)
        //   `locale-${locale}`,
        //   `lang-${lang}`,

        //   // For customer/stage/version based styles, could be handy in rare cases
        //   `${process.env.NEXT_PUBLIC_CUSTOMER_REF}`,
        //   `stage-${process.env.NEXT_PUBLIC_APP_STAGE}`,
        //   `v${process.env.NEXT_PUBLIC_APP_VERSION_RELEASE}`
        // )}
        >
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDocument
