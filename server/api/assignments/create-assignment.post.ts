import type { AssignmentRow, EvaluationRow, UserRow } from '~~/server/types/db'
import { db } from '~~/server/utils/db'
import { exist, reqFields, sendRes, throwError } from '~~/server/utils/functions'

export default defineEventHandler(async (e) => {
    const { eval_id, evaluator_id, evaluatee_id, position } = await readBody(e)
    reqFields([eval_id, evaluator_id, evaluatee_id, position])

    await exist<EvaluationRow>('evaluations', { id: eval_id })
    const et = await exist<UserRow>('users', { id: evaluator_id })
    const ee = await exist<UserRow>('users', { id: evaluatee_id })
    
    if(ee?.role !== "evaluatee" || et?.role !== "evaluator")
        throwError(403, 'Role ไม่ถูกต้อง')

    const existing = await db<AssignmentRow>('assignments').where({ eval_id, evaluator_id, evaluatee_id }).first()

    if (existing) {
        throwError(409, 'มอบหมายซํ้า!!')
    }   

    await db<AssignmentRow>('assignments').insert({
        eval_id,
        evaluator_id,
        evaluatee_id,
        position,
    })

    return sendRes('มอบหมายกรรมการสำเร็จ')
})
