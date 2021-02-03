import React from 'react'
import { Box, Text, Heading } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  VStack,
  HStack,
  Button,
  Radio,
  RadioGroup,
  Input,
  FormHelperText
} from '@chakra-ui/react'
import { FaVideo } from 'react-icons/fa'
import useModal from '@hooks/useModal'
import Overlay from '@components/modal/Overlay'
import { useTranslation } from 'next-i18next'
import { useForm } from 'react-hook-form'

const ChatButton = props => {
  if (!process.browser) {
    return null
  }

  const { show, RenderModal } = useModal(Overlay)
  const { t } = useTranslation('chat')
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <>
      <RenderModal>
        <Box
          w={{ md: '78%' }}
          bgGradient="linear(to-tl,  #fff, #7928CA)"
          borderRadius="1em"
          backgroundClip="text"
        >
          <Heading
            fontSize={{ base: '48px', md: '64px', lg: '76px' }}
            bgGradient="linear(to-tl,  #fff, #7928CA)"
            bgClip="text"
          >
            {t('jingle')}
          </Heading>
        </Box>
        <Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing="24px">
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input placeholder="Name" />
              </FormControl>
              <FormControl id="company">
                <FormLabel>Company</FormLabel>
                <Input placeholder="Company" />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
                <FormHelperText>We'll never share your email.</FormHelperText>
              </FormControl>
              <FormControl as="fieldset">
                <FormLabel as="legend">
                  Favorite Video Conferencing Toll
                </FormLabel>
                <RadioGroup defaultValue="Itachi">
                  <VStack align="stretch">
                    <Radio value="Sasuke">Google Meet</Radio>
                    <Radio value="Nagato">Zoom</Radio>
                    <Radio value="Itachi">Microsoft Teams</Radio>
                  </VStack>
                </RadioGroup>
                <FormHelperText>Select only if you're a fan.</FormHelperText>
              </FormControl>
              <Button
                mt={4}
                colorScheme="teal"
                isLoading={props.isSubmitting}
                type="submit"
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </RenderModal>
      <Box
        as="button"
        display={'flex'}
        position={'fixed'}
        left={'50%'}
        bottom={'5vh'}
        lineHeight="1.2"
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        border="1px"
        alignItems={'center'}
        borderRadius={12}
        borderColor={'black'}
        py={4}
        px={8}
        fontSize="18px"
        fontWeight="semibold"
        bg="#000"
        color="#fff"
        transform={'translate3d(-50%,0,0)'}
        outline={'none'}
        _hover={{ bg: '#fff', color: '#000' }}
        _active={{
          transform: 'translate3d(-50%,-25%,0)'
        }}
        _focus={{
          borderColor: 'black'
        }}
        onClick={show}
      >
        <FaVideo style={{ marginRight: 4 }} />
        <Text px={2}>Let&apos;s have a chat!</Text>
      </Box>
    </>
  )
}

export default ChatButton
