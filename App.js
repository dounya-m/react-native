import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  Search  from './components/search/Search';
import search from './components/search/Search';


export default function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }

  return (
    <View style={styles.container}>
      <h1 className=''>{time}</h1>
      <Text>huihuihui</Text>
      <Search onSearchChange={handleOnSearchChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
