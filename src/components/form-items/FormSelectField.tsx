import { useRef, useState } from "react"

import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import { v4 as uuid } from "uuid"

import { SchemaEnum } from "../../types"
import { FormFieldWrapper } from "../FormFieldWrapper"

interface FormSelectFieldProps {
  label?: string
  items: SchemaEnum["enum"]
}

export const FormSelectField = ({
  label,
  items,
}: FormSelectFieldProps): JSX.Element => {
  const [state, setState] = useState("")

  const handleChange = (event: SelectChangeEvent) => {
    setState(event.target.value)
  }

  return (
    <FormFieldWrapper label={label}>
      <Select value={state} onChange={handleChange}>
        {items.map((value) => (
          <MenuItem value={value}>{value}</MenuItem>
        ))}
      </Select>
    </FormFieldWrapper>
  )
}
