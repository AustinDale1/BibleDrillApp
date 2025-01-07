import React, { Component, useEffect, useState } from 'react';
import { Text, Pressable, View, PanResponder, StyleSheet } from 'react-native';
import { Avatar, Button, Card } from 'react-native-paper';



const SwipeExample = ( {cards, book, isRandom} ) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [index, setIndex] = useState(0);
    let i = 0

    const handleFlip = () => {
        console.log('flipping, ');
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
        onMoveShouldSetPanResponder: (evt, gestureState) => {
            return Math.abs(gestureState.dx) > 5;
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
        myMethod();
    }, []);

    const myMethod = () => {
        if(isRandom)
        {
            setIndex(Math.floor(Math.random() * 66));
        } else
        {
            setIndex(cards.findIndex(bookName => 
                bookName.front.toLowerCase() === book.toLowerCase()));
        }
    }



      return (
        <Card style={styles.container} {...panResponder.panHandlers}>
            <Pressable onPress={handleFlip} style={styles.box}>
                {!isFlipped?(
                    <View>
                        <Text>{cards[index].front}</Text>
                    </View>
                ) : (
                    <View>
                        <Text>{cards[index].back}</Text>
                    </View>
                )}
                {/* <View style={styles.box} /> */}
                <Text>{isFlipped ? 'should be back' : 'front/notflip'}</Text>
            </Pressable>
        </Card>
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
    box: {
        width: 300,
        height: 400,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'blue',
    },
});

export default SwipeExample