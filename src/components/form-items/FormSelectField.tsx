import { useRef, useState } from "react"

import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import { v4 as uuid } from "uuid"

import { SchemaEnum } from "../../types"

interface FormSelectFieldProps {
  label?: string
  items: SchemaEnum["enum"]
}

export const FormSelectField = ({
  label,
  items,
}: FormSelectFieldProps): JSX.Element => {
  const idRef = useRef(uuid())
  const fieldId = idRef.current
  const labelId = label ? `label-${idRef.current}` : label
  const [state, setState] = useState("")

  const handleChange = (event: SelectChangeEvent) => {
    setState(event.target.value)
  }

  return (
    <FormControl fullWidth>
      {labelId && <InputLabel id={labelId}>{label}</InputLabel>}
      <Select
        labelId={labelId}
        id={fieldId}
        value={state}
        label={label}
        onChange={handleChange}
      >
        {items.map((value) => (
          <MenuItem value={value}>{value}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
