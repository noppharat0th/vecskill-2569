export default defineEventHandler(async (e) => {
    const userId = reqAuth(e).id
    const role = reqAuth(e).role
    const id = e.context.params?.id
    const body = await readBody(e)

    if(role !== 'admin' && userId !== Number(id))
        throwError(403, 'No Unauthorized')
    
    await query('UPDATE users SET ? WHERE id = ?', [body, id])

    return sendRes({ data: `แก้ไขผู้ใช้สำเร็จ` })
})