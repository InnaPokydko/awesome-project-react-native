import React, { useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { Entypo, FontAwesome, AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/userSlice";
import { addPost, deletePost, fetchPosts } from "../redux/postSlice";
import { auth } from "../firebase/config";

const PostsScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const postsArr = useSelector((state) => state.posts.postsArr);

  const handleCreatePost = () => {
    navigation.navigate("CreatePostsScreen");
  };

  const handleComments = (postId) => {
    navigation.navigate("CommentsScreen", { postId });
  };

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigation.navigate("LoginScreen");
    });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(fetchPosts());
      } else {
        navigation.navigate("LoginScreen");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleLogout}>
          <Entypo name="log-out" size={24} color="gray" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Posts</Text>
        <TouchableOpacity onPress={handleCreatePost}>
          <Entypo name="plus" size={24} color="gray" />
        </TouchableOpacity>
      </View>
      <View style={styles.postsContainer}>
        {postsArr.map((item) => (
          <View key={item.id} style={styles.postItem}>
            <Image source={{ uri: item.postPhoto }} style={styles.postPhoto} />
            <Text style={styles.postTitle}>{item.postTitle}</Text>
            <Text style={styles.postPoint}>{item.postPoint}</Text>
            <TouchableOpacity onPress={() => handleComments(item.id)}>
              <FontAwesome name="comment" size={30} color="grey" />
            </TouchableOpacity>
            {currentUser && currentUser.uid === item.userId && (
              <TouchableOpacity
                onPress={() => dispatch(deletePost(item.id))}
              >
                <AntDesign name="delete" size={30} color="grey" />
              </TouchableOpacity>
            )}
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
