import { reqFields, sendRes } from '~~/server/utils/functions'
import { db } from '~~/server/utils/query-builder'

export default defineEventHandler(async (e) => {
    const { title, start_date, end_date } = await readBody(e)
    reqFields([title, start_date, end_date])

    await db.insert('evaluations', { title, start_date, end_date })
    return sendRes({ data: 'เพิ่มหัวข้อการประเมินสำเร็จ' })
})
