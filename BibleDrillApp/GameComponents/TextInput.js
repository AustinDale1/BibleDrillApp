import React, {useState, useEffect} from 'react';
import {StyleSheet, TextInput, SafeAreaView, PanResponder, SafeAreaProvider, Text, View} from 'react-native';
import {Card} from 'react-native-paper';
// import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


    let textColor = 'red';
    const TextInputGame = ({versesArray, verse, translation, group}) => {
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
    const [isFlipped, setIsFlipped] = useState(true);
    const [index, setIndex] = useState(0);
    const [currentVerse, setCurrentVerse] = useState('');
        console.log(verse);
        
    const removePunctuation = (index) => {
        let tempVerse = versesArray[index].back.replaceAll(',', '');
        tempVerse = tempVerse.replaceAll('.', '');
        tempVerse = tempVerse.replaceAll(':', '');
        tempVerse = tempVerse.replaceAll(';', '');
        tempVerse = tempVerse.replaceAll('-', '');
        console.log('in remove punctuation' + tempVerse.toLowerCase());
        setCurrentVerse(tempVerse.toLowerCase())
    }

  //let textColor = 'red';
    const getColor = () => {
        if(currentVerse == text.toLowerCase()) {
            return 'green';
        }
        console.log('current verse is ' + currentVerse)
        // if((versesArray[index].back.toLowerCase()).substring(0, text.length) == text.toLowerCase() || text == '') {
        if(currentVerse.substring(0, text.length) == text.toLowerCase() || text == '') {
            return 'black';
        } else {
            return 'red';
        }
    }
      const handleNext = () => {
        console.log('handle next');
        removePunctuation(index+1);
          if(versesArray.length > index + 1){
            setIndex(index + 1);
          } else {
              setIndex(0);
          }
      }
  
      const handleReturn = () => {
        console.log('handle return');
        removePunctuation(index-1);
          if(index > 0) {
            setIndex(index - 1);
          } else{
              setIndex(versesArray.length-1);
          }
      }
  
      const panResponder = PanResponder.create({
          onMoveShouldSetPanResponder: (evt, gestureState) => {
              return Math.abs(gestureState.dx) > 50;
          },
          onPanResponderRelease: (evt, gestureState) => {
              if (gestureState.dx > 0) {
                handleReturn();
              } else if (gestureState.dx < 0) {
                handleNext();  
                }
          },
      })

       useEffect(() => {
        console.log('do we get here? 1 ');
            removePunctuation(versesArray.findIndex(verseWords => 
                verseWords.back.toLowerCase() === verse.back.toLowerCase()));
              myMethod();
              console.log('do we get here? ');

          }, []);
      
        const myMethod = () => {
        // setIndex(versesArray.indexOf(verse));
        setIndex(versesArray.findIndex(verseWords => 
            verseWords.back.toLowerCase() === verse.back.toLowerCase()));
        }

        // useEffect(() => {

        
        //     // Call your method here
        //     removePunctuation(); 
        //   }, [verse]); // Dependency array 

  return (
    // <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.wrapper}>
                <Card style={styles.container} {...panResponder.panHandlers}>
                <Text style={styles.referenceText}>{versesArray[index]?.front || 'Loading...'} </Text>
                <TextInput
                //style={{ color: getColor() , width: '300px', heigh: '600px'}}
                style = {[styles.textInput, {color: getColor()}]}
                onChangeText={onChangeText}
                value={text}
                multiline={true}
                placeholder="Start typing out the verse. Don't worry worry about punctuation or capitilization, this is just about getting the words right."

                />
                </Card>
            </View>
        </SafeAreaView>
    //</SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    wrapper: {
        padding: 16,
        alignItems: 'center',
    },
    container: {
        width: '100%',
        minHeight: 400,
        marginVertical: 16,
        padding: 16,
    },
    referenceText: {
        fontSize: 16,
        color: '#000',
        marginVertical: 8,
        fontWeight: '500',
    },
    textInput: {
        flex: 1,
        minHeight: 300,
        textAlignVertical: 'top',
        padding: 8,
        fontSize: 16,
    }
});

export default TextInputGame;