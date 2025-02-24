import { Pressable, StyleSheet, Text, View, ScrollView } from 'react-native';
import React, {useState, useRef} from 'react';
import SwipeCard from '../GameComponents/SwipeCard';
import {
  PaperProvider, BottomNavigation
} from "react-native-paper";
import bibleBooks from '../StaticFiles/BooksOfBible';

export default function CardSelector({translation, group}) {
	const bookArray = [
		'Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy',
		'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel',
		'1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles',
		'Ezra', 'Nehemiah', 'Esther', 'Job', 'Psalms',
		'Proverbs', 'Ecclesiastes', 'Song of Solomon', 'Isaiah',
		'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel', 'Hosea',
		'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum',
		'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi',
		'Matthew', 'Mark', 'Luke', 'John', 'Acts',
		'Romans', '1 Corinthians', '2 Corinthians', 'Galatians',
		'Ephesians', 'Philippians', 'Colossians',
		'1 Thessalonians', '2 Thessalonians', '1 Timothy',
		'2 Timothy', 'Titus', 'Philemon', 'Hebrews', 'James',
		'1 Peter', '2 Peter', '1 John', '2 John', '3 John',
		'Jude', 'Revelation'
	];
	let [isSelected, setIsSelected] = useState(false);
	let [bookSelected, setBookSelected] = useState('');
	//let bookSelected = 'Genesis';

	const cardSelected = (book) => {
		setBookSelected(bibleBooks[bibleBooks.findIndex(booky => 
            booky.front.toLowerCase() === book.toLowerCase())]);
		setIsSelected(true);
	}

	const backButton = () => {
		setMode('main');
	  }
		const scrollViewRef = useRef();
	 
	return (
		<View style={{ flex: 1 }}>
			{isSelected ? 
				<SwipeCard
				cards={bibleBooks}
				book={bookSelected}
			   	isRandom={false}
				translation={translation} 
				group={group}/>
			:
			// <View style={{ flex: 1 }}>
			// {bookArray.map((choice, index) => (
			// 		  <Pressable key={index} onPress={() => cardSelected(choice)}><Text>{choice}</Text></Pressable>
			// 	  ))
			// }
			// </View>
			<View style={styles.container}>
			<ScrollView
			ref={scrollViewRef}
			>
				{/* {verseArray.map((choice, index) => (
					<Pressable
						key={index}
						onPress={() => handleCardPress(choice)}
						style={styles.verseItem}
					>
						<Text style={styles.verseText}>{choice.front}</Text>
					</Pressable>
				))} */}
				
				{bookArray.map((choice, index) => (
			 		<Pressable key={index} onPress={() => cardSelected(choice)} style={styles.verseItem}><Text style={styles.verseText}>{choice}</Text></Pressable>
			 	))
				}
			</ScrollView>
		</View>
		}
		</View>
		
	);
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
	justifyContent: 'center',
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
