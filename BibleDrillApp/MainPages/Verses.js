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



export default function Verses({translation, group}) {
  const [mode, setMode] = useState('main');
  const [studyStyleState, setStudyStyleState] = useState('');
  const [isSelected, setIsSelected] = useState(false);
  const [verse, setVerse] = useState('ok chec');
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
      if(studyStyleState == 'flash' && isSelected) {
        return(<SwipeCard 
          cards={verseArray}
          isRandom={false}
          book={'Joshua 24:24'}
        />)
      } if(studyStyleState == 'bubble' && isSelected) {
        return(
          <VerseSelectGame
            verse={verse}
            verseArray={verseArray}
        />)
      } if(studyStyleState == 'type' && isSelected) {
        return(
          <TextInputGame
            versesArray={verseArray}
            verse={verse}
        />)
      } 
      else {
        return (<VerseComponent />)
      }

    }
  } 

  const handleCardPress = (verseText) => {
    setIsSelected(true);
    setVerse(verseText);
  }

  const VerseComponent = (studyStyle) => {
    return (
      <View>

        {verseArray.map((choice, index) => (
            <Pressable key={index} onPress={() => handleCardPress(choice.back)}><Text>{choice.front}</Text></Pressable>
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
