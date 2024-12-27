import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useState} from 'react';
import Flashcard from './Flashcard';
import SwipeCard from './SwipeCard';
import TextInputGame from './TextInput';
import SelectGame from './SelectGame';




export default function App() {
  let [cards2, setCards2] = useState([
          { front: "John", back: "Luke John Acts" },
          { front: "Acts", back: "John Acts Romans" },
          { front: "Mark", back: "Matthew Mark Luke" }
      ])
    let a = [          { front: "John", back: "Luke John Acts" },
      { front: "Acts", back: "John Acts Romans" },
      { front: "Mark", back: "Matthew Mark Luke" }];
  return (
    <View style={styles.container}>  

    <SwipeCard
      onSwipeLeft={() => console.log('Rejected')}
      onSwipeRight={() => console.log('Accepted')}
      cards={cards2}
    >
      <View style={{ width: 300, height: 400, backgroundColor: 'blue' }}>
        <Text>Your content here</Text>
      </View>
    </SwipeCard>

    <TextInputGame verse='ok here we go'></TextInputGame>


    <SelectGame book='Psalms'></SelectGame>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    margin: 'auto',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 400,
  },
});
