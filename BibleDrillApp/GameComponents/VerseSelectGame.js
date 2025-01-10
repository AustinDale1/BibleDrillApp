import React, { useEffect, useState } from 'react';
import {View, Pressable, Text, StyleSheet, TextInput, SafeAreaView, SafeAreaProvider} from 'react-native';
import { Button } from 'react-native-paper';
import ChildrenVerses from '../StaticFiles/children';

const VerseSelectGame = ({verse, verseArray}) => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  let [choiceArray, setChoiceArray] = useState(['', '', '', '', '']);
  let [correctArray, setCorrectArray] = useState([]);
  let [theBook, setTheBook] = useState(book.book);
  var kp = new ChildrenVerses();
  let wordBank = kp.wordBank();
  
  const handleSubmit = (bookSelected) => {
    let currentIndex = bookArray.indexOf(theBook);
    let correctBook = bookArray[currentIndex + 1];
    if(bookSelected == correctBook)
    {
      const newArray = [...correctArray, bookSelected];
      setCorrectArray(newArray);
      setTheBook(bookSelected);
      let newChoices = generateChoices(bookSelected);
      setChoiceArray(newChoices);
    } else{
      console.log('wrong is ' + bookSelected + ' correct is ' + correctBook);
    }
  }

  const generateChoices = (currentBook) =>
  {
    const nextBook = bookArray[bookArray.indexOf(currentBook) + 1];
    const correctPos = Math.floor(Math.random() * 5);

    let newChoices = new Array(5).fill('');
    newChoices[correctPos] = nextBook;

    for (let i = 0; i < 5; i++) {
      if (i === correctPos) continue;
      
      let randomBook;
      do {
        randomBook = bookArray[Math.floor(Math.random() * bookArray.length)];
      } while (
        randomBook === currentBook ||
        randomBook === nextBook ||
        newChoices.includes(randomBook)
      );
      
      newChoices[i] = randomBook;
    }

    return newChoices;
  }

  useEffect(() => {
    setCorrectArray([book.book]);
    const initChoices = generateChoices(book.book);
    setChoiceArray(initChoices)
  }, [book.book]);

  return (
    <View>
      { correctArray.length > 0 ? 
      correctArray.map((choice, index) => (
          <View key={index}><Text key={index}>choice {choice}</Text></View>
      )) : <Text>a</Text>
      }
      <Text>Choose after {theBook}</Text>
          <Pressable onPress={() => handleSubmit(choiceArray[0])}><Text>{choiceArray[0]}</Text></Pressable>
          <Pressable onPress={() => handleSubmit(choiceArray[1])}><Text>{choiceArray[1]}</Text></Pressable>
          <Pressable onPress={() => handleSubmit(choiceArray[2])}><Text>{choiceArray[2]}</Text></Pressable>
          <Pressable onPress={() => handleSubmit(choiceArray[3])}><Text>{choiceArray[3]}</Text></Pressable>
          <Pressable onPress={() => handleSubmit(choiceArray[4])}><Text>{choiceArray[4]}</Text></Pressable>
      <Text>{theBook}</Text>
    </View>
  );
};


export default VerseSelectGame;