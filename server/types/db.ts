import type { User } from '~~/shared/types/user'
import type { Indicator } from '~~/shared/types/indicator'
import type { Evaluation } from '~~/shared/types/evaluation'
import type { Level } from '~~/shared/types/level'
import type { Assignment } from '~~/shared/types/assignment'

export interface UserRow extends User {
  password: string
}

export interface IndicatorRow extends Indicator {}

export interface EvaluationRow extends Evaluation {}

export interface LevelRow extends Level {}

export interface AssignmentRow extends Assignment {}
