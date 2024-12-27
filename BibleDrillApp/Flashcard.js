import React, {useState, useEffect} from 'react'
import { PanResponder, Pressable, Button, StyleSheet, Text, View } from 'react-native';


const StudySet = () => {
    // let params = useParams()
    let [cards, setCards] = useState([
        { front: "John", back: "Luke John Acts" },
        { front: "Acts", back: "John Acts Romans" },
        { front: "Mark", back: "Matthew Mark Luke" }
    ])
    const [isFlipped, setIsFlipped] = useState(true);
    const [index, setIndex] = useState(0);
    // const students = [
    //     { front: "John", back: "20" },
    //     { front: "Bob", back: "21" },
    //     { front: "Charlie", back: "22" }
    // ];
    let i = 0

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    }

    const handleNext = () => {
        if(cards.length > index + 1){
          setIndex(index + 1);
          setIsFlipped(true);
        } 
    }

    const handleReturn = () => {
        if(index > 0){
          setIndex(index - 1);
          setIsFlipped(true);
        } else
        {
            setIndex(cards.length-1);
        }
    }

    // useEffect(() => {
    //     console.log('useEffect' + i)
    //     i++
    //     getSet()
    // }, [])

    // let getSet = async () => {
    //     let response = await fetch(`/api/sets/${params.id}/cards`)
    //     let data = await response.json()
    //     setCards(data)
    // }

    return (
        <View className='cardBackground'>
            <Button className="cardButtonLeft" onPress={handleReturn} title='&larr;'></Button>   
            <Pressable className='cardBackground' onPress={handleFlip}>
                    <View className='cardHolder'>
                        {isFlipped?(
                            <View>
                            {cards[index].front}
                            </View>
                        ) : (
                            <View>
                            {cards[index].back}
                            </View>
                        )}
                        {/* <View className='card' onPress={handleFlip}>
                            <FlashCard front={cards[index].front} back={cards[index].back} isFlipped={flip} />
                            <Button onPress={handleFlip} title= {isFlipped?(
                                    cards[index].front
                                ) : (
                                    cards[index].back
                                )}><div className='flashcard'> {
                                isFlipped?(
                                    cards[index].front
                                ) : (
                                    cards[index].back
                                )
                            }</div></Button>
                            
                        </View> */}
                    </View>                     
            </Pressable >
            <Button className="cardButtonRight" onPress={handleNext} title='&rarr;'></Button>
        </View>  
    )
}

export default StudySet