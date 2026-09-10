import { query } from '~~/server/utils/db'
import jwt from 'jsonwebtoken'
import type { UserRow } from '~~/server/types/db'
import { throwError } from '~~/server/utils/functions'

export default defineEventHandler(async (event) => {
  const { username, password } = await readBody(event)

  if (!username || !password) throwError(400, 'Please complete all information')

  // query
  const rows = await query<UserRow[]>('SELECT * FROM users WHERE username = ?', [username])
  const user = rows[0]

  if (!user || password !== user.password) throwError(401, 'Invalid credentials')

  // setup cookie , token
  const payload = { id: user.id, username: user.username, role: user.role }
  const token = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '7d' })

  setCookie(event, 'auth_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  })

  return { success: true, msg: 'SignIn Success!', role: user.role }
})
