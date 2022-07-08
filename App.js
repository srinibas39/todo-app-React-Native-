
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';


export default function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("")

  const handleChange = (enteredText) => {
    setText(enteredText);



  }
  const handlePress = () => {
    setTodo((ptodo) => [...ptodo, text])
    setText("");

  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.todoContainer}>
        <TextInput placeholder="ENTER YOUR TODO HERE" value={text} style={styles.todoInput} onChangeText={handleChange} />
        <Button title='ADD' onPress={handlePress} />
      </View>
      <View style={styles.todoList}>
        <ScrollView>
          {
            todo.map((el, idx) => {
              return <View key={idx} style={styles.todoBox}>
                <Text style={styles.todoText}>{el}</Text>
              </View>
            })
          }
        </ScrollView>

      </View>
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
  todoList: {
    flex: 6,
  },
  todoBox: {
    backgroundColor: "#0ea5e9",
    margin: 16,
    borderRadius: 10,
    padding: 16
  },
  todoText: {
    color: "#fff",
    textAlign: "center"
  }

});
