import type { IndicatorRow } from '~~/server/types/db'
import { db } from '~~/server/utils/db'
import { exist, sendRes } from '~~/server/utils/functions'

export default defineEventHandler(async (e) => {
    const id = e.context.params?.id

    await exist<IndicatorRow>('indicators', { id })

    await db<IndicatorRow>('indicators').where({ id }).delete()

    return sendRes('ลบตัวชี้วัดสำเร็จ')
})
