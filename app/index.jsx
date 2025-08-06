import { useEffect, useRef, useState } from "react";
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { initDatabase } from "../database";
import { deleteTodo, checkTodo, addTodo, getTodos } from "../database/todos";
import Todo from "../components/Todo";
import ThemedView from "../components/themed/ThemedView";
import ThemedText from "../components/themed/ThemedText";
import ThemedInput from "../components/themed/ThemedInput";

export default function App() {
  const insets = useSafeAreaInsets();
  const inputRef = useRef(null);
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const loadTodos = async () => {
    setTodos(await getTodos());
  };

  const handleAdd = async () => {
    const trimmed = text.trim();
    if (!trimmed) return;

    await addTodo(trimmed);
    setText("");
    await loadTodos();
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

  const initDb = async () => {
    await initDatabase();
    await loadTodos();
  };

  useEffect(() => {
    initDb();
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ThemedView
        style={[
          styles.container,
          {
            paddingTop: insets.top + 20,
          },
        ]}
      >
        <ThemedText style={styles.title}>React Native TODO App</ThemedText>

        <ThemedView style={styles.inputGroup}>
          <ThemedInput
            ref={inputRef}
            style={styles.input}
            placeholder="New todo..."
            value={text}
            onChangeText={setText}
          />
          <Button title="Add todo" onPress={handleAdd} />
        </ThemedView>

        <ScrollView
          style={styles.scrollView}
          keyboardShouldPersistTaps="handled"
        >
          {todos.map((item, index) => {
            const last = todos.length - 1 === index;
            return (
              <Todo
                key={item.id}
                data={item}
                last={last}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
              />
            );
          })}
        </ScrollView>
      </ThemedView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: {
    marginBottom: 12,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 4,
  },
  inputGroup: {
    width: "100%",
    gap: 10,
    marginBottom: 10,
  },
});
