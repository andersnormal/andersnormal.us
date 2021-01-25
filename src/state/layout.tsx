import React from 'react'
import { LayoutQueryQuery } from '../generated-types'

export type LayoutQueryResult = LayoutQueryQuery

const LayoutContext = React.createContext<LayoutQueryResult>(null)

export const LayoutProvider = ({ children, value }) => {
  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  )
}
export const LayoutConsumer = LayoutContext.Consumer
export default LayoutContext
