import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { LayoutDocument, LayoutQuery } from '../generated-types'

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
    variables: {
      slug
    },
    context: {
      headers: {
        'gcms-locales': locale
      }
    }
  }

  const { data } = useQuery(LayoutDocument, queryOptions)

  return (
    <LayoutContext.Provider value={data}>{children}</LayoutContext.Provider>
  )
}
export const LayoutConsumer = LayoutContext.Consumer
export default LayoutContext
