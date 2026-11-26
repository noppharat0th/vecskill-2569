import type { UserRow } from '~~/server/types/db'
import { reqFields, sendRes, throwError } from '~~/server/utils/functions'
import { db } from '~~/server/utils/db'

export default defineEventHandler(async (e) => {
    const { fname, lname, username, role, password } = await readBody(e)
    reqFields([fname, lname, username, role])

    if (!['evaluator', 'evaluatee'].includes(role)) {
        throwError(400, 'role is invalid')
    }

    const existing = await db<UserRow>('users').where({ username }).first()
    if (existing) {
        throwError(409, 'username already exists')
    }

    const defaultPassword = password || '1234'
    
    await db<UserRow>('users').insert({ 
        fname, 
        lname, 
        username, 
        password: defaultPassword, 
        role 
    })

    return sendRes(`เพิ่ม ${username} สำเร็จ`)
})
