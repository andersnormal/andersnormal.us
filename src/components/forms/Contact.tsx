import React, { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
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
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

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
  inputRef,
  register,
  name,
  isSubmitting,
  placeholder,
  onSubmit
}) => {
  return (
    <Input
      focusBorderColor="none"
      fontSize="5xl"
      name={`${name}`}
      ref={el => {
        inputRef.current[name] = el
        register(el)
      }}
      isDisabled={isSubmitting}
      borderRadius="0"
      border="none"
      background="gray.100"
      placeholder={placeholder}
      py={12}
      onKeyPress={e => {
        if (e.code === 'Enter' || e.code === 'NumpadEnter') {
          onSubmit()
        }
      }}
    />
  )
}

const StepSelect = ({
  children,
  name,
  inputRef,
  placeholder,
  register,
  isSubmitting,
  onSubmit
}) => {
  return (
    <Select
      focusBorderColor="none"
      fontSize="5xl"
      placeholder={placeholder}
      isDisabled={isSubmitting}
      height="6rem"
      background="gray.100"
      borderRadis="0"
      lineHeight="inherit"
      border="none"
      name={`${name}`}
      ref={el => {
        inputRef.current[name] = el
        register(el)
      }}
      onKeyPress={e => {
        if (e.code === 'Enter' || e.code === 'NumpadEnter') {
          onSubmit()
        }
      }}
    >
      {children}
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

const steps = [
  {
    key: 'full_name',
    label: 'What is your name?',
    placeholder: 'Sherlock Holmes',
    validation: yup.string().label('Full Name').required(),
    Component: StepInput
  },
  {
    key: 'business',
    label: 'What is your business name?',
    placeholder: 'Holmes & Co',
    validation: yup.string().label('Business name').required(),
    Component: props => (
      <StepSelect {...props}>
        <option value="">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </StepSelect>
    )
  },
  {
    key: 'email',
    label: 'What is your email address?',
    placeholder: 'sherlock@holmes.co.uk',
    validation: yup.string().email().required(),
    Component: StepInput
  },
  {
    key: 'conferencing',
    label: 'What is your preference?',
    placeholder: 'sherlock@holmes.co.uk',
    Component: StepInput
  },
  {
    key: 'solution',
    label: 'What do you want to talk about?',
    placeholder: 'sherlock@holmes.co.uk',
    Component: StepInput
  }
]

export const Contact = () => {
  const [step, setStep] = useState(0)
  const inputRef = useRef([])
  const formRef = useRef()
  const { handleSubmit, errors, register, reset, trigger, formState } = useForm(
    {
      resolver: yupResolver(
        yup
          .object()
          .shape(
            steps.reduce(
              (prev, curr) => ({ ...prev, [curr.key]: curr.validation }),
              {}
            )
          )
      )
    }
  )

  const onSubmit = async data => {
    function timeout(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }

    await timeout(3000)

    reset()
    setStep(() => 0)
    const next = steps[0].key
    inputRef.current[next].focus()

    return true
  }

  const onClick = async key => {
    if (!(await trigger(key))) {
      return
    }

    if (step + 1 === steps.length) {
      await handleSubmit(onSubmit)()
      return
    }

    setStep(() => step + 1)
    const next = steps[steps.findIndex(step => step.key === key) + 1].key
    inputRef.current[next].focus()
  }

  return (
    <Box width="100%">
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
        <Box>
          {steps.map(({ Component, key, ...props }) => (
            <Step
              cmp={Component}
              key={`${key}`}
              name={key}
              show={steps[step].key === key}
              register={register}
              onSubmit={() => onClick(key)}
              validating={formState.isValidating}
              inputRef={inputRef}
              isSubmitting={formState.isSubmitting}
              {...props}
            />
          ))}
          <Box>
            <Progress
              colorScheme="gray"
              background="gray.200"
              value={(step / steps.length) * 100}
              isIndeterminate={formState.isSubmitting}
            />
            <Flex justifyContent="flex-end">
              <Heading as="h4" size="md" colorScheme="gray" flexGrow={1}>
                {Object.values(errors)?.shift()?.message}
              </Heading>
              <Heading as="h4" size="md" colorScheme="gray">
                {`${step + 1} / ${steps.length}`}
              </Heading>
            </Flex>
          </Box>
        </Box>
      </form>
    </Box>
  )
}

export default Contact
