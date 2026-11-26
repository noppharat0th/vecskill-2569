import type { AssignmentRow } from '~~/server/types/db'
import { db } from '~~/server/utils/db'
import { exist, sendRes } from '~~/server/utils/functions'

export default defineEventHandler(async (e) => {
    const id = e.context.params?.id

    // ตรวจสอบว่ามีการมอบหมายนี้อยู่จริง
    await exist<AssignmentRow>('assignments', { id })

    await db<AssignmentRow>('assignments').where({ id }).delete()
    return sendRes('ลบการมอบหมายสำเร็จ')
})
