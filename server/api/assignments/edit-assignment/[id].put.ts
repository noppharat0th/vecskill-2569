import type { AssignmentRow, EvaluationRow, UserRow } from '~~/server/types/db'
import { db } from '~~/server/utils/db'
import { exist, sendRes, throwError } from '~~/server/utils/functions'

export default defineEventHandler(async (e) => {
    const id = e.context.params?.id
    const { eval_id, evaluator_id, evaluatee_id, position } = await readBody(e)

    await exist<EvaluationRow>('evaluations', { id: eval_id })
    const et = await exist<UserRow>('users', { id: evaluator_id })
    const ee = await exist<UserRow>('users', { id: evaluatee_id })

    if (ee?.role !== 'evaluatee' || et?.role !== 'evaluator')
        throwError(403, 'Role ไม่ถูกต้อง')

    const existing = await db<AssignmentRow>('assignments').where({ eval_id, evaluator_id, evaluatee_id }).whereNot({ id }).first()
    if (existing)
        throwError(409, 'มอบหมายซ้ำ!!')

    await db<AssignmentRow>('assignments').where({ id }).update({
        eval_id,
        evaluator_id,
        evaluatee_id,
        position,
    })

    return sendRes('แก้ไขมอบหมายกรรมการสำเร็จ')
})