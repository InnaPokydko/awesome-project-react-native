import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen';
// import LoginScreen from './Screens/LoginScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <RegistrationScreen />
      {/* <LoginScreen /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});




// import 'react-native-gesture-handler';
// import React from "react";
// import { Button, ImageBackground, StyleSheet } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import Login from './components/Login';
// import Register from './components/Register';
// import Home from './components/Home';

// const MainStack = createStackNavigator();
// const image = { uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/crystal_background.jpg' };

// export default function App() {
//   return (
//     <NavigationContainer>
//       <ImageBackground source={image} resizeMode="cover" style={styles.image}>
//       <MainStack.Navigator initialRouteName="Registration">
//         <MainStack.Screen name="Registration" component={Register} />
//         <MainStack.Screen name="Login" component={Login} />
//         <MainStack.Screen
//           name="Home"
//           component={Home}
//           options={{
//             title: "Home screen",
//             headerStyle: {
//               backgroundColor: "#f4511e",
//             },
//             headerTintColor: "#fff",
//             headerTitleStyle: {
//               fontWeight: "bold",
//               fontSize: 20,
//             },
//             headerRight: () => (
//               <Button
//                 onPress={() => alert("This is a button!")}
//                 title="Press me"
//                 color="#fff"
//               />
//             ),
//           }}
//         />
//       </MainStack.Navigator>
//       </ImageBackground>
      
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({
//   image: {
//         flex: 1,
//         justifyContent: "center",
//       },
//     });





// import React, { useState } from "react";
// import {
//   StyleSheet,
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   SafeAreaView,
//   ImageBackground
// } from "react-native";

// const image = { uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/crystal_background.jpg' };

// export default function App() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const signIn = () => {
//     console.debug("Welcome!");
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <ImageBackground source={image} resizeMode="cover" style={styles.image}>
//         <View style={styles.titleContainer}>
//           <Text style={styles.welcomeTitle}>Welcome!</Text>
//         </View>
//         <View style={styles.formContainer}>
//           <Text style={styles.formTitle}>Sign In</Text>
//           <View>
//             <Text>Email</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Input your email"
//               autoCompleteType="email"
//               value={email}
//               onChangeText={setEmail}
//             />
//           </View>
//           <View>
//             <Text>Password</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Input your password"
//               autoCompleteType="password"
//               secureTextEntry
//               value={password}
//               onChangeText={setPassword}
//             />
//           </View>
//           <TouchableOpacity style={styles.button} onPress={signIn}>
//             <Text style={styles.buttonTitle}>Sign In</Text>
//           </TouchableOpacity>
//         </View>
//       </ImageBackground>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   image: {
//     flex: 1,
//     justifyContent: "center",
//   },
//   titleContainer: {
//     marginBottom: 20,
//   },
//   welcomeTitle: {
//     fontSize: 24,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   formContainer: {
//     width: "80%",
//     alignSelf: "center",
//     backgroundColor: "rgba(255, 255, 255, 0.8)",
//     padding: 20,
//     borderRadius: 10,
//   },
//   formTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   input: {
//     height: 40,
//     borderColor: "gray",
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   button: {
//     backgroundColor: "blue",
//     paddingVertical: 10,
//     borderRadius: 5,
//     alignItems: "center",
//   },
//   buttonTitle: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });





