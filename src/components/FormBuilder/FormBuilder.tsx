// import { Box, Container } from "@mui/material"
import { SchemaItem } from "../../types"
import { isBoolean, isEnum, isInteger, isObject, isString } from "../../utils"
import {
  FormBooleanField,
  FormNumberField,
  FormSelectField,
  FormStringField,
} from "../form-items"
import { useForm, Controller, Control } from "react-hook-form"

interface FormBuilderProps {
  schema: SchemaItem
}

interface SchemaMapperProps extends FormBuilderProps {
  label?: string
  control: Control
  required?: boolean
}

const SchemaMapper = ({
  schema,
  label,
  control,
  required = false,
}: SchemaMapperProps): JSX.Element => {
  // console.log(schema)
  if (isEnum(schema)) {
    const props = {
      ...schema,
      label,
      control,
    }
    return <FormSelectField {...props} />
  }

  if (isInteger(schema)) {
    const props = {
      ...schema,
      label,
      control,
      required,
    }
    return <FormNumberField {...props} />
  }

  if (isBoolean(schema)) {
    const props = {
      ...schema,
      label,
      control,
    }
    return <FormBooleanField {...props} />
  }

  if (isString(schema)) {
    const props = {
      ...schema,
      label,
      control,
      required,
    }
    return <FormStringField {...props} />
  }

  if (isObject(schema)) {
    const items = Object.entries<SchemaItem>(schema.properties)
    const { required } = schema

    return (
      <>
        {items.map(([field, value]) => {
          const props = {
            label: field,
            schema: value,
            control,
            required: required.includes(field),
          }
          return <SchemaMapper {...props} />
        })}
      </>
    )
  }

  return <>unknown</>
  // throw new Error("Unknown field")
}

export const FormBuilder = ({ schema }: FormBuilderProps): JSX.Element => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()
  console.log("errors", errors)
  const onSubmit = (data: any) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SchemaMapper schema={schema} control={control} />
      <button>Submit</button>
    </form>
  )
}
