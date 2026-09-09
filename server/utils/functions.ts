
// hander error
export function throwError(statusCode: number, message: string): never {
  throw createError({ statusCode, message })
}

