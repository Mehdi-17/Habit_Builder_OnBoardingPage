import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { BASIC_FONT_COLOR, SECONDARY_FONT_COLOR } from '../constants/Theme';
import Title from './Title';

//TODO: DEVELOP SWIPE DOTS

const OnBoardingPage = ({ backgroundColor, img, title, description }) => {
    return (
        <View style={[styles.container, { backgroundColor: backgroundColor }]}>
            <View style={styles.content}>
                <Title text={title} textStyle={styles.title} />
                <Image source={img} />
                <Text style={styles.description}>
                    On peut
                    <Text style={styles.importantWord}> vous aider </Text>
                    à devenir une meilleure version de
                    <Text style={styles.importantWord}> vous-même.</Text>
                </Text>
            </View>
            <View style={styles.buttonView}>
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
    content: {
        height: "80%",
        position: "absolute",
        top: 80,
    },
    buttonView: {
        position: "absolute",
        bottom: 60
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
        bottom: 40,
        marginHorizontal: 32,
        fontWeight: "600",
        color: BASIC_FONT_COLOR
    },
    importantWord: {
        color: SECONDARY_FONT_COLOR,
    }
});

export default OnBoardingPage;