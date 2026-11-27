import { c as defineEventHandler, f as db, i as sendRes } from '../../../_/nitro.mjs';
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

const getUsers_get = defineEventHandler(async (e) => {
  const rows = await db("users");
  return sendRes(rows);
});

export { getUsers_get as default };
//# sourceMappingURL=get-users.get.mjs.map
