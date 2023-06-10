import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    KeyboardAvoidingView,
    Keyboard,
    SafeAreaView,
    Platform,
  } from "react-native";
import { signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useDispatch } from 'react-redux';
import { setCurrentUser, loginUser } from '../redux/userSlice';
import { updateUserDataInFirestore } from '../redux/operations';

const image = require("../assets/images/bg_photo.jpg");

export default function Login({ navigation }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const onHandleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userData = {
          id: user.uid,
          email: user.email,
          displayName: user.displayName,
        };
        dispatch(setCurrentUser(userData));
        dispatch(loginUser()); 
        navigation.navigate("Home");
      })
      .catch((error) => {
        console.log("Login error:", error);
      });
  };

  const handleProfileUpdate = (newDisplayName) => {
    updateProfile(auth.currentUser, {
      displayName: newDisplayName,
    })
      .then(() => {
        updateUserDataInFirestore(auth.currentUser.uid, newDisplayName);
        console.log("Profile updated successfully");
      })
      .catch((error) => {
        console.log("Profile update error:", error);
      });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView style={styles.safeAreaContainer}>
        <ImageBackground source={image} style={styles.backgroundImage}>
          <TouchableOpacity
            style={styles.content}
            onPress={() => Keyboard.dismiss()}
          >
            <View style={styles.photoBox}></View>
            <View style={styles.loginFormBox}>
              <Text style={styles.loginTitle}>Увійти</Text>
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

              <TouchableOpacity style={styles.loginBtn} onPress={onHandleLogin}>
                <Text style={styles.btnLabel} onPress={() => navigation.navigate("Home")}>Увійти</Text>
              </TouchableOpacity>

              <Text style={styles.textRegister}>
                Немає акаунту?
                <Text
                  style={styles.registerLink}
                  onPress={() => navigation.navigate("Registration")}
                >
                  Зареєструватися
                </Text>
              </Text>
            </View>
          </TouchableOpacity>
        </ImageBackground>
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
  loginFormBox: {
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
    paddingTop: 92,
    paddingRight: 16,
    paddingBottom: 78,
    paddingLeft: 16,
  },
  loginTitle: {
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
  },
  loginBtn: {
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
  textRegister: {
    textAlign: "center",
    color: "#1B4371",
  },
  registerLink: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

// export default LoginScreen;

// import React, { useState } from "react";
// import {
//   StyleSheet,
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   ImageBackground,
//   KeyboardAvoidingView,
//   Keyboard,
//   SafeAreaView,
//   Platform,
// } from "react-native";

// const image = require("../assets/images/bg_photo.jpg");

// const LoginScreen = ({ navigation }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleLogin = () => {
//     console.log("Login submitted");
//     console.log("Email:", email);
//     console.log("Password:", password);
//   };

//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//     >
//       <SafeAreaView style={styles.safeAreaContainer}>
//         <ImageBackground source={image} style={styles.backgroundImage}>
//           <TouchableOpacity
//             style={styles.content}
//             onPress={() => Keyboard.dismiss()}
//           >
//             <View style={styles.photoBox}></View>
//             <View style={styles.loginFormBox}>
//               <Text style={styles.loginTitle}>Увійти</Text>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Адреса електронної пошти"
//                 value={email}
//                 onChangeText={setEmail}
//                 keyboardType="email-address"
//                 autoCapitalize="none"
//               />

//               <View style={styles.passwordContainer}>
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Пароль"
//                   value={password}
//                   onChangeText={setPassword}
//                   secureTextEntry={!showPassword}
//                 />
//                 <TouchableOpacity
//                   style={styles.showPasswordContainer}
//                   onPress={() => setShowPassword(!showPassword)}
//                 >
//                   <Text style={styles.showPasswordText}>
//                     {showPassword ? "Приховати" : "Показати"}
//                   </Text>
//                 </TouchableOpacity>
//               </View>

//               <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
//                 <Text style={styles.btnLabel} onPress={() => navigation.navigate("Home")}>Увійти</Text>
//               </TouchableOpacity>

//               <Text style={styles.textRegister}>
//                 Немає акаунту?
//                 <Text
//                   style={styles.registerLink}
//                   onPress={() => navigation.navigate("Registration")}
//                 >
//                   Зареєструватися
//                 </Text>
//               </Text>
//             </View>
//           </TouchableOpacity>
//         </ImageBackground>
//       </SafeAreaView>
//     </KeyboardAvoidingView>
//   );
// };