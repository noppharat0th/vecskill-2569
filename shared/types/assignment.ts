// assignment
export interface Assignment {
  id: number | string
  eval_id: number | string
  evaluator_id: number | string
  evaluatee_id: number | string
  position: string
  created_at?: string
}
