import { TextField } from "@mui/material"
import { Control } from "react-hook-form"

import { FormFieldProps, SchemaInteger } from "../../types"
import { FormFieldWrapper } from "../FormFieldWrapper"

export const FormNumberField = (
  props: FormFieldProps<SchemaInteger>
): JSX.Element => {
  const rules = {
    required: props.required,
  }

  return (
    <FormFieldWrapper {...props} rules={rules}>
      <TextField
        inputProps={{ min: props.minimum, max: props.maximum }}
        type="number"
      />
    </FormFieldWrapper>
  )
}
