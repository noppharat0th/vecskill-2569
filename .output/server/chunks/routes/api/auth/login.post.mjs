import { c as defineEventHandler, r as readBody, e as reqFields, f as db, g as throwError, h as setCookie, i as sendRes } from '../../../_/nitro.mjs';
import jwt from 'jsonwebtoken';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'knex';
import '@iconify/utils';
import 'consola';

const login_post = defineEventHandler(async (e) => {
  const { username, password } = await readBody(e);
  reqFields([username, password]);
  const user = await db("users").where({ username }).first();
  if (!user || password !== user.password) throwError(401, "\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49 \u0E2B\u0E23\u0E37\u0E2D \u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19 \u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07!!");
  const payload = { id: user.id, username: user.username, role: user.role, is_reset: user.is_reset };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" });
  setCookie(e, "auth_token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7,
    path: "/"
  });
  return sendRes({ token });
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
