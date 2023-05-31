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
import * as Location from "expo-location";

const CreatePostsScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [location, setLocation] = useState(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [photoName, setPhotoName] = useState("");
  const [camera, setCamera] = useState(null);

  const takePhoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      setPhoto(uri);
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setLocation(coords);
    })();
  }, []);

  const handlePublish = () => {
    if (photo && photoName && location) {
      navigation.navigate("PostsScreen", {
        postTitle: photoName,
        postPhoto: photo,
        postPoint: location,
      });
      setPhoto(null);
      setPhotoName("");
      setLocation(null);
    } else {
      alert("Неможливо опублікувати неіснуючий пост");
    }
  };

  const handleDelete = () => {
    setPhoto(null);
    setPhotoName("");
    setLocation(null);
  };

  return (
    <View style={styles.container}>
      {hasPermission ? (
        isCameraActive ? (
          <Camera style={styles.camera} type={type} ref={setCameraRef}>
            <View style={styles.photoView}>
              {photo && (
                <View>
                  <Image
                    source={{ uri: photo }}
                    style={{ width: 200, height: 200 }}
                  />
                </View>
              )}

              <TouchableOpacity
                style={styles.flipContainer}
                onPress={() => setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back)}
              >
                <Text style={styles.flipText}>Flip</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={takePhoto}>
                <View style={styles.takePhotoOut}>
                  <View style={styles.takePhotoInner}></View>
                </View>
              </TouchableOpacity>
            </View>
          </Camera>
        ) : (
          <TouchableOpacity
            style={styles.cameraContainer}
            onPress={() => setIsCameraActive(true)}
          >
            {!photo && (
              <>
                <Ionicons name="camera" size={50} color="grey" />
                <Text style={styles.uploadText}>Завантажте фото</Text>
              </>
            )}
            {photo && (
              <>
                <Image
                  source={{ uri: photo }}
                  style={styles.previewImage}
                />
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={handleDelete}
                >
                  <Ionicons name="trash-outline" size={30} color="black" />
                </TouchableOpacity>
              </>
            )}
          </TouchableOpacity>
        )
      ) : (
        <Text>No access to camera</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Назва..."
        value={photoName}
        onChangeText={(text) => setPhotoName(text)}
      />
      <View style={styles.locationInputContainer}>
        <Ionicons
          name="location-outline"
          size={25}
          color="grey"
          style={styles.locationIcon}
        />
        <TextInput
          style={styles.locationInput}
          placeholder="Місцевість..."
          value={
            location?.latitude
              ? `${location.latitude}, ${location.longitude}`
              : ""
          }
          onChangeText={(text) => setLocation(text)}
        />
      </View>
      <TouchableOpacity
        style={styles.publishButton}
        onPress={handlePublish}
        disabled={!photo || !photoName || !location}
      >
        <Text style={styles.publishButtonText}>Опублікувати</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  photoView: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
  },
  flipContainer: {
    flex: 0.1,
    alignSelf: "center",
    marginBottom: 10,
  },
  flipText: {
    fontSize: 18,
    marginBottom: 10,
    color: "white",
  },
  button: {
    alignSelf: "center",
  },
  takePhotoOut: {
    borderWidth: 2,
    borderColor: "white",
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  takePhotoInner: {
    borderWidth: 2,
    borderColor: "white",
    height: 40,
    width: 40,
    backgroundColor: "white",
    borderRadius: 50,
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
    borderRadius: 8,
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
