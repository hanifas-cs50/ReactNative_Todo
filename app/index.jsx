import { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { initDatabase } from "../database/db";
import { getTodos } from "../database/todos";

const Home = () => {
  const [db, setDb] = useState([]);
  const textRef = useRef();

  const loadTodos = async () => {
    setDb(await getTodos());
  };

  const handleAdd = async () => {
    const value = textRef.current?._lastNativeText;
  
    if (!value) return;
  
    await addTodo(value);
    textRef.current.clear(); // Clear the input
    await loadTodos();
  };
  
  const handleCheck = async () => {
    await addTodo(value);
    textRef.current.clear(); // Clear the input
    await loadTodos();
  };

  const handleDelete = async () => {
    await addTodo(value);
    textRef.current.clear(); // Clear the input
    await loadTodos();
  };

  useEffect(() => {
    (async () => {
      await initDatabase();
      await loadTodos();
    })();
  }, []);

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
