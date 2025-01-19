import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import Verses from './MainPages/Verses';
import Books from './MainPages/Books';
import Settings from './MainPages/Settings';
import KeyPassages from './MainPages/KeyPassages';
import {
  PaperProvider, BottomNavigation, Button
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
    const [translation, setTranslation] = useState('ESV');
    const [group, setGroup] = useState('Children');


  const [index, setIndex] = React.useState(0);
  
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
      <Tab.Navigator>
      <Tab.Screen 
        name="Books"
        children={() => (
          <Books
          translation={translation} 
          group={group}/>
        )}
        // options={{
        //   headerRight: () => (
        //     <Menu
        //       visible={menuVisible}
        //       onDismiss={() => setMenuVisible(false)}
        //       anchor={
        //         <Button 
        //           icon="cog" 
        //           mode="contained"
        //           contentStyle={{ 
        //             width: 32,
        //             height: 32,
        //             padding: 0,
        //           }}
        //           style={{
        //             marginRight: 16,
        //             width: 32,
        //             height: 32,
        //             padding: 0,
        //             borderRadius: 16,
        //             minWidth: 0,
        //           }}
        //           labelStyle={{
        //             margin: 0,
        //             fontSize: 16
        //           }}
        //           onPress={() => setMenuVisible(true)}
        //         />
        //       )
        //     >
        //     <View>
        //       <Menu.Item onPress={() => {console.log('Theme toggled')}} title="Toggle Theme" />
        //       <Menu.Item onPress={() => {console.log('Font changed')}} title="Change Font Size" />
        //       <Menu.Item onPress={() => {console.log('About pressed')}} title="About" />
        //       </View>
        //     </Menu>
        //   )
        // }}
      />
      <Tab.Screen 
        name="Verses"
        children={() => (
          <Verses
          translation={translation} 
          group={group}/>
        )}
      />
      <Tab.Screen 
        name="Key Passages"
        children={() => (
          <KeyPassages
          translation={translation} 
          group={group}/>
        )}
      />
      <Tab.Screen 
        name="Settings"
        children={() => (
          <Settings
          translation={translation} 
          setTranslation={setTranslation}
          group={group}
          setGroup={setGroup}/>
        )}
      />
      </Tab.Navigator>

      </View>
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
  },
});
