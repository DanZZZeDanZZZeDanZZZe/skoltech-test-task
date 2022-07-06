import {
  SchemaArray,
  SchemaBoolean,
  SchemaEnum,
  SchemaInteger,
  SchemaItem,
  SchemaObject,
  SchemaString,
  SchemaType,
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

export function isBoolean(item: SchemaItem): item is SchemaBoolean {
  return checkTypeProperty<SchemaBoolean>(item, "boolean")
}

export function isObject(item: SchemaItem): item is SchemaObject {
  return checkTypeProperty<SchemaObject>(item, "object")
}

export function isArray(item: SchemaItem): item is SchemaArray {
  return checkTypeProperty<SchemaArray>(item, "array")
}
