// user
export interface User {
  id: number
  fname: string
  lname: string
  username: string
  role: 'admin' | 'evaluator' | 'evaluatee'
}