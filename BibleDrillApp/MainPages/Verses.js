import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import SwipeCard from '../GameComponents/SwipeCard';
import TextInputGame from '../GameComponents/TextInput';
import VerseSelectGame from '../GameComponents/VerseSelectGame';
import {
  PaperProvider, BottomNavigation
} from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChildrenVerses from '../StaticFiles/children';
import YouthVerses from '../StaticFiles/youth';



export default function Verses({translation, group}) {
  // const [mode, setMode] = useState('main');
  // const [studyStyleState, setStudyStyleState] = useState('');
  // const [isSelected, setIsSelected] = useState(false);
  // const [verse, setVerse] = useState('ok chec');
  const [verseState, setVerseState] = useState({
    isSelected: false,
    verse: 'ok chec',
    mode: 'main',
    studyStyleState: ''
  });
  const objForSummoning = new ChildrenVerses();
  const youth = new YouthVerses();
  const verseArray = objForSummoning.getVersesByTranslation(translation);

  const youthVersesArray = youth.getVersesByTranslation(translation);
  console.log(youthVersesArray);

  function pageRenderer() {
    if(verseState.mode == 'main') {
      return (
        <View style={{ flex: 1 }}>
        <Text>How would you like to study?</Text>
        <Pressable onPress={() => handlePress('flash')}>
          <Text>Flashcards</Text>
        </Pressable>
        <Pressable onPress={() => handlePress('bubble')}>
          <Text>Blank Bubble</Text>
        </Pressable>
        <Pressable onPress={() => handlePress('type')}>
          <Text>Type it out</Text>
        </Pressable>
    </View>
      )
    } else {
      console.log(verseState.studyStyleState + ' ' + verseState.isSelected + ' ' + verseState.verse);
      if(verseState.studyStyleState == 'flash' && verseState.isSelected) {
        return(<SwipeCard 
          cards={verseArray}
          isRandom={false}
          book={verseState.verse}
          translation={translation} 
          group={group}/>)
      } if(verseState.studyStyleState == 'bubble' && verseState.isSelected) {
        return(
          <VerseSelectGame
            verse={verseState.verse}
            verseArray={verseArray}
            translation={translation} 
            group={group}/>)
      } if(verseState.studyStyleState == 'type' && verseState.isSelected) {
        console.log('okokok ' + verseState.verse + ' ss ' + verseState.verse.back);
        //Need this bc  it just passes in the reference
        let fullVerse = verseArray[verseArray.findIndex(verseRef => 
          verseRef.front.toLowerCase() === verseState.verse.toLowerCase())];
          console.log('full verse is ' + fullVerse);
          console.log(fullVerse);
        return(
          <TextInputGame
            versesArray={verseArray}
            verse={fullVerse}
            translation={translation} 
            group={group}/>)
      } 
      else {
        return (<VerseComponent />)
      }

    }
  } 

  const handleCardPress = (verseText) => {
    // setIsSelected(true);
    // setVerse(verseText);
    setVerseState(prev => ({
      ...prev,
      isSelected: true,
      verse: verseText,
      mode: prev.studyStyleState

      // isSelected: false,
      // verse: 'ok chec',
      // mode: 'main',
      // studyStyleState: ''
    }));
  }

// console.log(youthD);
// console.log(youthB);

  const VerseComponent = (studyStyle) => {
    return (
      <View style={{ flex: 1 }}>
        {group == 'Children' ?
        verseArray.map((choice, index) => (
            <Pressable key={index} onPress={() => handleCardPress(choice.front)}><Text>{choice.front}</Text></Pressable>
           ))
         :
        <View style={{ flex: 1 }}>
          {youthVersesArray.map((choice, index) => (
              <Pressable key={index} onPress={() => handleCardPress(choice.front)}><Text>{choice.front}</Text></Pressable>
            ))
          } 
        </View>
      }
      </View>
    )
  }

  const handlePress = (studyStyle) => {
    setVerseState(prev => ({
      ...prev,                    
      studyStyleState: studyStyle,
      mode: studyStyle
    }));
  }
  const backButton = () => {
    setVerseState(prev => ({
      ...prev,  
      isSelected: false,                
      mode: 'main'
    }));
  }

  return (
    <View style={{ flex: 1 }}>
        <Pressable onPress={backButton}><Text>&larr;</Text></Pressable>
        {pageRenderer()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
