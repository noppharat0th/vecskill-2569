import { sendRes, throwError } from '~~/server/utils/functions'
import { reqAuth } from '~~/server/utils/auth'
import { db } from '~~/server/utils/db'

// edit Profile , edit profile by admin
export default defineEventHandler(async (e) => {
    const userId = reqAuth(e).id
    const role = reqAuth(e).role
    const id = Number(e.context.params?.id)
    const { fname, lname, username, password } = await readBody(e)

    if (role !== 'admin' && userId !== id)
        throwError(403, 'ไม่มีสิทธิ์')
    
    await db('users').where({ id }).update({ fname, lname, username, password })

    return sendRes(`แก้ไขผู้ใช้สำเร็จ`)
})  