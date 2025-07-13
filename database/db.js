import * as SQLite from "expo-sqlite";

let database;

const initDatabase = async () => {
  if (database) {
    return database;
  }

  database = await SQLite.openDatabaseAsync("todos.db");
  await database.execAsync(`
    CREATE TABLE IF NOT EXISTS todos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      status INTEGER NOT NULL DEFAULT 1 CHECK (status IN (1, 2)),
      created_at TEXT NOT NULL DEFAULT (datetime("now"))
    );
  `);

  return database;
};

const getDatabase = () => {
  if (!database) {
    throw new Error("Database not initialized. Call initDb() first.");
  }

  return database;
};

export { initDatabase, getDatabase };
