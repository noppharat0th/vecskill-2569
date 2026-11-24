import type { IndicatorRow } from '~~/server/types/db'
import { sendRes } from '~~/server/utils/functions'
import { db } from '~~/server/utils/db'


// get indicators All , get Indicator by eval_id
// query ?=eval_id
export default defineEventHandler(async (e) => {
  const { eval_id } = getQuery(e)

  let query = db<IndicatorRow>('indicators').select('*')

  if (eval_id && !Array.isArray(eval_id)) {
    query = query.where({ eval_id: String(eval_id) })
  }

  const rows = await query
  return sendRes(rows)
})