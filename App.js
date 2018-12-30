/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground } from 'react-native';


const App = () => {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])

  handleAddTodo = () => {
    console.log('fired')
    setTodos([...todos, value])
    setValue('')
  }

  return (
    <ImageBackground style={{ width: '100%', height: '100%', flex: 1 }} source={require('./BackgroudColor.jpg')}>
      <View style={styles.container}>
        <Text style={{ marginTop: '10%', fontSize: 16, color: 'white' }}>Today</Text>
        {/* <Text style={styles.welcome}>Todo list</Text> */}
        <TextInput
          style={{
            height: 20,
            borderColor: 'rgb(222,222,222)',
            borderBottomWidth: 1,
            width: '100%',
            minHeight: '7%',
            marginTop: '5%',
            fontSize: 25,
            fontWeight: 'bold',
            color: 'white',
            paddingBottom: 15

          }}
          multiline={true}
          onChangeText={(value) => setValue(value)}
          placeholder={'Do it now!'}
          placeholderTextColor="white"
          value={value}
        />
        <Button
          title="Add"
          onPress={() => handleAddTodo()}
        />
        {
          todos.map((task) => (
            <View style={styles.taskWrapper}>
              <Text style={styles.task}>{task}</Text>
            </View>
          ))
        }
      </View>
    </ImageBackground>
  )
}
export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  taskWrapper: {
    borderColor: '#D0D0D0',
    borderBottomWidth: 0.5,
    width: '100%',
    paddingBottom: 20,
    paddingLeft: 10
  },
  task: {
    height: 20,
    borderColor: 'white',
    borderBottomWidth: 10,
    // width: '100%',
    marginTop: '5%',
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  }
});
