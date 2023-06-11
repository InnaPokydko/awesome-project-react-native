import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { db } from "../firebase/config";
import { useSelector, useDispatch } from "react-redux";
import { addCommentToPost, selectPosts } from "../redux/postSlice";

const PostsScreen = () => {
  const [userLogin, setUserLogin] = useState("");
  const [email, setEmail] = useState("");
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const postsArr = useSelector(selectPosts);

  const handleCreatePost = () => {
    navigation.navigate("CreatePostsScreen");
  };

  const handleComments = (postId) => {
    navigation.navigate("CommentsScreen", { postId });
  };

  const handleMap = () => {
    navigation.navigate("MapScreen");
  };

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.log("Logout error:", error);
      });
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
        id: nanoid(),
        postTitle: postTitle,
        postPhoto: postPhoto,
        postPoint: postPoint,
      };
      dispatch(addPost(postObject));
    }
  }, [route]);

  const loadPosts = async () => {
    try {
      const postsRef = db.collection("posts");
      const snapshot = await postsRef.get();
      const loadedPosts = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        loadedPosts.push(data);
      });
      dispatch(fetchPosts(loadedPosts));
    } catch (error) {
      console.log("Error loading posts:", error);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleLogout}>
          <Entypo name="log-out" size={24} color="gray" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Публікації</Text>
        <TouchableOpacity onPress={handleCreatePost}>
          <Entypo name="login" size={24} color="gray" />
        </TouchableOpacity>
      </View>
      <View style={styles.postsContainer}>
        <View style={styles.userContainer}>
          <View style={styles.photoBox}></View>
          <View style={styles.userInfoBox}></View>
        </View>
        {postsArr.map((item) => (
          <View key={item.id} style={styles.postItem}>
            <Image source={{ uri: item.postPhoto }} style={styles.postPhoto} />
            <Text style={styles.postTitle}>{item.postTitle}</Text>
            <Text style={styles.postPoint}>{item.postPoint}</Text>
            <TouchableOpacity onPress={() => handleComments(item.id)}>
              <FontAwesome name="comment" size={30} color="grey" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleMap}>
              <AntDesign name="enviromento" size={30} color="grey" />
            </TouchableOpacity>
            {item.comments && item.comments.length > 0 && (
              <View>
                {item.comments.map((comment, index) => (
                  <Text key={index}>{comment.text}</Text>
                ))}
              </View>
            )}
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
  postsContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 16,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  photoBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "gray",
    marginRight: 8,
  },
  userInfoBox: {
    flex: 1,
  },
  postItem: {
    marginBottom: 16,
  },
  postPhoto: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 8,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
  },
  postPoint: {
    fontSize: 16,
    color: "gray",
    marginBottom: 8,
  },
  commentLink: {
    fontSize: 16,
    color: "blue",
  },
});

export default PostsScreen;
