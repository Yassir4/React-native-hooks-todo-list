/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default class App extends Component {
  state={
      todo: [{
          text: '',
      }],
    text: 'Create a Task'
  }
  handleAddTodo = () => {
    var newTask = [{
      text: this.state.text
    }]
    this.setState((state) => ({
      todo: [ ...state.todo, ...newTask]
    }),() => {
      console.log(this.state.todo)
      console.log(this.state.newTask)
    })

  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Todo list</Text>
        <TextInput
          style={{ height: 20, borderColor: 'gray', borderWidth: 1, width: '50%' }}
          onChangeText={(text) => this.setState({ text })}
          placeholder={this.state.text}
        />
        <Button 
          title="Add"
          onPress={this.handleAddTodo}
        />
        {
          this.state.todo.map((task) => (
            <Text>{task.text}</Text>
          ))
        }
      </View>
    );
  }
}

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
