import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { products } from './schema';
import { run } from './scrap';
import { productStoCheck } from './wanted';
const sqlite = new Database('sqlite.db');
const db = drizzle(sqlite);

// await db.insert(products)
//     .values({ name: 'prod1', price: 123, updatedAt: new Date().toISOString() })




await run(productStoCheck)