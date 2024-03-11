import "dotenv/config";

import { migrate } from "drizzle-orm/postgres-js/migrator";
import { db, client } from "./client";

async function main(): Promise<void> {
  await client.connect();

  // This will run migrations on the database, skipping the ones already applied
  await migrate(db, { migrationsFolder: "./db/drizzle" });

  // Don"t forget to close the connection, otherwise the script will hang
  await client.end();
}

main();
