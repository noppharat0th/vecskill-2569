import { query } from "~~/server/utils/db"

export default defineEventHandler(async (e) => {
    const rows = await query('SELECT * FROM users')
    return sendRes({ data: rows })
})