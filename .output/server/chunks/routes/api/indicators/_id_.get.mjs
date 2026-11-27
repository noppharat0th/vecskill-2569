import { c as defineEventHandler, l as exist, f as db, i as sendRes } from '../../../_/nitro.mjs';
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

const _id__get = defineEventHandler(async (e) => {
  var _a;
  const id = (_a = e.context.params) == null ? void 0 : _a.id;
  await exist("evaluations", { id });
  const rows = await db("indicators").where({ eval_id: id });
  return sendRes(rows);
});

export { _id__get as default };
//# sourceMappingURL=_id_.get.mjs.map
