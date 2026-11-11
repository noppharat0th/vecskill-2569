// user
export interface User {
  id: number
  fname: string
  lname: string
  username: string
  role: 'admin' | 'evaluator' | 'evaluatee'
  is_reset: number
}

// auth
export interface AuthPayload {
  id: number
  username: string
  role: 'admin' | 'evaluator' | 'evaluatee'
}

// response
export interface Response<T> {
  status: 'success' | 'error'
  data: T
}
