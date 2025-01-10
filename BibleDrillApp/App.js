import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import Verses from './MainPages/Verses';
import Books from './MainPages/Books';
import KeyPassages from './MainPages/KeyPassages';
import {
  PaperProvider, BottomNavigation
} from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();


export default function App() {
    let [cards2, setCards2] = useState([
          { front: "John", back: "Luke John Acts" },
          { front: "Acts", back: "John Acts Romans" },
          { front: "Mark", back: "Matthew Mark Luke" }
      ])
    let a = [          { front: "John", back: "Luke John Acts" },
      { front: "Acts", back: "John Acts Romans" },
      { front: "Mark", back: "Matthew Mark Luke" }];

  const [index, setIndex] = React.useState(0);
  
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen 
        name="Books"
        children={(props) => (
          <Books/>
        )}
      />
      <Tab.Screen 
        name="Verses"
        children={(props) => (
          <Verses/>
        )}
      />
      <Tab.Screen 
        name="Key Passages"
        children={(props) => (
          <KeyPassages/>
        )}
      />
      </Tab.Navigator>
    </NavigationContainer>


    // <PaperProvider>

    // <View style={styles.container}>  
    // {/* <SwipeCard
    //   onSwipeLeft={() => console.log('Rejected')}
    //   onSwipeRight={() => console.log('Accepted')}
    //   cards={cards2}
    // /> */}
    
    // {/* <TextInputGame verse='ok here we go' /> */}


    // {/* <SelectGame book='Psalms'/> */}
    // <BottomNavigation
    //       navigationState={{ index, routes }}
    //       onIndexChange={setIndex}
    //       renderScene={renderScene}
    //     />
    // </View>
    // </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    margin: 'auto',
    // backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 400,
  },
});
