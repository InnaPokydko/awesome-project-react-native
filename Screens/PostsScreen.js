import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

const PostsScreen = () => {
  const [postsArr, setPostsArr] = useState([]);
  const [userLogin, setUserLogin] = useState("");
  const [email, setEmail] = useState("");
  const navigation = useNavigation();
  const route = useRoute();

  const handleCreatePost = () => {
    navigation.navigate("CreatePostsScreen");
  };

  const handleComments = () => {
    navigation.navigate("CommentsScreen");
  };

  const handleMap = () => {
    navigation.navigate("MapScreen");
  };

  useEffect(() => {
    const {
      params: {
        name = "",
        userEmail = "",
        postTitle = "",
        postPhoto = "",
        postPoint = "",
      } = {},
    } = route;

    setUserLogin(name);
    setEmail(userEmail);

    if (postTitle !== "" && postPhoto !== "" && postPoint !== "") {
      const postObject = {
        postTitle: postTitle,
        postPhoto: postPhoto,
        postPoint: postPoint,
      };
      setPostsArr((prevState) => [...prevState, postObject]);
    }
  }, [route]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Публікації</Text>
        <TouchableOpacity onPress={handleCreatePost}>
          <Entypo name="login" size={24} color="gray" />
        </TouchableOpacity>
      </View>
      {postsArr.length > 0 && (
        <TouchableOpacity onPress={handleComments}>
          <Entypo name="comment" size={50} color="grey" />
        </TouchableOpacity>
      )}
      {postsArr.length > 0 && (
        <TouchableOpacity onPress={handleMap}>
          <Entypo name="location" size={50} color="grey" />
        </TouchableOpacity>
      )}
      <View style={styles.postsContainer}>
        <View style={styles.userContainer}>
          <View style={styles.photoBox}></View>
          <View style={styles.userInfoBox}>
            <Text>{userLogin}</Text>
            <Text>{email}</Text>
          </View>
        </View>
        {postsArr.map((item, index) => (
          <View key={index} style={styles.postItem}>
            <Image source={{ uri: item.postPhoto }} style={styles.postPhoto} />
            <Text style={styles.postTitle}>{item.postTitle}</Text>
            <Text style={styles.postPoint}>{item.postPoint}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 16,
    height: 60,
    marginTop: 0,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
});

export default PostsScreen;
