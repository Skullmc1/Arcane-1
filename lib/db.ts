import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { Database } from 'sqlite';

// This is a singleton pattern to reuse the database connection
let db: Database | null = null;

async function getDb() {
  if (!db) {
    db = await open({
      filename: './database.sqlite',
      driver: sqlite3.Database
    });

    // Create users table if it doesn't exist
    await db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
  }
  return db;
}

export default getDb; 