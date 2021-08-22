import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Title = ({text, textStyle}) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, textStyle]}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
    }
});

export default Title;