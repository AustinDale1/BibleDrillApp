import React, { useEffect, useState } from 'react';
import {View, Pressable, Text, StyleSheet, TextInput, SafeAreaView, SafeAreaProvider} from 'react-native';

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
  let choiceArray = [];
  let [flipper, setFlipper] = useState(true);


  //Ok put in method that gets correct after, from the prop, 
  //skip whatever random element it is
  //Correct after maybe from js array method tht gets element of
  const myMethod = () => {
    console.log('book is ');
    console.log(book.book);
    let bookNum = bookArray.indexOf(book.book);
    console.log('bo' + bookNum);
    let correctPlace = Math.floor(Math.random() * 5);
    console.log('uhh ' + bookArray[bookNum + 1]);
    choiceArray[correctPlace] = bookArray[bookNum + 1];
    let correct = 5;
    for(let i = 0; i < 5; i++){
      if(i == correctPlace){
        continue;
      }
      let randomBook = bookArray[Math.floor(Math.random() * bookArray.length)];
      if(book.book == randomBook || choiceArray.includes(randomBook))
      {
        i--;
        continue;
      }
      choiceArray[i] = randomBook;
    }
    console.log(book);
    console.log(choiceArray);
    setFlipper(!flipper);
  };

  useEffect(() => {
    myMethod();
  }, []);

  return (
    <View>
      <Text>Choose after {book.book}</Text>
          <Pressable>{choiceArray[0]}</Pressable>
          <Pressable>{choiceArray[1]}</Pressable>
          <Pressable>{choiceArray[2]}</Pressable>
          <Pressable>{choiceArray[3]}</Pressable>
          <Pressable>{choiceArray[4]}</Pressable>
          <Text>aghhh {flipper}</Text>
    </View>
  );
};


export default SelectGame;