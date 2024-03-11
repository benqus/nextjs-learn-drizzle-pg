import { relations, sql } from "drizzle-orm";
import { pgTable, uuid, varchar, text, date, integer } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().default(sql`uuid_generate_v4()`),
  name: varchar("name", { length: 255 }).notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
});

export const customers = pgTable("customers", {
  id: uuid("id").primaryKey().default(sql`uuid_generate_v4()`),
  name: varchar("name", { length: 255 }).notNull(),
  email: text("email").notNull().unique(),
  image_url: varchar("image_url", { length: 255 }).notNull(),
});

export const invoices = pgTable("invoices", {
  id: uuid("id").primaryKey().default(sql`uuid_generate_v4()`),
  customer_id: uuid("customer_id").notNull().unique(),
  amount: integer("amount").notNull(),
  status: varchar("status", { length: 255 }).notNull(),
  date: date("date").notNull(),
});
export const invoiceRelations = relations(invoices, ({ one }) => ({
  customer: one(customers, {
    fields:[invoices.customer_id],
    references:[customers.id],
  }),
}));

export const revenue = pgTable("revenue", {
  month: varchar("month", { length: 4 }).notNull().unique(),
  revenue: integer("revenue").notNull(),
});