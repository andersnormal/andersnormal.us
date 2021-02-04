import React from 'react'
import Consent from '@components/consent/consent'

export function withConsent<T>(WrappedComponent: React.ComponentType<T>) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component'

  const ComponentWithConsent = (...props) => {
    // props comes afterwards so the can override the default ones.
    return (
      <>
        <WrappedComponent {...props} />
        <Consent />
      </>
    )
  }

  ComponentWithConsent.displayName = `withConsent(${displayName})`

  return ComponentWithConsent
}

export default withConsent
