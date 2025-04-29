import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StyleSheet, Image,
} from 'react-native';
import {addReflection} from '../redux/slices/reflectionSlice';
import {useDispatch} from 'react-redux';

const moods = ['😊 Calm', '😐 Neutral', '😟 Anxious', '😭 Overwhelmed', '🌈 Grateful', '🌀 Confused', 'Other'];

const CreateEventScreen = ({route, navigation}) => {
    const [selectedMood, setSelectedMood] = useState('');
    const [feelingText, setFeelingText] = useState('');
    const [influenceText, setInfluenceText] = useState('');
    const [helpText, setHelpText] = useState('');
    const [balance, setBalance] = useState(null);
    const [gratitudeNote, setGratitudeNote] = useState('');

    const {selectedDate} = route.params;

    const dispatch = useDispatch();

    const handleSave = () => {
        const reflection = {
            selectedDate,
            selectedMood,
            feelingText,
            influenceText,
            helpText,
            balance,
            gratitudeNote,
        };
        dispatch(addReflection(reflection));
        navigation.goBack();
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity style={styles.pauseButton} onPress={()=>{navigation.goBack();}}>
                <Image
                    source={require('../assets/img/Frame4.png')}/>

            </TouchableOpacity>
            <Text style={styles.title}>TODAY’S REFLECTION</Text>

            <Text style={styles.question}>How do you feel today?</Text>
            <View style={styles.moodContainer}>
                {moods.map((mood) => (
                    <TouchableOpacity
                        key={mood}
                        style={[
                            styles.moodButton,
                            selectedMood === mood && styles.selectedMoodButton,
                        ]}
                        onPress={() => setSelectedMood(mood)}
                    >
                        <Text style={styles.moodText}>{mood}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <Text style={styles.label}>Describe your feeling in your own words</Text>
            <TextInput
                style={styles.input}
                value={feelingText}
                onChangeText={setFeelingText}
                multiline
            />

            <Text style={styles.label}>What may have influenced your mood?</Text>
            <TextInput
                style={styles.input}
                value={influenceText}
                onChangeText={setInfluenceText}
                multiline
            />

            <Text style={styles.label}>What helped (or could help) you feel better?</Text>
            <TextInput
                style={styles.input}
                value={helpText}
                onChangeText={setHelpText}
                multiline
            />

            <Text style={styles.label}>Rate your emotional balance</Text>
            <View style={styles.ratingContainer}>
                {[1, 2, 3, 4, 5].map((num) => (
                    <TouchableOpacity
                        key={num}
                        style={[
                            styles.ratingButton,
                            balance === num && styles.selectedRating,
                        ]}
                        onPress={() => setBalance(num)}
                    >
                        <Text style={styles.ratingText}>{num}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <Text style={styles.label}>Do you want to add a gratitude note?</Text>
            <TextInput
                style={styles.input}
                value={gratitudeNote}
                onChangeText={setGratitudeNote}
                multiline
            />

            <TouchableOpacity
                style={[
                    styles.saveButton,
                    !(selectedMood && balance) && styles.disabledButton,
                ]}
                onPress={handleSave}
                disabled={!(selectedMood && balance)}
            >
                <Text style={styles.saveButtonText}>Save Reflection</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#001453',
        padding: 20,
        paddingTop: 80,
        flex: 1,
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
    title: {
        fontSize: 22,
        fontWeight: '600',
        color: '#fff',
        marginBottom: 20,
        textAlign: 'center',
    },
    question: {
        fontSize: 16,
        fontWeight: '500',
        color: '#fff',
        marginBottom: 10,
    },
    moodContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 20,
        gap: 8,
    },
    moodButton: {
        backgroundColor: '#2D2B6F',
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 20,
        margin: 4,
    },
    selectedMoodButton: {
        backgroundColor: '#544CFF',
    },
    moodText: {
        color: '#fff',
        fontSize: 14,
    },
    label: {
        color: '#fff',
        fontSize: 14,
        marginBottom: 4,
    },
    input: {
        backgroundColor: '#2D2B6F',
        color: '#fff',
        borderRadius: 10,
        padding: 12,
        marginBottom: 20,
        minHeight: 60,
        textAlignVertical: 'top',
    },
    ratingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    ratingButton: {
        backgroundColor: '#2D2B6F',
        borderRadius: 20,
        padding: 12,
        width: 48,
        alignItems: 'center',
    },
    selectedRating: {
        backgroundColor: '#544CFF',
    },
    ratingText: {
        color: '#fff',
        fontSize: 16,
    },
    saveButton: {
        backgroundColor: '#4E55CC',
        padding: 16,
        borderRadius: 25,
        alignItems: 'center',
        marginTop: 10,
    },
    disabledButton: {
        opacity: 0.5,
    },
    saveButtonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
});

export default CreateEventScreen;
