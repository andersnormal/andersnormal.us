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
      </Flex>
    </DefaultLayout>
  )
}

export default Home
