import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import Flashcard from './Flashcard';
import SwipeCard from './SwipeCard';
import TextInputGame from './TextInput';
import SelectGame from './SelectGame';
import {
  PaperProvider, BottomNavigation
} from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChildrenVerses from './children';



export default function Verses() {
  const [mode, setMode] = useState('main');
  const [studyStyleState, setStudyStyleState] = useState('');
  const [isSelected, setIsSelected] = useState(false);
  const [verse, setVerse] = useState('');
  let [bookSelected, setBookSelected] = useState('');
  const objForSummoning = new ChildrenVerses();
  const verseArray = objForSummoning.getVersesByTranslation('kjv');
  function pageRenderer() {
    if(mode == 'main') {
      return (
        <View>
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
      if(studyStyleState == 'flash') {
        return(<SwipeCard 
          cards={verseArray}
          isRandom={false}
          book={verse}
        />)
      } if(studyStyleState == 'bubble') {
        return(
          <SelectGame
            book={verse}
        />)
      } if(studyStyleState == 'type') {
        return(
          <TextInputGame
            verses2={verseArray}
        />)
      } 
      else {
        return (<VerseComponent />)
      }

    }
  } 

  const handleCardPress = (reference) => {
    setVerse(reference);
  }

  const VerseComponent = (studyStyle) => {
    return (
      <View>

        {verseArray.map((choice, index) => (
            <Pressable key={index} onPress={() => handleCardPress(choice.reference)}><Text>{choice.reference}</Text></Pressable>
           ))
        } 
      </View>
    )
  }

  const handlePress = (studyStyle) => {
    setStudyStyleState(studyStyle);
    setMode(studyStyle);
  }
  return (
    <View>
        {pageRenderer()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
