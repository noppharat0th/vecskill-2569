import { query } from '~~/server/utils/db'
import { reqFields, sendRes } from '~~/server/utils/functions'

export default defineEventHandler(async (e) => {
    const id  = await e.context.params

    await query('DELETE FROM users WHERE id = ?', [id])

    return sendRes({ data: `ลบผู้ใช้สำเร็จ` })
})