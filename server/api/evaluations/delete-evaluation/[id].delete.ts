import { sendRes } from '~~/server/utils/functions'
import { db } from '~~/server/utils/db'

export default defineEventHandler(async (e) => {
    const id = e.context.params?.id 
    
    await db('evaluations').where({ id }).delete()

    return sendRes(`ลบหัวข้อการประเมินสำเร็จ`)
})