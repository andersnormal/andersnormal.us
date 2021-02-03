import React, { useState } from 'react'
import { Box, Text, Heading, useDisclosure, Portal } from '@chakra-ui/react'
import { CustomButton } from '@components/forms/Button'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  VStack,
  HStack,
  Radio,
  RadioGroup,
  Input,
  FormHelperText,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalOverlay,
  ModalFooter,
  Button
} from '@chakra-ui/react'
import { FaVideo } from 'react-icons/fa'
import useModal from '@hooks/useModal'
import Overlay from '@components/modal/Overlay'
import { useTranslation } from 'next-i18next'
import { useForm } from 'react-hook-form'
import DatePicker from 'react-datepicker'

const ChatButton = props => {
  if (!process.browser) {
    return null
  }

  const [startDate, setStartDate] = useState(new Date())
  const { show, RenderModal } = useModal(Overlay)
  const { t } = useTranslation('chat')
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => console.log(data)
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      {/* <RenderModal ref={props.containerRef}>
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

      </RenderModal> */}
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Oh, Yes. Say Hi.</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <form onSubmit={handleSubmit(onSubmit)}>
                <VStack spacing="24px">
                  <FormControl id="name" isRequired>
                    <FormLabel>Your name</FormLabel>
                    <Input placeholder="Name" />
                  </FormControl>
                  <FormControl id="company">
                    <FormLabel>Your company</FormLabel>
                    <Input placeholder="Company" />
                  </FormControl>
                  <FormControl id="email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" />
                    <FormHelperText>
                      We'll never share your email.
                    </FormHelperText>
                  </FormControl>
                  <DatePicker
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                  />
                  <FormControl as="fieldset" isRequired>
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
                    <FormHelperText>
                      Select only if you're a fan.
                    </FormHelperText>
                  </FormControl>
                </VStack>
              </form>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost">{t('submit')}</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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
        onClick={onOpen}
      >
        <FaVideo style={{ marginRight: 4 }} />
        <Text px={2}>Let&apos;s have a chat!</Text>
      </Box>
    </>
  )
}

export default ChatButton
