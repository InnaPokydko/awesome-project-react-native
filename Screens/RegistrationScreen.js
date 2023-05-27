import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  Keyboard,
  Image,
  SafeAreaView,
  ScrollView,
  Platform,
} from "react-native";

const image = require("../assets/images/bg_photo.jpg");
const addPhotoIcon = require("../assets/images/add_photo.png");

const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegistration = () => {
    console.log("Registration submitted");
    console.log("Login:", login);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView style={styles.safeAreaContainer}>
        {/* <ScrollView
          contentContainerStyle={styles.scrollViewContainer}
          keyboardShouldPersistTaps="handled"
        > */}
          <ImageBackground source={image} style={styles.backgroundImage}>
            <TouchableOpacity style={styles.content} onPress={Keyboard.dismiss}>
              <View style={styles.photoBox}>
                <Image source={addPhotoIcon} style={styles.addPhotoImg} />
              </View>
              <View style={styles.registrationFormBox}>
                <Text style={styles.registerTitle}>Реєстрація</Text>

                <TextInput
                  style={styles.input}
                  placeholder="Логін"
                  value={login}
                  onChangeText={setLogin}
                />

                <TextInput
                  style={styles.input}
                  placeholder="Адреса електронної пошти"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />

                <View style={styles.passwordContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Пароль"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                  />
                  <TouchableOpacity
                    style={styles.showPasswordContainer}
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <Text style={styles.showPasswordText}>
                      {showPassword ? "Приховати" : "Показати"}
                    </Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  style={styles.registrBtn}
                  onPress={handleRegistration}
                >
                  <Text style={styles.btnLabel}>Зареєструватися</Text>
                </TouchableOpacity>

                <Text style={styles.textLogIn}>
                  Вже є акаунт?
                  <Text style={styles.loginLink}>Увійти</Text>
                </Text>
              </View>
            </TouchableOpacity>
          </ImageBackground>
        {/* </ScrollView> */}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeAreaContainer: {
    position: "relative",
    flex: 1,
  },
  // scrollViewContainer: {
  //   flexGrow: 1,
  // },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  content: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  registrationFormBox: {
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
    paddingTop: 92,
    paddingRight: 16,
    paddingBottom: 78,
    paddingLeft: 16,
  },
  registerTitle: {
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 32,
  },
  input: {
    width: "100%",
    height: 50,
    color: "#212121",
    backgroundColor: "#F6F6F6",
    marginBottom: 16,
    paddingLeft: 12,
    borderRadius: 8,
  },
  photoBox: {
    top: 80,
    left: 50,
    transform: [{ translateX: -50 }, { translateY: -20 }],
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    zIndex: 1,
  },
  addPhotoImg: {
    position: "absolute",
    bottom: 15,
    right: -12,
    width: 25,
    height: 25,
  },
  passwordContainer: {
    position: "relative",
  },
  showPasswordContainer: {
    position: "absolute",
    top: 16,
    right: 12,
  },
  showPasswordText: {
    color: "#1B4371",
    marginLeft: 8,
    marginRight: 8,
  },
  registrBtn: {
    alignSelf: "center",
    backgroundColor: "#FF6C00",
    width: 344,
    height: 50,
    borderRadius: 100,
    padding: 16,
    marginBottom: 16,
  },
  btnLabel: {
    alignSelf: "center",
    color: "#FFFFFF",
  },
  textLogIn: {
    textAlign: "center",
    color: "#1B4371",
  },
  loginLink: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default RegistrationScreen;

// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Button,
//   TouchableOpacity,
//   ImageBackground,
//   TextInput,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// const image = {
//   uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/crystal_background.jpg",
// };
// const Register = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.container}>
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
//       <Button
//         title="Go to Login"
//         onPress={() =>
//           navigation.navigate("Login", { sessionId: 45, userId: "22e24" })
//         }
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   image: {
//     flex: 1,
//     justifyContent: "center",
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

// export default Register;
