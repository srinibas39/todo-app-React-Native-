
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { TodoList } from './components/todoList';



export default function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("")

  const handleChange = (enteredText) => {
    setText(enteredText);
  }
  const handlePress = () => {
    setTodo((ptodo) => [...ptodo, { text: text, id: Math.random().toString()}])
    setText("");
  }

  return (
    <View style={styles.appContainer}>
      
        <View style={styles.todoContainer}>
          <TextInput placeholder="ENTER YOUR TODO HERE" value={text} style={styles.todoInput} onChangeText={handleChange} />
          <Button title='ADD' onPress={handlePress} />
        </View>
    
      <TodoList todo={todo} setTodo={setTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    marginVertical: 32,
    flex: 1,
  },
  todoContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#0ea5e9",

    padding: 16,

  },
  todoInput: {
    borderWidth: 2,
    borderColor: "#0ea5e9",
    width: "80%",
    paddingLeft: 10,
    paddingRight: 10,
    height: 38,
    backgroundColor: "#fff"

  },


});
