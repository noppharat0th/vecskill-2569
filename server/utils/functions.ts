
// hander error
export function throwError(statusCode: number, message: string): never {
  throw createError({ statusCode, message })
}

// reqFields
export function reqFields(values: unknown[]) {
  if(!values.every(Boolean)) {
    throwError(400, 'Please complete all information')
  }
}