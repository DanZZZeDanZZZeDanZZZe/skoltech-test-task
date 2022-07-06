import { Checkbox } from "@mui/material"

import { SchemaBoolean } from "../../types"
import { FormFieldWrapper } from "../FormFieldWrapper"

interface FormStringFieldProps extends Omit<SchemaBoolean, "type"> {
  label?: string
}

export const FormBooleanField = ({ label }: FormStringFieldProps): JSX.Element => {
  return (
    <FormFieldWrapper label={label}>
      <Checkbox />
    </FormFieldWrapper>
  )
}
