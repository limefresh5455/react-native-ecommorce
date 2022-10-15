import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';


export default function ContactScreen() {

    return (
        <View style={styles.container}>
            <Text style={styles.head}>Contact Details</Text>
            <Text style={styles.text}>Rahul : +918962552278</Text>
        </View>
    );
}

