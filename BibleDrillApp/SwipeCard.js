import React, { Component, useState } from 'react';
import { Text, Pressable, View, PanResponder, StyleSheet } from 'react-native';
import { Avatar, Button, Card } from 'react-native-paper';



const SwipeExample = ( {onSwipeLeft, onSwipeRight, cards} ) => {
    const [isFlipped, setIsFlipped] = useState(true);
    const [index, setIndex] = useState(0);
    let i = 0

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    }

    const handleNext = () => {
        setIsFlipped(true);
        if(cards.length > index + 1){
          setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    const handleReturn = () => {
        setIsFlipped(true);
        if(index > 0){
          setIndex(index - 1);
        } else{
            setIndex(cards.length-1);
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
        <Card style={styles.container} {...panResponder.panHandlers}>
            <Pressable onPress={handleFlip} style={styles.box}>
                {isFlipped?(
                    <View>
                        <Text>{cards[index].front}</Text>
                    </View>
                ) : (
                    <View>
                        <Text>{cards[index].back}</Text>
                    </View>
                )}
                {/* <View style={styles.box} /> */}
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