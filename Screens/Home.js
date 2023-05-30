import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from "@expo/vector-icons";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

const Tabs = createBottomTabNavigator();
// const Stack = createStackNavigator();

const Home = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="PostsScreen" component={PostsScreen} />
    //     <Stack.Screen name="CreatePostsScreen" component={CreatePostsScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer> &&
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Posts") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "CreatePosts") {
            iconName = focused ? "create" : "create-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        screenOptions: {
          tabBarStyle: [
            {
              "display": "flex",
            },
            null,
          ],
        },
      }}
    >
      <Tabs.Screen name="Posts" component={PostsScreen} />
      <Tabs.Screen name="CreatePosts" component={CreatePostsScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};

export default Home;
