import { c as defineEventHandler, l as exist, f as db, i as sendRes } from '../../../../_/nitro.mjs';
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
  await exist("indicators", { id });
  await db("indicators").where({ id }).delete();
  return sendRes("\u0E25\u0E1A\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08");
});

export { _id__delete as default };
//# sourceMappingURL=_id_.delete.mjs.map
