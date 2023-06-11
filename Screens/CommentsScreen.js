import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { addCommentToPost } from "../redux/postSlice";

const CommentsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { postId } = route.params;
  const [commentText, setCommentText] = useState("");
  const dispatch = useDispatch();

  const handleAddComment = () => {
    dispatch(addCommentToPost({ postId, commentText }));
    setCommentText("");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Comment</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter comment..."
        value={commentText}
        onChangeText={setCommentText}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddComment}>
        <Text style={styles.buttonText}>Add comment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "crimson",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CommentsScreen;