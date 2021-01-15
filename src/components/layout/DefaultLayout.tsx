import React from 'react'

type DefaultLayoutProps = {
  children: React.ReactChildren
}

const DefaulLayout = ({ children }: DefaultLayoutProps): JSX.Element => {
  return <div>{children}</div>
}

export default DefaulLayout
