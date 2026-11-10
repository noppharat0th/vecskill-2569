import type { UserRow } from '~~/server/types/db'
import { reqFields, sendRes, throwError } from '~~/server/utils/functions'
import { db } from '~~/server/utils/db'

export default defineEventHandler(async (e) => {
    // console.log("create user")
    const { fname, lname, username, password, role } = await readBody(e)
    reqFields([fname, lname, username, password, role])

    if(!['evaluator' , 'evaluatee'].includes(role))
        throwError(400, 'role is invalid')

    const existing = await db<UserRow>('users').where({ username }).first()

    if (existing)
        throwError(409, 'username Exist')

    await db<UserRow>('users').insert({ fname, lname, username, password, role })
    return sendRes({ data: `เพิ่ม ${username} สำเสร็จ` })
})
