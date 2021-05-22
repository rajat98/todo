import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function Header(){
    return(
        <View>
            {/*<View style={styles.nav}></View>*/}
            <View style={styles.header}>
                <Text style={styles.title}>My Todos</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    nav:{
        flex:1,
        height: 35,
        backgroundColor: 'cyan',
        paddingTop: 135,
        marginTop: 20,
        width: 1000,

    },
    header: {
        height: 80,
        backgroundColor: '#00e6e6',
        paddingTop: 38,

    },
    title :{
        color: '#004d4d',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center",
    },
});