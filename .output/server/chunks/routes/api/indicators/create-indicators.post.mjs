import { c as defineEventHandler, r as readBody, e as reqFields, g as throwError, l as exist, f as db, i as sendRes } from '../../../_/nitro.mjs';
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

const createIndicators_post = defineEventHandler(async (e) => {
  const { eval_id, name, description, weight, type, type_file, levels } = await readBody(e);
  reqFields([eval_id, name, description, weight, type, type_file]);
  if (!["boolean", "score"].includes(type)) {
    throwError(400, "type \u0E15\u0E49\u0E2D\u0E07\u0E40\u0E1B\u0E47\u0E19 boolean \u0E2B\u0E23\u0E37\u0E2D score \u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19");
  }
  if (!["file", "url"].includes(type_file)) {
    throwError(400, "type_file \u0E15\u0E49\u0E2D\u0E07\u0E40\u0E1B\u0E47\u0E19 file \u0E2B\u0E23\u0E37\u0E2D url \u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19");
  }
  await exist("evaluations", { id: eval_id });
  const [indic_id] = await db("indicators").insert({
    eval_id,
    name,
    description,
    weight,
    type,
    type_file
  });
  if (type === "score") {
    const defaultLevels = [
      { level: 1, description: "\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E44\u0E14\u0E49\u0E15\u0E48\u0E33\u0E01\u0E27\u0E48\u0E32\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E17\u0E35\u0E48\u0E04\u0E32\u0E14\u0E2B\u0E27\u0E31\u0E07\u0E21\u0E32\u0E01" },
      { level: 2, description: "\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E44\u0E14\u0E49\u0E15\u0E48\u0E33\u0E01\u0E27\u0E48\u0E32\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E17\u0E35\u0E48\u0E04\u0E32\u0E14\u0E2B\u0E27\u0E31\u0E07" },
      { level: 3, description: "\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E44\u0E14\u0E49\u0E15\u0E32\u0E21\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E17\u0E35\u0E48\u0E04\u0E32\u0E14\u0E2B\u0E27\u0E31\u0E07" },
      { level: 4, description: "\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E44\u0E14\u0E49\u0E2A\u0E39\u0E07\u0E01\u0E27\u0E48\u0E32\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E17\u0E35\u0E48\u0E04\u0E32\u0E14\u0E2B\u0E27\u0E31\u0E07" }
    ];
    const levelData = Array.isArray(levels) && levels.length > 0 ? levels : defaultLevels;
    await db("levels").insert(
      levelData.map((item) => ({
        indic_id,
        level: Number(item.level),
        description: item.description || ""
      }))
    );
  }
  return sendRes("\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08");
});

export { createIndicators_post as default };
//# sourceMappingURL=create-indicators.post.mjs.map
