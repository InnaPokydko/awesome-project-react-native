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
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/config";
import { writeDataToFirestore } from "../redux/operations";
import { useDispatch } from 'react-redux';
import { setCurrentUser, registerUser } from "../redux/userSlice";

const image = require("../assets/images/bg_photo.jpg");
const addPhotoIcon = require("../assets/images/add_photo.png");

export default function RegistrationScreen({ navigation }) {
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegistration = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userData = {
          id: user.uid,
          email: user.email,
          displayName: login,
        };
        dispatch(setCurrentUser(userData));
        writeDataToFirestore(userData);
        navigation.navigate("Home");
      })
      .catch((error) => {
        console.log("Registration error:", error);
      });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView style={styles.safeAreaContainer}>
        <ScrollView
          contentContainerStyle={styles.scrollViewContainer}
          keyboardShouldPersistTaps="handled"
        >
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
                  <Text
                    style={styles.loginLink}
                    onPress={() => navigation.navigate("Login")}
                  >
                    Увійти
                  </Text>
                </Text>
              </View>
            </TouchableOpacity>
          </ImageBackground>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeAreaContainer: {
    position: "relative",
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
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

// const RegistrationScreen = ({ navigation }) => {
//   const [login, setLogin] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleRegistration = () => {
//     console.log("Registration submitted");
//     console.log("Login:", login);
//     console.log("Email:", email);
//     console.log("Password:", password);
//   };
