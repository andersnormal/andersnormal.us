import React from 'react'
import { LayoutQuery, useLayoutQuery } from '../generated-types'

export type LayoutQueryResult = LayoutQuery
export interface LayoutProviderProps {
  children: React.ReactNode
  locale?: string
  slug?: string
}

const LayoutContext = React.createContext<LayoutQueryResult | null>(null)

export const LayoutProvider = ({
  children,
  locale,
  slug
}: LayoutProviderProps): JSX.Element => {
  const queryOptions = {
    displayName: 'LAYOUT_QUERY',
    variables: {
      slug
    },
    context: {
      'gcms-locale': locale
    }
  }

  const { data } = useLayoutQuery(queryOptions)

  return (
    <LayoutContext.Provider value={data}>{children}</LayoutContext.Provider>
  )
}
export const LayoutConsumer = LayoutContext.Consumer
export default LayoutContext
