import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {deleteReflection} from '../redux/slices/reflectionSlice';
import Video from 'react-native-video';

const CalendarScreen = ({navigation}) => {
    const days = generateLast7Days();
    const reflections = useSelector((state) => state.reflection.reflections);
    const [selectedDate, setSelectedDate] = useState(days[days.length - 1].fullDate);
    const dispatch = useDispatch();

    const handleDayPress = (date) => {
        setSelectedDate(date);
    };
    const selectedReflection = reflections.find(ref => ref.selectedDate === selectedDate);


    const handleDelete = () => {
        dispatch(deleteReflection(selectedReflection.id));
    };

    const InfoBlock = ({ label, text }) => (
        <View style={{ marginBottom: 20 }}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.infoText}>{text}</Text>
        </View>
    );

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>YOUR INNER CALENDAR</Text>

            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>Track your daily mental state</Text>
                <Image source={require('../assets/img/Calendar.png')} />
            </View>

            <View style={styles.daysContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {days.map((item, index) => (
                        <TouchableOpacity key={index} onPress={() => handleDayPress(item.fullDate)}>
                            <DayItem
                                day={item.day}
                                weekday={item.weekday}
                                isActive={item.fullDate === selectedDate}
                            />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            <View style={styles.reflectionContainer}>
                <Text style={styles.reflectionTitle}>Reflection:</Text>
                {selectedReflection ? (
                    <>
                        <Text style={styles.sectionTitle}>How do you feel today?</Text>
                        <View style={styles.moodRow}>
                            {[selectedReflection.selectedMood].map((mood, idx) => (
                                <View key={idx} style={styles.moodBox}>
                                    <Text style={styles.moodText}>{mood}</Text>
                                </View>
                            ))}
                        </View>

                        <InfoBlock
                            label="Describe your feeling in your own words"
                            text={selectedReflection.feelingText}
                        />
                        <InfoBlock
                            label="What may have influenced your mood?"
                            text={selectedReflection.influenceText}
                        />
                        <InfoBlock
                            label="What helped (or could help) you feel better?"
                            text={selectedReflection.helpText}
                        />
                        <InfoBlock
                            label="Rate your emotional balance"
                            text={String(selectedReflection.balance)}
                        />
                        <InfoBlock
                            label="Do you want to add a gratitude note?"
                            text={selectedReflection.gratitudeNote}
                        />

                        <View style={styles.buttonRow}>
                            <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
                                <Text style={styles.buttonText}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                ) : (
                    <>
                        <Text style={styles.reflectionText}>
                            No reflection recorded for this day yet.
                        </Text>
                        <TouchableOpacity style={styles.addButton} onPress={()=>{navigation.navigate('CreateEventScreen', {selectedDate})}}>
                            <Text style={styles.addButtonText}>+ Add Today’s Reflection</Text>
                        </TouchableOpacity>
                    </>
                )}

            </View>

            <View style={{marginBottom: 100 }}/>
        </ScrollView>
    );
};

const DayItem = ({ day, weekday, isActive }) => {
    return (
        <View style={[styles.dayItem, isActive && styles.activeDayItem]}>
            <Text style={styles.dayNumber}>{day}</Text>
            <Text style={styles.weekday}>{weekday}</Text>
        </View>
    );
};

const generateLast7Days = () => {
    const days = [];
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const today = new Date();

    for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(today.getDate() - i);

        const day = date.getDate().toString();
        const weekday = weekdays[date.getDay()];
        const fullDate = date.toISOString().split('T')[0]; // формат 'YYYY-MM-DD'

        days.push({ day, weekday, fullDate });
    }

    return days;
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
        backgroundColor: '#1a2238', // Градиентный тёмный фон
        paddingHorizontal: 20,
    },
    title: {
        color: '#F4D35E',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    subtitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    subtitle: {
        color: '#fff',
        fontSize: 16,
        fontStyle: 'italic',
        flex: 1,
    },
    daysContainer: {
        flexDirection: 'row',
        marginBottom: 30,
    },
    dayItem: {
        backgroundColor: '#394867',
        borderRadius: 12,
        paddingVertical: 15,
        paddingHorizontal: 15,
        alignItems: 'center',
        marginRight: 12,
        width: 60,
    },
    activeDayItem: {
        backgroundColor: '#9BA4B5',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    dayNumber: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    weekday: {
        color: '#cbd5e1',
        fontSize: 14,
    },
    reflectionContainer: {
        marginBottom: 40,
        paddingHorizontal: 10,
        backgroundColor: '#273469',
        borderRadius: 20,
        padding: 20,
    },
    reflectionTitle: {
        color: '#F4D35E',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    reflectionText: {
        color: '#c0c0c0',
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 20,
    },
    sectionTitle: {
        color: '#F4D35E',
        fontSize: 16,
        marginBottom: 10,
    },
    moodBox: {
        backgroundColor: '#576CBC',
        borderRadius: 20,
        paddingHorizontal: 14,
        paddingVertical: 8,
    },
    moodText: {
        color: '#fff',
        fontWeight: '600',
    },
    moodRow: {
        flexDirection: 'row',
        marginBottom: 20,
        gap: 10,
    },
    label: {
        color: '#C1C1C1',
        marginBottom: 4,
        fontSize: 13,
    },
    infoText: {
        color: '#fff',
        fontSize: 14,
        lineHeight: 20,
    },
    deleteButton: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#F07167',
        borderRadius: 25,
        padding: 14,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#F07167',
        fontWeight: '600',
    },
    addButton: {
        backgroundColor: '#6D597A',
        paddingVertical: 15,
        paddingHorizontal: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginTop: 20,
    },
    addButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CalendarScreen;
