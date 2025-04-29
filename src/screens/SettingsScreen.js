import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Switch, Image} from 'react-native';
import Share from 'react-native-share';

export default function SettingsScreen() {
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);

    const toggleSwitch = () => setNotificationsEnabled(previousState => !previousState);

    const handleShare = async () => {
        const shareOptions = {
            title: 'Share the app',
            message: 'Check out this amazing mental wellness app! 🌿',
            // url: 'https://your-app-link.com',
            failOnCancel: false,
        };

        try {
            const result = await Share.open(shareOptions);
            console.log('Share result:', result);
        } catch (error) {
            console.log('Error sharing:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>SETTINGS</Text>

            {/*<View style={styles.settingItem}>*/}
            {/*    <View style={styles.iconLabel}>*/}
            {/*        <Image source={require('../assets/img/Frame12.png')} />*/}
            {/*        <Text style={styles.label}>Notifications</Text>*/}
            {/*    </View>*/}
            {/*    <Switch*/}
            {/*        trackColor={{ false: '#767577', true: '#6d6dfd' }}*/}
            {/*        thumbColor={notificationsEnabled ? '#ffffff' : '#f4f3f4'}*/}
            {/*        onValueChange={toggleSwitch}*/}
            {/*        value={notificationsEnabled}*/}
            {/*    />*/}
            {/*</View>*/}

            <TouchableOpacity style={styles.settingItem} onPress={()=>{handleShare()}}>
                <View style={styles.iconLabel}>
                    <Image source={require('../assets/img/Frame12-2.png')} />
                    <Text style={styles.label}>Share the app</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingItem}>
                <View style={styles.iconLabel}>
                    <Image source={require('../assets/img/Frame12-3.png')} />
                    <Text style={styles.label}>Reset all data</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingItem}>
                <View style={styles.iconLabel}>
                    <Image source={require('../assets/img/Frame12-4.png')} />
                    <Text style={styles.label}>Terms of Use / Privacy Policy</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#001453',
        paddingHorizontal: 20,
        paddingTop: 60,
    },
    title: {
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 30,
        alignSelf: 'center',
    },
    settingItem: {
        backgroundColor: '#181867',
        borderRadius: 16,
        padding: 16,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconLabel: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        marginLeft: 12,
        fontSize: 16,
        color: 'white',
    },
});
