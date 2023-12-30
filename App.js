import { useState } from 'react';
import { FlatList, StyleSheet, View, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import uuid from 'react-uuid';
import Header from './components/Header';
import ToDoItem from './components/ToDoItem';
import AddTodo from './components/AddTodo';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'Buy Coffee', key: '1'},
    {text: 'Buy Tea', key: '2'},
    {text: 'Buy Bread', key: '3'},
  ])

  const pressHandler = (key) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((todo) => todo.key != key)
    })
  }

  const addTodoHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          {text: text, key: uuid()},
          ...prevTodos
        ]
      })
    } else {
      Alert.alert('OOPS!', 'Todo must be 3 charaters long', [
        {text: 'Understood', onPress: () => console.log('alert closed')}
      ])
    }
  }

  return (
    <TouchableWithoutFeedback onPress={ () => {
      Keyboard.dismiss()
    }}>
      <View style={styles.container}>
        <Header />
        <View style = {styles.content}>
          <AddTodo addTodoHandler = {addTodoHandler}/>
            <View style = {styles.list}>
              <FlatList
                data = {todos}
                renderItem = {({ item }) => (
                  <ToDoItem item = {item} pressHandler = {pressHandler} />
                )}
                />
            </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});
