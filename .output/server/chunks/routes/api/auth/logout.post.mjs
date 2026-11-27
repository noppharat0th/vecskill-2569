import { c as defineEventHandler, j as deleteCookie, i as sendRes } from '../../../_/nitro.mjs';
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

const logout_post = defineEventHandler((e) => {
  deleteCookie(e, "auth_token", { path: "/" });
  return sendRes("logout success");
});

export { logout_post as default };
//# sourceMappingURL=logout.post.mjs.map
