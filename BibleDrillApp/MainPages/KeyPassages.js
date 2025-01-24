import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { use, useEffect, useState } from "react";
import SwipeCard from "../GameComponents/SwipeCard";
import { PaperProvider, BottomNavigation } from "react-native-paper";
import ChildrenVerses from "../StaticFiles/children";
import HighschoolVerses from "../StaticFiles/highschool";

export default function KeyPassages({ translation, group }) {
    const [isMain, setIsMain] = useState(true);
    const [currentCard, setCurrentCard] = useState("");
    var kp = new ChildrenVerses();
	var highschool = new HighschoolVerses();
    let [kpArray, setKpArray] = useState(kp.getKeyPassages());

		useEffect(() => {
			if(group == 'Children') {
				setKpArray(kp.getKeyPassages());
			} else if(group == "Highschool") {
				setKpArray(highschool.getKeyPassages());
			}
		}, [group]);

    const handlePress = (kpSelected) => {
        setCurrentCard(kpSelected);
        setIsMain(false);
    };

    const backButton = () => {
        setIsMain(true);
    };

    return (
        <View style={{ flex: 1 }}>
            <Pressable onPress={backButton}>
                <Text>&larr;</Text>
            </Pressable>
            {isMain ? (
                kpArray.map((choice, index) => (
                    <Pressable key={index} onPress={() => handlePress(choice)}>
                        <Text>{choice.front}</Text>
                    </Pressable>
                ))
            ) : (
                <SwipeCard
                    cards={kpArray}
                    book={currentCard}
                    isRandom={false}
                    translation={translation}
                    group={group}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
});
