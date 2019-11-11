import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Weather from "./components/Weather";
class App extends Component {
  render() {
    return (
      <View>
        <Text>
          <Weather />
        </Text>
      </View>
    )
  }
}

export default App;