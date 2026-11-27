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

const getEvaluation_get = defineEventHandler(async (e) => {
  const rows = await db("evaluations").select("*");
  return sendRes(rows);
});

export { getEvaluation_get as default };
//# sourceMappingURL=get-evaluation.get.mjs.map
