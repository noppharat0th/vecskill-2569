import jwt from 'jsonwebtoken'
import type { H3Event } from 'h3'
import { AuthPayload } from '~~/shared/types/user'

export function reqAuth(event: H3Event): AuthPayload {
  const token = getCookie(event, 'auth_token')

  if (!token) {
    throw createError({ statusCode: 401, message: 'กรุณาเข้าสู่ระบบ' })
  }

  try {
    return jwt.verify(token, process.env.JWT_SECRET!) as AuthPayload
  } catch {
    throw createError({ statusCode: 401, message: 'Token ไม่ถูกต้องหรือหมดอายุ' })
  }
}