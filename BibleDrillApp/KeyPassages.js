import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
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



export default function KeyPassages() {
  
  return (
    <View>
        <Text>Key Passages</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
