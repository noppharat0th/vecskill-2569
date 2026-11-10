import { sendRes } from '~~/server/utils/functions'
import { db } from '~~/server/utils/db'

export default defineEventHandler(async (e) => {
    const id = e.context.params?.id
    const { title, stat_date, end_date } = await readBody(e)
    
    await db('evaluations').where({ id }).update({ title, stat_date, end_date })

    return sendRes({ data: `แก้ไขหัวข้อการประเมินสำเร็จ` })
})  