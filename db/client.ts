import "dotenv/config";

import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import * as schema from "./schema";

export const client = new Client();

export const db = drizzle(client, { schema });
