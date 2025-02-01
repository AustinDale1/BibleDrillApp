import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, {useState} from 'react';
import SwipeCard from '../GameComponents/SwipeCard';
import SelectGame from '../GameComponents/SelectGame';
import {
  PaperProvider, BottomNavigation,
  Cardimport, Modal, Portal, Button 

} from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CardSelector from './CardSelector';
import bibleBooks from '../StaticFiles/BooksOfBible';
import { Dropdown } from 'react-native-element-dropdown';  // Changed this import
import { SafeAreaProvider } from 'react-native-safe-area-context';



export default function VerseCreator() {

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
    <View style={{ flex: 1,  }}>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={translations}
          maxHeight={300}
          labelField="label"
          valueField="label"
          placeholder="Select Book"
          value={value}
          onChange={item => {
            setValue(item);
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
          placeholder="Select Chapter"
          value={value}
          onChange={item => {
            setValue(item);
          }}
        />
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={translations}
          maxHeight={300}
          labelField="label"
          valueField="label"
          placeholder="Select Beginning Verse"
          value={value}
          onChange={item => {
            setValue(item);
          }}
        />
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={translations}
          maxHeight={300}
          labelField="label"
          valueField="label"
          placeholder="Select Ending Verse"
          value={value}
          onChange={item => {
            setValue(item);
          }}
        />
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={translations}
          maxHeight={300}
          labelField="label"
          valueField="label"
          placeholder="Select Translation"
          value={value}
          onChange={item => {
            setValue(item);
          }}
        />
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