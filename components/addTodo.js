import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function addTodo({submitHandler}){
    const[text, setText] = useState('');
    const changeHandler =(val)=>{
        setText(val);
    }
    return(
        <View>
            <TextInput style={styles.input}
                       placeholder='New Todo'
                       onChangeText={(val)=>changeHandler(val)}
            />
            <Button color='#00cccc' title='Add todo' onPress={()=> submitHandler(text)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
})