import React, { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
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

const StepInput = ({
  register,
  name,
  isSubmitting,
  placeholder,
  onSubmit,
  ...props
}) => {
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
      isDisabled={isSubmitting}
      borderRadius="0"
      border="none"
      background="gray.100"
      placeholder={placeholder}
      py={12}
      onKeyPress={e => {
        if (e.code === 'Enter' || e.code === 'NumpadEnter') {
          onSubmit(name)
        }
      }}
    />
  )
}

const StepSelect = ({
  name,
  placeholder,
  register,
  isSubmitting,
  onSubmit,
  ...props
}) => {
  return (
    <Select
      focusBorderColor="none"
      fontSize="5xl"
      placeholder={placeholder}
      isDisabled={isSubmitting}
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
      onKeyPress={e => {
        if (e.code === 'Enter' || e.code === 'NumpadEnter') {
          onSubmit(name)
        }
      }}
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
              isDisabled={props.isSubmitting}
              isLoading={props.validating}
            />
          </InputRightAddon>
        </InputGroup>
      </FormControl>
    </Box>
  )
}

export const Contact = () => {
  const layout = useLayout()
  const [step, setStep] = useState(0)

  const formRef = useRef()
  const {
    handleSubmit,
    errors,
    register,
    reset,
    trigger,
    formState
  } = useForm()

  const onSubmit = async data => {
    reset()
    setStep(() => 0)

    return true
  }

  const onClick = async (key?) => {
    if (!(await trigger(key))) {
      return
    }

    if (step + 1 === layout.page.form.fields.length) {
      await handleSubmit(onSubmit)()
      return
    }

    setStep(() => step + 1)
  }

  const fields = new Map([
    ['FormInput', StepInput],
    ['FormSelect', StepSelect]
  ])

  return (
    <Box width="100%">
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
        <Box>
          {layout.page.form.fields.map(({ __typename, ...props }, index) => {
            const Field = fields.get(__typename)

            if (!Field) return null

            return (
              <Step
                cmp={Field}
                key={index}
                show={step === index}
                validating={formState.isValidating}
                isSubmitting={formState.isSubmitting}
                register={register}
                onSubmit={onClick}
                {...props}
              />
            )
          })}

          <Box>
            <Progress
              colorScheme="gray"
              background="gray.200"
              value={(step / layout.page.form.fields.length) * 100}
              isIndeterminate={formState.isSubmitting}
            />
            <Flex justifyContent="flex-end">
              <Heading as="h4" size="md" colorScheme="gray" flexGrow={1}>
                {Object.values(errors)?.shift()?.message}
              </Heading>
              <Heading as="h4" size="md" colorScheme="gray">
                {`${step + 1} / ${layout.page.form.fields.length}`}
              </Heading>
            </Flex>
          </Box>
        </Box>
      </form>
    </Box>
  )
}

export default Contact
