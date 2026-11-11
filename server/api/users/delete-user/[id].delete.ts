import { sendRes } from '~~/server/utils/functions'
import { db } from '~~/server/utils/db'

export default defineEventHandler(async (e) => {
    const id = e.context.params?.id

    await db('users').where({ id }).delete()

    return sendRes({ data: `ลบผู้ใช้สำเร็จ` })
})