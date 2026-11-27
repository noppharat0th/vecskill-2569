import { c as defineEventHandler, r as readBody, e as reqFields, g as throwError, f as db, i as sendRes } from '../../../_/nitro.mjs';
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

const createUser_post = defineEventHandler(async (e) => {
  const { fname, lname, username, role, password } = await readBody(e);
  reqFields([fname, lname, username, role]);
  if (!["evaluator", "evaluatee"].includes(role)) {
    throwError(400, "role is invalid");
  }
  const existing = await db("users").where({ username }).first();
  if (existing) {
    throwError(409, "username already exists");
  }
  const defaultPassword = password || "1234";
  await db("users").insert({
    fname,
    lname,
    username,
    password: defaultPassword,
    role
  });
  return sendRes(`\u0E40\u0E1E\u0E34\u0E48\u0E21 ${username} \u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08`);
});

export { createUser_post as default };
//# sourceMappingURL=create-user.post.mjs.map
