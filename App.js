import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  return (
    <View 
      style={{
        width: '100%',
        height: '100%',
        flexDirection: "row",  
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor:'gray'
      }}
    >
{/* 
      <Text>Open up App.js to start working on your app! Somethine here hahahah</Text>
      <StatusBar style="auto" />
      <Button title="Here"/> */}

      <View 
        style={{
          backgroundColor: "red",
          width:100,
          height:100,
          alignItems: 'center',
          justifyContent:'center'
          }}>
            <Text>1</Text>
          </View>

      <View 
        style={{
          backgroundColor: "blue",
          justifyContent: "center",
          alignItems: "center",
          width:100,
          height:100,
          }}>
            <Text>1</Text>
          </View>

      <View 
        style={{
          backgroundColor: "green",
          justifyContent: 'center',
          alignItems: 'center',
          width:100,
          height:100,
          }}>
            <Text>1</Text>
      </View>

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
