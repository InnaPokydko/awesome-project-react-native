import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { Ionicons } from "@expo/vector-icons";

const CreatePostsScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photo, setPhoto] = useState(null);
  const [photoName, setPhotoName] = useState("");
  const [location, setLocation] = useState("");
  const [isCameraActive, setIsCameraActive] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const handlePublish = () => {
    // код для створення посту та перенаправлення на екран PostsScreen
    navigation.navigate("PostsScreen");
  };

  const handleDelete = () => {
    // код для видалення посту
  };

  const handleTakePhoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      await MediaLibrary.createAssetAsync(uri);
      setPhoto(uri);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.cameraContainer}
        onPress={() => {
          setIsCameraActive(true);
          handleTakePhoto();
        }}
      >
        {!photo && (
          <>
            <Ionicons name="camera" size={50} color="grey" />
            <Text style={styles.uploadText}>Завантажте фото</Text>
          </>
        )}
        {photo && (
          <>
            <Image source={{ uri: photo }} style={styles.previewImage} />
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={handleDelete}
            >
              <Ionicons name="trash-outline" size={30} color="black" />
            </TouchableOpacity>
          </>
        )}
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Назва..."
        value={photoName}
        onChangeText={(text) => setPhotoName(text)}
      />
      <TouchableOpacity
        style={styles.locationIcon}
        onPress={() => {
          // код для переходу на екран MapScreen
          navigation.navigate("MapScreen");
        }}
      >
        <Ionicons name="location-outline" size={30} color="black" />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Місцевість..."
        value={location}
        onChangeText={(text) => setLocation(text)}
      />
      <TouchableOpacity style={styles.publishButton} onPress={handlePublish}>
        <Text style={styles.publishButtonText}>Опублікувати</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cameraContainer: {
    width: 343,
    height: 240,
    alignSelf: "center",
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
  },
  uploadText: {
    fontSize: 18,
    marginTop: 10,
  },
  previewImage: {
    height: 200,
    width: "100%",
    marginBottom: 10,
    borderColor: "gray",
  },
  deleteButton: {
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  locationIcon: {
    alignSelf: "center",
    marginBottom: 10,
  },
  publishButton: {
    backgroundColor: "tomato",
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 8,
  },
  publishButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CreatePostsScreen;
