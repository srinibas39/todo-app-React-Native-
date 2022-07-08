
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.todoContainer}>
        <TextInput placeholder="ENTER YOUR TODO HERE" style={styles.todoInput} />
        <Button title='ADD'/>
      </View>
      <View style={styles.todoList}>
        <Text>All todos here....</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    marginVertical:32,
    flex:1,
  },
  todoContainer: {
    flex:1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
    borderBottomWidth:2,
    borderBottomColor:"#0ea5e9",
    backgroundColor:"#e0f2fe",
    padding:16,
   
  },
  todoInput: {
    borderWidth: 2,
    borderColor:"#0ea5e9",
    width: "80%",
    paddingLeft: 10,
    paddingRight: 10,
    height:38,
    backgroundColor:"#fff"
  
  },
  todoList:{
     flex:6,
     backgroundColor:"#e0f2fe",
     
  }
 
});
