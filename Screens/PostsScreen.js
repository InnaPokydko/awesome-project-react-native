import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

const PostsScreen = () => {
 
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