import { pool } from '~~/server/utils/db'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { UserRow } from '~~/server/types/db'

export default defineEventHandler(async (event) => {
  const { username, password } = await readBody(event)

  // query
  const [rows] = await pool.query<UserRow[]>('SELECT * FROM users WHERE username = ?', [username])
  const user = rows[0]

  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw createError({ statusCode: 401, message: 'Invalid credentials' })
  }

  // setup token cookie
  const payload = { id: user.id, username: user.username, role: user.role }
  const token = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '7d' })

  setCookie(event, 'auth_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  })

  return { success: true, msg: 'เข้าสู่ระบบสำเร็จ', role: user.role }
})