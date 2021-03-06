import { Control, UseControllerProps } from "react-hook-form"

export type SchemaTypeName = "string" | "integer" | "boolean" | "array" | "object"

export interface SchemaTypeBase {
  type: SchemaTypeName
}

export interface SchemaString extends SchemaTypeBase {
  type: "string"
  minLength: number
  maxLength: number
}

export interface SchemaBoolean extends SchemaTypeBase {
  type: "boolean"
}

export interface SchemaInteger extends SchemaTypeBase {
  type: "integer"
  minimum: number
  maximum: number
}

export interface SchemaObject extends SchemaTypeBase {
  type: "object"
  properties: Record<string, SchemaItem>
  required: string[]
}

export interface SchemaArray extends SchemaTypeBase {
  type: "array"
  maxItems: number
  minItems: number
  items: SchemaItem
}

export interface SchemaEnum {
  enum: string[]
}

export type SchemaType =
  | SchemaString
  | SchemaBoolean
  | SchemaInteger
  | SchemaObject
  | SchemaArray

export type SchemaItem = SchemaType | SchemaEnum

export type FormFieldRules = UseControllerProps["rules"]

export interface FormFieldBase {
  label?: string
  control: Control
  required?: boolean
}

export type FormFieldProps<T extends SchemaTypeBase | SchemaEnum> = T & FormFieldBase

export interface FormFieldWrapperProps {
  label?: string
  isSelect?: boolean
  children: JSX.Element
  rules?: FormFieldRules
  control: Control
}
