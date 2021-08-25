import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PRIMARY_ELEMENT_COLOR } from '../constants/Theme';

const Title = ({ text, textStyle }) => {
    return (
        <View>
            <Text style={[styles.text, textStyle]}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "KlasikRegular",
        fontSize: 32,
        lineHeight:32,
        color: PRIMARY_ELEMENT_COLOR,
        letterSpacing:-0.3,
        textTransform:"uppercase"
    }
});

export default Title;