import { getDatabase } from "./index";

const getTodos = async () => {
  const db = await getDatabase();
  const rows = await db.getAllAsync("SELECT * FROM todos;");
  // console.log(`[getTodos] Get all todos.`);
  return rows;
};

const addTodo = async (title) => {
  const db = await getDatabase();
  const now = new Date().toISOString();
  try {
    const result = await db.runAsync(
      `INSERT INTO todos (title, created_at) VALUES (:title, :created_at);`,
      { ":title": title, ":created_at": now }
    );
    // console.log(`[addTodo] Inserted: "${title}" with result:`, result);
    return result;
  } catch (err) {
    console.error("[addTodo] Failed to insert:", err);
    throw err;
  }
};

const checkTodo = async (id, status) => {
  const db = await getDatabase();
  try {
    const result = await db.runAsync(
      `UPDATE todos SET 
      status = :status
      WHERE id = :id;`,
      { ":status": status, ":id": id }
    );
    // console.log(
    //   `[checkTodo] Updated: id="${id}" to make the status="${status}" with result:`,
    //   result
    // );
    return result;
  } catch (err) {
    console.error("[checkTodo] Failed to update:", err);
    throw err;
  }
};

const deleteTodo = async (id) => {
  const db = await getDatabase();
  try {
    const result = await db.runAsync(`DELETE FROM todos WHERE id = :id;`, {
      ":id": id,
    });
    // console.log(`[deleteTodo] Deleted: "${id}" with result:`, result);
    return result;
  } catch (err) {}
};

export { getTodos, addTodo, checkTodo, deleteTodo };
