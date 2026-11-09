import { query } from '~~/server/utils/db'
import type { UserRow } from '~~/server/types/db'
import { reqFields, sendRes, throwError } from '~~/server/utils/functions'

export default defineEventHandler(async (e) => {
    // console.log("create user")
    const { fname, lname, username, password, role } = await readBody(e)
    reqFields([fname, lname, username, password, role])

    if(!['evaluator' , 'evaluatee'].includes(role))
        throwError(400, 'role is invalid')

    // query
    const existing = await query<UserRow[]>('SELECT id FROM users WHERE username = ?', [username])

    if (existing.length > 0) 
        throwError(409, 'username Exist')

    await query('INSERT INTO users (fname, lname, username, password, role) VALUES (?, ?, ?, ?, ?)', [fname, lname, username, password, role])
    return sendRes({ data: `เพิ่ม ${username} สำเสร็จ` })
})
