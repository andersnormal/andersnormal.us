import React from 'react'

import { GetStaticProps } from 'next'
import { CommonServerSideParams } from '@type/nextjs/CommonServerSideParams'
import { NextPage } from 'next'
import DefaultLayout from '@components/layout/DefaultLayout'
import { Box, Heading, Flex } from '@chakra-ui/react'
import { SSGPageProps } from '@type/page/SSGPageProps'
import { OnlyBrowserPageProps } from '@type/page/OnlyBrowserPageProps'
import { getCommonStaticProps, getCommonStaticPaths } from '@utils/nextjs/SSG'

type Props = SSGPageProps<Partial<OnlyBrowserPageProps>>

export const getStaticProps = getCommonStaticProps
export const getStaticPaths = getCommonStaticPaths

const Page: NextPage<Props> = (): JSX.Element => {
  return (
    <DefaultLayout>
      <Flex
        wrap="wrap"
        padding="1.5rem"
        // bg="teal.500"
        color="gray.900"
      >
        Slug
      </Flex>
    </DefaultLayout>
  )
}

export default Page
