import React from 'react'

import { NextPage } from 'next'
import DefaultLayout from '@components/layout/DefaultLayout'
import { SSGPageProps } from '@type/page/SSGPageProps'
import { OnlyBrowserPageProps } from '@type/page/OnlyBrowserPageProps'
import { getCommonStaticProps, getCommonStaticPaths } from '@utils/nextjs/SSG'
import hydrate from 'next-mdx-remote/hydrate'
import { Heading, Code, Flex, Image, Text } from '@chakra-ui/react'
import useLayoutContext from '@hooks/useLayout'

const components = {
  img: Image,
  h1: Heading,
  p: Text,
  inlineCode: Code
}

type Props = SSGPageProps<Partial<OnlyBrowserPageProps>>

export const getStaticProps = getCommonStaticProps
export const getStaticPaths = getCommonStaticPaths

const Page: NextPage<Props> = ({ mdxSource }): JSX.Element => {
  const content = mdxSource ? hydrate(mdxSource, { components }) : null
  const layout = useLayoutContext()

  return (
    <DefaultLayout headProps={{ seoTitle: layout?.page.title }}>
      <Flex wrap="wrap" padding="1.5rem" color="gray.900">
        <div className="wrapper">{content}</div>
      </Flex>
    </DefaultLayout>
  )
}

export default Page
