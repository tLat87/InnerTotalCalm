import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const GameScreen = ({ navigation }) => {
    const handlePlayPress = () => {

        navigation.navigate('GameProccessScreen'); // если есть экран игры
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>STAR TOUCH</Text>

            <Image
                source={require('../assets/img/Shape.png')}
                style={styles.icon}
                resizeMode="contain"
            />

            <Text style={styles.description}>
                Let your mind drift among the stars.{'\n'}
                When a star appears, gently tap it.{'\n'}
                No rush. Just presence.
            </Text>

            <TouchableOpacity style={styles.playButton} onPress={handlePlayPress}>
                <Text style={styles.playButtonText}>Play</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0b1550',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        color: '#ffffff',
        fontWeight: 'bold',
        marginBottom: 30,
    },
    icon: {
        // width: 100,
        // height: 100,
        marginBottom: 30,
        tintColor: '#d5b36c',
    },
    description: {
        textAlign: 'center',
        fontSize: 16,
        color: '#ffffff',
        marginBottom: 40,
        lineHeight: 24,
    },
    playButton: {
        backgroundColor: '#c0a76c',
        paddingVertical: 15,
        paddingHorizontal: 100,
        borderRadius: 30,
    },
    playButtonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});


export default GameScreen
