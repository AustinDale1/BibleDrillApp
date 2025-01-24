import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import SwipeCard from "../GameComponents/SwipeCard";
import TextInputGame from "../GameComponents/TextInput";
import VerseSelectGame from "../GameComponents/VerseSelectGame";
import { PaperProvider, BottomNavigation } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChildrenVerses from "../StaticFiles/children";
import YouthVerses from "../StaticFiles/youth";

export default function Verses({ translation, group }) {
    // const [mode, setMode] = useState('main');
    // const [studyStyleState, setStudyStyleState] = useState('');
    // const [isSelected, setIsSelected] = useState(false);
    // const [verse, setVerse] = useState('ok chec');
    const [verseState, setVerseState] = useState({
        isSelected: false,
        verse: "ok chec",
        mode: "main",
        studyStyleState: "",
    });
    const objForSummoning = new ChildrenVerses();
    const youth = new YouthVerses();
    const [verseArray, setVerseArray] = useState(objForSummoning.getVersesByTranslation(translation));

    // const youthVersesArray = youth.getVersesByTranslation(translation);

    useEffect(() => {
        if(group == "Children") {
			setVerseArray(objForSummoning.getVersesByTranslation(translation));
		} else if(group == "Youth") {
			setVerseArray(youth.getVersesByTranslation(translation));
		}
    }, [group]);

    function pageRenderer() {
        if (verseState.mode == "main") {
            return (
                <View style={styles.container}>
                    <Text style={styles.promptText}>How would you like to study?</Text>
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
                    </View>
                </View>
            );
        } else {
            console.log(
                verseState.studyStyleState +
                    " " +
                    verseState.isSelected +
                    " " +
                    verseState.verse
            );
            if (
                verseState.studyStyleState == "flash" &&
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
            }
            if (
                verseState.studyStyleState == "bubble" &&
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
            }
            if (verseState.studyStyleState == "type" && verseState.isSelected) {
                return (
                    <TextInputGame
                        versesArray={verseArray}
                        verse={verseState.verse}
                        translation={translation}
                        group={group}
                    />
                );
            } else {
                return <VerseComponent />;
            }
        }
    }

    const handleCardPress = (verseText) => {
        // setIsSelected(true);
        // setVerse(verseText);
        setVerseState((prev) => ({
            ...prev,
            isSelected: true,
            verse: verseText,
            mode: prev.studyStyleState,

            // isSelected: false,
            // verse: 'ok chec',
            // mode: 'main',
            // studyStyleState: ''
        }));
    };

    // console.log(youthD);
    // console.log(youthB);
    const scrollViewRef = useRef();

    const VerseComponent = (studyStyle) => {
        return (
            <View style={styles.container}>

                {group == "Children" ? (
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
                ) : (
                    <ScrollView
                    ref={scrollViewRef}
                    contentContainerStyle={styles.scrollContent}
                    >
                    <View style={styles.container}>
                        {verseArray.map((choice, index) => (
                            <Pressable
                                key={index}
                                onPress={() => handleCardPress(choice)}
                                style={styles.verseItem}
                            >
                                <Text style={styles.verseText}>{choice.front}</Text>
                            </Pressable>
                        ))}
                    </View>
                    </ScrollView>
                )}
            </View>
        );
    };

    const handlePress = (studyStyle) => {
        setVerseState((prev) => ({
            ...prev,
            studyStyleState: studyStyle,
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
            <Pressable onPress={backButton} style={styles.backButton}>
                <Text style={styles.backButtonText}>←</Text>
            </Pressable>
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