import { sendRes } from "~~/server/utils/functions"

export default defineEventHandler((e) => {
  deleteCookie(e, 'auth_token', { path: '/' })
  return sendRes('logout success')
})