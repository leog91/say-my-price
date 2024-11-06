
import { drizzle } from 'drizzle-orm/better-sqlite3';
import { products } from './schema';
import Database from 'better-sqlite3';

const sqlite = new Database('sqlite.db');

const db = drizzle(sqlite);





export const addProduct = async (name: string, price: number, updatedAt: string) => {
    await db.insert(products)
        // .values({ name: 'prod1', price: 123, updatedAt: new Date().toISOString() })
        .values({ name: name, price: price, updatedAt: updatedAt })

}



