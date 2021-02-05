import React, { useState, useCallback } from 'react'
import { Fade, Text, Button } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

export const FormWizard = ({ schema, children }) => {
  const [step, setStep] = useState(children.length - 1)
  const { handleSubmit, errors, register, formState } = useForm({
    resolver: yupResolver(schema)
  })
  const onChange = () => {}

  return (
    <form>
      {children.map((cmp, idx) => (
        <Fade key={idx} in={step === idx}>
          <Text>
            {step} / {children.length}
          </Text>
          {React.cloneElement(cmp, { ref: register })}
          <Button>Next</Button>
        </Fade>
      ))}
    </form>
  )
}

export default FormWizard
