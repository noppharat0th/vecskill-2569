// import { reqRole } from "../utils/auth";

// const roleRules: { prefix: string; roles: string[] }[] = [
//   { prefix: '/api/admin', roles: ['admin'] },
//   { prefix: '/api/evaluator', roles: ['evaluator', 'admin'] },
//   { prefix: '/api/evaluatee', roles: ['evaluatee', 'admin'] }
// ]

// export default defineEventHandler((event) => {
//   const rule = roleRules.find(r => event.path.startsWith(r.prefix))

//   if (rule) {
//     reqRole(event, rule.roles as any)
//   }
// })