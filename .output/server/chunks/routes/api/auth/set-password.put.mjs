import { c as defineEventHandler, k as reqAuth, r as readBody, e as reqFields, g as throwError, f as db, i as sendRes } from '../../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'jsonwebtoken';
import 'knex';
import '@iconify/utils';
import 'consola';

const setPassword_put = defineEventHandler(async (e) => {
  const { id } = reqAuth(e);
  const { newPassword, confirmPassword } = await readBody(e);
  reqFields([newPassword, confirmPassword]);
  if (newPassword !== confirmPassword) throwError(400, "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\u0E44\u0E21\u0E48\u0E15\u0E23\u0E07\u0E01\u0E31\u0E19");
  if (newPassword === "1234") throwError(400, "\u0E2B\u0E49\u0E32\u0E21\u0E43\u0E0A\u0E49\u0E23\u0E2B\u0E31\u0E2A\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19");
  await db("users").where({ id }).update({
    password: newPassword,
    is_reset: 0
  });
  return sendRes("\u0E15\u0E31\u0E49\u0E07\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08");
});

export { setPassword_put as default };
//# sourceMappingURL=set-password.put.mjs.map
