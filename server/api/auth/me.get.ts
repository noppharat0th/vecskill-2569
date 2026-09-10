import { throwError } from "~~/server/utils/functions"
import jwt from 'jsonwebtoken'
import { AuthPayload } from "~~/shared/types/user"
import { reqAuth } from "~~/server/utils/auth"

export default defineEventHandler((e) => {
   const user = reqAuth(e)
   return { success: true, user }
})