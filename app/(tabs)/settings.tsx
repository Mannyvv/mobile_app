import React from 'react';
import { View, Text, Switch, StyleSheet, ScrollView } from 'react-native';

const settingsOptions = [
    { key: 'notifications', label: 'Enable Notifications', type: 'switch' },
    { key: 'darkMode', label: 'Dark Mode', type: 'switch' },
    { key: 'location', label: 'Location Access', type: 'switch' },
];

export default function SettingsScreen() {
    const [settings, setSettings] = React.useState({
        notifications: true,
        darkMode: false,
        location: false,
    });

    const toggleSwitch = (key: string) => {
        setSettings(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Settings</Text>
            {settingsOptions.map(option => (
                <View key={option.key} style={styles.optionRow}>
                    <Text style={styles.label}>{option.label}</Text>
                    {option.type === 'switch' && (
                        <Switch
                            value={settings[option.key as keyof typeof settings]}
                            onValueChange={() => toggleSwitch(option.key)}
                        />
                    )}
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: '#fff',
        flexGrow: 1,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    optionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    label: {
        fontSize: 18,
    },
});