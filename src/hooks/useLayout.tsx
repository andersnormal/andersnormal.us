import React from 'react'
import LayoutContext, { LayoutQueryResult } from '@state/layout'

const useLayoutContext = (): LayoutQueryResult => {
  return React.useContext(LayoutContext)
}

export default useLayoutContext
