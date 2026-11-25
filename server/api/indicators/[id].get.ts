import type { EvaluationRow, IndicatorRow } from '~~/server/types/db'
import { db } from '~~/server/utils/db'
import { exist, sendRes } from '~~/server/utils/functions'

// ดูตาม eval_id
export default defineEventHandler(async (e) => {
    const id = e.context.params?.id

    await exist<EvaluationRow>('evaluations', { id })

    const rows = await db<IndicatorRow>('indicators').where({ eval_id: id })
    return sendRes(rows)
})
