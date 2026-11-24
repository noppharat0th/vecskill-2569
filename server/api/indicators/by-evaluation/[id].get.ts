import type { IndicatorRow } from '~~/server/types/db'
import { exist, sendRes } from '~~/server/utils/functions'
import { db } from '~~/server/utils/db'


// params eval_id
export default defineEventHandler(async (e) => {
    const eval_id = e.context.params?.id

    await exist<IndicatorRow>('indicators', {eval_id})

    const rows = await db<IndicatorRow>('indicators').where({ eval_id }).select('*')
    return sendRes(rows)
})

