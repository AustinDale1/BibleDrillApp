import React, { Component, useEffect, useState } from 'react';
import { Text, Pressable, View, PanResponder, StyleSheet } from 'react-native';
import { Avatar, Button, Card } from 'react-native-paper';

//Should I add in a queue/stack so swiping back goes actually back

const SwipeExample = ( {cards, book, isRandom, translation, group} ) => {
    // console.log('Cards:', cards);

    const [isFlipped, setIsFlipped] = useState(false);
    const [index, setIndex] = useState(0);
    // console.log('Index:', index);
    // console.log('Current card:', cards[index]);
    let i = 0

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    }

    const handleNext = () => {
        setIsFlipped(false);
        if(isRandom) {
            randomGen();
            return;
        }
        if(cards.length > index + 1){
          setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    const handleReturn = () => {
        setIsFlipped(false);
        //Do we really want random gen when we
        //go backwards??
        if(isRandom) {
            randomGen();
            return;
        }
        if(index > 0){
          setIndex(index - 1);
        } else{
            setIndex(cards.length-1);
        }
    }

    const randomGen = () => {
        let random = Math.floor(Math.random() * 66);
        if(random != index) {
            setIndex(random);
        } else {
            setIndex(5);
        }
    }

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onStartShouldSetPanResponderCapture: () => true,
        onMoveShouldSetPanResponder: (evt, gestureState) => {
            // return Math.abs(gestureState.dx) > 50;
            return true;
        },
        onPanResponderRelease: (evt, gestureState) => {
            if(Math.abs(gestureState.dx) <= 50) {
                handleFlip();
            } else { 
                if (gestureState.dx > 0) {
                    handleReturn();
                } else if (gestureState.dx < 0) {
                    handleNext();
                }
            }   
        },
    })  
    
    useEffect(() => {
        myMethod();
    }, []);

    const myMethod = () => {

        if(isRandom)
        {
            setIndex(Math.floor(Math.random() * 66));
        } else
        {
            setIndex(cards.findIndex(bookName => 
            bookName.front.toLowerCase() === book.front.toLowerCase()));
        }
    }



      return (
        <View style={{ flex: 1 }}>
            <Card style={styles.container} onPress={handleFlip} {...panResponder.panHandlers}>
                <View style={styles.textContainer}>
                    <Text style={styles.cardText}>{ !isFlipped ? cards[index].front : cards[index].back}</Text>
                </View>
            </Card>
        </View>
      );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        backgroundColor: 'white',
        color: 'black',
        height: 634,
    },
    cardContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        // flex: 1,
        height: '100%',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        // padding: 20,
    },
    cardText: {
        fontSize: 24,
        color: 'black',
    }
});

export default SwipeExample