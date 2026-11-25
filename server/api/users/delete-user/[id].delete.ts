import { sendRes } from '~~/server/utils/functions'
import { db } from '~~/server/utils/db'

export default defineEventHandler(async (e) => {
    const id = Number(e.context.params?.id)
    const userId = reqAuth(e).id

    if(id === userId)
        throwError(403, 'ไม่สามารถลบตัวเองได้่')

    await db('users').where({ id }).delete()

    return sendRes(`ลบผู้ใช้สำเร็จ`)
})
 