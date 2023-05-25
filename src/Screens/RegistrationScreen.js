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
    <ImageBackground source={image} style={styles.backgroundImage}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        onPress={Keyboard.dismiss}
      >
        <View style={styles.addPhoto}>
          <Image source={addPhotoIcon} style={styles.addPhotoIcon} />
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Реєстрація</Text>

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
              style={styles.showPasswordButton}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Text style={styles.showPasswordButtonText}>
                {showPassword ? "Приховати" : "Показати"}
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.registerButton}
            onPress={handleRegistration}
          >
            <Text style={styles.registerButtonText}>Зареєстуватися</Text>
          </TouchableOpacity>

          <Text style={styles.loginText}>
            Вже є акаунт? <Text style={styles.loginLink}>Увійти</Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  addPhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "grey",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  addPhotoIcon: {
    width: 25,
    height: 25,
  },
  input: {
    width: "100%",
    height: 40,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  showPasswordButton: {
    marginLeft: 10,
  },
  showPasswordButtonText: {
    color: "white",
  },
  registerButton: {
    backgroundColor: "blue",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  registerButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginText: {
    marginTop: 20,
    color: "white",
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
