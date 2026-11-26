import type { UserRow } from '~~/server/types/db'
import { reqAuth } from '~~/server/utils/auth'
import { db } from '~~/server/utils/db'
import { throwError } from '~~/server/utils/functions'

// เส้นทาง API ที่อนุญาตให้เรียกได้ แม้ยังไม่ได้เปลี่ยนรหัสผ่าน
const allowedPaths = [
    '/api/auth/login',
    '/api/auth/logout',
    '/api/auth/me',
    '/api/auth/set-password',
]

export default defineEventHandler(async (e) => {
    const path = getRequestPath(e)

    // ตรวจสอบเฉพาะเส้นทาง /api และข้ามเส้นทางที่ได้รับอนุญาต
    if (!path.startsWith('/api') || allowedPaths.some(p => path.startsWith(p))) return

    try {
        const auth = reqAuth(e)

        const user = await db<UserRow>('users').where({ id: auth.id }).first()
        if (user && user.is_reset === 1) {
            throwError(403, 'กรุณาตั้งรหัสผ่านใหม่ก่อนเข้าใช้งาน')
        }
    } catch (err: any) {
       throw err
    }
})
