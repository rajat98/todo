import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function sandbox(){
    return(
        <View style={styles.container}>
            <Text style={styles.box1}>box1</Text>
            <Text style={styles.box2}>box2</Text>
            <Text style={styles.box3}>box3</Text>
            <Text style={styles.box4}>box4</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        //flex spans whole screen
        // flex: 1,
        // column (Default) main axis direction
        flexDirection: 'row',
        paddingTop: 40,
        backgroundColor: '#ddd',
        //justifyContent for main axis
        justifyContent: 'space-around',
        //alignItems for cross axis
        alignItems: 'center',
    },
    //if all boxes are set to flex:1 they'll take equal sapace in the container
    box1:{
        backgroundColor: 'violet',
        padding: 10,
    },
    box2:{
        backgroundColor: 'gold',
        padding: 20,
    },
    box3:{
        backgroundColor: 'coral',
        padding: 30,
    },
    box4: {
        backgroundColor: 'skyblue',
        padding: 40,
    }


})