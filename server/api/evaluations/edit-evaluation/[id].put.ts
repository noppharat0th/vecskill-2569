import { sendRes, throwError } from '~~/server/utils/functions'
import { reqAuth } from '~~/server/utils/auth'
import { db } from '~~/server/utils/query-builder'

export default defineEventHandler(async (e) => {
    const id = e.context.params?.id 
    const { title, start_date, end_date } = await readBody(e)    
    
    await db.update('evaluations', { title, start_date, end_date }, { id })

    return sendRes({ data: `แก้ไขหัวข้อการประเมินสำเร็จ` })
})  