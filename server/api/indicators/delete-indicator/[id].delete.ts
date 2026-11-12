import type { IndicatorRow } from '~~/server/types/db'
import { sendRes, throwError } from '~~/server/utils/functions'
import { db } from '~~/server/utils/db'

export default defineEventHandler(async (e) => {
    const id = e.context.params?.id

    const existing = await db<IndicatorRow>('indicators').where({ id }).first()
    if (!existing) {
        throwError(404, 'ไม่พบตัวชี้วัดนี้')
    }

    await db<IndicatorRow>('indicators').where({ id }).delete()

    return sendRes('ลบตัวชี้วัดสำเร็จ')
})

