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


const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;

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
  const [routes] = React.useState([
    { key: 'music', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'albums', title: 'Albums', focusedIcon: 'album' },
    { key: 'recents', title: 'Recents', focusedIcon: 'history' },
    { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });

  return (
    <PaperProvider>

    <View style={styles.container}>  
    {/* <SwipeCard
      onSwipeLeft={() => console.log('Rejected')}
      onSwipeRight={() => console.log('Accepted')}
      cards={cards2}
    /> */}
    
    <TextInputGame verse='ok here we go' />


    {/* <SelectGame book='Psalms'/>
    <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
        /> */}
    </View>
    </PaperProvider>
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
