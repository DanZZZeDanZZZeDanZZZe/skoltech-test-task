import { Checkbox } from "@mui/material"

import { FormFieldProps, SchemaBoolean } from "../../types"
import { FormFieldWrapper } from "../FormFieldWrapper"

export const FormBooleanField = (
  props: FormFieldProps<SchemaBoolean>
): JSX.Element => {
  const rules = {
    required: props.required,
  }

  return (
    <FormFieldWrapper {...props} rules={rules}>
      <Checkbox />
    </FormFieldWrapper>
  )
}
