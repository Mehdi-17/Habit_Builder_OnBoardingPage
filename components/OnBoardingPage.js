import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Title from './Title';

const OnBoardingPage = ({ backgroundColor, img, title, description }) => {
    return (
        <View style={[styles.container, { backgroundColor: backgroundColor }]}>
        <View>
            <Title text={title} textStyle={styles.text} />
            <Image source={img} />
            <Text style={styles.text}>{description}</Text>
        </View>
        <View>
            <Text>Button here.</Text>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        textAlign: "center",
    }
});

export default OnBoardingPage;