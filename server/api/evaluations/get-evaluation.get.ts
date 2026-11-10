import { sendRes } from '~~/server/utils/functions'
import { db } from '~~/server/utils/query-builder'

export default defineEventHandler(async (e) => {
    const rows = await db.select('evaluations')
    return sendRes({ data: rows })
})
