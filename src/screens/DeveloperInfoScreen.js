import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function DeveloperInfoScreen({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>About the Developer</Text>
            <View style={styles.devCard}>
                <Text style={styles.devText}>👨‍💻 Name: Alex Devman</Text>
                <Text style={styles.devText}>📧 Email: alex@example.com</Text>
            </View>

            <Text style={styles.header}>6-Month Wellness Roadmap</Text>

            {roadmapSteps.map((step, idx) => (
                <View key={idx} style={styles.stepContainer}>
                    <Text style={styles.stepMonth}>Month {step.month}</Text>
                    <Text style={styles.stepTitle}>{step.title}</Text>
                    <Text style={styles.stepText}>{step.description}</Text>
                </View>
            ))}

            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backButtonText}>← Back to Home</Text>
            </TouchableOpacity>

            <View style={{ height: 40 }} />
        </ScrollView>
    );
}

const roadmapSteps = [
    {
        month: 1,
        title: 'Sleep & Rhythm',
        description: 'Establish consistent bedtime and wake-up time. No screens 1 hour before sleep. 7–8h minimum.',
    },
    {
        month: 2,
        title: 'Nutrition Reset',
        description: 'Cut out processed sugar and junk food. Add more fruits, vegetables, water, and whole foods.',
    },
    {
        month: 3,
        title: 'Move More',
        description: 'Start daily walks (30 min), light stretching or yoga. Aim for 8000–10,000 steps/day.',
    },
    {
        month: 4,
        title: 'Mental Hygiene',
        description: 'Introduce meditation (5–10 min), journaling or gratitude notes. Limit news/social media.',
    },
    {
        month: 5,
        title: 'Strength & Energy',
        description: 'Begin resistance workouts (2–3x/week), focus on posture, joints, and breathing.',
    },
    {
        month: 6,
        title: 'Refine & Reflect',
        description: 'Review your progress. Focus on sustainability, balance and new goals. Treat yourself well!',
    },
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0e1a3c',
        paddingHorizontal: 20,
        paddingTop: 60,
    },
    header: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    devCard: {
        backgroundColor: '#1f2a52',
        padding: 16,
        borderRadius: 10,
        marginBottom: 30,
    },
    devText: {
        color: '#ccc',
        fontSize: 14,
        marginBottom: 5,
    },
    stepContainer: {
        backgroundColor: '#202e5a',
        padding: 16,
        borderRadius: 10,
        marginBottom: 20,
    },
    stepMonth: {
        color: '#9aaef7',
        fontSize: 14,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    stepTitle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    stepText: {
        color: '#ccc',
        fontSize: 14,
        lineHeight: 20,
    },
    backButton: {
        marginTop: 20,
        backgroundColor: '#3a506b',
        paddingVertical: 14,
        borderRadius: 30,
        alignItems: 'center',
    },
    backButtonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
});
