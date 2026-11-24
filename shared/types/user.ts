// user
export interface User {
  id: string
  fname: string
  lname: string
  username: string
  role: 'admin' | 'evaluator' | 'evaluatee'
  is_reset: string
}

// auth
export interface AuthPayload {
  id: string
  username: string
  role: 'admin' | 'evaluator' | 'evaluatee'
}

// response
export interface Response<T> {
  status: 'success' | 'error'
  data: T
}

