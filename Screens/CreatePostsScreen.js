import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Create Posts Screen</Text>
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