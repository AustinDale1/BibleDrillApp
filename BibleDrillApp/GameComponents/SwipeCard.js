import React, { Component, useEffect, useState } from 'react';
import { Text, Pressable, View, PanResponder, StyleSheet } from 'react-native';
import { Avatar, Button, Card } from 'react-native-paper';

//Should I add in a queue/stack so swiping back goes actually back

const SwipeExample = ( {cards, book, isRandom} ) => {
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
        console.log('ok actualy one ' + cards[index].front);
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
        console.log('ok duby00' + cards[index].front);
        console.log('ok again' + cards[0].front);

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
        <View style={{ flex: 1 }}>

            <Card style={styles.container} {...panResponder.panHandlers} >

                <Card.Content>
                {/* <Pressable onPress={handleFlip} > */}
                {/* <View style={styles.box}> */}
                <Text>2</Text>

                {!isFlipped?(
                    <View>
                        <Text style={{ fontSize: 24, color: 'black' }}>{cards[index].front} check?</Text>
                    </View>
                ) : (
                    <View>
                        <Text style={{ fontSize: 24, color: 'black' }}>{cards[index].back} checkw</Text>
                    </View>
                )}
                <Text>{isFlipped ? 'should be back updated2' : 'front/notflip'}</Text>
                    {/* </View> */}
                </Card.Content>

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
    box: {
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        minHeight: 634,
        // borderRadius: 25,
    },
});

export default SwipeExample