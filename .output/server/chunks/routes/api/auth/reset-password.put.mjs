import { c as defineEventHandler, r as readBody, g as throwError, f as db, i as sendRes } from '../../../_/nitro.mjs';
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

const resetPassword_put = defineEventHandler(async (e) => {
  const { id, username, newPassword } = await readBody(e);
  if (!id && !username) {
    throwError(400, "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E23\u0E30\u0E1A\u0E38 id \u0E2B\u0E23\u0E37\u0E2D username \u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15");
  }
  let query = db("users");
  if (id) {
    query = query.where({ id: Number(id) });
  } else if (username) {
    query = query.where({ username });
  }
  const targetUser = await query.first();
  if (!targetUser)
    throwError(404, "\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E43\u0E19\u0E23\u0E30\u0E1A\u0E1A");
  const resetPassword = newPassword || "1234";
  await db("users").where({ id: targetUser.id }).update({
    password: resetPassword,
    is_reset: 1
  });
  return sendRes(`\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\u0E02\u0E2D\u0E07 ${targetUser.username} \u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08`);
});

export { resetPassword_put as default };
//# sourceMappingURL=reset-password.put.mjs.map
