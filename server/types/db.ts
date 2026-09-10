import type { RowDataPacket } from 'mysql2'
import type { User } from '~~/shared/types/user'

// auth
export interface UserRow extends User , RowDataPacket {
  password: string
}
