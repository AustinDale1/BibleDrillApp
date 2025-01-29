import React, {useState, useEffect} from 'react';
import {StyleSheet, TextInput, SafeAreaView, PanResponder, SafeAreaProvider, Text, View, Keyboard, Pressable} from 'react-native';
import {Card} from 'react-native-paper';
// import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


    let textColor = 'red';
    const TextInputGame = ({versesArray, verse, translation, group}) => {
    const [refText, onChangeRefText] = React.useState('');
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
    const [isFlipped, setIsFlipped] = useState(true);
    const [index, setIndex] = useState(0);
    const [currentVerse, setCurrentVerse] = useState('');
    const [refNotComplete, setRefNotComplete] = useState(true);
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
  const getRefColor = () => {
    let tempVerse = versesArray[index];
    console.log('method');
    let text2 = refText.toLowerCase().replaceAll(' ', '');
    console.log(text2);
    console.log(tempVerse.reference);
    if(tempVerse.reference.toLowerCase().replaceAll(' ', '') == text2) {
        setRefNotComplete(true);
        return 'green';
    }
    console.log(tempVerse.reference.substring(0, refText.length).toLowerCase().replaceAll(' ', '') + ' == ' + text2.toLowerCase())
    if(tempVerse.reference.substring(0, refText.length).toLowerCase().replaceAll(' ', '') == text2 || text2 == '') {
        return 'black';
    } else {
        return 'red';
    }
}

    const getColor = () => {
        if(currentVerse == text.toLowerCase()) {
            return 'green';
        }
        // console.log('current verse is ' + currentVerse)
        // if((versesArray[index].back.toLowerCase()).substring(0, text.length) == text.toLowerCase() || text == '') {
        if(currentVerse.substring(0, text.length) == text.toLowerCase() || text == '') {
            return 'black';
        } else {
            return 'red';
        }
    }
    const handleNext = () => {
        console.log('handle next');
        if(versesArray.length > index + 1){
            removePunctuation(index+1);
            setIndex(index + 1);
        } else {
            removePunctuation(0);
            setIndex(0);
        }
    }

      const handleReturn = () => {
            console.log('handle return');
          if(index > 0) {
            console.log('frick' + index);
            removePunctuation(index-1);
            setIndex(index - 1);
          } else{
            console.log('here');
            removePunctuation(versesArray.length-1);
              setIndex(versesArray.length-1);
              console.log(versesArray[versesArray.length-1]);
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
        <SafeAreaView style={styles.safeArea} {...panResponder.panHandlers}>
            <Pressable onPress={Keyboard.dismiss} style={styles.presser}>
            {/* <View > */}
                <Card style={styles.container} >
                <Text style={styles.referenceText}>{versesArray[index]?.front || 'Loading...'} </Text>
                {group != 'Children' ? 
                    verse.type != 'StepsToSalvation' || verse.type != 'Identifying' ? 
                <TextInput
                //style={{ color: getColor() , width: '300px', heigh: '600px'}}
                style = {[styles.textInput, {color: getRefColor()}]}
                onChangeText={onChangeRefText}
                value={refText}
                multiline={true}
                placeholder="Type reference like this Ecclesiastes 1:12-14"
                editable={refNotComplete}
                />: <></> : <></>}
                <TextInput
                //style={{ color: getColor() , width: '300px', heigh: '600px'}}
                style = {[styles.textInput, {color: getColor()}]}
                onChangeText={onChangeText}
                value={text}
                multiline={true}
                placeholder="Start typing out the verse. Don't worry worry about punctuation or capitilization, this is just about getting the words right."

                />
                </Card>
            {/* </View> */}
            </Pressable>
        </SafeAreaView>
    //</SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    wrapper: {
        padding: 16,
        alignItems: 'center',
        // width: 
    },
    presser: {
        flex: 1,
        // width: '100%',
        // margin: 10,
        // padding: 16,
        // backgroundColor: 'white',
        // height: 634,
    },
    container: {
        flex: 1,
        // width: '100%',
        margin: 10,
        padding: 16,
        backgroundColor: 'white',
        height: 634,
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