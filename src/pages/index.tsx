import React from 'react'

import { GetStaticProps } from 'next'
import { CommonServerSideParams } from '@type/nextjs/CommonServerSideParams'
import { NextPage } from 'next'
import DefaultLayout from '@components/layout/DefaultLayout'
import { Box, Heading, Flex } from '@chakra-ui/react'
import { SSGPageProps } from '@type/page/SSGPageProps'
import { OnlyBrowserPageProps } from '@type/page/OnlyBrowserPageProps'
import { getCommonStaticProps } from '@utils/nextjs/SSG'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react'

type Props = SSGPageProps<Partial<OnlyBrowserPageProps>>

export const getStaticProps: GetStaticProps<
  SSGPageProps,
  CommonServerSideParams
> = getCommonStaticProps

const Home: NextPage<Props> = (): JSX.Element => {
  return (
    <DefaultLayout>
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

        {/* <Box w={'100%'}>
          <Heading fontSize={{ base: '48px', md: '64px', lg: '76px' }}>
            Ask us.
          </Heading>
        </Box>
        <Box w={'100%'}>
          <Heading fontSize={{ base: '48px', md: '64px', lg: '76px' }}>
            Type anything...
          </Heading>
        </Box> */}

        <Box w={'100%'} py={'4rem'}>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem borderColor={'black'}>
              <AccordionButton px={0}>
                <Box flex="1" textAlign="left">
                  <Heading fontSize={{ base: '48px', md: '64px', lg: '76px' }}>
                    Who We are
                  </Heading>
                </Box>
                <AccordionIcon boxSize={12} />
              </AccordionButton>
              <AccordionPanel
                pb={4}
                fontSize={{ base: '24px', md: '64px', lg: '34px' }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem borderColor={'black'}>
              <AccordionButton px={0}>
                <Box flex="1" textAlign="left">
                  <Heading fontSize={{ base: '48px', md: '64px', lg: '76px' }}>
                    What We Do
                  </Heading>
                </Box>
                <AccordionIcon boxSize={12} />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem borderColor={'black'}>
              <AccordionButton px={0}>
                <Box flex="1" textAlign="left">
                  <Heading fontSize={{ base: '48px', md: '64px', lg: '76px' }}>
                    How We Do
                  </Heading>
                </Box>
                <AccordionIcon boxSize={12} />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Flex>
    </DefaultLayout>
  )
}

export default Home
