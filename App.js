import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
// import { useFonts } from 'expo-font';

const image = {uri: 'https://reactjs.org/logo-og.png'};
export default function App() {
  // const [fontsLoaded] = useFonts({
  //   'Inter-Black': require('./assets/fonts/'),
  // });
  // if (!fontsLoaded) {
  //   return null;
  // }
  return (
    <View style={styles.container}>
       <ImageBackground source={image} resizeMode="cover" style={styles.image}>
       <Text style={styles.title}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
       </ImageBackground>
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
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  }
});
// style={{ fontFamily: 'Inter-Black', fontSize: 30 }}