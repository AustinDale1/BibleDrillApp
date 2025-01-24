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
            </View>
        )
    } else if(mode == 'flash') {
		return(<CardSelector translation={translation} 
        group={group}/>)
	} else if(mode == 'random') {
		return(<SwipeCard
		   	cards={bibleBooks}
       	book={bibleBooks[0]}
			  isRandom={true}
        translation={translation} 
        group={group}/>)
	} else if(mode == 'bubble') {
		return (<SelectGame book='Psalms' translation={translation} 
      group={group}/>)
	} else {
		return(<Text>Error</Text>)
	}
  }

  const backButton = () => {
    setMode('main');
  }
  
  return (
    <View style={{ flex: 1 }}>
        {mode != 'main' ?
          <Pressable onPress={backButton} style={styles.backButton}>
              <Text style={styles.backButtonText}>←</Text>
          </Pressable>
          : <></>}
        {pageRenderer()}
    </View>
  );
}

const styles = StyleSheet.create({
  backButton: {
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  backButtonText: {
      fontSize: 24,
      fontWeight: 'bold',
  },
});
