import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
} from 'react-native';

const EventScreenDetails = ({ route, navigation }) => {
    const reflection = {
        date: '13',
        day: 'Wed',
        moods: ['😊 Calm', '😟 Anxious'],
        feeling: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        influence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        help: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        balance: 3,
        gratitude: 'Lorem ipsum dolor sit amet',
    };

    const handleDelete = () => {
        console.log('Delete clicked');
        // Add API call for deletion
    };

    const handleEdit = () => {
        navigation.navigate('EditReflection', { reflection });
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>YOUR INNER CALENDAR</Text>
            <Text style={styles.subtitle}>Track your daily mental state</Text>

            {/* Calendar Days */}
            <View style={styles.calendarRow}>
                {['10 Sun', '11 Mon', '12 Tue', '13 Wed'].map((date, idx) => (
                    <View
                        key={idx}
                        style={[
                            styles.dateBox,
                            date.startsWith(reflection.date) && styles.activeDateBox,
                        ]}
                    >
                        <Text style={styles.dateText}>{date.split(' ')[0]}</Text>
                        <Text style={styles.dayText}>{date.split(' ')[1]}</Text>
                    </View>
                ))}
            </View>

            <Text style={styles.sectionTitle}>How do you feel today?</Text>
            <View style={styles.moodRow}>
                {reflection.moods.map((mood, idx) => (
                    <View key={idx} style={styles.moodBox}>
                        <Text style={styles.moodText}>{mood}</Text>
                    </View>
                ))}
            </View>

            <InfoBlock label="Describe your feeling in your own words" text={reflection.feeling} />
            <InfoBlock label="What may have influenced your mood?" text={reflection.influence} />
            <InfoBlock label="What helped (or could help) you feel better?" text={reflection.help} />
            <InfoBlock label="Rate your emotional balance" text={String(reflection.balance)} />
            <InfoBlock label="Do you want to add a gratitude note?" text={reflection.gratitude} />

            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
                    <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
                    <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const InfoBlock = ({ label, text }) => (
    <View style={{ marginBottom: 20 }}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.infoText}>{text}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0A1457',
        padding: 20,
        paddingBottom: 60,
    },
    title: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 4,
        textAlign: 'center',
    },
    subtitle: {
        color: '#ccc',
        textAlign: 'center',
        marginBottom: 20,
    },
    calendarRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    dateBox: {
        width: 55,
        height: 70,
        borderRadius: 12,
        backgroundColor: '#2D2B6F',
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeDateBox: {
        backgroundColor: '#8F84FF',
    },
    dateText: {
        color: '#fff',
        fontSize: 18,
    },
    dayText: {
        color: '#ccc',
        fontSize: 14,
    },
    sectionTitle: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 10,
    },
    moodRow: {
        flexDirection: 'row',
        marginBottom: 20,
        gap: 10,
    },
    moodBox: {
        backgroundColor: '#2D2B6F',
        borderRadius: 20,
        paddingHorizontal: 14,
        paddingVertical: 8,
    },
    moodText: {
        color: '#fff',
    },
    label: {
        color: '#999',
        marginBottom: 4,
        fontSize: 13,
    },
    infoText: {
        color: '#fff',
        fontSize: 14,
        lineHeight: 20,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        gap: 10,
    },
    deleteButton: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 25,
        padding: 14,
        alignItems: 'center',
    },
    editButton: {
        flex: 1,
        backgroundColor: '#8F84FF',
        borderRadius: 25,
        padding: 14,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
    },
});

export default EventScreenDetails
