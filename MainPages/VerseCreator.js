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

  const bookArray = [
    { label: 'Genesis' }, { label: 'Exodus' }, { label: 'Leviticus' }, { label: 'Numbers' }, { label: 'Deuteronomy' },
    { label: 'Joshua' }, { label: 'Judges' }, { label: 'Ruth' }, { label: '1 Samuel' }, { label: '2 Samuel' },
    { label: '1 Kings' }, { label: '2 Kings' }, { label: '1 Chronicles' }, { label: '2 Chronicles' },
    { label: 'Ezra' }, { label: 'Nehemiah' }, { label: 'Esther' }, { label: 'Job' }, { label: 'Psalms' },
    { label: 'Proverbs' }, { label: 'Ecclesiastes' }, { label: 'Song of Solomon' }, { label: 'Isaiah' },
    { label: 'Jeremiah' }, { label: 'Lamentations' }, { label: 'Ezekiel' }, { label: 'Daniel' }, { label: 'Hosea' },
    { label: 'Joel' }, { label: 'Amos' }, { label: 'Obadiah' }, { label: 'Jonah' }, { label: 'Micah' }, { label: 'Nahum' },
    { label: 'Habakkuk' }, { label: 'Zephaniah' }, { label: 'Haggai' }, { label: 'Zechariah' }, { label: 'Malachi' },
    { label: 'Matthew' }, { label: 'Mark' }, { label: 'Luke' }, { label: 'John' }, { label: 'Acts' },
    { label: 'Romans' }, { label: '1 Corinthians' }, { label: '2 Corinthians' }, { label: 'Galatians' },
    { label: 'Ephesians' }, { label: 'Philippians' }, { label: 'Colossians' },
    { label: '1 Thessalonians' }, { label: '2 Thessalonians' }, { label: '1 Timothy' },
    { label: '2 Timothy' }, { label: 'Titus' }, { label: 'Philemon' }, { label: 'Hebrews' }, { label: 'James' },
    { label: '1 Peter' }, { label: '2 Peter' }, { label: '1 John' }, { label: '2 John' }, { label: '3 John' },
    { label: 'Jude' }, { label: 'Revelation' }
 ];

  return (
    <SafeAreaProvider>
    <View style={{ flex: 1,  }}>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={bookArray}
          maxHeight={300}
          labelField="label"
          valueField="label"
          placeholder="Select Book"
          value={value}
          onChange={item => {
            setValue(item);
          }}
        />
        {/* Maybe use someting like the McArthur study bible big scrollable for this one */}
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