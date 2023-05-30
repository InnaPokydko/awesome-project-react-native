import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

const PostsScreen = () => {
  const navigation = useNavigation();

  const handleCreatePost = () => {
    navigation.navigate("CreatePostsScreen");
  };

  const handleComments = () => {
    navigation.navigate("CommentsScreen");
  };

  const handleMap = () => {
    navigation.navigate("MapScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Публікації</Text>
        <TouchableOpacity onPress={handleCreatePost}>
          <Entypo name="login" size={24} color="gray" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleComments}>
        <Entypo name="comment" size={50} color="grey" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleMap}>
        <Entypo name="location" size={50} color="grey" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
});

export default PostsScreen;




// import React from "react";
// import { useNavigation } from "@react-navigation/native";
// import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
// import { Entypo } from "@expo/vector-icons";

// const PostsScreen = () => {
//   const navigation = useNavigation();

//   const handleCreatePost = () => {
//     navigation.navigate("CreatePostsScreen");
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Публікації</Text>
//         <TouchableOpacity onPress={handleCreatePost}>
//           <Entypo name="login" size={24} color="gray" />
//         </TouchableOpacity>
//       </View>
//       <View style={styles.separator} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "flex-start",
//   },
//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingHorizontal: 16,
//     marginBottom: 16,
//     height: 60,
//     marginTop: 0,
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     flex: 1,
//     textAlign: "center",
//   },
//   separator: {
//     height: 1,
//     backgroundColor: "gray",
//     width: "100%",
//     marginBottom: 16,
//   },
// });

// export default PostsScreen;
