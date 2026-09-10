import { query } from '~~/server/utils/db'
import type { UserRow } from '~~/server/types/db'
import { reqFields, throwError } from '~~/server/utils/functions'

export default defineEventHandler(async (event) => {
    const { fname, lname, username, password } = await readBody(event)
    reqFields([fname, lname, username, password])

    // query
    const existing = await query<UserRow[]>('SELECT id FROM users WHERE username = ?', [username])

    if (existing.length > 0) throwError(409, 'username Exist')

    await query('INSERT INTO users (fname, lname, username, password) VALUES (?, ?, ?, ?)', [fname, lname, username, password])
    return { success: true, msg: 'สมัครสมาชิกสำเร็จ' }
})