import { sendRes } from '~~/server/utils/functions'
import { db } from '~~/server/utils/db'
import { EvaluationRow } from '~~/server/types/db'

export default defineEventHandler(async (e) => {
    const id = e.context.params?.id
    const { title, start_date, end_date } = await readBody(e)

    const start = new Date(start_date)
    const end = new Date(end_date)

    if (start > end) {
        throwError(400, 'วันที่เริ่มต้นต้องน้อยกว่าวันที่สิ้นสุด')
    }

    await db<EvaluationRow>('evaluations').where({ id }).update({ title, start_date, end_date })
    return sendRes("แก้ไขหัวข้อการประเมินสำเร็จ")
})  