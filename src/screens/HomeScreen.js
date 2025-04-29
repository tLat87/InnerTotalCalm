import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>

            {/* Картинка наверху */}
            <Image
                source={require('../assets/img/homei.png')} // <-- сюда путь к твоей картинке с деревьями
                style={styles.topImage}
                resizeMode="contain"
            />

            {/*/!* Аватарка пользователя *!/*/}
            {/*<View style={styles.avatarContainer}>*/}
            {/*    <Image*/}
            {/*        source={require('../assets/img/avatar.png')} // <-- сюда путь к аватарке*/}
            {/*        style={styles.avatar}*/}
            {/*    />*/}
            {/*</View>*/}

            {/* Текст утверждения */}
            <Text style={styles.title}>
                I ALLOW MYSELF TO SLOW{'\n'}DOWN AND JUST BE
            </Text>

            {/* Today's Reflection */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>🌤 Today’s Reflection</Text>
                <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('CalendarScreen')}}>
                    <Text style={styles.buttonText}>Add Today’s Reflection</Text>
                </TouchableOpacity>
            </View>

            {/* Meditation Space */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>🧘 Meditation Space</Text>
                <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('TimerScreen')}}>
                    <Text style={styles.buttonText}>Explore</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

// Стили
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#001453', // Тёмно-синий фон
        padding: 20,
        alignItems: 'center',
    },
    topImage: {
        width: '100%',
        height: 200,
        marginBottom: 20,
    },
    avatarContainer: {
        position: 'absolute',
        top: 180,
        right: 20,
        backgroundColor: '#1c1c50',
        borderRadius: 30,
        padding: 5,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    title: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: 30,
    },
    section: {
        width: '100%',
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 16,
        color: 'white',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#d2b370', // Бежевый цвет кнопок
        borderRadius: 30,
        paddingVertical: 15,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});

