import React, {useState} from 'react';
import {Alert, FlatList, Keyboard, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";
import  Sandbox from "./components/sandbox";

export default function App() {
  const [todos, setTodos] = useState([
    {text: "Todo 1", key: 1},
    {text: "Todo 2", key: 2},
    {text: "Todo 3", key: 3},
  ]);
  const pressHandler = (key)=>{
    setTodos((prevTodos)=>{
      return(
        prevTodos.filter(todo => todo.key!=key)
      )
    })
  }
  const submitHandler = (text) => {
    if(text.length < 3){
      Alert.alert("Alert", "Todo too short to be registered!", [{text: 'OK', onPress:()=>console.log("alert closed successfully")}])
    }else{
    setTodos(prevState=> {
      return ([{text: text, key: Math.random().toString()}, ...prevState])
    })}
  }
  return (
    // <Sandbox/>
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
      console.log('Dismissing keyboard');
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          {/*to form*/}
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList
                data={todos}
                renderItem={({item})=>(
                  <TodoItem item={item} pressHandler={pressHandler}/>
                )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
//tip use backgroundColor to identify area spanned by view
// adding flex1 to all nested containers helps them avoid overflowing
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    flex:1,
    padding: 40,
    backgroundColor: '#ffffff',
  },
  list:{
    flex: 1,
    marginTop: 20,
    backgroundColor: '#ffffff',
  },
});
