import React from 'react'

import { GetStaticProps } from 'next'
import { CommonServerSideParams } from '@type/nextjs/CommonServerSideParams'
import { NextPage } from 'next'
import DefaultLayout from '@components/layout/DefaultLayout'
import { Box, Heading, Flex } from '@chakra-ui/react'
import { SSGPageProps } from '@type/page/SSGPageProps'
import { OnlyBrowserPageProps } from '@type/page/OnlyBrowserPageProps'
import { getCommonStaticProps } from '@utils/nextjs/SSG'
import useLayoutContext from '@hooks/useLayout'

type Props = SSGPageProps<Partial<OnlyBrowserPageProps>>

export const getStaticProps: GetStaticProps<
  SSGPageProps,
  CommonServerSideParams
> = getCommonStaticProps

const Home: NextPage<Props> = (): JSX.Element => {
  const layout = useLayoutContext()

  return (
    <DefaultLayout headProps={{ seoTitle: layout.page.title }}>
      <Flex wrap="wrap" padding="1.5rem" color="gray.900">
        <Box
          w={{ md: '66%', lg: '50%' }}
          py={8}
          my={8}
          bgGradient="linear(to-tl, #6ee7b7,#000)"
          borderRadius="1em"
          backgroundClip="text"
        >
          <Heading
            fontSize={{ base: '48px', md: '64px', lg: '76px' }}
            bgGradient="linear(to-tl, #6ee7b7,#000)"
            bgClip="text"
          >
            We help you to build your digital future.
          </Heading>
        </Box>

        <Box w={'100%'}>
          <Heading fontSize={{ base: '48px', md: '64px', lg: '76px' }}>
            Say Hello.
          </Heading>
        </Box>
        <Box w={'100%'}>
          <Heading fontSize={{ base: '48px', md: '64px', lg: '76px' }}>
            Type something...
          </Heading>
        </Box>
      </Flex>
    </DefaultLayout>
  )
}

export default Home
