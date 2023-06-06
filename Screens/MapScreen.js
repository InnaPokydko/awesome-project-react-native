import React from "react";
import MapView, { Marker } from 'react-native-maps';
import { View, StyleSheet, Dimensions } from "react-native";

const MapScreen = () => {
  const location = { latitude: 0, longitude: 0 }; 

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={{
          ...location,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      >
        {location && (
          <Marker title="I am here" coordinate={location} description="Hello" />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default MapScreen;



// import React from "react";
// import MapView, { Marker } from 'react-native-maps';
// import { View, StyleSheet } from "react-native";

// const MapScreen = () => {
//   return (
//     <View style={styles.container}>
//       <MapView
//         style={styles.mapStyle}
//         region={{
//           ...location,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//         showsUserLocation={true}
//       >
//         {location && (
//           <Marker title="I am here" coordinate={location} description="Hello" />
//         )}
//       </MapView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   mapStyle: {
//     width: Dimensions.get("window").width,
//     height: Dimensions.get("window").height,
//   },
// });

//   export default MapScreen;

 