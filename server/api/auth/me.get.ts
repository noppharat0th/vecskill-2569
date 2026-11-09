import { query } from '~~/server/utils/db'
import type { UserRow } from '~~/server/types/db'
import {  sendRes } from '~~/server/utils/functions'
import { reqAuth } from "~~/server/utils/auth"

export default defineEventHandler((e) => {
   const user = reqAuth(e)
   return sendRes({ data: user })
})