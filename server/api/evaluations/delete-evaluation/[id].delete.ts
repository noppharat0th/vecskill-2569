import { sendRes } from '~~/server/utils/functions'
import { db } from '~~/server/utils/db'
import { EvaluationRow } from '~~/server/types/db'

export default defineEventHandler(async (e) => {
    const id = e.context.params?.id
    
    await db<EvaluationRow>('evaluations').where({ id }).delete()

    return sendRes(`ลบหัวข้อการประเมินสำเร็จ`)
})