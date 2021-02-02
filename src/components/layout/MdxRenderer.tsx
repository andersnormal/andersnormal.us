import React from 'react'
import useMdxContext from '@hooks/useMdx'
import hydrate from 'next-mdx-remote/hydrate'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@theme/theme'
import { MdxRemote } from 'next-mdx-remote/types'
import {
  Code,
  Image,
  Text,
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react'

export type MdxRenderComponents = MdxRemote.Components

export interface MdxRendererProps {
  components?: MdxRemote.Components
  provider?: MdxRemote.Provider
}

const CustomAccordion = ({ children, ...props }): JSX.Element => (
  <Accordion defaultIndex={[0]} {...props}>
    {children}
  </Accordion>
)
const CustomAccordionIcon = (props): JSX.Element => (
  <AccordionIcon boxSize={12} {...props} />
)
const CustomAccordionButton = ({ children, ...props }): JSX.Element => (
  <AccordionButton px={0}>
    <Box flex="1" textAlign="left">
      <Heading fontSize={{ base: '36px', md: '48px', lg: '58px' }}>
        {children}
      </Heading>
    </Box>
    <AccordionIcon boxSize={12} />
  </AccordionButton>
)
const CustomAccordionPanel = ({ children, ...props }): JSX.Element => (
  <AccordionPanel
    fontSize={{ base: '24px', md: '28px', lg: '34px' }}
    px={0}
    {...props}
  >
    {children}
  </AccordionPanel>
)
const CustomAccordionItem = ({ children, ...props }): JSX.Element => (
  <AccordionItem borderColor={'black'} {...props}>
    {children}
  </AccordionItem>
)

const CustomBox = ({ children, ...props }): JSX.Element => (
  <Box w={'100%'} pt={'4rem'} pb={'2rem'}>
    {children}
  </Box>
)

const CustomJingle = ({ children, ...props }): JSX.Element => (
  <Box
    w={{ md: '66%', lg: '50%' }}
    bgGradient="linear(to-tl, #6ee7b7,#000)"
    borderRadius="1em"
    backgroundClip="text"
  >
    <Heading
      fontSize={{ base: '48px', md: '64px', lg: '76px' }}
      bgGradient="linear(to-tl, #6ee7b7,#000)"
      bgClip="text"
    >
      {children}
    </Heading>
  </Box>
)

export const MdxProvider = { component: ChakraProvider, props: { theme } }

export const MdxComponents: MdxRenderComponents = {
  img: Image,
  h1: Heading,
  p: Text,
  inlineCode: Code,
  Heading,
  Jingle: CustomJingle,
  Box: CustomBox,
  Accordion: CustomAccordion,
  AccordionItem: CustomAccordionItem,
  AccordionButton: CustomAccordionButton,
  AccordionPanel: CustomAccordionPanel,
  AccordionIcon: CustomAccordionIcon
}

export const MdxRenderer = ({
  components = MdxComponents,
  provider = MdxProvider
}: MdxRendererProps): JSX.Element => {
  const mdx = useMdxContext()
  const content = mdx
    ? hydrate(mdx, {
        components,
        provider
      })
    : null

  return <>{content}</>
}

export default MdxRenderer
