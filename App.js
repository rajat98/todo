import React, {useState} from 'react';
import {Alert, FlatList, StyleSheet, Text, View} from 'react-native';
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo"
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding: 40,
  },
  list:{
    marginTop: 20,
  },
});
