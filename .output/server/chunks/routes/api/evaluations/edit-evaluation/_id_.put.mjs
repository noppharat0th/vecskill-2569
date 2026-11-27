import { c as defineEventHandler, r as readBody, g as throwError, f as db, i as sendRes } from '../../../../_/nitro.mjs';
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
  const { title, start_date, end_date } = await readBody(e);
  const start = new Date(start_date);
  const end = new Date(end_date);
  if (start > end) {
    throwError(400, "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E15\u0E49\u0E2D\u0E07\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14");
  }
  await db("evaluations").where({ id }).update({ title, start_date, end_date });
  return sendRes("\u0E41\u0E01\u0E49\u0E44\u0E02\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08");
});

export { _id__put as default };
//# sourceMappingURL=_id_.put.mjs.map
