import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import {MaterialIcons} from "@expo/vector-icons";
export default function TodoItem({item, pressHandler}){
    return(
        <TouchableOpacity style={styles.item} onPress={()=>pressHandler(item.key)}>
            <MaterialIcons name='delete' size={20} color='#001a1a'/>
            <Text style={styles.itemText}> {item.text} </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: "#bbb",
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row',
    },
    itemText: {
        marginLeft: 10,
    }
});