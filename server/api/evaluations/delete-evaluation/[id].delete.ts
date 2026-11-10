import { sendRes, throwError } from '~~/server/utils/functions'
import { db } from '~~/server/utils/query-builder'

export default defineEventHandler(async (e) => {
    const id = e.context.params?.id 
    
    await db.remove('evaluations', { id })

    return sendRes({ data: `ลบหัวข้อการประเมินสำเร็จ` })
})