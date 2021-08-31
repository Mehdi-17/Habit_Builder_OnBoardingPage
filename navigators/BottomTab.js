import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//TODO: Create here the tab navigator for connected people
const BottomTab = () => {
    return(
        <View style={styles.container}>
            <Text>Tab navigator</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})

export default BottomTab;