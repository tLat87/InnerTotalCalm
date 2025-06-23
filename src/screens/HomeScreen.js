import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Video from 'react-native-video';

export default function HomeScreen({ navigation }) {
    const today = new Date().toLocaleDateString();

    return (
        <View style={styles.container}>
            <Video
                source={require('../assets/fqwf.mov')}
                style={StyleSheet.absoluteFill}
                resizeMode="cover"
                repeat
                muted
            />

            <View style={styles.overlay} />

            <View style={styles.quoteBox}>
                <Text style={styles.title}>
                    “I ALLOW MYSELF TO SLOW{'\n'}DOWN AND JUST BE”
                </Text>
                <Text style={styles.dateText}>📅 {today}</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>🌤 Today’s Reflection</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CalendarScreen')}>
                    <Text style={styles.buttonText}>Add Today’s Reflection</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>🧘 Meditation Space</Text>
                <TouchableOpacity style={styles.buttonSecondary} onPress={() => navigation.navigate('TimerScreen')}>
                    <Text style={styles.buttonText}>Explore</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>🌬 Breathing Exercise</Text>
                <TouchableOpacity style={styles.buttonTertiary} onPress={() => navigation.navigate('BreathingScreen')}>
                    <Text style={styles.buttonText}>Start</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.reminderText}>🕊 Don’t forget to reflect today</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a2e',
        paddingTop: 80,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.45)',
    },
    quoteBox: {
        backgroundColor: '#ffffff22',
        padding: 24,
        borderRadius: 20,
        marginBottom: 30,
        borderWidth: 1,
        borderColor: '#ffffff33',
    },
    title: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        fontWeight: '600',
        letterSpacing: 0.5,
        marginBottom: 10,
    },
    dateText: {
        fontSize: 14,
        color: '#ddd',
        textAlign: 'center',
    },
    section: {
        width: '100%',
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 16,
        color: '#eee',
        marginBottom: 10,
        fontWeight: '500',
    },
    button: {
        backgroundColor: '#ffc971',
        borderRadius: 30,
        paddingVertical: 15,
        alignItems: 'center',
    },
    buttonSecondary: {
        backgroundColor: '#a3d2ca',
        borderRadius: 30,
        paddingVertical: 15,
        alignItems: 'center',
    },
    buttonTertiary: {
        backgroundColor: '#f7a9a8',
        borderRadius: 30,
        paddingVertical: 15,
        alignItems: 'center',
    },
    buttonText: {
        color: '#2d2d2d',
        fontSize: 16,
        fontWeight: 'bold',
    },
    reminderText: {
        marginTop: 30,
        fontSize: 14,
        color: '#f1f1f1',
        fontStyle: 'italic',
    },
});
