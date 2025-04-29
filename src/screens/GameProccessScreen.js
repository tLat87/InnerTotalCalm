import React, { useEffect, useState, useRef } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert, Dimensions, Image} from 'react-native';

const { width, height } = Dimensions.get('window');

const GameProccessScreen = ({navigation}) => {
    const [score, setScore] = useState(0);
    const [starVisible, setStarVisible] = useState(false);
    const [starPosition, setStarPosition] = useState({ x: 0, y: 0 });
    const starTimeout = useRef(null);

    useEffect(() => {
        startGame();
        return () => clearTimeout(starTimeout.current);
    }, []);

    const startGame = () => {
        showNextStar();
    };

    const showNextStar = () => {
        const randomX = Math.random() * (width - 80);
        const randomY = Math.random() * (height - 200); // чтобы не прятались за кнопками

        setStarPosition({ x: randomX, y: randomY });
        setStarVisible(true);

        starTimeout.current = setTimeout(() => {
            setStarVisible(false);
            showNextStar();
        }, 1000); // звезда исчезает через 1 секунду
    };

    const handleStarPress = () => {
        clearTimeout(starTimeout.current);
        setScore(prev => prev + 1);
        setStarVisible(false);
        setTimeout(showNextStar, 300); // короткая пауза перед следующей
    };

    const handleMissTouch = () => {
        Alert.alert("Game Over", `You scored ${score} ⭐`, [{ text: "OK", onPress: resetGame }]);
        navigation.goBack();
    };

    const resetGame = () => {
        setScore(0);
        setStarVisible(false);
        showNextStar();
    };

    return (
        <TouchableOpacity activeOpacity={1} style={styles.container} onPress={handleMissTouch}>
            {starVisible && (
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={handleStarPress}
                    style={[styles.starContainer, { top: starPosition.y, left: starPosition.x }]}
                >
                    <Image
                        source={require('../assets/img/Layer_1копія.png')}
                        style={styles.starImage}
                    />
                </TouchableOpacity>
            )}
            <TouchableOpacity style={styles.pauseButton} onPress={()=>{navigation.goBack();}}>
                <Image
                    source={require('../assets/img/Frame4.png')}/>

            </TouchableOpacity>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0b1550',
    },
    star: {
        position: 'absolute',
        width: 50,
        height: 50,
        backgroundColor: '#c0a76c',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
    },
    pauseButton: {
        position: 'absolute',
        top: 50,
        right: 20,
        backgroundColor: '#7163c4',
        width: 50,
        height: 50,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 20,
    },
    starContainer: {
        position: 'absolute',
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
    },
    starImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },

    pauseIcon: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default GameProccessScreen;
