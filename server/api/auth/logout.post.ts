export default defineEventHandler((e) => {
  deleteCookie(e, 'auth_token', { path: '/' })
  return { success: true, msg: 'logout success' }
})