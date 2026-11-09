# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Evaluation API

The evaluation endpoints use the `evaluations` table defined in `server/init-db/01-schema.sql`.

| Method | Endpoint | Purpose |
| --- | --- | --- |
| `POST` | `/api/evaluations/add-eval` | Create an evaluation |
| `PUT` | `/api/evaluations/change-eval/:id` | Update an evaluation |
| `DELETE` | `/api/evaluations/del-eval/:id` | Delete an evaluation |
| `GET` | `/api/evaluations/list-eval` | List evaluations |
| `GET` | `/api/evaluations/list-eval-id/:id` | Get one evaluation |

Create and update requests accept `title`, `stat_date`, and `end_date`; dates must use `YYYY-MM-DD` and `end_date` cannot be earlier than `stat_date`.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
