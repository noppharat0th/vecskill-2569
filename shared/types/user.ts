// user
export interface User {
  id: number
  fname: string
  lname: string
  username: string
  role: 'admin' | 'evaluator' | 'evaluatee'
}

// auth
export interface AuthPayload {
  id: number
  username: string
  role: 'admin' | 'evaluator' | 'evaluatee'
}