import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Home from './Component/home'

function App() {
  const [outputText, setText] = useState('Test Native Button');

  const changeText = () => {
    setText('Test Native Button')
  }
  return (
    <View style={styles.container}>
      <Text>React Native</Text>
      <Text>{outputText}</Text>
      <Button title="Click Me" onPress={() => Alert.alert('Testing Native Button')}/>
      <Button title="Change text" onPress={() =>{setText('Text Changed')}}/>
      <Button title="Revert text" onPress={changeText}/>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
