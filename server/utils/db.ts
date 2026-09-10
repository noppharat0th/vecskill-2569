import mysql, { RowDataPacket } from 'mysql2/promise'

export const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_ROOT_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
})


export async function query<T extends RowDataPacket[]>(
  sql: string,
  params?: any[]
): Promise<T> {
  try {
    const [rows] = await pool.query<T>(sql, params)
    return rows
  } catch (e) {
    console.error('DB query error:', e)
    throw createError({ statusCode: 500, message: 'ผิดที่ไว้ใจนะ 500' })
  }
}