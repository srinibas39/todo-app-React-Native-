import { StyleSheet, View, Text, FlatList, Pressable } from "react-native";

export const TodoList = ({ todo, setTodo }) => {
  const handleDelete = (itemId) =>
    setTodo(todo.filter((el) => el.id !== itemId));

  return (
    <View style={styles.todoList}>
      <FlatList
        data={todo}
        renderItem={(itemData) => {
          return (
            <Pressable onPress={() => handleDelete(itemData.item.id)}>
              <View style={styles.todoBox}>
                <Text style={styles.todoText}>{itemData.item.text}</Text>
              </View>
            </Pressable>
          );
        }}
        keyExtractor={(item, idx) => idx}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  todoList: {
    flex: 6,
  },
  todoBox: {
    backgroundColor: "#0ea5e9",
    margin: 16,
    borderRadius: 10,
    padding: 16,
  },
  todoText: {
    color: "#fff",
    textAlign: "center",
  },
});
