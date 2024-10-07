import "expo-dev-client";
import React, { useEffect, useState, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Stats from "./src/components/Stats";
import RingProgress from "./src/components/RingProgress";
import { useHealthData } from "./src/hooks/useHealthData";

const STEP_GOAL = 10000;

export default function App() {
  const { stepCount, distance, flightsClimbed, caloriesBurned } =
    useHealthData();

  return (
    <View style={styles.container}>
      <RingProgress
        radius={150}
        strokeWidth={50}
        progress={stepCount / STEP_GOAL}
      />

      <View style={styles.statsContainer}>
        <Stats label="Steps" value={stepCount} />
        <Stats label="Distance" value={`${(distance / 1000).toFixed(2)} km`} />
        <Stats label="Flights Climbed" value={flightsClimbed} />
        <Stats label="Calories Burned" value={`${caloriesBurned} kcal`} />
      </View>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    padding: 12,
  },
  statsContainer: {
    flexDirection: "row",
    gap: 25,
    flexWrap: "wrap",
    marginTop: 50,
  },
});

// import "expo-dev-client";
// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// import Stats from "./src/components/Stats";
// import RingProgress from "./src/components/RingProgress";
// import AppleHealthKit from "react-native-health";
// import { useEffect, useState } from "react";

// const permissions = {
//   permissions: {
//     read: [
//       AppleHealthKit?.Constants?.Permissions?.StepCount,
//       AppleHealthKit?.Constants?.Permissions?.FlightsClimbed,
//     ],
//   },
// };
// const STEP_GOAL = 10000;

// export default function App() {
//   const [hasPermission, setHasPermission] = useState(false);
//   const [stepCount, setStepCount] = useState(6000);
//   const [flightsClimbed, setFlightsClimbed] = useState(0);

//   useEffect(() => {
//     // if (AppleHealthKit) {
//     //   AppleHealthKit?.initHealthKit(permissions, (err, results) => {
//     //     // console.log("initHealthKit: ", err, results);
//     //     if (err) {
//     //       console.log("error initializing Healthkit: ", err);
//     //       setHasPermission(false);
//     //       return;
//     //     }
//     //     setHasPermission(true);
//     //   });
//     // }

//     AppleHealthKit.isAvailable((err, available) => {
//       if (err) {
//         console.log("error checking health kit availability: ", err);
//         return;
//       }

//       if (available) {
//         AppleHealthKit.initHealthKit(permissions, (err, results) => {
//           if (err) {
//             console.log("error initializing Healthkit: ", err);
//             setHasPermission(false);
//             return;
//           }
//           setHasPermission(true);
//         });
//       }
//     });
//   }, []);

//   useEffect(() => {
//     if (hasPermission) {
//       const options = {
//         date: new Date().toISOString(),
//         includeManuallyAdded: true,
//       };
//       AppleHealthKit.getStepCount(options, (err, results) => {
//         if (err) {
//           console.log("error getting step count: ", err);
//           return;
//         }
//         console.log("Step Count: ", results);
//         // setStepCount(results?.value);
//       });

//       AppleHealthKit.getFlightsClimbed(options, (err, results) => {
//         if (err) {
//           console.log("error getting flights climbed: ", err);
//           return;
//         }
//         console.log("Flights Climbed: ", results);
//         setFlightsClimbed(results?.value);
//       });
//     }
//   }, [hasPermission]);

//   return (
//     <View style={styles.container}>
//       <RingProgress
//         radius={150}
//         strokeWidth={50}
//         progress={stepCount / STEP_GOAL}
//       />

//       <View style={styles.statsContainer}>
//         <Stats label="Steps" value={stepCount} />
//         <Stats label="Distance" value="0.75 miles" />
//         <Stats label="Flights Climbed" value={flightsClimbed} />
//       </View>

//       <StatusBar style="light" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#000",
//     justifyContent: "center",
//     padding: 12,
//   },
//   statsContainer: {
//     flexDirection: "row",
//     gap: 25,
//     flexWrap: "wrap",
//     marginTop: 50,
//   },
// });
