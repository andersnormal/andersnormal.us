/**
 * Test Footer
 *
 * @group components/layout
 */

import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Footer from './Footer'
import { IntlProvider } from 'react-intl'
import config from '../../../next.config'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

afterEach(cleanup)

const customRender = (ui, { providerProps, ...renderProps }) => {
  return render(
    <IntlProvider {...providerProps}>{ui}</IntlProvider>,
    renderProps
  )
}

describe('<Footer />', () => {
  it('should render <Footer />', async () => {
    useRouter.mockImplementationOnce(() => ({
      pathname: '',
      query: { product: 'coffee' },
      ...config.i18n
    }))

    const { getByTestId } = customRender(<Footer />, {
      providerProps: {
        locale: config.i18n.defaultLocale,
        defaultLocale: config.i18n.defaultLocale,
        messages: locales[config.i18n.defaultLocale]['/']
      }
    })

    const container = getByTestId('boilerplate')

    expect(container).toBeInTheDocument()
    expect(container).toBeVisible()
    expect(container.children.length).toBe(3)
  })
})
