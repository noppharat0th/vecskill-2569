import { db } from '~~/server/utils/db'
import { sendRes } from '~~/server/utils/functions'

export default defineEventHandler(async (e) => {
    const user = reqAuth(e)

    const { eval_id, evaluator_id, evaluatee_id } = getQuery(e)

    const rows = await db('assignments as a')
        .leftJoin('evaluations as ev', 'a.eval_id', 'ev.id')
        .leftJoin('users as er', 'a.evaluator_id', 'er.id')
        .leftJoin('users as ee', 'a.evaluatee_id', 'ee.id')
        .leftJoin('assessments as self', (q) => q.on('self.assign_id', 'a.id').andOnVal('self.role', 'self'))
        .leftJoin('assessments as com', (q) => q.on('com.assign_id', 'a.id').andOnVal('com.role', 'committee'))
        .modify((q) => {
            // กรองตามรอบการประเมิน
            if (eval_id) q.where('a.eval_id', Number(eval_id))

            // evaluatee
            if (user.role === 'evaluatee') {
                q.where('a.evaluatee_id', user.id)

                // evaluator
            } else if (user.role === 'evaluator') {
                q.where('a.evaluator_id', user.id)
                if (evaluatee_id) q.where('a.evaluatee_id', Number(evaluatee_id))

                // admin
            } else if (user.role === 'admin') {
                if (evaluator_id) q.where('a.evaluator_id', Number(evaluator_id))
                if (evaluatee_id) q.where('a.evaluatee_id', Number(evaluatee_id))
            }
        })
        .groupBy('a.id')
        .orderBy('a.id', 'desc')
        .select(
            'a.id', 
            'a.eval_id',
            'ev.title as evaluation_title',
            'a.evaluator_id', 
            'er.fname as evaluator_fname', 
            'er.lname as evaluator_lname', 
            'er.username as evaluator_username',
            'a.evaluatee_id', 
            'ee.fname as evaluatee_fname', 
            'ee.lname as evaluatee_lname', 
            'ee.username as evaluatee_username',
            'a.position',
            'a.created_at', 
            'self.status as self_status',
            'com.status as com_status'
        )

    return sendRes(rows)
})