import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CommentsScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Comments Screen</Text>
      </View>
    );
  };

export default CreatePostsScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });