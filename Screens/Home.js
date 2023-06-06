import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import CommentsScreen from "./CommentsScreen";
import MapScreen from "./MapScreen";

const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();

export const Home = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="PostsScreen" component={PostsScreen} />
      <HomeStack.Screen name="CreatePostsScreen" component={CreatePostsScreen} />
      <HomeStack.Screen name="CommentsScreen" component={CommentsScreen} />
      <HomeStack.Screen name="MapScreen" component={MapScreen} />
    </HomeStack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "PostsScreen") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "CreatePostsScreen") {
            iconName = focused ? "create" : "create-outline";
          } else if (route.name === "ProfileScreen") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen name="PostsScreen" component={Home} />
      <Tabs.Screen name="CreatePostsScreen" component={CreatePostsScreen} />
      <Tabs.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};

export default TabNavigator;



// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { Ionicons } from "@expo/vector-icons";
// import PostsScreen from "./PostsScreen";
// import CreatePostsScreen from "./CreatePostsScreen";
// import ProfileScreen from "./ProfileScreen";

// const Tabs = createBottomTabNavigator();
// const Stack = createStackNavigator();

// const Home = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="PostsScreen" component={PostsScreen} />
//         <Stack.Screen name="CreatePostsScreen" component={CreatePostsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer> &&
//     <Tabs.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           if (route.name === "Posts") {
//             iconName = focused ? "home" : "home-outline";
//           } else if (route.name === "CreatePosts") {
//             iconName = focused ? "create" : "create-outline";
//           } else if (route.name === "Profile") {
//             iconName = focused ? "person" : "person-outline";
//           }
//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//       })}
//       tabBarOptions={{
//         tabBarActiveTintColor: "tomato",
//         tabBarInactiveTintColor: "gray",
//         screenOptions: {
//           tabBarStyle: [
//             {
//               "display": "flex",
//             },
//             null,
//           ],
//         },
//       }}
//     >
//       <Tabs.Screen name="Posts" component={PostsScreen} />
//       <Tabs.Screen name="CreatePosts" component={CreatePostsScreen} />
//       <Tabs.Screen name="Profile" component={ProfileScreen} />
//     </Tabs.Navigator>
//   );
// };

// export default Home;
