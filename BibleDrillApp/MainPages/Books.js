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
            <View style={styles.container}>
                <Text style={styles.promptText}>How would you like to study?</Text>
                <View style={styles.buttonContainer}>
                  <Pressable onPress={() => buttonPressed('flash')} style={styles.studyButton}>
                      <Text style={styles.studyButtonText}>Flash Cards</Text>
                  </Pressable>
                  <Pressable onPress={() => buttonPressed('random')} style={styles.studyButton}>
                      <Text style={styles.studyButtonText}>Random Flash Cards</Text>
                  </Pressable>
                  <Pressable onPress={() => buttonPressed('bubble')} style={styles.studyButton}>
                      <Text style={styles.studyButtonText}>Blank Bubbles</Text>
                  </Pressable>
                </View>
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
    <View style={styles.wrapper}>
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
  wrapper: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f5f5f5',
},
  backButton: {
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  backButtonText: {
      fontSize: 24,
      fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  promptText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  studyButton: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
    width: '70%',
    alignItems: 'center',
  },
  studyButtonText: {
    color: 'white',
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: 'center',
},
});
