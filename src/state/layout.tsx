import React from 'react'
import { LayoutQueryQuery } from '../generated-types'

export type LayoutQueryResult = LayoutQueryQuery
export interface LayoutProviderProps {
  children: React.ReactNode
  layout: LayoutQueryResult
}

const LayoutContext = React.createContext<LayoutQueryResult | null>(null)

export const LayoutProvider = ({
  children,
  layout
}: LayoutProviderProps): JSX.Element => {
  return (
    <LayoutContext.Provider value={layout}>{children}</LayoutContext.Provider>
  )
}
export const LayoutConsumer = LayoutContext.Consumer
export default LayoutContext
