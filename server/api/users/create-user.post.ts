import type { UserRow } from '~~/server/types/db'
import { reqFields, sendRes, throwError } from '~~/server/utils/functions'
import { db } from '~~/server/utils/db'

export default defineEventHandler(async (e) => {
    // console.log("create user")
    const { fname, lname, username, role } = await readBody(e)
    reqFields([fname, lname, username, role])

    if(!['evaluator' , 'evaluatee'].includes(role))
        throwError(400, 'role is invalid')

    const existing = await db<UserRow>('users').where({ username }).first()

    if (existing)
        throwError(409, 'username Exist')

    await db<UserRow>('users').insert({ fname, lname, username, password: "1234", role })
    return sendRes(`เพิ่ม ${username} สำเสร็จ`)
})
