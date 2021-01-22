import React from 'react'

import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { CommonServerSideParams } from '@type/nextjs/CommonServerSideParams'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import DefaultLayout from '@components/layout/DefaultLayout'
import { Container, Box, Heading, Flex, Text, Button } from '@chakra-ui/react'
import withApollo from '@hocs/withApollo'
import { SSGPageProps } from '@type/page/SSGPageProps'
import { OnlyBrowserPageProps } from '@type/page/OnlyBrowserPageProps'
import { getCommonStaticProps } from '@utils/nextjs/SSG'

type Props = SSGPageProps<Partial<OnlyBrowserPageProps>>

export const getStaticProps: GetStaticProps<
  SSGPageProps,
  CommonServerSideParams
> = getCommonStaticProps

const Home: NextPage<Props> = (props): JSX.Element => {
  const router = useRouter()
  const { locale, locales, defaultLocale } = router
  const { children } = props

  return (
    <DefaultLayout>
      <Flex
        wrap="wrap"
        padding="1.5rem"
        // bg="teal.500"
        color="gray.900"
      >
        <Box
          w={{ md: '66%', lg: '50%' }}
          py={8}
          my={8}
          bgGradient="linear(to-tl, #6ee7b7,#000)"
          borderRadius="1em"
          backgroundClip="text"
          // borderBottom="8px solid"
          // style={{
          //   borderImageSource: 'linear-gradient(-45deg, #6ee7b7, #000)',
          //   borderImageSlice: 1
          // }}
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

export default withApollo()(Home)
