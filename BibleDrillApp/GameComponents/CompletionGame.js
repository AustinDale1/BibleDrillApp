import React, { useEffect, useState, useRef } from "react";
import {
    View,
    Pressable,
    Text,
    StyleSheet,
    TextInput,
    SafeAreaView,
    SafeAreaProvider,
    ScrollView,
    PanResponder,
} from "react-native";
import { Button } from "react-native-paper";
import ChildrenVerses from "../StaticFiles/children";
import YouthVerses from "../StaticFiles/youth";
import HighschoolVerses from "../StaticFiles/highschool";

const CompletionGame = ({ verseArray, translation, group }) => {
    let [verseComplete, setVerseComplete] = useState('');
    let [choiceArray, setChoiceArray] = useState(["", "", "", "", ""]);
    let [vcIndex, setVcIndex] = useState(0);
    let [index, setIndex] = useState(0);
    let [completionArray, setCompletionArray] = useState([]);
    // let [theVerse, setTheVerse] = useState(verse.split(' ')[0]);
    // let [theVerse, setTheVerse] = useState('');
    let [isFinished, setIsFinished] = useState(false);
    let [verseSplit, setVerseSplit] = useState([]);
    var kp = new ChildrenVerses();
    var youth = new YouthVerses();
    var hs = new HighschoolVerses();

    let [buttonColor, setButtonColor] = useState([
        "#f0f0f0",
        "#f0f0f0",
        "#f0f0f0",
        "#f0f0f0",
        "#f0f0f0",
    ]);

    // useEffect(() => {
    //     getWords();
    // }, [group, translation]);

    // const getWords = () => {
    //     if(group == "Children") {
    //         setWordBank(kp.getWordBank(translation));
    //     } else if(group == "Youth") {
    //         setWordBank(youth.getWordBank(translation));
    //     } else if(group == "Highschool") {
    //         setWordBank(youth.getWordBank(translation));
    //     }
    // }

    const setColor = (isCorrect, wordSelected) => {
        let wordIndex = -1;
        choiceArray.forEach((choice, index) => {
            if (choice == wordSelected) wordIndex = index;
        });
        if (isCorrect)
            setButtonColor((prevColors) => [
                ...prevColors.slice(0, wordIndex),
                "green",
                ...prevColors.slice(wordIndex + 1),
            ]);
        else
            setButtonColor((prevColors) => [
                ...prevColors.slice(0, wordIndex),
                "red",
                ...prevColors.slice(wordIndex + 1),
            ]);
        setTimeout(() => {
            setButtonColor((prevColors) => [
                ...prevColors.slice(0, wordIndex),
                "#f0f0f0",
                ...prevColors.slice(wordIndex + 1),
            ]);
        }, 200); // Adjust the duration of the flash
    };

    const handleSubmit = (wordSelected) => {
            if(wordSelected == verseArray[index].front) {
            setColor(true, wordSelected);
            setIsFinished(true);
        } else {
            setColor(false, wordSelected);
        }
    };

    const generateRefChoices = () => {
        let nextWord = verseArray[index].front;

        const correctPos = Math.floor(Math.random() * 5);
        let newChoices = new Array(5).fill("");
        newChoices[correctPos] = nextWord;
        let j = 0;
        for (let i = 0; i < 5; i++) {
            if (i === correctPos) continue;
            let randomWord;
            do {
                randomWord = verseArray[Math.floor(Math.random() * verseArray.length)].front;
            } while (
                randomWord === nextWord ||
                newChoices.includes(randomWord)
            );

            newChoices[i] = randomWord;
        }
        setChoiceArray(newChoices);
    }

    useEffect(() => {
        setCompletionArray(kp.getCompletionVersesByTranslation(translation));
        let tempIndex = Math.floor(Math.random() * 25);
        setIndex(tempIndex);
        setVerseSplit(verseArray[tempIndex].back.split(' '));
    }, []);

    useEffect(() => {
        generateRefChoices();
    }, [index]);

    const handleNext = () => {
        let random = Math.floor(Math.random() * 25);
        if(random != index) {
            setIndex(random);
        } else {
            setIndex(5);
        }
        setIsFinished(false);
    }

    const handleReturn = () => {
        let random = Math.floor(Math.random() * 25);
        if(random != index) {
            setIndex(random);
        } else {
            setIndex(5);
        }
        setIsFinished(false);
    }

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onStartShouldSetPanResponderCapture: (evt, gestureState) => {
            return gestureState.dx >= 20 || gestureState.dy >= 20;
        },
        onMoveShouldSetPanResponder: (evt, gestureState) => {
            return true;
        },
        onPanResponderRelease: (evt, gestureState) => {
            if(Math.abs(gestureState.dx) <= 50) {
                return;
            } else { 
                if (gestureState.dx > 0) {
                    handleReturn();
                } else if (gestureState.dx < 0) {
                    handleNext();
                }
            }   
        },
    })  

    return (
        <View style={styles.container}  {...panResponder.panHandlers}>
            <View style={styles.scrollContainer}>
                    {isFinished ? <Text>{verseArray[index].back}{verseArray[index].front}</Text> 
                    :                    
                    <Text style={styles.promptText}>
                        {completionArray.length > 0 ? completionArray[index].back : <Text>Loading...</Text>}
                    </Text>}
            </View>
            {isFinished ? (
                <View style={styles.buttonRow}>
                    <Pressable onPress={handleNext}>
                        <Text>Next</Text>
                    </Pressable>
                </View>
            ) : (
                
                <View style={styles.selectionContainer}>
                    <Text style={[{fontSize: 16}, { paddingBottom: 20 }]}>
                        Choose the Reference
                    </Text>

                    <View style={styles.buttonRow}>
                        <Pressable
                            onPress={() => handleSubmit(choiceArray[0])}
                            style={[
                                styles.button,
                                { backgroundColor: buttonColor[0] },
                            ]}
                        >
                            <Text style={styles.buttonText}>
                                {choiceArray[0]}
                            </Text>
                        </Pressable>
                        <Pressable
                            onPress={() => handleSubmit(choiceArray[1])}
                            style={[
                                styles.button,
                                { backgroundColor: buttonColor[1] },
                            ]}
                        >
                            <Text style={styles.buttonText}>
                                {choiceArray[1]}
                            </Text>
                        </Pressable>
                        <Pressable
                            onPress={() => handleSubmit(choiceArray[2])}
                            style={[
                                styles.button,
                                { backgroundColor: buttonColor[2] },
                            ]}
                        >
                            <Text style={styles.buttonText}>
                                {choiceArray[2]}
                            </Text>
                        </Pressable>
                    </View>

                    <View style={styles.buttonRow}>
                        <Pressable
                            onPress={() => handleSubmit(choiceArray[3])}
                            style={[
                                styles.button,
                                { backgroundColor: buttonColor[3] },
                            ]}
                        >
                            <Text style={styles.buttonText}>
                                {choiceArray[3]}
                            </Text>
                        </Pressable>
                        <Pressable
                            onPress={() => handleSubmit(choiceArray[4])}
                            style={[
                                styles.button,
                                { backgroundColor: buttonColor[4] },
                            ]}
                        >
                            <Text style={styles.buttonText}>
                                {choiceArray[4]}
                            </Text>
                        </Pressable>
                    </View>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        paddingBottom: 20,
    },
    scrollContainer: {
        height: 400,
        width: "100%",
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    choiceContainer: {
        width: "100%",
        alignItems: "center",
    },
    choiceText: {
        paddingVertical: 20,
        fontSize: 16,
        textAlign: "center",
    },
    divider: {
        width: "80%",
        height: 1,
    },
    selectionContainer: {
        paddingTop: 60,
        width: "100%",
        alignItems: "center",
    },
    promptText: {
        fontSize: 18,
        marginBottom: 24,
        textAlign: "center",
    },
    buttonRows: {
        width: "100%",
        paddingHorizontal: 20,
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginBottom: 20,
        width: "100%",
    },
    button: {
        backgroundColor: "#f0f0f0",
        padding: 15,
        borderRadius: 8,
        minWidth: 100,
        alignItems: "center",
    },
    buttonText: {
        fontSize: 12,
    },
});

export default CompletionGame;
