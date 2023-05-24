import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground
} from "react-native";

const image = { uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/crystal_background.jpg' };

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    console.debug("Welcome!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.titleContainer}>
          <Text style={styles.welcomeTitle}>Welcome!</Text>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Sign In</Text>
          <View>
            <Text>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Input your email"
              autoCompleteType="email"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View>
            <Text>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Input your password"
              autoCompleteType="password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={signIn}>
            <Text style={styles.buttonTitle}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  titleContainer: {
    marginBottom: 20,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  formContainer: {
    width: "80%",
    alignSelf: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 20,
    borderRadius: 10,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});




// import React from 'react'
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, ImageBackground } from 'react-native';
// // import { useFonts } from 'expo-font';

// const image = {uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/crystal_background.jpg'};
// export default function App() {
//   // const [fontsLoaded] = useFonts({
//   //   'Inter-Black': require('./assets/fonts/'),
//   // });
//   // if (!fontsLoaded) {
//   //   return null;
//   // }
//   return (
//     <View style={styles.container}>
//        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
//        <Text style={styles.title}>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//        </ImageBackground>
//           </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   image: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   title: {
//     marginTop: 16,
//     paddingVertical: 8,
//     borderWidth: 4,
//     borderColor: "#20232a",
//     borderRadius: 6,
//     backgroundColor: "#61dafb",
//     color: "#20232a",
//     textAlign: "center",
//     fontSize: 30,
//     fontWeight: "bold"
//   }
// });
// style={{ fontFamily: 'Inter-Black', fontSize: 30 }}

