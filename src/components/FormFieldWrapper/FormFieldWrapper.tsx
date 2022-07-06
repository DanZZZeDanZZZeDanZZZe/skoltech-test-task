import { FormControl, InputLabel } from "@mui/material"
import { cloneElement, useRef } from "react"

import { v4 as uuid } from "uuid"

interface FormFieldWrapperProps {
  label?: string
  isSelect?: boolean
  children: JSX.Element
}

interface AdditionalProps {
  id: string
  labelid?: string
  margin: "normal"
  label?: string
}

export const FormFieldWrapper = ({
  label,
  children,
  isSelect,
}: FormFieldWrapperProps): JSX.Element => {
  const idRef = useRef(uuid())

  const additionalProps: AdditionalProps = {
    label,
    id: idRef.current,
    margin: "normal",
  }

  if (label) {
    additionalProps.labelid = `label-${idRef.current}`
  }

  const element = cloneElement(children, additionalProps)

  return (
    <FormControl fullWidth sx={{ margin: "1rem" }}>
      {label && (
        <InputLabel id={additionalProps.labelid}>
          {isSelect ? label : null}
        </InputLabel>
      )}
      {element}
    </FormControl>
  )
}
