import { FormControl, InputLabel, Box } from "@mui/material"
import { cloneElement, useRef } from "react"
import { Control, Controller } from "react-hook-form"
import { v4 as uuid } from "uuid"
import { FormFieldWrapperProps } from "../../types"

interface AdditionalProps {
  id: string
  labelid?: string
  margin: "normal"
  label?: string
  fullWidth: true
  error: boolean
  helperText?: string
}

export const FormFieldWrapper = ({
  label,
  children,
  isSelect,
  control,
  rules,
}: FormFieldWrapperProps): JSX.Element => {
  const idRef = useRef(uuid())

  const additionalProps: AdditionalProps = {
    label,
    id: idRef.current,
    margin: "normal",
    fullWidth: true,
    error: false,
  }

  if (label) {
    additionalProps.labelid = `label-${idRef.current}`
  }

  return (
    <Controller
      control={control}
      name={additionalProps.id}
      render={({ field, fieldState }) => {
        const { error } = fieldState

        if (error) {
          additionalProps.error = true
          additionalProps.helperText = error.type
        }

        return (
          <>
            {label && (
              <InputLabel id={additionalProps.labelid}>
                {isSelect ? label : null}
              </InputLabel>
            )}
            {cloneElement(children, { ...additionalProps, ...field })}
          </>
        )
      }}
      rules={rules}
    />
  )
}
