import { StyleSheet, Text, View, Pressable} from 'react-native';
import React, {use, useState} from 'react';
import SwipeCard from './SwipeCard';
import {
  PaperProvider, BottomNavigation
} from "react-native-paper";
import ChildrenVerses from './children';



export default function KeyPassages() {
  const [isMain, setIsMain] = useState(true);
  const [currentCard, setCurrentCard] = useState('');
  var kp = new ChildrenVerses();
  let kpArray = kp.getKeyPassages();

  const handlePress = (kpSelected) => {
    console.log(kpArray);
    setCurrentCard(kpSelected.front);
    setIsMain(false);
  }
  return (
    <View>
        {isMain ? 
        kpArray.map((choice, index) => (
              <Pressable key={index} onPress={() => handlePress(choice)}><Text>{choice.front}</Text></Pressable>
            ))
        : <SwipeCard 
        cards={kpArray}
        book={currentCard}
       isRandom={false}/>
        }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
