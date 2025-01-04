import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
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



export default function Books() {
  let [mode, setMode] = useState('main');
   let [cards2, setCards2] = useState([
			{ front: "John", back: "Luke John Acts" },
			{ front: "Acts", back: "John Acts Romans" },
			{ front: "Mark", back: "Matthew Mark Luke" }
		])

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
                <Pressable onPress={() => buttonPressed('bubble')}>
                    <Text>Blank Bubbles</Text>
                </Pressable>
            </View>
        )
    } else if(mode == 'flash') {
		return(<Flashcard onSwipeLeft={() => console.log('Rejected')}
		   onSwipeRight={() => console.log('Accepted')}
		   cards={cards2}/>)
	} else if(mode == 'bubble') {
		return (<SelectGame book='Psalms'/>)
	} else {
		return(<Text>Error</Text>)
	}
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
