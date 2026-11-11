import { reqFields, sendRes } from '~~/server/utils/functions'
import { db } from '~~/server/utils/db'

export default defineEventHandler(async (e) => {
    const { title, stat_date, end_date } = await readBody(e)
    reqFields([title, stat_date, end_date])

    await db('evaluations').insert({ title, stat_date, end_date })
    return sendRes('เพิ่มหัวข้อการประเมินสำเร็จ')
})
