// indicator
export interface Indicator {
  id: string
  eval_id: string
  name: string
  description: string
  weight: number
  type: 'boolean' | 'score'
  type_file: 'file' | 'url'
}
