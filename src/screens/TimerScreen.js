import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const TimerScreen = () => {
    const [time, setTime] = useState(5); // минуты
    const [secondsLeft, setSecondsLeft] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [finished, setFinished] = useState(false);
    const intervalRef = useRef(null);

    const increaseTime = () => {
        if (!isRunning) setTime(prev => prev + 1);
    };

    const decreaseTime = () => {
        if (!isRunning && time > 1) setTime(prev => prev - 1);
    };

    const startMeditation = () => {
        setSecondsLeft(time * 60);
        setIsRunning(true);
        setFinished(false);
    };

    useEffect(() => {
        if (isRunning && secondsLeft > 0) {
            intervalRef.current = setInterval(() => {
                setSecondsLeft(prev => prev - 1);
            }, 1000);
        } else if (secondsLeft === 0 && isRunning) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            setFinished(true);
        }
        return () => clearInterval(intervalRef.current);
    }, [isRunning, secondsLeft]);

    const formatTime = (seconds) => {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${min}:${sec < 10 ? '0' : ''}${sec}`;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>BREATHE IN. LET GO. THIS IS YOUR TIME</Text>

            <View style={styles.imageContainer}>
                <Image
                    source={
                        finished
                            ? require('../assets/img/meditation2.png')
                            : isRunning
                                ? require('../assets/img/meditation2.png')
                                : require('../assets/img/undraw_yoga_i399.png')
                    }
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>

            {!isRunning && !finished && (
                <View style={styles.timerContainer}>
                    <TouchableOpacity style={styles.button} onPress={increaseTime}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                    <Text style={styles.timeText}>{time}:00</Text>
                    <TouchableOpacity style={styles.button} onPress={decreaseTime}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                </View>
            )}

            {isRunning && (
                <Text style={styles.timeText}>{formatTime(secondsLeft)}</Text>
            )}

            {finished && (
                <Text style={styles.finishedText}>You just gave yourself a moment of peace — and that matters.
                    Whether your mind was quiet or wandering, you showed up for yourself.
                    Breathe in… and carry that calm with you.</Text>
            )}

            <TouchableOpacity
                style={styles.startButton}
                onPress={startMeditation}
                disabled={isRunning}
            >
                <Text style={styles.startButtonText}>
                    {finished ? 'Start Again' : 'Start'}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0a1a4a',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        color: '#ffffff',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 30,
        fontWeight: 'bold',
    },
    imageContainer: {
        width: '100%',
        height: 250,
        marginBottom: 30,
        backgroundColor: '#1c2473',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '70%',
        height: '70%',
    },
    timerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#5d5fef',
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 20,
    },
    buttonText: {
        fontSize: 24,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    timeText: {
        fontSize: 28,
        color: '#ffffff',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    finishedText: {
        fontSize: 20,
        color: '#d5b36c',
        marginBottom: 20,
        textAlign: 'center',
    },
    startButton: {
        backgroundColor: '#d5b36c',
        paddingVertical: 15,
        paddingHorizontal: 60,
        borderRadius: 30,
    },
    startButtonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default TimerScreen;
