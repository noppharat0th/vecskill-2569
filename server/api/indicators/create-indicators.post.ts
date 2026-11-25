import type { EvaluationRow, IndicatorRow, LevelRow } from '~~/server/types/db'
import { exist, reqFields, sendRes, throwError } from '~~/server/utils/functions'
import { db } from '~~/server/utils/db'

export default defineEventHandler(async (e) => {
    const { eval_id, name, description, weight, type, type_file, levels } = await readBody(e)

    reqFields([eval_id, name, description, weight, type, type_file])

    if (!['boolean', 'score'].includes(type)) {
        throwError(400, 'type ต้องเป็น boolean หรือ score เท่านั้น')
    }

    if (!['file', 'url'].includes(type_file)) {
        throwError(400, 'type_file ต้องเป็น file หรือ url เท่านั้น')
    }

    await exist<EvaluationRow>('evaluations', { id: eval_id })

    // บันทึกตัวชี้วัด และรับ id ที่สร้างขึ้นใหม่
    const [indic_id] = await db<IndicatorRow>('indicators').insert({
        eval_id,
        name,
        description,
        weight,
        type,
        type_file,
    })

    // ถ้าเลือกประเภทเป็น score ให้บันทึกระดับคะแนนลงตาราง levels
    if (type === 'score') {
        // ค่าระดับคะแนนเริ่มต้นตามเกณฑ์ 1-4
        const defaultLevels = [
            { level: 1, description: 'ปฏิบัติได้ต่ำกว่าระดับการปฏิบัติที่คาดหวังมาก' },
            { level: 2, description: 'ปฏิบัติได้ต่ำกว่าระดับการปฏิบัติที่คาดหวัง' },
            { level: 3, description: 'ปฏิบัติได้ตามระดับการปฏิบัติที่คาดหวัง' },
            { level: 4, description: 'ปฏิบัติได้สูงกว่าระดับการปฏิบัติที่คาดหวัง' },
        ]

        const levelData = Array.isArray(levels) && levels.length > 0 ? levels : defaultLevels

        await db<LevelRow>('levels').insert(
            levelData.map((item: any) => ({
                indic_id,
                level: Number(item.level),
                description: item.description || '',
            }))
        )
    }

    return sendRes('เพิ่มตัวชี้วัดสำเร็จ')
})
