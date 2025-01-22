import React, { useEffect, useState, useRef  } from 'react';
import {View, Pressable, Text, StyleSheet, TextInput, SafeAreaView, SafeAreaProvider, ScrollView} from 'react-native';
import { Button } from 'react-native-paper';
import ChildrenVerses from '../StaticFiles/children';

const VerseSelectGame = ({verse, verseArray, translation, group}) => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  let [choiceArray, setChoiceArray] = useState(['', '', '', '', '']);
  let [correctArray, setCorrectArray] = useState([]);
  let [correctString, setCorrectString] = useState('');
  let [theVerse, setTheVerse] = useState(verse.split(' ')[0]);
  // let [theVerse, setTheVerse] = useState('');
  let [verseSplit, setVerseSplit] = useState([]);
  let [verseIndex, setVerseIndex] = useState(0);
  let [isFinished, setIsFinished] = useState(false);
  var kp = new ChildrenVerses();

  let [buttonColor, setButtonColor] = useState(['#f0f0f0', '#f0f0f0', '#f0f0f0', '#f0f0f0', '#f0f0f0']);

  console.log('we pass in ' + verse);

  let wordBank = kp.getWordBank(translation);
  
  const setColor = (isCorrect, wordSelected) => {
    let wordIndex = -1;
    choiceArray.forEach((choice, index) => {
      if(choice == wordSelected)
        wordIndex = index;
    });
    console.log('set1');
    if(isCorrect)
      setButtonColor(prevColors => [...prevColors.slice(0, wordIndex), 'green', ...prevColors.slice(wordIndex+1)]);
    else
      setButtonColor(prevColors => [...prevColors.slice(0, wordIndex), 'red', ...prevColors.slice(wordIndex+1)]);
    setTimeout(() => {
      setButtonColor(prevColors => [...prevColors.slice(0, wordIndex), '#f0f0f0', ...prevColors.slice(wordIndex+1)]);
    }, 200); // Adjust the duration of the flash
    console.log('set2');
  }

  const handleSubmit = (wordSelected) => {
    let correctVerse = verseSplit[verseIndex];
    if(wordSelected == correctVerse)
    {
      setColor(true, wordSelected);
      const newArray = [...correctArray, wordSelected];
      setCorrectString(correctString + ' ' + wordSelected);
      setCorrectArray(newArray);
      if(verseIndex == (verseSplit.length-1)) {
        setIsFinished(true)
        return;
      }
      console.log('importente');
      console.log(newArray);
      setTheVerse(wordSelected);
      let newChoices = generateChoices(wordSelected);
      setChoiceArray(newChoices);
      setVerseIndex(prevIndex => prevIndex + 1)
    } else{
      // console.log('word selected is ' + wordSelected + ' correct is ' + correctVerse + 'whole thingis ' + verseSplit);
      setColor(false, wordSelected);
    }
  }

  const generateChoices = (currentWord) =>
  {
    console.log('generate choices 1' + currentWord);
    //basically, its going to the first 'the'
    const nextWord = verseSplit[verseSplit.indexOf(currentWord, verseIndex) + 1];
    const correctPos = Math.floor(Math.random() * 5);
    let newChoices = new Array(5).fill('');
    newChoices[correctPos] = nextWord;

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
    console.log('generate choices 2');
    console.log(newChoices);
    console.log(nextWord);

    return newChoices;
  }

  useEffect(() => {
    //setCorrectArray([book.book]);
    let tempVerse = verseArray[verseArray.findIndex(verseRef => 
      verseRef.front.toLowerCase() === verse.toLowerCase())].back;
      console.log('tempverse ' + ' okokok ' + verse);
      console.log(tempVerse);
      console.log(verseArray[1].front);
      //figure out if i wanna keep punctuaction, i dont, dont break it when i remove it
    let currentVerse = tempVerse.replaceAll(',', '');
    currentVerse = currentVerse.replaceAll('.', '');
    currentVerse = currentVerse.replaceAll(':', '');
    currentVerse = currentVerse.replaceAll(';', '');
    currentVerse = currentVerse.replaceAll('-', '');
    currentVerse = currentVerse.replaceAll('"', '');


    setVerseSplit(currentVerse.split(' '));
    console.log('did we get here');
  }, [verse]);

  useEffect(() => {
    if (verseSplit.length > 0) {
      let tempVerse = verseArray[verseArray.findIndex(verseRef => 
        verseRef.front.toLowerCase() === verse.toLowerCase())].back;
        const initChoices = generateChoices(tempVerse);
        setChoiceArray(initChoices);
    }
    console.log('we get to end of verseplit useffect');
  }, [verseSplit]); 

  const scrollViewRef = useRef();

  const reset = () => {
    const initChoices = generateChoices(correctString);
    setChoiceArray(initChoices);
    setCorrectArray([]);
    setCorrectString('');
    setVerseIndex(0);
    setIsFinished(false);
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.scrollContainer}>
        <ScrollView 
          ref={scrollViewRef}
          onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
          contentContainerStyle={styles.scrollContent}
        >
        <Text style={styles.promptText}>Reference {verse}</Text>
        {/* { correctArray.length > 0 ? 
        correctArray.map((choice, index) => (
            <View key={index} style={{ flex: 1 }}><Text key={index}>choice {choice}</Text></View>
        )) : <Text></Text>
        } */}
        <Text style={styles.choiceText}>{correctString}</Text>
        </ScrollView>
      </View>
      {isFinished ? 
        <View style={styles.buttonRow}>
          <Pressable onPress={reset}><Text>Reset</Text></Pressable>
          <Pressable><Text>Next</Text></Pressable>
        </View>
        :
      <View style={styles.selectionContainer}>
        <Text style={[styles.buttonText, {paddingBottom: 20}]}>Choose next word</Text>
        
        <View style={styles.buttonRow}>
          <Pressable onPress={() => handleSubmit(choiceArray[0])} style={[styles.button, {backgroundColor: buttonColor[0]}]}><Text style={styles.buttonText}>{choiceArray[0]}</Text></Pressable>
          <Pressable onPress={() => handleSubmit(choiceArray[1])} style={[styles.button, {backgroundColor: buttonColor[1]}]}><Text style={styles.buttonText}>{choiceArray[1]}</Text></Pressable>
          <Pressable onPress={() => handleSubmit(choiceArray[2])} style={[styles.button, {backgroundColor: buttonColor[2]}]}><Text style={styles.buttonText}>{choiceArray[2]}</Text></Pressable>
        </View>

        <View style={styles.buttonRow}>
          <Pressable onPress={() => handleSubmit(choiceArray[3])} style={[styles.button, {backgroundColor: buttonColor[3]}]}><Text style={styles.buttonText}>{choiceArray[3]}</Text></Pressable>
          <Pressable onPress={() => handleSubmit(choiceArray[4])} style={[styles.button, {backgroundColor: buttonColor[4]}]}><Text style={styles.buttonText}>{choiceArray[4]}</Text></Pressable>
        </View>
      </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  scrollContainer: {
    height: 400,
    width: '100%',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  choiceContainer: {
    width: '100%',
    alignItems: 'center',
  },
  choiceText: {
    paddingVertical: 20,
    fontSize: 16,
    textAlign: 'center',
  },
  divider: {
    width: '80%',
    height: 1,
  },
  selectionContainer: {
    paddingTop: 60,
    width: '100%',
    alignItems: 'center',
  },
  promptText: {
    fontSize: 18,
    marginBottom: 24,
    textAlign: 'center',
  },
  buttonRows: {
    width: '100%',
    paddingHorizontal: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
    width: '100%',
  },
  button: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 8,
    minWidth: 100,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
  },
});


export default VerseSelectGame;