import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Animated, Text, TouchableOpacity } from 'react-native';
import OnBoardingPage from '../components/OnBoardingPage';
import { ON_BOARDING_CONTENT } from '../constants/OnBoardingContent';
import { DOTS_SIZE, PRIMARY_ELEMENT_COLOR, SECONDARY_ELEMENT_COLOR, DEVICE_SIZE } from '../constants/Theme';

const OnBoarding = () => {
    const [scrollCompleted, setScrollCompleted] = useState(false);
    const scrollX = new Animated.Value(0);

    useEffect(() => {
        scrollX.addListener(({ value }) => {
            console.log("scroll X => ", Math.floor(value / DEVICE_SIZE.width));
            if (Math.floor(value / DEVICE_SIZE.width) === ON_BOARDING_CONTENT.length - 2) {
                setScrollCompleted(true);
            }
        });
        return () => scrollX.removeListener();
    }, []);

    const renderPage = () => {
        return (
            <Animated.ScrollView
                horizontal
                pagingEnabled
                scrollEnabled
                decelerationRate="normal"
                showsHorizontalScrollIndicator={false}
                onScroll={
                    Animated.event([
                        { nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false, }
                    )}
            >
                {ON_BOARDING_CONTENT.map((item, index) => (
                    <View key={index} style={{ width: DEVICE_SIZE.width }}>
                        <OnBoardingPage
                            backgroundColor="#FFFFFF"
                            img={item.img}
                            title={item.title}
                            pageIndex={index}
                        />
                    </View>
                ))}
            </Animated.ScrollView>
        );
    };

    const renderDots = () => {
        const dotPosition = Animated.divide(scrollX, DEVICE_SIZE.width);
        return (
            <View style={{flexDirection:"row", alignItems:"center"}}>
                {ON_BOARDING_CONTENT.map((_, index) => {

                    const dotColor = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [SECONDARY_ELEMENT_COLOR, PRIMARY_ELEMENT_COLOR, SECONDARY_ELEMENT_COLOR],
                        extrapolate: "clamp"
                    });

                    const dotSize = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [DOTS_SIZE, 16, DOTS_SIZE],
                        extrapolate: "clamp"
                    });

                    return (
                        <Animated.View
                            key={`dot-${index}`}
                            style={[styles.dot,
                            { backgroundColor: dotColor, width: dotSize, height: dotSize, borderRadius: dotSize }]}
                        />
                    );
                })}
            </View>
        );
    };

    const renderButton = () => {
        //TODO: On press touchable opacity => go to Home Page
        return (
            <View style={styles.buttonView}>
                <TouchableOpacity >
                    <Text style={styles.buttonText}>Commencer</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.boardingPageContent}>
                {renderPage()}
            </View>
            <View style={styles.dotsView}>
                {!scrollCompleted ? renderDots() : renderButton()}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    boardingPageContent: {
        height: "80%",
        width: "100%",
        position: "absolute",
        top: 80,
        alignItems: "center",
    },
    dotsView: {
        flexDirection: "row",
        position: "absolute",
        bottom: "10%",
        width: DEVICE_SIZE.width,
        justifyContent: 'center',
        alignItems: "center"
    },
    dot: {
        width: DOTS_SIZE,
        height: DOTS_SIZE,
        borderRadius: DOTS_SIZE / 2,
        marginHorizontal: DOTS_SIZE / 2
    },
    buttonView: {
        width: "90%",
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: SECONDARY_ELEMENT_COLOR,
        height: 40,
        borderRadius: 10,
    },
    buttonText: {
        color: PRIMARY_ELEMENT_COLOR,
        fontFamily: "ManropeBold",
        fontSize: 16,
        lineHeight: 16,
    }
});

export default OnBoarding;