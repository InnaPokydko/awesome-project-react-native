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
  const [photo, setPhoto] = useState(null);
   const [photoName, setPhotoName] = useState("");
  const [location, setLocation] = useState("");
  const [isCameraActive, setIsCameraActive] = useState(false);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      let { status } = await Camera.requestCameraPermissionsAsync();
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
   
    navigation.navigate("PostsScreen");
  };

  const handleDelete = () => {
    removeFields();
  };

  const handleTakePhoto = async () => {
    if (cameraRef.current) {
      const { uri } = await cameraRef.current.takePictureAsync();
      await MediaLibrary.createAssetAsync(uri);
      setPhoto(uri);
      setIsCameraActive(false);
    }
  };

  return (
    <View style={styles.container}>
      {isCameraActive ? (
        <Camera
          style={styles.camera}
          type={Camera.Constants.Type.back}
          ref={cameraRef}
        >
          <TouchableOpacity
            style={styles.takePhotoButton}
            onPress={handleTakePhoto}
          >
            <Ionicons name="camera" size={30} color="white" />
          </TouchableOpacity>
        </Camera>
      ) : (
        <TouchableOpacity
          style={styles.cameraContainer}
          onPress={() => {
            setIsCameraActive(true);
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
      )}
      <TextInput
        style={styles.input}
        placeholder="Назва..."
        value={photoName}
        onChangeText={(text) => setPhotoName(text)}
      />
      <View style={styles.locationInputContainer}>
        <Ionicons name="location-outline" size={25} color="grey" style={styles.locationIcon} />
        <TextInput
          style={styles.locationInput}
          placeholder="Місцевість..."
          value={location}
          onChangeText={(text) => setLocation(text)}
        />
      </View>
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
  camera: {
    flex: 1,
  },
  takePhotoButton: {
    position: "absolute",
    bottom: 16,
    alignSelf: "center",
  },
  uploadText: {
    fontSize: 16,
    marginTop: 10,
    color: "gray",
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
    marginTop: 16,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  locationInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  locationIcon: {
    marginRight: 10,
  },
  locationInput: {
    flex: 1,
    height: 40,
  },
  publishButton: {
    backgroundColor: "tomato",
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 8,
    marginTop: 16,
  },
  publishButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CreatePostsScreen;