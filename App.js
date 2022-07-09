
import { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Modal, Image } from 'react-native';
import { TodoList } from './components/todoList';



export default function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);



  const handleChange = (enteredText) => {
    setText(enteredText);
  }
  const handlePress = () => {
    setTodo((ptodo) => [...ptodo, { text: text, id: Math.random().toString() }])
    setText("");
    handleCloseModal();
  }
  const handleModal = () => {
    setModalVisible(true)
  }

  const handleCloseModal = () => {
    setModalVisible(false)
  }


  return (
    <View style={styles.appContainer}>
      <Button title='OPEN TODO EDITOR' onPress={handleModal} />
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.todoContainer}>
          <Image source={require("./assets/images/smile.jpg")} style={styles.image} />
          <TextInput placeholder="ENTER YOUR TODO HERE" value={text} style={styles.todoInput} onChangeText={handleChange} />
          <View style={styles.BtnContainer}>
            <View>
              <Button title='ADD' onPress={handlePress} />
            </View>
            <View>
              <Button title='CANCEL' onPress={handleCloseModal} />
            </View>
          </View>

        </View>
      </Modal>

      <TodoList todo={todo} setTodo={setTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    marginVertical: 32,
    flex: 1,
    padding: 16
  },
  todoContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#0ea5e9",
    padding: 16,
  },
  todoInput: {
    borderWidth: 2,
    borderColor: "#0ea5e9",
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    height: 38,
    backgroundColor: "#fff"

  },
  BtnContainer: {
    margin: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "40%"
  },
  image: {
    height: 200,
    width: 200,
  },




});
