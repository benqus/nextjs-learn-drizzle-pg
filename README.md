This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Prerequisites

1. Install Docker Desktop (with Compose)
2. Create an `.env` file in the project root:

```sh
# ./.env

PGHOST=localhost
PGUSER=postgres
PGPASSWORD=postgres
PGDATABASE=next-dashboard
PGPORT=5432

AUTH_SECRET=6i6NNwUan9Ms4xhjJxtwjUwcxZdC8DmkV2VdtWAo0pE=
```

## Login credentials

| User                | Password |
|---------------------|----------|
| `user@nextmail.com` | `123456` |

## Run (Docker Compose)

> $ docker-compose up -d --build

then

Go to [localhost:3000](localhost:3000)

## Run (dev)

> $ npm run dev

## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
