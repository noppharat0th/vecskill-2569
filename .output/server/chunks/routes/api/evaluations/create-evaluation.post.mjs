import { c as defineEventHandler, r as readBody, e as reqFields, f as db, g as throwError, i as sendRes } from '../../../_/nitro.mjs';
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

const createEvaluation_post = defineEventHandler(async (e) => {
  const { title, start_date, end_date } = await readBody(e);
  reqFields([title, start_date, end_date]);
  const start = new Date(start_date);
  const end = new Date(end_date);
  const eval_title = await db("evaluations").where({ title }).first();
  if (title === (eval_title == null ? void 0 : eval_title.title))
    throwError(400, "\u0E0A\u0E37\u0E48\u0E2D\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E0B\u0E49\u0E33");
  if (isNaN(start.getTime()) || isNaN(end.getTime()))
    throwError(400, "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07");
  if (start > end)
    throwError(400, "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E15\u0E49\u0E2D\u0E07\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14");
  await db("evaluations").insert({ title, start_date, end_date });
  return sendRes("\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08");
});

export { createEvaluation_post as default };
//# sourceMappingURL=create-evaluation.post.mjs.map
