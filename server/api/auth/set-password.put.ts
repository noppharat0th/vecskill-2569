import { UserRow } from "~~/server/types/db"
import { db } from "~~/server/utils/db"

export default defineEventHandler(async (e) => {
    const  {id}  = reqAuth(e)
    const { newPassword, confirmPassword } = await readBody(e)
    reqFields([newPassword, confirmPassword])

    if (newPassword !== confirmPassword) throwError(400, 'รหัสผ่านไม่ตรงกัน')
    // if (newPassword.length < 8) throwError(400, 'รหัสผ่านต้องมีอย่างน้อย 8 ตัว')
    if (newPassword === '1234') throwError(400, 'ห้ามใช้รหัสเริ่มต้น')
    
    await db<UserRow>('users').where({ id }).update({
        password: newPassword,
        is_reset: 0,
    })
    return sendRes('ตั้งรหัสผ่านสำเร็จ')
})