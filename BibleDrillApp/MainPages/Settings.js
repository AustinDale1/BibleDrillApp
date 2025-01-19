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
import { Dropdown } from 'react-native-element-dropdown';  // Changed this import
import { SafeAreaProvider } from 'react-native-safe-area-context';



export default function Settings({translation, setTranslation, group, setGroup}) {

  const [value, setValue] = useState(null);

  const translations = [
    { label: 'ESV' },
    { label: 'KJV' },
    { label: 'CSB' },
  ];
  const groups = [
    { label: 'Children' },
    { label: 'Youth' },
    { label: 'Highschool' },

  ];

  return (
    <SafeAreaProvider>
    <View style={{ flex: 1 }}>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={translations}
          maxHeight={300}
          labelField="label"
          valueField="label"
          placeholder="Select item"
          value={translation}
          onChange={item => {
            setTranslation(item.label);
          }}
        />
          <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={groups}
          maxHeight={300}
          labelField="label"
          valueField="label"
          placeholder="Select item"
          value={group}
          onChange={item => {
            setGroup(item.label);
          }}
        />

        <Text>Copyrights...</Text>

    </View>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 10,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
});