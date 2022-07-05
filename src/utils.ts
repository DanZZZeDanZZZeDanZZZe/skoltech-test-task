import {
  SchemaEnum,
  SchemaInteger,
  SchemaItem,
  SchemaString,
  SchemaType
} from "./types"

function hasOwnProperty<T extends string>(
  object: object,
  field: T
): object is Record<T, unknown> {
  return Object.prototype.hasOwnProperty.call(object, field)
}

export function isEnum(item: SchemaItem): item is SchemaEnum {
  return hasOwnProperty(item, "enum")
}

function checkTypeProperty<T extends SchemaType>(
  item: SchemaItem,
  targetValue: T["type"]
) {
  return hasOwnProperty(item, "type") && item.type === targetValue
}

export function isString(item: SchemaItem): item is SchemaString {
  return checkTypeProperty<SchemaString>(item, "string")
}

export function isInteger(item: SchemaItem): item is SchemaInteger {
  return checkTypeProperty<SchemaInteger>(item, "integer")
}
