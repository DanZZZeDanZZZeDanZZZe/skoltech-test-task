import { TextField } from "@mui/material"

import { SchemaInteger } from "../../types"
import { FormFieldWrapper } from "../FormFieldWrapper"

interface FormNumberFieldProps extends Omit<SchemaInteger, "type"> {
  label: string
}

export const FormNumberField = ({
  label,
  minimum,
  maximum,
}: FormNumberFieldProps): JSX.Element => {
  return (
    <FormFieldWrapper label={label}>
      <TextField inputProps={{ min: minimum, max: maximum }} type="number" />
    </FormFieldWrapper>
  )
}
