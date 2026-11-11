import { db } from '~~/server/utils/db'
import { sendRes } from '~~/server/utils/functions'


export default defineEventHandler(async (e) => {
    const id = e.context?.params

    const row = await db('evaluations').where({id}).first()
    return sendRes(row)
})