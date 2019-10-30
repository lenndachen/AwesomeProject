import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import Weather from "./views/Weather.js"

class App extends React.Component {
  render() {
    return (
        <View>
            <Text><Weather /></Text>
        </View>
      )
  }
}

export default App;