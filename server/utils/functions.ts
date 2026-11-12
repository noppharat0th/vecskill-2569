import { Response } from "~~/shared/types/user"

// hander error
export function throwError(statusCode: number, message: string): never {
  throw createError({ statusCode, message })
}

// send response
export function sendRes<T>(data: T): Response<T> {
  return {
    status: 'success',
    data
  }
}

// reqFields
export function reqFields(values: unknown[]) {
  if(!values.every(Boolean)) {
    throwError(400, 'Please complete all information')
  }
}

// exist
export const exist = async<T extends object>(
  table: string,
  where: Partial<T>,
  msg = "ไม่พบข้อมูล"
): Promise<T> => {
  const row = await db<T>(table).where(where).first()

  if(!row) throwError(404, msg)

  return row as T
}