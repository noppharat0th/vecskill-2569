import type { IndicatorRow, LevelRow } from '~~/server/types/db'
import { db } from '~~/server/utils/db'
import { exist, sendRes } from '~~/server/utils/functions'

export default defineEventHandler(async (e) => {
    const id = e.context.params?.id

    await exist<IndicatorRow>('indicators', { id })

    const rows = await db<LevelRow>('levels').where({ indic_id: Number(id) }).orderBy('level', 'asc')
    return sendRes(rows)
})
