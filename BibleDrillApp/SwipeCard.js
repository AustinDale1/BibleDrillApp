import React, { Component, useState } from 'react';
import { Text, Pressable, View, PanResponder, StyleSheet } from 'react-native';

const SwipeExample = ( {onSwipeLeft, onSwipeRight, cards} ) => {
    const [isFlipped, setIsFlipped] = useState(true);
    const [index, setIndex] = useState(0);
    let i = 0

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    }

    const handleNext = () => {
        if(cards.length > index + 1){
          setIndex(index + 1);
          setIsFlipped(true);
        } else {
            setIndex(0);
        }
    }

    const handleReturn = () => {
        if(index > 0){
          setIndex(index - 1);
          setIsFlipped(true);
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
        <View style={styles.container} {...panResponder.panHandlers}>
            <Pressable onPress={handleFlip}>
                {isFlipped?(
                    <View>
                        <Text>{cards[index].front}</Text>
                    </View>
                ) : (
                    <View>
                        <Text>{cards[index].back}</Text>
                    </View>
                )}
                <View style={styles.box} />
            </Pressable>
        </View>
      );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
    },
});

export default SwipeExample