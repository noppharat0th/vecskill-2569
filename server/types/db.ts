import type { RowDataPacket } from 'mysql2'
import type { User } from '~~/shared/types/user'

// auth
export interface UserRow extends User , RowDataPacket {
  password: string
}

export interface EvaluationRow extends RowDataPacket {
  id: number
  title: string
  stat_date: Date | string
  end_date: Date | string
}
