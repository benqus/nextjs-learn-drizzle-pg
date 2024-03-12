import "dotenv/config";

import bcrypt from "bcrypt";
import { Client } from "pg";
import { client } from "./client";
import {
  invoices,
  customers,
  revenue,
  users,
} from "../app/lib/placeholder-data.js";

async function seedUsers(client: Client): Promise<void> {
  try {
    // Insert data into the "users" table
    const text = `
      INSERT INTO users (id, name, email, password) VALUES ${
        users.map(({ id, name, email, password }) => 
          `('${id}', '${name}', '${email}', '${bcrypt.hashSync(password, 10)}')`
        )
        .join(',')
      } ON CONFLICT (id) DO NOTHING;
    `;
    const { rows } = await client.query({ text });

    console.log(`Seeded ${rows.length} users`);
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}

async function seedInvoices(client: Client): Promise<void> {
  try {
    // Insert data into the "invoices" table
    const text = `
      INSERT INTO invoices (customer_id, amount, status, date) VALUES ${
        invoices.map(({ customer_id, amount, status, date }) => 
          `('${customer_id}', ${amount}, '${status}', '${date}')`
        )
        .join(',')
      } ON CONFLICT (id) DO NOTHING;
    `;
    const { rows } = await client.query({ text });

    console.log(`Seeded ${rows.length} invoices`);
  } catch (error) {
    console.error("Error seeding invoices:", error);
    throw error;
  }
}

async function seedCustomers(client: Client): Promise<void> {
  try {
    // Insert data into the "customers" table
    const text = `
      INSERT INTO customers (id, name, email, image_url) VALUES ${
        customers.map(({ id, name, email, image_url }) => 
          `('${id}', '${name}', '${email}', '${image_url}')`
        )
        .join(',')
      } ON CONFLICT (id) DO NOTHING;
    `;
    const { rows } = await client.query({ text });

    console.log(`Seeded ${rows.length} customers`);
  } catch (error) {
    console.error("Error seeding customers:", error);
    throw error;
  }
}

async function seedRevenue(client: Client): Promise<void> {
  try {
    const text = `
      INSERT INTO revenue (month, revenue) VALUES ${
        revenue.map(({ month, revenue }) => `('${month}', ${revenue})`)
        .join(',')
      } ON CONFLICT (month) DO NOTHING;
    `;
    const { rows } = await client.query({ text });

    console.log(`Seeded ${rows.length} revenue`);
  } catch (error) {
    console.error("Error seeding revenue:", error);
    throw error;
  }
}

async function main() {
  await client.connect();

  try {
    await seedUsers(client);
    await seedInvoices(client);
    await seedCustomers(client);
    await seedRevenue(client);    
  } finally {
    await client.end();
  }
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err,
  );
});