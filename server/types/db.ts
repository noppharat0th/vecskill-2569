import type { User } from '~~/shared/types/user'

export interface UserRow extends User {
  password: string
}