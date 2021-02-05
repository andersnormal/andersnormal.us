import React from 'react'
import { GetStaticProps } from 'next'
import { CommonServerSideParams } from '@type/nextjs/CommonServerSideParams'
import { NextPage } from 'next'
import DefaultLayout from '@components/layout/DefaultLayout'
import { Flex } from '@chakra-ui/react'
import { SSGPageProps } from '@type/page/SSGPageProps'
import { OnlyBrowserPageProps } from '@type/page/OnlyBrowserPageProps'
import { getCommonStaticProps } from '@utils/nextjs/SSG'
import { MdxRenderer } from '@components/layout/MdxRenderer'
import withConsent from '@hocs/withConsent'
import Contact from '@components/forms/Contact'

type Props = SSGPageProps<Partial<OnlyBrowserPageProps>>

export const getStaticProps: GetStaticProps<
  SSGPageProps,
  CommonServerSideParams
> = getCommonStaticProps

const Home: NextPage<Props> = (): JSX.Element => {
  return (
    <DefaultLayout>
      <Flex wrap="wrap" padding="1.5rem" color="gray.900">
        <MdxRenderer />
        <Contact />
      </Flex>
    </DefaultLayout>
  )
}

export default withConsent(Home)
