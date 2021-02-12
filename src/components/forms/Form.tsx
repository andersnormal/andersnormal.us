import React from 'react'

export interface FormStepContextMethods {
  onKeyPress: (
    e: React.KeyboardEvent<HTMLInputElement | HTMLSelectElement>
  ) => Promise<void>
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export interface FormStepProps {
  children: React.ReactNode
}
export type FormStepProviderProps = FormStepProps & FormStepContextMethods

const FormStepContext = React.createContext<FormStepContextMethods>(null)

export const FormStepProvider = ({
  children,
  ...props
}: FormStepProviderProps): JSX.Element => {
  return (
    <FormStepContext.Provider value={{ ...props }}>
      {children}
    </FormStepContext.Provider>
  )
}

export const useFormStepProvider = (): FormStepContextMethods => {
  return React.useContext(FormStepContext)
}

export const FormStepConsumer = FormStepContext.Consumer
export default FormStepProvider
