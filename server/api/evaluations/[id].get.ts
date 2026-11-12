import type { EvaluationRow } from '~~/server/types/db'
import { db } from '~~/server/utils/db'
import { exist, sendRes } from '~~/server/utils/functions'

export default defineEventHandler(async (e) => {
    const id = e.context.params?.id

    await exist<EvaluationRow>('evaluations', { id })

    const row = await db<EvaluationRow>('evaluations').where({ id }).first()
    return sendRes(row)
})
