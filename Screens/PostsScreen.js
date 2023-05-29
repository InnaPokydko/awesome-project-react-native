import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PostsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Публікації</Text>
      <Button
        title="Create"
        onPress={() => navigation.navigate("CreatePostsScreen")}
      >
        <Ionicons name="arrow-forward" size={20} color="black" />
      </Button>
      <Text>Публікація {userId}</Text>
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