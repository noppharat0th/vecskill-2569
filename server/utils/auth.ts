import jwt from 'jsonwebtoken'
import type { H3Event } from 'h3'
import { AuthPayload } from '~~/shared/types/user'
import { throwError } from './functions'

// Check Token , Cookie
export function reqAuth(event: H3Event): AuthPayload {
  const token = getCookie(event, 'auth_token')
  if (!token) throwError(401,  'plase login!')

  try {
    return jwt.verify(token, process.env.JWT_SECRET!) as AuthPayload
  } catch {
    throwError(401 , 'Token Invalid!')
  }
}

// Check Roles
// export function reqRole(event: H3Event, allowedRoles: AuthPayload['role'][]): AuthPayload {
//   const user = reqAuth(event)
//   if (!allowedRoles.includes(user.role)) {
//     throwError(403, 'ไม่มีสิทธิ์เข้าถึง')
//   }
//   return user
// }