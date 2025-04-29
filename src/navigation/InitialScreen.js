import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image} from 'react-native';

export default function InitialScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.illustration}>
                <Image
                    source={require('../assets/img/Onboardingi.png')}
                    // style={{ width: 300, height: 300 }}
                    resizeMode="contain"
                />
            </View>

            {/* Текстовый блок */}
            <View style={styles.card}>
                <Text style={styles.title}>WELCOME TO INNER TOTAL CALM</Text>
                <Text style={styles.subtitle}>
                    This is your peaceful space —{'\n'}
                    to breathe, reflect, and reconnect with yourself.{'\n'}
                    Track your emotions, meditate gently,{'\n'}
                    or simply touch the stars when words aren’t enough.
                </Text>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MainTab')}>
                    <Text style={styles.buttonText}>Begin Your Calm Journey</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

// Стили
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0a0a3c', // Тёмно-синий фон
        justifyContent: 'space-between',
        paddingVertical: 40,
    },
    illustration: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // Тут можно добавить картинку или SVG
    },
    card: {
        backgroundColor: '#181867',
        borderRadius: 20,
        padding: 24,
        marginHorizontal: 20,
        marginBottom: 20,
    },
    title: {
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 16,
        color: 'white',
        lineHeight: 22,
        marginBottom: 24,
    },
    button: {
        backgroundColor: '#6d6dfd',
        paddingVertical: 14,
        borderRadius: 30,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
    },
});
