import { reqFields, sendRes } from '~~/server/utils/functions'
import { db } from '~~/server/utils/query-builder'

export default defineEventHandler(async (e) => {
    const id  = await e.context.params

    await db.remove('users', { id })

    return sendRes({ data: `ลบผู้ใช้สำเร็จ` })
})