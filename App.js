import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  SearchCity  from './components/search/Searchcity';
import CurenWeather from './components/weather/CurenWeather'


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
      <SearchCity onSearchChange={handleOnSearchChange} />
      <CurenWeather />
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
