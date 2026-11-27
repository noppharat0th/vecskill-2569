import { c as defineEventHandler, k as reqAuth, i as sendRes } from '../../../_/nitro.mjs';
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

const me_get = defineEventHandler((e) => {
  const user = reqAuth(e);
  return sendRes(user);
});

export { me_get as default };
//# sourceMappingURL=me.get.mjs.map
