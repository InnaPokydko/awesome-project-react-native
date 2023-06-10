import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { View, Text, StyleSheet, TextInput } from "react-native";

const CommentsScreen = ({ route }) => {
  const { postId } = route.params;
  const [commentText, setCommentText] = useState("");

  const dispatch = useDispatch();

  const handleAddComment = () => {
    dispatch(addComment({ postId, commentText }));
    setCommentText("");
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
        <Text style={styles.buttonText}>Add Comment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "blue",
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