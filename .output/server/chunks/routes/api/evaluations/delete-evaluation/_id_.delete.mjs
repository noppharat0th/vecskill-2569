import { c as defineEventHandler, f as db, i as sendRes } from '../../../../_/nitro.mjs';
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

const _id__delete = defineEventHandler(async (e) => {
  var _a;
  const id = (_a = e.context.params) == null ? void 0 : _a.id;
  await db("evaluations").where({ id }).delete();
  return sendRes(`\u0E25\u0E1A\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08`);
});

export { _id__delete as default };
//# sourceMappingURL=_id_.delete.mjs.map
