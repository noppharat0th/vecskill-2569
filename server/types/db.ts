import type { User } from '~~/shared/types/user'
import type { Indicator } from '~~/shared/types/indicator'
import type { Evaluation } from '~~/shared/types/evaluation'

export interface UserRow extends User {
  password: string
}

export interface IndicatorRow extends Indicator {}

export interface EvaluationRow extends Evaluation {}