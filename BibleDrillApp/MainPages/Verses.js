import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import SwipeCard from "../GameComponents/SwipeCard";
import TextInputGame from "../GameComponents/TextInput";
import VerseSelectGame from "../GameComponents/VerseSelectGame";
import CompletionGame from "../GameComponents/CompletionGame";
import { PaperProvider, BottomNavigation } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChildrenVerses from "../StaticFiles/children";
import YouthVerses from "../StaticFiles/youth";
import HighschoolVerses from "../StaticFiles/highschool";

export default function Verses({ translation, group }) {
    // const [mode, setMode] = useState('main');
    // const [studyStyleState, setStudyStyleState] = useState('');
    // const [isSelected, setIsSelected] = useState(false);
    // const [verse, setVerse] = useState('ok chec');
    const [verseState, setVerseState] = useState({
        isSelected: false,
        verse: "ok chec",
        mode: "main",
    });
    const objForSummoning = new ChildrenVerses();
    const youth = new YouthVerses();
    const hs = new HighschoolVerses();
    const [verseArray, setVerseArray] = useState(objForSummoning.getVersesByTranslation(translation));

    // const youthVersesArray = youth.getVersesByTranslation(translation);

    useEffect(() => {
        setVerseState((prev) => ({
            ...prev,
            isSelected: false,
            mode: "main",
        }));
        getVerseArray();
    }, [group, translation]);

    const getVerseArray = () => {
        if(group == 'Children') {
			setVerseArray(objForSummoning.getVersesByTranslation(translation));
		} else if(group == 'Youth') {
			setVerseArray(youth.getVersesByTranslation(translation));
		} else if(group == 'Highschool') {
            setVerseArray(hs.getVersesByTranslation(translation));
        }
    }

    function pageRenderer() {
        if (verseState.mode == "main") {
            console.log("is it here somehow?");
            return (
                <View style={styles.container}>
                    <Text style={styles.promptText}>How would you like to study? 2</Text>
                    <View style={styles.buttonContainer}>
                        <Pressable onPress={() => handlePress("flash")} style={styles.studyButton}>
                            <Text style={styles.studyButtonText}>Flashcards</Text>
                        </Pressable>
                        <Pressable onPress={() => handlePress("bubble")} style={styles.studyButton}>
                            <Text style={styles.studyButtonText}>Blank Bubble</Text>
                        </Pressable>
                        <Pressable onPress={() => handlePress("type")} style={styles.studyButton}>
                            <Text style={styles.studyButtonText}>Type it out</Text>
                        </Pressable>
                        {group == 'Children' ? 
                        <Pressable onPress={() => handlePress("completion")} style={styles.studyButton}>
                            <Text style={styles.studyButtonText}>Completion</Text>
                        </Pressable>
                        : <></>}
                    </View>
                </View>
            );
        } else if (
                verseState.mode == "flash" &&
                verseState.isSelected
        ) {
            return (
                <SwipeCard
                    cards={verseArray}
                    isRandom={false}
                    book={verseState.verse}
                    translation={translation}
                    group={group}
                />
            );
        } else if (
                verseState.mode == "bubble" &&
                verseState.isSelected
        ) {
            return (
                <VerseSelectGame
                    verse={verseState.verse}
                    verseArray={verseArray}
                    translation={translation}
                    group={group}
                />
            );
        } else if (verseState.mode == "type" && verseState.isSelected) {
            return (
                <TextInputGame
                    verseArray={verseArray}
                    verse={verseState.verse}
                    translation={translation}
                    group={group}
                />
            );
        } else if (verseState.mode == "completion" && verseState.isSelected) {
            console.log(verseState);
            return (
                <CompletionGame
                    verseArray={verseArray}
                    translation={translation}
                    group={group}
                />
            );
        }else {
            return (
                <View style={styles.container}>
                    <ScrollView
                    ref={scrollViewRef}
                    contentContainerStyle={styles.scrollContent}
                    >
                    {verseArray.map((choice, index) => (
                        <Pressable
                            key={index}
                            onPress={() => handleCardPress(choice)}
                            style={styles.verseItem}
                        >
                            <Text style={styles.verseText}>{choice.front}</Text>
                        </Pressable>
                        ))}
                    </ScrollView>
                </View>
            );
        }
    }

    const handleCardPress = (verseText) => {
        // setIsSelected(true);
        // setVerse(verseText);
        setVerseState((prev) => ({
            ...prev,
            isSelected: true,
            verse: verseText,

            // isSelected: false,
            // verse: 'ok chec',
            // mode: 'main',
            // studyStyleState: ''
        }));
    };

    // console.log(youthD);
    // console.log(youthB);
    const scrollViewRef = useRef();

    // const VerseComponent = () => {
    //     return (
    //         <View style={styles.container}>

    //             {/* {group == "Children" ? ( */}
    //                 <ScrollView
    //                 ref={scrollViewRef}
    //                 contentContainerStyle={styles.scrollContent}
    //                 >
    //                 {verseArray.map((choice, index) => (
    //                     <Pressable
    //                         key={index}
    //                         onPress={() => handleCardPress(choice)}
    //                         style={styles.verseItem}
    //                     >
    //                         <Text style={styles.verseText}>{choice.front}</Text>
    //                     </Pressable>
    //                 ))}
    //             </ScrollView>
    //         </View>
    //     );
    // };

    const handlePress = (studyStyle) => {
        if(studyStyle == 'completion') {
            setVerseState((prev) => ({
                ...prev,
                isSelected: true,
                mode: 'completion',
            }));
            return;
        }
        setVerseState((prev) => ({
            ...prev,
            mode: studyStyle,
        }));
    };

    const backButton = () => {
        setVerseState((prev) => ({
            ...prev,
            isSelected: false,
            mode: "main",
        }));
    };

    return (
        <View style={styles.wrapper}>
            {verseState.mode != 'main' ?
            <Pressable onPress={backButton} style={styles.backButton}>
                <Text style={styles.backButtonText}>←</Text>
            </Pressable>
            : <></>}
            {pageRenderer()}
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: 15,
        backgroundColor: '#f5f5f5',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    scrollContainer: {
        height: 400,
        width: "100%",
    },
    promptText: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: 'bold',
    },
    buttonContainer: {
        alignItems: 'center',
    },
    studyButton: {
        backgroundColor: '#007bff',
        padding: 12,
        borderRadius: 8,
        marginVertical: 8,
        width: '70%',
        alignItems: 'center',
    },
    studyButtonText: {
        color: 'white',
        fontSize: 16,
    },
    backButton: {
        marginBottom: 10,
        alignSelf: 'flex-start',
    },
    backButtonText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    verseItem: {
        backgroundColor: '#e9ecef',
        padding: 12,
        borderRadius: 8,
        marginVertical: 6,
    },
    verseText: {
        textAlign: 'center',
        fontSize: 16,
    },
});