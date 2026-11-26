import type { EvaluationRow } from '~~/server/types/db'
import { reqFields, sendRes } from '~~/server/utils/functions'
import { db } from '~~/server/utils/db'

export default defineEventHandler(async (e) => {
    const { title, start_date, end_date } = await readBody(e)
    reqFields([title, start_date, end_date])

    const start = new Date(start_date)
    const end = new Date(end_date)
    const eval_title = await db<EvaluationRow>('evaluations').where({ title }).first()

    if (title === eval_title?.title)
        throwError(400, 'ชื่อหัวข้อการประเมินซ้ำ')

    if (isNaN(start.getTime()) || isNaN(end.getTime()))
        throwError(400, 'วันที่ไม่ถูกต้อง')


    if (start > end)
        throwError(400, 'วันที่เริ่มต้นต้องน้อยกว่าวันที่สิ้นสุด')


    await db<EvaluationRow>('evaluations').insert({ title, start_date, end_date })
    return sendRes('เพิ่มหัวข้อการประเมินสำเร็จ')
})
