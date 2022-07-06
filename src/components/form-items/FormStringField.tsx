import { TextField } from "@mui/material"

import { SchemaString } from "../../types"
import { FormFieldWrapper } from "../FormFieldWrapper"

interface FormStringFieldProps extends Omit<SchemaString, "type"> {
  label?: string
}

export const FormStringField = ({
  label,
  minLength,
  maxLength,
}: FormStringFieldProps): JSX.Element => {
  return (
    <FormFieldWrapper label={label}>
      <TextField />
    </FormFieldWrapper>
  )
}
