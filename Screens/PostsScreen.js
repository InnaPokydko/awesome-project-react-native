import React from "react";
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const PostsScreen = () => {
  const navigation = useNavigation();

  const handleCreatePost = () => {
    navigation.navigate("CreatePostsScreen");
  };

  return (
    <View style={styles.container}>
      <Text>Публікації</Text>
      <TouchableOpacity onPress={handleCreatePost}>
        <Text>Create</Text>
      </TouchableOpacity>
      <Text>Публікація</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PostsScreen;