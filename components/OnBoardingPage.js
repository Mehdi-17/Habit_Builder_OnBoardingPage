import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { PRIMARY_ELEMENT_COLOR, SECONDARY_ELEMENT_COLOR } from '../constants/Theme';
import Title from './Title';

const OnBoardingPage = ({ backgroundColor, img, title, pageIndex }) => {

    return (
        <View style={[styles.container, { backgroundColor: backgroundColor }]}>
            <Title text={title} textStyle={styles.title} />
            <Image source={img} />
            <Text style={styles.description}>
                On peut
                <Text style={styles.importantWord}> vous aider </Text>
                à devenir une meilleure version de
                <Text style={styles.importantWord}> vous-même.</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        textAlign: "center",
        marginBottom: 25,
        marginHorizontal: 32,
    },
    description: {
        fontFamily: "ManropeBold",
        textAlign: "center",
        fontSize: 17,
        lineHeight: 24,
        textTransform: "uppercase",
        position: "absolute",
        bottom: 65,
        marginHorizontal: 32,
        fontWeight: "600",
        color: PRIMARY_ELEMENT_COLOR
    },
    importantWord: {
        color: SECONDARY_ELEMENT_COLOR,
    }
});

export default OnBoardingPage;