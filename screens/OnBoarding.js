import React, { useRef } from 'react';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';
import OnBoardingPage from '../components/OnBoardingPage';
import { ON_BOARDING_CONTENT } from '../constants/OnBoardingContent';
import { DOTS_SIZE, PRIMARY_ELEMENT_COLOR, SECONDARY_ELEMENT_COLOR, DEVICE_SIZE } from '../constants/Theme';

const OnBoarding = () => {

    const scrollX = new Animated.Value(0);

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
            <View style={styles.dotsView}>
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

    return (
        <View style={styles.container}>
            <View style={styles.boardingPageContent}>
                {renderPage()}
            </View>
            <View style={styles.dotsView}>
                {renderDots()}
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
});

export default OnBoarding;