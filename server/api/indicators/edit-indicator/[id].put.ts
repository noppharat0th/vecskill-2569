import type { IndicatorRow } from '~~/server/types/db'
import { sendRes, throwError } from '~~/server/utils/functions'
import { db } from '~~/server/utils/db'

export default defineEventHandler(async (e) => {
    const id = e.context.params?.id
    const { eval_id, name, description, weight, type, type_file } = await readBody(e)

    const existing = await db<IndicatorRow>('indicators').where({ id }).first()
    if (!existing) {
        throwError(404, 'ไม่พบตัวชี้วัดนี้')
    }

    if (type && !['boolean', 'score'].includes(type)) {
        throwError(400, 'type ต้องเป็น boolean หรือ score เท่านั้น')
    }

    if (type_file && !['file', 'url'].includes(type_file)) {
        throwError(400, 'type_file ต้องเป็น file หรือ url เท่านั้น')
    }

    if (eval_id) {
        const evaluation = await db('evaluations').where({ id: eval_id }).first()
        if (!evaluation) {
            throwError(404, 'ไม่พบหัวข้อการประเมินที่ระบุ')
        }
    }

    await db<IndicatorRow>('indicators').where({ id }).update({
        ...(eval_id !== undefined && { eval_id: Number(eval_id) }),
        ...(name !== undefined && { name }),
        ...(description !== undefined && { description }),
        ...(weight !== undefined && { weight: Number(weight) }),
        ...(type !== undefined && { type }),
        ...(type_file !== undefined && { type_file }),
    })

    return sendRes('แก้ไขตัวชี้วัดสำเร็จ')
})

