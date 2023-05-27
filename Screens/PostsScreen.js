import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

const posts = [
  {
    id: "1",
    title: "Post 1",
    content: "",
  },
  {
    id: "2",
    title: "Post 2",
    content: "",
  },
  {
    id: "3",
    title: "Post 3",
    content: "",
  },
];

const PostsScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.postContainer}>
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text style={styles.postContent}>{item.content}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 92,
   
  },
  listContainer: {
    height: "100%",

    paddingLeft: 16,
    paddingRight: 16,
  },
  postContainer: {
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  postContent: {
    fontSize: 16,
  },
});

export default PostsScreen;