/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


 const  App = () => {
  const [value,setValue] = useState('Add a todo')
  const[todos,setTodos] = useState([])

  handleAddTodo = () => {
    console.log('fired')
    setTodos([...todos, value])
    setValue('')
  }

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Todo list</Text>
        <TextInput
          style={{ height: 20, borderColor: 'gray', borderWidth: 1, width: '50%' }}
          onChangeText={(value) => setValue(value)}
          placeholder={value}
        />
        <Button 
          title="Add"
          onPress={() => handleAddTodo()}
        />
        {
          todos.map((task) => (
            <Text>{task}</Text>
          ))
        }
      </View>
    )
}
export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
