import { useEffect, useRef, useState } from "react";
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { initDatabase } from "../database";
import { deleteTodo, checkTodo, addTodo, getTodos } from "../database/todos";
import Todo from "../components/Todo";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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
      <View
        style={[
          styles.container,
          {
            paddingTop: insets.top + 20,
            paddingBottom: 12,
          },
        ]}
      >
        <Text style={styles.title}>React Native TODO App</Text>

        <View style={styles.inputGroup}>
          <TextInput
            ref={inputRef}
            style={styles.input}
            placeholder="New todo..."
            value={text}
            onChangeText={setText}
          />
          <Button title="Add todo" onPress={handleAdd} />
        </View>

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
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  title: {
    marginBottom: 12,
    fontWeight: "bold",
    fontSize: 24,
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
