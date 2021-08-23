import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View, StatusBar } from 'react-native';
import OnBoarding from './screens/OnBoarding';
import * as Font from 'expo-font';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    loadFont();
  }, []);

  const loadFont = async () => {
    try {
      await Font.loadAsync({
        ManropeBold: require("./assets/Fonts/Manrope/Manrope-Bold.ttf"),
        ManropeLight: require("./assets/Fonts/Manrope/Manrope-Light.ttf"),
        ManropeRegular: require("./assets/Fonts/Manrope/Manrope-Regular.ttf"),
        KlasikRegular: require("./assets/Fonts/Klassik/Klasik-Regular.otf")
      })
      setIsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  }

  if (isLoaded === false) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <OnBoarding />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
});
