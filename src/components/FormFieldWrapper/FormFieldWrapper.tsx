import { FormControl, InputLabel } from "@mui/material"
import { cloneElement, useRef } from "react"

import { v4 as uuid } from "uuid"

interface FormFieldWrapperProps {
  label?: string
  children: JSX.Element
}

interface Identificators {
  id: string
  labelid?: string
}

export const FormFieldWrapper = ({
  label,
  children,
}: FormFieldWrapperProps): JSX.Element => {
  const idRef = useRef(uuid())

  const ids: Identificators = {
    id: idRef.current,
  }

  if (label) {
    ids.labelid = `label-${idRef.current}`
  }

  const element = cloneElement(children, ids)
  console.log("label", label)
  return (
    <FormControl fullWidth>
      {label && <InputLabel id={ids.labelid}>{label}</InputLabel>}
      {element}
    </FormControl>
  )
}
