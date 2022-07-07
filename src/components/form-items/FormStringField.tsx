import { TextField } from "@mui/material"
import { Control } from "react-hook-form"

import { FormFieldProps, SchemaString } from "../../types"
import { FormFieldWrapper } from "../FormFieldWrapper"

export const FormStringField = (
  props: FormFieldProps<SchemaString>
): JSX.Element => {
  console.log(props.required)

  const rules = {
    required: props.required,
  }

  return (
    <FormFieldWrapper {...props} rules={rules}>
      <TextField />
    </FormFieldWrapper>
  )
}
