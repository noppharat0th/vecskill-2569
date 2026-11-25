import type { UserRow } from '~~/server/types/db'
import { reqAuth } from '~~/server/utils/auth'
import { db } from '~~/server/utils/db'
import { sendRes, throwError } from '~~/server/utils/functions'

export default defineEventHandler(async (e) => {
    const { id, username, newPassword } = await readBody(e)

    if (!id && !username) {
        throwError(400, 'กรุณาระบุ id หรือ username ของผู้ใช้ที่ต้องการรีเซ็ต')
    }

    let query = db<UserRow>('users')
    if (id) {
        query = query.where({ id: Number(id) })
    } else if (username) {
        query = query.where({ username })
    }

    const targetUser = await query.first()
    if (!targetUser) 
        throwError(404, 'ไม่พบผู้ใช้ในระบบ')
    

    const resetPassword = newPassword || '1234'

    // คืนค่ารหัสผ่านเป็นค่าเริ่มต้น และตั้งค่า is_reset = 1 เพื่อบังคับเปลี่ยนรหัสผ่านเมื่อเข้าสู่ระบบครั้งแรก (ตามข้อ 5.2.1)
    await db<UserRow>('users').where({ id: targetUser.id }).update({
        password: resetPassword,
        is_reset: 1,
    })

    return sendRes(`รีเซ็ตรหัสผ่านของ ${targetUser.username} สำเร็จ`)
})
