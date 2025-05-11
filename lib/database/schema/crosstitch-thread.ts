import { int, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const crosstitchThread = sqliteTable("threads", {
    id: int().primaryKey({ autoIncrement: true }),
    name: text().notNull(),
    code: text().notNull().unique(),
    brand: text().notNull(),
    type: text().notNull(),
    colorCode: text().notNull(),
    createdAt: integer().notNull().$default(() => Date.now()),
    updatedAt: integer().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});

