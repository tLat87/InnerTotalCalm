import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image} from 'react-native';
import Video from 'react-native-video';

export default function InitialScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Video
                source={require('../assets/fqwf.mov')}
                style={StyleSheet.absoluteFill}
                resizeMode="cover"
                repeat
                muted
                rate={1.0}
                ignoreSilentSwitch="obey"
            />
            <View style={styles.illustration}>
                <Image
                    source={require('../assets/img/Onboardingi.png')}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.card}>
                <Text style={styles.title}>WELCOME TO CALM</Text>
                <Text style={styles.subtitle}>
                    This is your peaceful space —{'\n'}
                    to breathe, reflect, and reconnect with yourself.{'\n'}
                    Track your emotions, meditate gently,{'\n'}
                    or simply touch the stars when words aren’t enough.
                </Text>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MainTab')}>
                    <Text style={styles.buttonText}>Begin Journey</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0a0a3c',
        justifyContent: 'space-between',
        paddingVertical: 40,
    },
    illustration: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
