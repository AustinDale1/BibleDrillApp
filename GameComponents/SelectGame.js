import React, { useEffect, useState, useRef } from 'react';
import { View, Pressable, Text, StyleSheet, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { Button, Divider } from 'react-native-paper';

const SelectGame = ({book, translation, group}) => {
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
  let [buttonColor, setButtonColor] = useState(['#d1d1d1', '#d1d1d1', '#d1d1d1', '#d1d1d1', '#d1d1d1']);
  let [isFinished, setIsFinished] = useState(false);
  

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
      setButtonColor(prevColors => [...prevColors.slice(0, wordIndex), '#d1d1d1', ...prevColors.slice(wordIndex+1)]);
    }, 200); // Adjust the duration of the flash
    console.log('set2');
  }

  const handleSubmit = (bookSelected) => {
    let currentIndex = bookArray.indexOf(theBook);
    let correctBook = bookArray[currentIndex + 1];
    if(bookSelected == correctBook) {
      setColor(true, bookSelected);
      const newArray = [...correctArray, bookSelected];
      setCorrectArray(newArray);
      if(bookSelected == 'Revelation') {
        setIsFinished(true);
        return;
      }
      setTheBook(bookSelected);
      let newChoices = generateChoices(bookSelected);
      setChoiceArray(newChoices);
    } else{
      //console.log('wrong is ' + bookSelected + ' correct is ' + correctBook);
      setColor(false, bookSelected);
    }
  }

  const generateChoices = (currentBook) => {
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

  const scrollViewRef = useRef();

  const reset = () => {
    const initChoices = generateChoices(book.book);
    setChoiceArray(initChoices);
    setCorrectArray([]);
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
          {correctArray.length > 0 ? 
            correctArray.map((choice, index) => (
              <View key={index} style={styles.choiceContainer}>
                <Text style={styles.choiceText}>{choice}</Text>
                <Divider style={styles.divider} />
              </View>
            )) : 
            <Text>Start</Text>
          }
        </ScrollView>
      </View>

      {isFinished ? 
        <View style={styles.buttonRow}>
          {/* <Pressable onPress={reset}><Text>Reset</Text></Pressable> */}
        </View>
        :
      <View style={styles.selectionContainer}>
        <Text style={styles.promptText}>Choose after {correctArray[correctArray.length-1]}</Text>
        
        <View style={styles.buttonRows}>
          {/* First row - 3 buttons */}
          <View style={styles.buttonRow}>
            {[0, 1, 2].map((index) => (
              <Pressable 
                key={index}
                style={[styles.button, {backgroundColor: buttonColor[index]}]}
                onPress={() => handleSubmit(choiceArray[index])}
              >
                <Text style={styles.buttonText}>{choiceArray[index]}</Text>
              </Pressable>
            ))}
          </View>
          
          {/* Second row - 2 buttons */}
          <View style={styles.buttonRow}>
            {[3, 4].map((index) => (
              <Pressable 
                key={index}
                style={[styles.button, {backgroundColor: buttonColor[index]}]}
                onPress={() => handleSubmit(choiceArray[index])}
              >
                <Text style={[styles.buttonText, {backgroundColor: buttonColor[index]}]}>{choiceArray[index]}</Text>
              </Pressable>
            ))}
          </View>
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
    paddingBottom: 20,
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
    fontSize: 12,
  },
});

export default SelectGame;