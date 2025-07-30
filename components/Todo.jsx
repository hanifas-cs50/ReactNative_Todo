import {
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";

const Todo = ({ data, handleCheck, handleDelete }) => {
  const { id, title, status } = data;

  return (
    <View style={styles.todoContainer}>
      <Text
        style={{
          color: status === 2 ? "#777" : "#000",
          textDecorationLine: status === 2 ? "line-through" : "none",
        }}
      >
        {title}
      </Text>
      <View style={styles.todoButtonWrapper}>
        <Pressable
          onPress={() => handleCheck(id, status)}
          style={styles.checkButton}
        >
          <Text style={styles.buttonText}>Check</Text>
        </Pressable>
        <Pressable
          onPress={() => handleDelete(id)}
          style={styles.deleteButton}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Todo;


const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#e2e8f0",
    paddingVertical: 8,
    paddingLeft: 12,
    paddingRight: 8,
    marginBottom: 8,
    borderRadius: 5,
  },
  todoButtonWrapper: {
    flexDirection: "row",
    gap: 5,
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
