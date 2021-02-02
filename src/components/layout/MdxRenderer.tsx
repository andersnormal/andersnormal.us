import React from 'react'
import useMdxContext from '@hooks/useMdx'
import hydrate from 'next-mdx-remote/hydrate'
import { MdxRemote } from 'next-mdx-remote/types'

export interface MdxRendererProps {
  components: MdxRemote.Components
}

export const MdxRenderer = ({ components }: MdxRendererProps): JSX.Element => {
  const mdx = useMdxContext()
  const content = mdx ? hydrate(mdx, { components }) : null

  return <>{content}</>
}

export default MdxRenderer
