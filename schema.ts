import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const products = sqliteTable("products", {
    id: integer("id").primaryKey(),
    name: text("name"),
    price: integer("price"),
    updatedAt: text("updated_at"),
});







