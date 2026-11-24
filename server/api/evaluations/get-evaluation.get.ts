import type { EvaluationRow } from '~~/server/types/db'
import { sendRes } from '~~/server/utils/functions'
import { db } from '~~/server/utils/db'

export default defineEventHandler(async (e) => {
    const rows = await db<EvaluationRow>('evaluations').select('*')
    return sendRes(rows)
})
