/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';



const App = () => {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])
  const [checked, setChecked] = useState(false)

  handleAddTodo = () => {
    console.log('fired')
    setTodos([...todos, value])
    setValue('')
  }
  let check_icon = null
  // if (checked) {
  //   check_icon = <Icon name="check" size={30} color="#900" style={{ marginLeft: 15 }} />
  // }
  !checked
    ?
    check_icon = <Icon name="square" size={30} color="#900" style={{ marginLeft: 15 }} />
    :
    check_icon = <Icon name="check" size={30} color="#900" style={{ marginLeft: 15 }} />
  return (
    <ImageBackground style={{ width: '100%', height: '100%', flex: 1 }} source={require('./BackgroudColor.jpg')}>
      <View style={styles.container}>
        <Text style={{ marginTop: '10%', fontSize: 16, color: 'white' }}>Today</Text>
        {/* <Text style={styles.welcome}>Todo list</Text> */}


        <View style={{
          flexDirection: 'row',
          alignItems: 'baseline',
          borderColor: 'rgb(222,222,222)',
          borderBottomWidth: 1,
          paddingRight: 10,
          paddingBottom: 5
        }}>
          <TextInput
            style={{
              height: 20,
              // width: '100%',
              flex: 1,
              minHeight: '7%',
              marginTop: '5%',
              fontSize: 25,
              fontWeight: 'bold',
              color: 'white',
              paddingLeft: 10
            }}
            multiline={true}
            onChangeText={(value) => setValue(value)}
            placeholder={'Do it now!'}
            placeholderTextColor="white"
            value={value}
          />
          <TouchableOpacity onPress={() => handleAddTodo()}>
            <Icon name="plus" size={30} color="#900" style={{ marginLeft: 15 }} />
          </TouchableOpacity>
        </View>
        {
          todos.map((task) => (
            <View style={styles.taskWrapper}>
              <TouchableOpacity onPress={() => setChecked(!checked)}>
                {check_icon}
              </TouchableOpacity>
              <View>
                {/* <View style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                  top: 2,
                  position: 'absolute'
                }}></View> */}
                <Text style={styles.task}>{task}</Text>
              </View>
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
    alignItems: 'center',
  },
  taskWrapper: {
    marginTop: '5%',
    flexDirection: 'row',
    // alignItems: 'baseline',
    borderColor: '#D0D0D0',
    borderBottomWidth: 0.5,
    width: '100%',
    minHeight: 40,
  },
  task: {
    paddingBottom: 20,
    paddingLeft: 10,
    paddingTop: 6,
    borderColor: 'white',
    borderBottomWidth: 1,
    // width: '100%',
    // marginBottom: 4,
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  }
});
