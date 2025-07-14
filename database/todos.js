import { getDatabase } from "./db";

const getTodos = async () => {
  const db = getDatabase();
  const rows = await db.getAllAsync("SELECT * FROM todos;");
  return rows;
};

const addTodo = async (title) => {
  console.log("Before insert: ", title);
  const db = getDatabase();
  const inserted = await db.runAsync(
    `INSERT INTO todos (title) VALUES (:title);`,
    { ":title": title }
  );
  console.log("After insert: ", title);

  const rows = await db.getAllAsync(`SELECT * FROM todos;`);
  console.log("[debugTestInsert] Rows:", rows);
  return inserted;
};

const checkTodo = async (id, status) => {
  const db = getDatabase();
  return await db.runAsync(
    `UPDATE todos SET 
    status = :status
    WHERE id = :id;`,
    { ":status": status, ":id": id }
  );
};

const deleteTodo = async (id) => {
  const db = getDatabase();
  return await db.runAsync(`DELETE FROM todos WHERE id = :id;`, { ":id": id });
};

export { getTodos, addTodo, checkTodo, deleteTodo };
