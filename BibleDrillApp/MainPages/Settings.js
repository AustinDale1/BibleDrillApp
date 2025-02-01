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
import VerseCreator from './VerseCreator';



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

  const [visible, setVisible] = React.useState(false);
  const [ESVVisible, setESVVisible] = React.useState(false);


  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const showESVModal = () => setESVVisible(true);
  const hideESVModal = () => setESVVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <VerseCreator />
    // <SafeAreaProvider>
    // <View style={{ flex: 1 }}>
    //     <Dropdown
    //       style={styles.dropdown}
    //       placeholderStyle={styles.placeholderStyle}
    //       selectedTextStyle={styles.selectedTextStyle}
    //       data={translations}
    //       maxHeight={300}
    //       labelField="label"
    //       valueField="label"
    //       placeholder="Select item"
    //       value={translation}
    //       onChange={item => {
    //         setTranslation(item.label);
    //       }}
    //     />
    //       <Dropdown
    //       style={styles.dropdown}
    //       placeholderStyle={styles.placeholderStyle}
    //       selectedTextStyle={styles.selectedTextStyle}
    //       data={groups}
    //       maxHeight={300}
    //       labelField="label"
    //       valueField="label"
    //       placeholder="Select item"
    //       value={group}
    //       onChange={item => {
    //         setGroup(item.label);
    //       }}
    //     />

    //     <Text>Copyrights...</Text>
    //     <PaperProvider>
    //       <Portal>
    //         <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
    //           <Text>Scripture quotations marked CSB®, are taken from the
    //             Christian Standard Bible®, Copyright © 2017 by Holman Bible
    //             Punlishers.  Used by permission.  CSB® is a federally registered
    //             trademark of Holman Bible Publishers.  
    //           </Text>
    //         </Modal>
    //       </Portal>
    //       <Button style={{marginTop: 30}} onPress={showModal}>
    //         Show
    //       </Button>
    //     </PaperProvider>
    //     <PaperProvider>
    //       <Portal>
    //         <Modal visible={ESVVisible} onDismiss={hideESVModal} contentContainerStyle={containerStyle}>
    //           <Text>This publication contains the ESV® Bible (The Holy Bible, English Standard Version®),
    //             copyright © 2001 by Crossway Bibles, a publishing ministry of Good News Publishers.
    //             ESV Text Edition: 2007. The ESV® text has been reproduced in cooperation with and
    //             by permission of Good News Publishers.  Unauthorized reproduction of this publicationis prohibited.

    //             The ESV® Bible (The Holy Bible, English Standard Version®) (ESV) is adapted from the Revised Standard
    //             Version of the Bible, copyright Division of Christian Education of the National Council of the Churches
    //             of Christ in the U.S.A. All rights reserved
    //           </Text>
    //         </Modal>
    //       </Portal>
    //       <Button style={{marginTop: 30}} onPress={showESVModal}>
    //         Show
    //       </Button>
    //     </PaperProvider>

    // </View>
    // </SafeAreaProvider>

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