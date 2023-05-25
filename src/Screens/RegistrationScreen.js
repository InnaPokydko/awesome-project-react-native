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
} from "react-native";

const image = require("../../assets/images/bg-photo.jpg");
const addPhotoIcon = require("../../assets/images/add_photo.png");

export default function RegistrationScreen() {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegistration = () => {
    // Perform registration logic
    console.log("Registration submitted");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      onPress={Keyboard.dismiss}
    >
      <SafeAreaView style={styles.safeAreaContainer}>
        <ScrollView
          contentContainerStyle={styles.scrollViewContainer}
          keyboardShouldPersistTaps="handled"
        >
          <ImageBackground source={image} style={styles.backgroundImage}>
            <View style={styles.content}>
              <View style={styles.registrationFormBox}>
                <Text style={styles.title}>Реєстрація</Text>

                <View style={styles.addPhoto}>
                  <Image source={addPhotoIcon} style={styles.addPhotoIcon} />
                </View>

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
                </View>

                <TouchableOpacity
                  style={styles.showPasswordButton}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Text style={styles.showPasswordButtonText}>
                    {showPassword ? "Приховати" : "Показати"}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.registerButton}
                  onPress={handleRegistration}
                >
                  <Text style={styles.registerButtonText}>Зареєструватися</Text>
                </TouchableOpacity>

                <Text style={styles.loginText}>
                  Вже є акаунт?{" "}
                  <Text style={styles.loginLink}>Увійти</Text>
                </Text>
              </View>
            </View>
          </ImageBackground>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  safeAreaContainer: {
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
    paddingTop: 150,
  },
  registrationFormBox: {
    width: 375,
    height: 549,
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingBottom: 78,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000",
    alignSelf: "center",
  },
  addPhoto: {
    position: "absolute",
    top: -40,
    left: "50%",
    transform: [{ translateX: -60 }],
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  addPhotoIcon: {
    width: 25,
    height: 25,
  },
  input: {
    width: 343,
    height: 50,
    marginBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: "#F6F6F6",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  showPasswordButton: {
    marginLeft: 10,
  },
  showPasswordButtonText: {
    color: "white",
  },
  registerButton: {
    alignSelf: "center",
    backgroundColor: "#FF6C00",
    width: 344,
    height: 50,
    borderRadius: 100,
    padding: 16,
    marginBottom: 16,
  },
  registerButtonText: {
    color: "#FFFFFF",
    fontFamily: "RobotoRegular",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
  },
  loginText: {
    alignSelf: "center",
    marginTop: 20,
    color: "black",
  },
  loginLink: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

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
