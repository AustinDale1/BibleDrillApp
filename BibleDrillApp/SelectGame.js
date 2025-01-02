import React, { useEffect, useState } from 'react';
import {View, Pressable, Text, StyleSheet, TextInput, SafeAreaView, SafeAreaProvider} from 'react-native';
import { Button } from 'react-native-paper';

const SelectGame = (book) => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  const bookArray = [
    'Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy',
    'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel',
    '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles',
    'Ezra', 'Nehemiah', 'Esther', 'Job', 'Psalms',
    'Proverbs', 'Ecclesiastes', 'Song of Solomon', 'Isaiah',
    'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel', 'Hosea',
    'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum',
    'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi',
    'Matthew', 'Mark', 'Luke', 'John', 'Acts',
    'Romans', '1 Corinthians', '2 Corinthians', 'Galatians',
    'Ephesians', 'Philippians', 'Colossians',
    '1 Thessalonians', '2 Thessalonians', '1 Timothy',
    '2 Timothy', 'Titus', 'Philemon', 'Hebrews', 'James',
    '1 Peter', '2 Peter', '1 John', '2 John', '3 John',
    'Jude', 'Revelation'
  ];
  let [choiceArray, setChoiceArray] = useState(['', '', '', '', '']);
  let [flipper, setFlipper] = useState(true);
  let [correctArray, setCorrectArray] = useState([]);
  theBook = 'test';
  let temp = [];

  //Ok put in method that gets correct after, from the prop, 
  //skip whatever random element it is
  //Correct after maybe from js array method tht gets element of
  const handleSubmit = (bookSelected) => {
    let correctBook = bookArray[bookArray.indexOf(theBook) + 1]
    if(bookSelected == correctBook)
    {
      setCorrectArray([
        ...correctArray,
        bookSelected
      ]);
    } else{
      console.log('wrong' + bookSelected + ' ' + correctBook + ' a ' + theBook);
    }
  }

  const myMethod = () => {
    theBook = book.book;
    console.log('the ' + theBook + ' aa' + book.book);
    setCorrectArray([
      ...correctArray,
      theBook
    ]);
    let bookNum = bookArray.indexOf(theBook);
    let correctPlace = Math.floor(Math.random() * 5);
    temp = [...choiceArray];
    temp[correctPlace] = bookArray[bookNum + 1];
    console.log('book num ' + bookNum + ' boo ' + temp[correctPlace] + theBook);
    //choiceArray[correctPlace] = bookArray[bookNum + 1];
    let correct = 5;
    for(let i = 0; i < 5; i++){
      if(i == correctPlace){
        continue;
      }
      let randomBook = bookArray[Math.floor(Math.random() * bookArray.length)];
      if(theBook == randomBook || choiceArray.includes(randomBook))
      {
        i--;
        continue;
      }
      temp[i] = randomBook;
    }
    setChoiceArray(temp);
    setFlipper(!flipper);
    console.log('book aaa claude ' + theBook);
  };

  useEffect(() => {
    myMethod();
  }, []);

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
          <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
              Press me
            </Button>
    
    </View>
  );
};


export default SelectGame;