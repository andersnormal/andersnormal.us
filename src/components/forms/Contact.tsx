import React, { useState, useRef } from 'react'
import { useForm, useFormContext, FormProvider } from 'react-hook-form'
import FormStepProvider, { useFormStepProvider } from './Form'
import useLayout from '@hooks/useLayout'
import {
  Box,
  EASINGS,
  Input,
  FormControl,
  FormLabel,
  Select,
  InputRightAddon,
  Flex,
  SlideFade,
  IconButton,
  Progress,
  Heading,
  InputGroup
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

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

const StepInput = ({ name, placeholder, ...props }) => {
  const { register, formState } = useFormContext()
  const { onKeyPress } = useFormStepProvider()

  return (
    <Input
      focusBorderColor="none"
      fontSize="5xl"
      autoFocus
      name={`${name}`}
      ref={el => {
        if (el) el.focus()
        return register(
          { name: name },
          { ...{ ref: el, required: props.required }, ...props.rules }
        )
      }}
      isDisabled={formState.isSubmitting}
      borderRadius="0"
      border="none"
      background="gray.100"
      placeholder={placeholder}
      py={12}
      onKeyPress={onKeyPress}
    />
  )
}

const StepSelect = ({ name, placeholder, onSubmit, ...props }) => {
  const { register, formState } = useFormContext()
  const { onKeyPress } = useFormStepProvider()

  return (
    <Select
      focusBorderColor="none"
      fontSize="5xl"
      placeholder={placeholder}
      isDisabled={formState.isSubmitting}
      height="6rem"
      background="gray.100"
      borderRadius="0"
      lineHeight="inherit"
      border="none"
      name={`${name}`}
      ref={el => {
        if (el) el.focus()
        return register(
          { name: name },
          { ...{ ref: el, required: props.required }, ...props.rules }
        )
      }}
      onKeyPress={onKeyPress}
    >
      {props.options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.option}
        </option>
      ))}
    </Select>
  )
}

const Step = ({ cmp: Component, ...props }) => {
  const { formState } = useFormContext() // retrieve all hook methods

  return (
    <Box display={props.show ? 'block' : 'none'}>
      <FormControl
        id={props.name}
        htmlFor={props.name}
        py={6}
        padding={0}
        colorScheme="black"
      >
        <SlideFade in={props.show} variants={variants} offsetY={32}>
          <FormLabel>
            <Heading as="h3" size="2xl" py={4}>
              {props.label}
            </Heading>
          </FormLabel>
        </SlideFade>
        <InputGroup>
          <Component {...props} />
          <InputRightAddon border="none" borderRadius="0" height="auto">
            <IconButton
              aria-label="Next"
              color="gray.400"
              onClick={() => props.onSubmit()}
              icon={<ArrowForwardIcon boxSize={12} />}
              bg="transparent"
              isDisabled={formState.isSubmitting}
              isLoading={formState.isValidating}
            />
          </InputRightAddon>
        </InputGroup>
      </FormControl>
    </Box>
  )
}

const fields = new Map([
  ['FormInput', StepInput],
  ['FormSelect', StepSelect]
])

export const Contact = (): JSX.Element => {
  const layout = useLayout()
  const [step, setStep] = useState(0)

  const formRef = useRef<HTMLFormElement>()
  const methods = useForm()

  const onKeyPress = async (e: React.KeyboardEvent): Promise<void> => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter')
      return checkForm(e.target['name'])
  }

  const onSubmit = async data => {
    try {
      const response = await fetch('/api/submit', {
        method: 'Post',
        body: JSON.stringify(data)
      })

      if (!response.ok)
        throw new Error(`Something went wrong submitting the form.`)
    } catch (err) {}
  }

  const checkForm = async (key?) => {
    if (!(await methods.trigger(key))) return
    if (step + 1 === layout.page.form.fields.length)
      return onSubmit(methods.getValues())

    setStep(() => step + 1)
  }

  return (
    <Box width="100%">
      <FormProvider {...methods}>
        <FormStepProvider {...{ onKeyPress }}>
          <form ref={formRef}>
            <Box>
              {layout.page.form.fields.map(
                ({ __typename, ...props }, index) => {
                  const Field = fields.get(__typename)

                  if (!Field) return null

                  return (
                    <Step
                      cmp={Field}
                      key={index}
                      show={step === index}
                      {...props}
                    />
                  )
                }
              )}

              <Box>
                <Progress
                  colorScheme="gray"
                  background="gray.200"
                  value={(step / layout.page.form.fields.length) * 100}
                  isIndeterminate={methods.formState.isSubmitting}
                />
                <Flex justifyContent="flex-end">
                  <Heading as="h4" size="md" colorScheme="gray" flexGrow={1}>
                    {Object.values(methods.errors)?.shift()?.message}
                  </Heading>
                  <Heading as="h4" size="md" colorScheme="gray">
                    {`${step + 1} / ${layout.page.form.fields.length}`}
                  </Heading>
                </Flex>
              </Box>
            </Box>
          </form>
        </FormStepProvider>
      </FormProvider>
    </Box>
  )
}

export default Contact
