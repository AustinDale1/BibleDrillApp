import React, {useState} from 'react';
import {StyleSheet, TextInput, SafeAreaView, PanResponder, SafeAreaProvider, Text} from 'react-native';
import {Card} from 'react-native-paper';
// import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


    let textColor = 'red';
    const TextInputGame = ({verses2}) => {
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
    const [isFlipped, setIsFlipped] = useState(true);
    const [index, setIndex] = useState(0);
  
  const verses = verses2;
  //let textColor = 'red';
    const getColor = () => {
        console.log(verses[index]);
        if(verses[index].includes(text.toLowerCase()) || text == '') {
            return 'black';
        } else {
            return 'red';
        }
    }
      const handleNext = () => {
          if(verses.length > index + 1){
            setIndex(index + 1);
          } else {
              setIndex(0);
          }
      }
  
      const handleReturn = () => {
          if(index > 0){
            setIndex(index - 1);
          } else{
              setIndex(verses.length-1);
          }
      }
  
      const panResponder = PanResponder.create({
          onMoveShouldSetPanResponder: (evt, gestureState) => {
              return Math.abs(gestureState.dx) > 5;
          },
          onPanResponderRelease: (evt, gestureState) => {
              if (gestureState.dx > 0) {
                  handleNext();
              } else if (gestureState.dx < 0) {
                  handleReturn();
              }
          },
      })

  return (
    // <SafeAreaProvider>
        <SafeAreaView>
            <Text>{verses[index]}</Text>
            <Card style={styles.container} {...panResponder.panHandlers}>
            <TextInput
            //style={{ color: getColor() , width: '300px', heigh: '600px'}}
            style = {[styles.tester, {color: getColor()}]}
            onChangeText={onChangeText}
            value={text}
            multiline={true}
            placeholder="Start typing out the verse. Don't worry worry about punctuation or capitilization, this is just about getting the words right."

            />
            </Card>
        </SafeAreaView>
    //</SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        userSelect: 'none',
        width: 300,
        height: 400,
        display: 'flex',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    },
    tester: {
        height: 300,
        // backgroundColor: 'blue'
    }
});

export default TextInputGame;