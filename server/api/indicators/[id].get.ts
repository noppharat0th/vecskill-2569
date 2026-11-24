import type { IndicatorRow } from '~~/server/types/db'
import { exist, sendRes, throwError } from '~~/server/utils/functions'
import { db } from '~~/server/utils/db'

export default defineEventHandler(async (e) => {
    const id = e.context.params?.id
    const row = await exist<IndicatorRow>('indicators', {id})
    return sendRes(row)
})