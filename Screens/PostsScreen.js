import React from "react";
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, Button } from "react-native";

const PostsScreen = () => {
  const navigation = useNavigation();

  const handlePublish = () => {
    navigation.navigate("PostsScreen");
  };

  const handleDelete = () => {
   
  };

  return (
    <View style={styles.container}>
      <Text>Публікації</Text>
      <Button title="Create" onPress={() => navigation.navigate("CreatePostsScreen")} />
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