import { sendRes, throwError } from '~~/server/utils/functions'
import { reqAuth } from '~~/server/utils/auth'
import { db } from '~~/server/utils/query-builder'

export default defineEventHandler(async (e) => {
    const userId = reqAuth(e).id
    const role = reqAuth(e).role
    const id = e.context.params?.id 
    const { fname, lname, username, password } = await readBody(e)
    if(role !== 'admin' && userId !== Number(id))
        throwError(403, 'No Unauthorized')
    
    await db.update('users', { fname, lname, username, password }, { id })

    return sendRes({ data: `แก้ไขผู้ใช้สำเร็จ` })
})  