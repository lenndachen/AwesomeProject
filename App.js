import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Weather from './components/Weather';
export default class App extends Component {
  render() {
    return (
      <View>
        <View>
          <Weather />
        </View>
        <Text>Hi Tuesday</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    height: 100,
    flex: 1,
  },
});
