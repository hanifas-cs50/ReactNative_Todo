import { getDatabase } from "./db";

const getTodos = async () => {
  const db = getDatabase();
  return await db.getAllAsync(`SELECT * FROM todos;`);
};

const addTodo = async (title) => {
  const db = getDatabase();
  return await db.runAsync(
    `INSERT INTO todos ("title") VALUES (:title);`,
    { title }
  );
};

const updateTodo = async (id, title, status) => {
  const db = getDatabase();
  return await db.runAsync(
    `UPDATE todos SET 
    title = :title,
    status = :status
    WHERE id = :id;`,
    { title, status, id }
  );
};
const checkTodo = async (id, status) => {
  const db = getDatabase();
  return await db.runAsync(
    `UPDATE todos SET 
    status = :status
    WHERE id = :id;`,
    { status, id }
  );
};

const deleteTodo = async (id) => {
  const db = getDatabase();
  return await db.runAsync(
    `DELETE FROM todos WHERE id = :id;`, 
    { id }
  );
};

export { getTodos, addTodo, updateTodo, checkTodo, deleteTodo };
