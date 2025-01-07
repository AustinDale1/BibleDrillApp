import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, {useState} from 'react';
import Flashcard from './Flashcard';
import SwipeCard from './SwipeCard';
import TextInputGame from './TextInput';
import SelectGame from './SelectGame';
import {
  PaperProvider, BottomNavigation,
  Card
} from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CardSelector from './CardSelector';
import bibleBooks from './BooksOfBible';


export default function Books() {
  let [mode, setMode] = useState('main');

  const buttonPressed = (buttonLabel) => {
	setMode(buttonLabel);
  }
  function pageRenderer() {
    if(mode == 'main') {
        return (
            <View>
                <Pressable onPress={() => buttonPressed('flash')}>
                    <Text>Flash Cards</Text>
                </Pressable>
                <Pressable onPress={() => buttonPressed('random')}>
                    <Text>Random Flash Cards</Text>
                </Pressable>
                <Pressable onPress={() => buttonPressed('bubble')}>
                    <Text>Blank Bubbles</Text>
                </Pressable>
            </View>
        )
    } else if(mode == 'flash') {
		return(<CardSelector/>)
	} else if(mode == 'random') {
		return(<SwipeCard
		   	cards={bibleBooks}
       	book='Psalms'
			  isRandom={true}/>)
	} else if(mode == 'bubble') {
		return (<SelectGame book='Psalms'/>)
	} else {
		return(<Text>Error</Text>)
	}
  }

  const backButton = () => {
    setMode('main');
  }
  return (
    <View>
        <Pressable onPress={backButton}><Text>&larr;</Text></Pressable>
        {pageRenderer()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
