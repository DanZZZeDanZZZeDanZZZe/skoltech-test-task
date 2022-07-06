// import { Box, Container } from "@mui/material"
import { SchemaItem } from "../../types"
import { isBoolean, isEnum, isInteger, isObject, isString } from "../../utils"
import { FormBooleanField, FormNumberField, FormSelectField } from "../form-items"

interface FormBuilderProps {
  schema: SchemaItem
}

interface SchemaMapperProps extends FormBuilderProps {
  label?: string
}

const SchemaMapper = ({ schema, label }: SchemaMapperProps): JSX.Element => {
  console.log(schema)
  if (isEnum(schema)) {
    const props = {
      items: schema.enum,
      label,
    }
    return <FormSelectField {...props} />
  }

  if (isInteger(schema)) {
    const props = {
      label,
    }
    return <FormNumberField {...props} />
  }

  if (isBoolean(schema)) {
    const props = {
      label,
    }
    return <FormBooleanField {...props} />
  }

  if (isString(schema)) {
    const props = {
      label,
    }
    return <FormNumberField {...props} />
  }

  if (isObject(schema)) {
    const items = Object.entries<SchemaItem>(schema.properties)

    return (
      <>
        {items.map(([field, value]) => {
          const props = {
            label: field,
            schema: value,
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
  return <SchemaMapper schema={schema} />
}
