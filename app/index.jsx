import { useEffect, useRef, useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { initDatabase } from "../database/db";
import { deleteTodo, checkTodo, addTodo, getTodos } from "../database/todos";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const textRef = useRef(''); // <-- Initialize as empty string

  const loadTodos = async () => {
    setTodos(await getTodos());
  };

  const handleAdd = async () => {
    const text = textRef.current.trim();
    if (!text) return;

    await addTodo(text);
    await loadTodos();

    textRef.current = '';
  };

  const handleCheck = async (id, currStatus) => {
    const newStatus = currStatus === 1 ? 2 : 1;
    await checkTodo(id, newStatus);
    await loadTodos();
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    await loadTodos();
  };

  useEffect(() => {
    (async () => {
      await initDatabase();
      await loadTodos();
      await addTodo("test");
    })();
  }, []);

  return (
    <View>
      <Text>Home</Text>
      <TextInput
        placeholder="New todo"
        onChangeText={(text) => {
          textRef.current = text;
        }}
      />
      <Button title="Add Todo" onPress={handleAdd} />

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Home;
