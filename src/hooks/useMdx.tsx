import React from 'react'
import MdxContext, { MdxResult } from '@state/mdx'

const useMdxContext = (): MdxResult => {
  return React.useContext(MdxContext)
}

export default useMdxContext
