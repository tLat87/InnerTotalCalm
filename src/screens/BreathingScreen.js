import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated, Easing, TouchableOpacity } from 'react-native';

export default function BreathingScreen({ navigation }) {
    const scaleAnim = useRef(new Animated.Value(1)).current;
    const [phase, setPhase] = useState('Inhale');

    const startBreathing = () => {
        Animated.sequence([
            Animated.timing(scaleAnim, {
                toValue: 1.5,
                duration: 4000,
                useNativeDriver: true,
                easing: Easing.inOut(Easing.ease),
            }),
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: 4000,
                useNativeDriver: true,
                easing: Easing.inOut(Easing.ease),
            }),
            Animated.delay(4000),
        ]).start(() => {
            setPhase(prev => (prev === 'Inhale' ? 'Exhale' : 'Inhale'));
            startBreathing();
        });
    };

    useEffect(() => {
        startBreathing();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>BREATHE</Text>
            <Text style={styles.subtitle}>Follow the circle</Text>
            <Text style={[styles.subtitle, {color: 'red'}]}> Be careful if you have lung problems</Text>


            <Animated.View
                style={[
                    styles.circle,
                    {
                        transform: [{ scale: scaleAnim }],
                    },
                ]}
            >
                <Text style={styles.phaseText}>{phase}</Text>
            </Animated.View>

            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backButtonText}>← Back</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0b132b',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fefefe',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#aaa',
        marginBottom: 40,
    },
    circle: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginTop: 30,
        backgroundColor: '#1c2541',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#fff',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 20,
    },
    phaseText: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '600',
    },
    backButton: {
        marginTop: 50,
        backgroundColor: '#3a506b',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 30,
    },
    backButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});
