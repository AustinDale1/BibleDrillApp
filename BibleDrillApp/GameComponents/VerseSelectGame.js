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
} from "react-native";
import { Button } from "react-native-paper";
import ChildrenVerses from "../StaticFiles/children";
import YouthVerses from "../StaticFiles/youth";
import HighschoolVerses from "../StaticFiles/highschool";

const VerseSelectGame = ({ verse, verseArray, translation, group }) => {
    const [text, onChangeText] = React.useState("");
    const [number, onChangeNumber] = React.useState("");
    let [choiceArray, setChoiceArray] = useState(["", "", "", "", ""]);
    let [correctArray, setCorrectArray] = useState([]);
    let [correctString, setCorrectString] = useState("");
    // let [theVerse, setTheVerse] = useState(verse.split(' ')[0]);
    // let [theVerse, setTheVerse] = useState('');
    let [verseSplit, setVerseSplit] = useState([]);
    let [verseIndex, setVerseIndex] = useState(0);
    let [isFinished, setIsFinished] = useState(false);
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

    let [wordBank, setWordBank] = useState(kp.getWordBank(translation));

    useEffect(() => {
        getWords();
    }, [group, translation]);

    const getWords = () => {
        if(group == "Children") {
            setWordBank(kp.getWordBank(translation));
        } else if(group == "Youth") {
            setWordBank(youth.getWordBank(translation));
        } else if(group == "Highschool") {
            setWordBank(youth.getWordBank(translation));
        }
    }

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
        let correctVerse = verseSplit[verseIndex];
        if(verseIndex == verseSplit.length) {
            if(wordSelected == verse.reference) {
                setColor(true, wordSelected);
                setCorrectString(correctString + " " + wordSelected);
                setIsFinished(true);
                return;
            }
        }
        if (wordSelected == correctVerse) {
            setColor(true, wordSelected);
            const newArray = [...correctArray, wordSelected];
            setCorrectString(correctString + " " + wordSelected);
            setCorrectArray(newArray);
            if (verseIndex == verseSplit.length - 1) {
                if(group == 'Youth') {
                    if(verse.type != 'Identifying') {
                        generateRefChoices();
                        setVerseIndex((prevIndex) => prevIndex + 1);
                        return;
                    }
                }
                setIsFinished(true);
                return;
            }

            // setTheVerse(wordSelected);
            let newChoices = generateChoices(wordSelected);
            // console.log("BIIGBIB ");
            // console.log(newChoices);
            // setChoiceArray(newChoices);
            setVerseIndex((prevIndex) => prevIndex + 1);
        } else {
            setColor(false, wordSelected);
        }

    };

    const generateRefChoices = () => {
        let nextWord = verse.reference;
        const correctPos = Math.floor(Math.random() * 5);
        let newChoices = new Array(5).fill("");
        newChoices[correctPos] = nextWord;
        let j = 0;
        for (let i = 0; i < 5; i++) {
            if (i === correctPos) continue;
            let randomWord;
            do {
                randomWord = verseArray[Math.floor(Math.random() * verseArray.length)].reference;
            } while (
                randomWord === nextWord ||
                newChoices.includes(randomWord)
            );

            newChoices[i] = randomWord;
        }
        setChoiceArray(newChoices);
    }

    const generateChoices = (currentWord) => {
        //basically, its going to the first 'the'
        const nextWord =
            verseSplit[verseSplit.indexOf(currentWord, verseIndex) + 1];
        const correctPos = Math.floor(Math.random() * 5);
        let newChoices = new Array(5).fill("");
        newChoices[correctPos] = nextWord;

        for (let i = 0; i < 5; i++) {
            if (i === correctPos) continue;
            let randomWord;
            do {
                randomWord =
                    wordBank[Math.floor(Math.random() * wordBank.length)];
            } while (
                randomWord === nextWord ||
                newChoices.includes(randomWord)
            );

            newChoices[i] = randomWord;
        }

        setChoiceArray(newChoices);
    };

    useEffect(() => {
        //setCorrectArray([book.book]);
        let tempVerse = verse.back;

        //figure out if i wanna keep punctuaction, i dont, dont break it when i remove it
        let currentVerse = tempVerse.replaceAll(",", "");
        currentVerse = currentVerse.replaceAll(".", "");
        currentVerse = currentVerse.replaceAll(":", "");
        currentVerse = currentVerse.replaceAll(";", "");
        currentVerse = currentVerse.replaceAll("-", "");
        currentVerse = currentVerse.replaceAll('"', "");

        setVerseSplit(currentVerse.split(" "));
    }, [verse]);

    useEffect(() => {
        if (verseSplit.length > 0) {
            let tempVerse = verse.back;
            generateChoices(tempVerse);
        }
    }, [verseSplit]);

    const scrollViewRef = useRef();

    const reset = () => {
        const initChoices = generateChoices(correctString);
        setChoiceArray(initChoices);
        setCorrectArray([]);
        setCorrectString("");
        setVerseIndex(0);
        setIsFinished(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.scrollContainer}>
                <ScrollView
                    ref={scrollViewRef}
                    onContentSizeChange={() =>
                        scrollViewRef.current.scrollToEnd({ animated: true })
                    }
                    contentContainerStyle={styles.scrollContent}
                >
                    <Text style={styles.promptText}>
                        Reference {verse.front}
                    </Text>

                    <Text style={styles.choiceText}>{correctString}</Text>
                    {isFinished ? <Text>{verse.ref}</Text> : <></>}
                </ScrollView>
            </View>
            {isFinished ? (
                <View style={styles.buttonRow}>
                    <Pressable onPress={reset}>
                        <Text>Reset</Text>
                    </Pressable>
                    <Pressable>
                        <Text>Next</Text>
                    </Pressable>
                </View>
            ) : (
                <View style={styles.selectionContainer}>
                    <Text style={[{fontSize: 16}, { paddingBottom: 20 }]}>
                        Choose next word
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

export default VerseSelectGame;
