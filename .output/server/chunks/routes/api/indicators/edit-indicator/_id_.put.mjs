import { c as defineEventHandler, r as readBody, l as exist, g as throwError, f as db, i as sendRes } from '../../../../_/nitro.mjs';
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
  const id = (_a = e.context.params) == null ? void 0 : _a.id;
  const { eval_id, name, description, weight, type, type_file } = await readBody(e);
  await exist("indicators", { id });
  if (type && !["boolean", "score"].includes(type)) {
    throwError(400, "type \u0E15\u0E49\u0E2D\u0E07\u0E40\u0E1B\u0E47\u0E19 boolean \u0E2B\u0E23\u0E37\u0E2D score \u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19");
  }
  if (type_file && !["file", "url"].includes(type_file)) {
    throwError(400, "type_file \u0E15\u0E49\u0E2D\u0E07\u0E40\u0E1B\u0E47\u0E19 file \u0E2B\u0E23\u0E37\u0E2D url \u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19");
  }
  if (eval_id) {
    await exist("evaluations", { id: eval_id });
  }
  await db("indicators").where({ id }).update({ eval_id, name, description, weight, type, type_file });
  return sendRes("\u0E41\u0E01\u0E49\u0E44\u0E02\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08");
});

export { _id__put as default };
//# sourceMappingURL=_id_.put.mjs.map
