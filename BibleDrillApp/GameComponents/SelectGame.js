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
  let [correctArray, setCorrectArray] = useState([]);
  let [theBook, setTheBook] = useState(book.book);

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
      //console.log('wrong is ' + bookSelected + ' correct is ' + correctBook);
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
          <View key={index}><Text key={index}>{choice}</Text></View>
      )) : <Text>a</Text>
      }
      <Text>Choose after {correctArray[correctArray.length-1]}</Text>
          <Pressable onPress={() => handleSubmit(choiceArray[0])} style={{ paddingTop: 18 }}><Text>{choiceArray[0]}</Text></Pressable>
          <Pressable onPress={() => handleSubmit(choiceArray[1])} style={{ paddingTop: 18 }}><Text>{choiceArray[1]}</Text></Pressable>
          <Pressable onPress={() => handleSubmit(choiceArray[2])} style={{ paddingTop: 18 }}><Text>{choiceArray[2]}</Text></Pressable>
          <Pressable onPress={() => handleSubmit(choiceArray[3])} style={{ paddingTop: 18 }}><Text>{choiceArray[3]}</Text></Pressable>
          <Pressable onPress={() => handleSubmit(choiceArray[4])} style={{ paddingTop: 18 }}><Text>{choiceArray[4]}</Text></Pressable>
    </View>
  );
};


export default SelectGame;