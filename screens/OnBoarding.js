import React from 'react';
import { View, StyleSheet } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import OnBoardingPage from '../components/OnBoardingPage';
import { ON_BOARDING_CONTENT } from '../constants/OnBoardingContent';

const OnBoarding = () => {

    const renderPage = () => {
        return (
            <ViewPager style={styles.container}>
                {ON_BOARDING_CONTENT.map((item, index) => (
                    <View key={index}>
                        <OnBoardingPage
                            backgroundColor="#FFFFFF"
                            img={item.img}
                            title={item.title}
                        />
                    </View>
                ))}
            </ViewPager>
        );
    };

    return (
        <View style={styles.container}>
            {renderPage()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    }
});

export default OnBoarding;