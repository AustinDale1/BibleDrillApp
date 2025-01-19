import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, {useState} from 'react';
import SwipeCard from '../GameComponents/SwipeCard';
import SelectGame from '../GameComponents/SelectGame';
import {
  PaperProvider, BottomNavigation,
  Card
} from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CardSelector from './CardSelector';
import bibleBooks from '../StaticFiles/BooksOfBible';


export default function Books({translation, group}) {
  let [mode, setMode] = useState('main');

  const buttonPressed = (buttonLabel) => {
	setMode(buttonLabel);
  }
  function pageRenderer() {
    if(mode == 'main') {
        return (
            <View style={{ flex: 1 }}>
                <Pressable onPress={() => buttonPressed('flash')}>
                    <Text>Flash Cards</Text>
                </Pressable>
                <Pressable onPress={() => buttonPressed('random')}>
                    <Text>Random Flash Cards</Text>
                </Pressable>
                <Pressable onPress={() => buttonPressed('bubble')}>
                    <Text>Blank Bubbles</Text>
                </Pressable>
                <Text>State is {translation}</Text>
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
