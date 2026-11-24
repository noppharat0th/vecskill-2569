import type { EvaluationRow, IndicatorRow } from '~~/server/types/db'
import { exist, reqFields, sendRes, throwError } from '~~/server/utils/functions'
import { db } from '~~/server/utils/db'

export default defineEventHandler(async (e) => {
    const { eval_id, name, description, weight, type, type_file } = await readBody(e)

    
    reqFields([eval_id, name, description, weight, type, type_file])

    if (!['boolean', 'score'].includes(type)) {
        throwError(400, 'type ต้องเป็น boolean หรือ score เท่านั้น')
    }

    if (!['file', 'url'].includes(type_file)) {
        throwError(400, 'type_file ต้องเป็น file หรือ url เท่านั้น')
    }

    await exist<EvaluationRow>('evaluations', eval_id)

    await db<IndicatorRow>('indicators').insert({
        eval_id: eval_id,
        name,
        description,
        weight: weight,
        type,
        type_file,
    })

    return sendRes('เพิ่มตัวชี้วัดสำเร็จ')
})
