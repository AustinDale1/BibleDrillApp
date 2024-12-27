import React from 'react';
import {StyleSheet, TextInput, SafeAreaView, SafeAreaProvider} from 'react-native';
// import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
let textColor = 'red';

const TextInputGame = (verse) => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  //let textColor = 'red';
    const getColor = () => {
    {
        if('verse'.includes(text) || text == '') {
            return 'black';
        } else {
            return 'red';
        }
    }
    }
  return (
    // <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          style={{ color: getColor() }}
          onChangeText={onChangeText}
          value={text}
          placeholder="Type verse"

        />
      </SafeAreaView>
    // </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
});

export default TextInputGame;