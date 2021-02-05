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
  Flex,
  SlideFade,
  Button,
  EditableInput,
  forwardRef,
  Spacer,
  FormErrorMessage,
  Progress,
  FormHelperText
} from '@chakra-ui/react'
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

const Step1 = ({ key, show, register = null, errors, onClick }) => {
  return (
    <Box display={show ? 'block' : 'none'}>
      <FormControl
        htmlFor="email"
        width={{ base: '100%', lg: '48%' }}
        py={6}
        isInvalid={errors.email}
      >
        <SlideFade key={key} in={show} variants={variants}>
          <FormLabel>Email address</FormLabel>
        </SlideFade>
        <Input
          name="email"
          ref={register}
          onKeyPress={e => {
            if (e.code === 'Enter' || e.code === 'NumpadEnter') {
              onClick()
            }
          }}
        />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>
      <Button onClick={onClick}>Test</Button>
    </Box>
  )
}

const Step2 = ({ key, register = null, errors, onClick, show }) => {
  return (
    <Box display={show ? 'block' : 'none'}>
      <FormControl
        htmlFor="name"
        width={{ base: '100%', lg: '48%' }}
        py={6}
        isInvalid={errors.name}
      >
        <SlideFade key={key} in={show} variants={variants}>
          <FormLabel>Name</FormLabel>
        </SlideFade>

        <Input
          name="name"
          ref={register}
          onKeyDown={e => {
            if (e.code === 'Enter' || e.code === 'NumpadEnter') {
              onClick()
            }
          }}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
      <Button onClick={onClick}>Test</Button>
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
            />
          ))}
          <Progress value={(step / steps.length) * 100} />
          <Text>{`${step + 1} / ${steps.length}`}</Text>
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
        <Button type="submit">Submit</Button>
      </form>
    </Box>
  )
}

export default Contact
