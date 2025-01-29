import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { use, useEffect, useState } from "react";
import SwipeCard from "../GameComponents/SwipeCard";
import VerseSelectGame from "../GameComponents/VerseSelectGame";
import TextInputGame from "../GameComponents/TextInput";
import { PaperProvider, BottomNavigation } from "react-native-paper";
import ChildrenVerses from "../StaticFiles/children";
import HighschoolVerses from "../StaticFiles/highschool";

export default function KeyPassages({ translation, group }) {
    const [isMain, setIsMain] = useState(true);
    const [currentCard, setCurrentCard] = useState("");
    var kp = new ChildrenVerses();
	var highschool = new HighschoolVerses();
        const [keyPass, setKeyPass] = useState({
            isSelected: false,
            keyP: kp.getKeyPassages(),
            mode: "main",
            studyStyleState: "",
        });
    
    useEffect(() => {
        getVerseArray();
    }, [group, translation]);

    const getVerseArray = () => {
        if(group == 'Children') {
            setKeyPass((prev) => ({
                ...prev,
                keyP: kp.getKeyPassages()
            }));
        } else if(group == 'Highschool') {
            setKeyPass((prev) => ({
                ...prev,
                mode: 'main',
                keyP: highschool.getKeyPassages(translation)
            }));
        }
    }
    

    //This one will go to where you study the keypassage
    const handlePress = (kpSelected) => {
        setCurrentCard(kpSelected);
        setKeyPass((prev) => ({
            ...prev,
            isSelected: true,
            mode: 'ChildFlashCard'
        }));
    };

    const handleStudyStylePress = (type) => {
        setKeyPass((prev) => ({
            ...prev,
            isSelected: false,
            mode: type,
            studyStyleState: type
        }));
    }

    const backButton = () => {
        setKeyPass((prev) => ({
            ...prev,
            isSelected: false,
            mode: 'main',
            studyStyleState: ''
        }));
    };

    const pageRenderer = () => {
        console.log(keyPass);
        if(keyPass.mode == 'main' && group == 'Highschool') {
            return (
                <View style={styles.container}>
                    <Text style={styles.promptText}>How would you like to study?</Text>
                    <View style={styles.buttonContainer}>
                        <Pressable onPress={() => handleStudyStylePress("flash")} style={styles.studyButton}>
                            <Text style={styles.studyButtonText}>Flashcards</Text>
                        </Pressable>
                        <Pressable onPress={() => handleStudyStylePress("bubble")} style={styles.studyButton}>
                            <Text style={styles.studyButtonText}>Blank Bubble</Text>
                        </Pressable>
                        <Pressable onPress={() => handleStudyStylePress("type")} style={styles.studyButton}>
                            <Text style={styles.studyButtonText}>Type it out</Text>
                        </Pressable>
                    </View>
                </View>
            );
        } else if(!keyPass.isSelected) {
            return (
                // keyPass.keyP.map((choice, index) => (
                //     <Pressable key={index} onPress={() => handlePress(choice)}>
                //         <Text>{choice.front}</Text>
                //     </Pressable>
                // ))
                <View style={styles.container}>
                    {/* <ScrollView
                    ref={scrollViewRef}
                    contentContainerStyle={styles.scrollContent}
                    > */}
                    {keyPass.keyP.map((choice, index) => (
                        <Pressable
                            key={index}
                            onPress={() => handlePress(choice)}
                            style={styles.verseItem}
                        >
                            <Text style={styles.verseText}>{choice.front}</Text>
                        </Pressable>
                    ))}
                    {/* </ScrollView> */}
                </View>
            )
        } else if(group == 'Highschool') {
            console.log('here');
            if (
                keyPass.studyStyleState == "flash" &&
                keyPass.isSelected
            ) {
                console.log('highflash');
                return (
                    <SwipeCard
                        cards={keyPass.keyP}
                        isRandom={false}
                        book={currentCard}
                        translation={translation}
                        group={group}
                    />
                );
            }
            if (
                keyPass.studyStyleState == "bubble" &&
                keyPass.isSelected
            ) {
                console.log('highselect');
                return (
                    <VerseSelectGame
                        verse={currentCard}
                        verseArray={keyPass.keyP}
                        translation={translation}
                        group={group}
                    />
                );
            }
            if (keyPass.studyStyleState == "type" && keyPass.isSelected) {
                console.log('fweak');
                console.log(keyPass);
                console.log(currentCard);
                console.log('fweak');
                return (
                    <TextInputGame
                        versesArray={keyPass.keyP}
                        verse={currentCard}
                        translation={translation}
                        group={group}
                    />
                );
            }
        } else if(group == 'Children') {
            return(
            <SwipeCard
                cards={keyPass.keyP}
                book={currentCard}
                isRandom={false}
                translation={translation}
                group={group}
            />
            );
        }
    }

    return (
        <View style={{ flex: 1 }}>
            {keyPass.mode != 'main' ?
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
