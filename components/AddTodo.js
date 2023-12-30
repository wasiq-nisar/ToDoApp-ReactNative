import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

const AddTodo = ({addTodoHandler}) => {
    const [text, setText] = useState('')

    const onChangeHandler = (val) => {
        setText(val)
    }

  return (
    <View>
        <TextInput 
            style = {styles.input}
            placeholder = 'new todo...'
            onChangeText={(val) => onChangeHandler(val)}
        />
        
        <Button onPress={() => addTodoHandler(text)} title = 'add todo' color = 'coral' />
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})

export default AddTodo