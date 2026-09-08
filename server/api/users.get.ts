import { pool } from "../utils/db"

export default defineEventHandler(async (event) => {
  const [rows] = await pool.query('SELECT id, fname, lname, username, role FROM users')
  return rows
})