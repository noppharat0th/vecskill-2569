
import {  sendRes } from '~~/server/utils/functions'
import { reqAuth } from "~~/server/utils/auth"

export default defineEventHandler((e) => {
   const user = reqAuth(e)
   return sendRes({ data: user })
})