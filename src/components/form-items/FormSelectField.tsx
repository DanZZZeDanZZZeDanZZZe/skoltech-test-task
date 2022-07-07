import { useRef, useState } from "react"

import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import { v4 as uuid } from "uuid"

import { FormFieldProps, SchemaEnum } from "../../types"
import { FormFieldWrapper } from "../FormFieldWrapper"
import { Control } from "react-hook-form"

export const FormSelectField = (props: FormFieldProps<SchemaEnum>): JSX.Element => {
  const [state, setState] = useState("")

  const handleChange = (event: SelectChangeEvent) => {
    setState(event.target.value)
  }

  const rules = {
    required: props.required,
  }

  return (
    <FormFieldWrapper {...props} isSelect rules={rules}>
      <Select value={state} onChange={handleChange}>
        {props.enum.map((value) => (
          <MenuItem value={value}>{value}</MenuItem>
        ))}
      </Select>
    </FormFieldWrapper>
  )
}
