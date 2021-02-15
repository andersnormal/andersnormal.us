import React from 'react'
import CookieConsent, { Cookies } from 'react-cookie-consent'
import { Flex, Text, Button, Link, SlideFade } from '@chakra-ui/react'

const Consent = (): JSX.Element => {
  const onDecline = () => {}
  const onAccept = () => {}

  return (
    <CookieConsent
      location="bottom"
      cookieName="consent"
      buttonText="🤝 Accept"
      declineButtonText="✋ Decline"
      // style={{ background: '#2B373B' }}
      // buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
      style={{ background: 'black' }}
      contentStyle={{}}
      expires={150}
      ButtonComponent={Button}
      enableDeclineButton={true}
      onDecline={onDecline}
      onAccept={onAccept}
    >
      <Flex>
        <Text colorScheme="gray">
          ⚡️ Surprise, surprise! Our website uses{' '}
          <Link as="a" href="/privacy">
            <strong>Cookies</strong>
          </Link>
          . Please <strong>🤝 accept</strong> or <strong>✋ or not.</strong>
        </Text>
      </Flex>
    </CookieConsent>
  )
}

export default Consent
