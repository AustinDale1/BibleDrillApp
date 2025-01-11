import React, { useEffect, useState, useRef  } from 'react';
import {View, Pressable, Text, StyleSheet, TextInput, SafeAreaView, SafeAreaProvider} from 'react-native';
import { Button } from 'react-native-paper';
import ChildrenVerses from '../StaticFiles/children';

const VerseSelectGame = ({verse, verseArray}) => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  let [choiceArray, setChoiceArray] = useState(['', '', '', '', '']);
  let [correctArray, setCorrectArray] = useState([]);
  let [theVerse, setTheVerse] = useState(verse.split(' ')[0]);
  let [verseSplit, setVerseSplit] = useState([]);
  let [verseIndex, setVerseIndex] = useState(0);
  var kp = new ChildrenVerses();
  let wordBank = kp.getWordBank();
  
  const handleSubmit = (wordSelected) => {
    console.log('okokok ' + verseIndex);
    let correctVerse = verseSplit[verseIndex];
    console.log('in the submit, ' + correctVerse);
    if(wordSelected == correctVerse)
    {
      const newArray = [...correctArray, wordSelected];
      setCorrectArray(newArray);
      setTheVerse(wordSelected);
      let newChoices = generateChoices(wordSelected);
      setChoiceArray(newChoices);
      setVerseIndex(prevIndex => prevIndex + 1)
    } else{
      console.log('word selected is ' + wordSelected + ' correct is ' + correctVerse + 'whole thingis ' + verseSplit);
    }
  }

  const generateChoices = (currentWord) =>
  {
    const nextWord = verseSplit[verseSplit.indexOf(currentWord) + 1];
    const correctPos = Math.floor(Math.random() * 5);
    console.log(verseSplit);
    console.log('correct verse is ' + nextWord);
    let newChoices = new Array(5).fill('');
    newChoices[correctPos] = nextWord;

    console.log('New Choices is ');
    console.log(newChoices);

    for (let i = 0; i < 5; i++) {
      if (i === correctPos) continue;
      let randomWord;
      do {
        randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
      } while (
        randomWord === nextWord ||
        newChoices.includes(randomWord)
      );
      
      newChoices[i] = randomWord;
    }

    console.log('New Choices 2 is ');
    console.log(newChoices);

    return newChoices;
  }

  useEffect(() => {
    //setCorrectArray([book.book]);
    let currentVerse = verse.replaceAll(',', '');
    currentVerse = currentVerse.replaceAll('.', '');
    currentVerse = currentVerse.replaceAll(':', '');
    currentVerse = currentVerse.replaceAll(';', '');

    setVerseSplit(currentVerse.split(' '));
  }, [verse]);

  useEffect(() => {
    if (verseSplit.length > 0) {
        const initChoices = generateChoices('Ifthiscodebreaksitsgonnabeembarrassing');
        setChoiceArray(initChoices);
    }
  }, [verseSplit]); 

  return (
    <View>
      <Text>Reference {verse}</Text>
      { correctArray.length > 0 ? 
      correctArray.map((choice, index) => (
          <View key={index}><Text key={index}>choice {choice}</Text></View>
      )) : <Text>array is empty</Text>
      }
      <Text>Choose next word</Text>
          <Pressable onPress={() => handleSubmit(choiceArray[0])}><Text>{choiceArray[0]}</Text></Pressable>
          <Pressable onPress={() => handleSubmit(choiceArray[1])}><Text>{choiceArray[1]}</Text></Pressable>
          <Pressable onPress={() => handleSubmit(choiceArray[2])}><Text>{choiceArray[2]}</Text></Pressable>
          <Pressable onPress={() => handleSubmit(choiceArray[3])}><Text>{choiceArray[3]}</Text></Pressable>
          <Pressable onPress={() => handleSubmit(choiceArray[4])}><Text>{choiceArray[4]}</Text></Pressable>
    </View>
  );
};


export default VerseSelectGame;