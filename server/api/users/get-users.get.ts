import { sendRes } from '~~/server/utils/functions'
import { db } from '~~/server/utils/db'

export default defineEventHandler(async (e) => {
    const rows = await db('users')
    return sendRes(rows)
})