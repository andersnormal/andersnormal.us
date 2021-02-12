import React from 'react'
import Consent from '@components/consent/consent'

export function withConsent() {
  return function <T extends Record<string, unknown>>(
    Component: React.ComponentType<T>
  ): React.FC<T & Record<string, unknown>> {
    const displayName = Component.displayName || Component.name || 'Component'

    const ComponentWithConsent = props => {
      const newProps = { ...props } as T

      return (
        <>
          <Component {...newProps} />
          <Consent />
        </>
      )
    }

    ComponentWithConsent.displayName = `withConsent(${displayName})`

    return ComponentWithConsent
  }
}

export default withConsent
