import React from 'react'
import { LayoutQueryQuery, useLayoutQueryQuery } from '../generated-types'

export type LayoutQueryResult = LayoutQueryQuery
export interface LayoutProviderProps {
  children: React.ReactNode
  locale: string
}

const LayoutContext = React.createContext<LayoutQueryResult | null>(null)

export const LayoutProvider = ({
  children,
  locale
}: LayoutProviderProps): JSX.Element => {
  const queryOptions = {
    displayName: 'LAYOUT_QUERY',
    variables: {},
    context: {
      'gcms-locale': locale
    }
  }

  const { data } = useLayoutQueryQuery(queryOptions)

  return (
    <LayoutContext.Provider value={data}>{children}</LayoutContext.Provider>
  )
}
export const LayoutConsumer = LayoutContext.Consumer
export default LayoutContext
