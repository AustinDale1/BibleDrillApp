import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import SwipeCard from './SwipeCard';
import {
  PaperProvider, BottomNavigation
} from "react-native-paper";
import bibleBooks from './BooksOfBible';

export default function CardSelector() {
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
		setBookSelected(book);
		bookSelected = book;
		console.log(book + ' a ' + bookSelected);
		setIsSelected(true);
	}
	return (
		<View>
			{isSelected ? 
				<SwipeCard
				cards={bibleBooks}
				book={bookSelected}
			   	isRandom={false}/>
			:
			<View>
			{bookArray.map((choice, index) => (
					  <Pressable key={index} onPress={() => cardSelected(choice)}><Text>{choice}</Text></Pressable>
				  ))
			}
			</View>
		}
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
  },
});
