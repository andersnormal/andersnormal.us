import React from 'react'
import CookieConsent, { Cookies } from 'react-cookie-consent'
import { useTranslation } from 'next-i18next'

const Consent = (): JSX.Element => {
  const { t } = useTranslation('footer')
  const onDecline = () => {}
  const onAccept = () => {}

  return (
    <CookieConsent
      location="bottom"
      buttonText="Sure man!!"
      cookieName="myAwesomeCookieName2"
      style={{ background: '#2B373B' }}
      buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
      expires={150}
      onDecline={onDecline}
      onAccept={onAccept}
    >
      This website uses cookies to enhance the user experience.{' '}
      <span style={{ fontSize: '10px' }}>This bit of text is smaller :O</span>
    </CookieConsent>
  )
}

export default Consent
