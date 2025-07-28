import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { initDatabase } from "../database";
import { deleteTodo, checkTodo, addTodo, getTodos } from "../database/todos";

export default function App() {
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
      keyboardVerticalOffset={80}
    >
      <View style={styles.container}>
        <Text style={{ marginBottom: 10 }}>
          This is hanifas-cs50's work (my work :v), thanks for viewing it
        </Text>

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
          {todos.map((item) => (
            <View key={item.id} style={styles.todoContainer}>
              <Text
                style={{
                  textDecorationLine:
                    item.status === 2 ? "line-through" : "none",
                }}
              >
                {item.title}
              </Text>
              <View style={styles.todoButtonWrapper}>
                <Pressable
                  onPress={() => handleCheck(item.id, item.status)}
                  style={styles.checkButton}
                >
                  <Text style={styles.buttonText}>Check</Text>
                </Pressable>
                <Pressable
                  onPress={() => handleDelete(item.id)}
                  style={styles.deleteButton}
                >
                  <Text style={styles.buttonText}>Delete</Text>
                </Pressable>
              </View>
            </View>
          ))}
        </ScrollView>

        <StatusBar style="auto" />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 36,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
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
  scrollView: {
    flex: 1,
  },
  todoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#e2e8f0",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 8,
    borderRadius: 5,
  },
  todoButtonWrapper: {
    flexDirection: "row",
    gap: 8,
  },
  checkButton: {
    backgroundColor: "#3b82f6",
    padding: 10,
    borderRadius: 3,
  },
  deleteButton: {
    backgroundColor: "#f43f5e",
    padding: 10,
    borderRadius: 3,
  },
  buttonText: {
    color: "#fff",
  },
});
