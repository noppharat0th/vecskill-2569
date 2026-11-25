import type { EvaluationRow, IndicatorRow } from '~~/server/types/db'
import { db } from '~~/server/utils/db'
import { exist, sendRes, throwError } from '~~/server/utils/functions'

export default defineEventHandler(async (e) => {
    const id = e.context.params?.id
    const { eval_id, name, description, weight, type, type_file } = await readBody(e)

    await exist<IndicatorRow>('indicators', { id })

    if (type && !['boolean', 'score'].includes(type)) {
        throwError(400, 'type ต้องเป็น boolean หรือ score เท่านั้น')
    }

    if (type_file && !['file', 'url'].includes(type_file)) {
        throwError(400, 'type_file ต้องเป็น file หรือ url เท่านั้น')
    }

    if (eval_id) {
        await exist<EvaluationRow>('evaluations', { id: eval_id })
    }

    await db<IndicatorRow>('indicators').where({ id }).update({eval_id, name, description, weight, type, type_file})
    return sendRes('แก้ไขตัวชี้วัดสำเร็จ')
})
