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
            <View style={styles.todoBox}>
              <Pressable
                android_ripple={{ color: "#1d4ed8" }}
                onPress={() => handleDelete(itemData.item.id)}
                style={({pressed})=>{pressed && styles.iosRipple}}
              >
                <Text style={styles.todoText}>{itemData.item.text}</Text>
              </Pressable>
            </View>
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
    height: 48
  },
  todoText: {
    color: "#fff",
    textAlign: "center",
    height:"100%",
    padding:10
  },
  iosRipple:{
    backgroundColor:"#0ea5e9"
  }
});
