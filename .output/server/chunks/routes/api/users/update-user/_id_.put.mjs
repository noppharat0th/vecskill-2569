import { c as defineEventHandler, k as reqAuth, r as readBody, g as throwError, f as db, i as sendRes } from '../../../../_/nitro.mjs';
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

const _id__put = defineEventHandler(async (e) => {
  var _a;
  const userId = reqAuth(e).id;
  const role = reqAuth(e).role;
  const id = Number((_a = e.context.params) == null ? void 0 : _a.id);
  const { fname, lname, username, password } = await readBody(e);
  if (role !== "admin" && userId !== id)
    throwError(403, "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C");
  await db("users").where({ id }).update({ fname, lname, username, password });
  return sendRes(`\u0E41\u0E01\u0E49\u0E44\u0E02\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08`);
});

export { _id__put as default };
//# sourceMappingURL=_id_.put.mjs.map
