import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  Grid,
  Box,
  Fade,
  Text,
  EASINGS,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  RadioGroup,
  Stack,
  Radio,
  InputRightAddon,
  Flex,
  InputLeftAddon,
  SlideFade,
  IconButton,
  Button,
  EditableInput,
  forwardRef,
  Spacer,
  FormErrorMessage,
  Progress,
  Heading,
  FormHelperText,
  InputGroup
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
  email: yup.string().required(),
  name: yup.string().required()
})

const transitions = {
  enter: {
    duration: 0.4,
    ease: EASINGS.easeOut
  },
  exit: {
    duration: 0.4,
    ease: EASINGS.easeIn
  }
}

const variants = {
  initial: props => ({
    opacity: 0,
    x: props.offsetX,
    y: props.offsetY,
    transition: transitions.exit
  }),
  exit: props => ({
    opacity: 0,
    transition: transitions.exit,
    ...(props.reverse && {
      x: props.offsetX,
      y: props.offsetY
    }),
    ...(!props.reverse && {
      transitionEnd: {
        x: props.offsetX,
        y: props.offsetY
      }
    })
  }),
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: transitions.enter
  }
}

const Step1 = ({ key, show, register = null, errors, onClick, validating }) => {
  return (
    <Box display={show ? 'block' : 'none'}>
      <FormControl htmlFor="email" py={6} padding={0} colorScheme="black">
        <SlideFade key={key} in={show} variants={variants} offsetY={32}>
          <FormLabel>
            <Heading as="h3" size="2xl" py={4}>
              What is your name?
            </Heading>
          </FormLabel>
        </SlideFade>
        <InputGroup>
          <Input
            focusBorderColor="none"
            fontSize="5xl"
            name="email"
            ref={register}
            borderRadius="0"
            border="none"
            background="gray.100"
            placeholder="Sherlock Holmes"
            py={12}
            onKeyPress={e => {
              if (e.code === 'Enter' || e.code === 'NumpadEnter') {
                onClick()
              }
            }}
          />
          <InputRightAddon border="none" borderRadius="0" height="auto">
            <IconButton
              aria-label="Next"
              color="gray.400"
              icon={<ArrowForwardIcon boxSize={12} />}
              bg="transparent"
              isLoading={validating}
            />
          </InputRightAddon>
        </InputGroup>
        {/* <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage> */}
      </FormControl>
    </Box>
  )
}

const Step2 = ({ key, register = null, errors, onClick, show, validating }) => {
  return (
    <Box display={show ? 'block' : 'none'}>
      <FormControl htmlFor="name" py={6} padding={0} colorScheme="gray">
        <SlideFade key={key} in={show} variants={variants} offsetY={32}>
          <FormLabel fontSize={{ base: '48px', md: '64px', lg: '76px' }}>
            What is your name?
          </FormLabel>
        </SlideFade>
        <InputGroup>
          <Input
            fontSize={{ base: '32px', md: '38px', lg: '42px' }}
            name="name"
            ref={register}
            borderRadius="0"
            border="none"
            background="gray.100"
            placeholder="Sherlock Holmes"
            py={8}
            onKeyPress={e => {
              if (e.code === 'Enter' || e.code === 'NumpadEnter') {
                onClick()
              }
            }}
          />
          <InputRightAddon border="none" borderRadius="0" py={16}>
            <IconButton
              aria-label="Next"
              icon={<ArrowForwardIcon boxSize={8} />}
              bg="transparent"
              isLoading={validating}
            />
          </InputRightAddon>
        </InputGroup>
        {/* <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage> */}
      </FormControl>
    </Box>
  )
}

const steps = [
  {
    key: 'email',
    Component: Step1
  },
  {
    key: 'name',
    Component: Step2
  }
]

export const Contact = () => {
  const [step, setStep] = useState(0)
  const { handleSubmit, errors, register, trigger, formState } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    console.log(data)
    return
  }

  const onClick = async key => {
    if (await trigger(key)) {
      setStep(() => step + 1)
    }
  }

  return (
    <Box width="100%">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          {steps.map(({ Component, key }) => (
            <Component
              key={key}
              show={steps[step].key === key}
              errors={errors}
              register={register}
              onClick={() => onClick(key)}
              validating={formState.isValidating}
            />
          ))}
          <Box>
            <Progress
              colorScheme="gray"
              background="gray.200"
              value={(step / steps.length) * 100}
            />
            <Flex justifyContent="flex-end">
              <Heading as="h4" size="md" colorScheme="gray">
                {`${step + 1} / ${steps.length}`}
              </Heading>
            </Flex>
          </Box>
        </Box>

        {/* <Flex justifyContent="space-between" wrap="wrap">
          <FormControl id="name" py={6}>
            <Input type="name" placeholder="Start by typing your name..." />
          </FormControl>
          <FormControl id="business" width={{ base: '100%', lg: '48%' }} py={6}>
            <FormLabel>Business name</FormLabel>
            <Input type="business" placeholder="Holmes & CO" />
          </FormControl>
          <FormControl id="email" width={{ base: '100%', lg: '48%' }} py={6}>
            <FormLabel>Email address</FormLabel>
            <Input type="email" placeholder="sherlock@holmes.co.uk" />
          </FormControl>
          <FormControl id="message" width={{ base: '100%', lg: '48%' }} py={6}>
            <FormLabel>Favorite conferencing tool</FormLabel>
            <RadioGroup>
              <Stack direction="row">
                <Radio value="1">Google Meet</Radio>
                <Radio value="2">Microsoft Teams</Radio>
                <Radio value="3">Slack</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
          <FormControl id="message" py={6}>
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Here is a sample placeholder" />
          </FormControl>
          <Box>
            <Button>Send</Button>
          </Box>
        </Flex> */}
      </form>
    </Box>
  )
}

export default Contact
