import { useState, useEffect } from "react";
import { Platform } from "react-native";
import {
  initializeHealthKit,
  fetchHealthData as fetchHealthDataIOS,
} from "../services/healthService.ios";
import {
  initializeHealthConnect,
  fetchHealthData as fetchHealthDataAndroid,
} from "../services/healthService.android";

export const useHealthData = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [healthData, setHealthData] = useState({
    stepCount: 0,
    distance: 0,
    flightsClimbed: 0,
    caloriesBurned: 0,
  });

  useEffect(() => {
    if (Platform.OS === "ios") {
      initializeHealthKit(setHasPermission);
    } else if (Platform.OS === "android") {
      initializeHealthConnect(setHasPermission);
    }
  }, []);

  useEffect(() => {
    if (hasPermission) {
      if (Platform.OS === "ios") {
        fetchHealthDataIOS(setHealthData);
      } else if (Platform.OS === "android") {
        fetchHealthDataAndroid(setHealthData);
      }
    }
  }, [hasPermission]);

  return healthData;
};

// export const fetchHealthData = async (setData) => {
//   try {
//     const client = await HealthConnectClient.getOrCreate();

//     // Query step count data
//     const stepsResult = await client.getRecords(Permission.Steps, {
//       startTime: new Date(Date.now() - 24 * 60 * 60 * 1000), // Last 24 hours
//       endTime: new Date(),
//     });

//     // Query distance walked data
//     const distanceResult = await client.getRecords(Permission.Distance, {
//       startTime: new Date(Date.now() - 24 * 60 * 60 * 1000),
//       endTime: new Date(),
//     });

//     // Query floors climbed data
//     const floorsResult = await client.getRecords(Permission.FloorsClimbed, {
//       startTime: new Date(Date.now() - 24 * 60 * 60 * 1000),
//       endTime: new Date(),
//     });

//     // Query calories burned data
//     const caloriesResult = await client.getRecords(Permission.CaloriesBurned, {
//       startTime: new Date(Date.now() - 24 * 60 * 60 * 1000),
//       endTime: new Date(),
//     });

//     // Set the health data in the state
//     setData({
//       stepCount: stepsResult.totalSteps || 0,
//       distance: distanceResult.totalDistance || 0,
//       flightsClimbed: floorsResult.totalFloors || 0,
//       caloriesBurned: caloriesResult.totalCalories || 0,
//     });
//   } catch (error) {
//     console.error("Error fetching health data:", error);
//   }
// };

// // import { useState, useEffect } from "react";
// // import { Platform } from "react-native";
// // import {
// //   initializeHealthKit,
// //   fetchHealthData as fetchHealthDataIOS,
// // } from "../services/healthService.ios";
// // import {
// //   initializeHealthConnect,
// //   fetchHealthData as fetchHealthDataAndroid,
// // } from "../services/healthService.android";

// // export const useHealthData = () => {
// //   const [hasPermission, setHasPermission] = useState(false);
// //   const [healthData, setHealthData] = useState({
// //     stepCount: 0,
// //     distance: 0,
// //     flightsClimbed: 0,
// //     caloriesBurned: 0,
// //   });

// //   useEffect(() => {
// //     if (Platform.OS === "ios") {
// //       initializeHealthKit(setHasPermission);
// //     } else if (Platform.OS === "android") {
// //       initializeHealthConnect(setHasPermission);
// //     }
// //   }, []);

// //   useEffect(() => {
// //     if (hasPermission) {
// //       if (Platform.OS === "ios") {
// //         fetchHealthDataIOS(setHealthData);
// //       } else if (Platform.OS === "android") {
// //         fetchHealthDataAndroid(setHealthData);
// //       }
// //     }
// //   }, [hasPermission]);

// //   return healthData;
// // };
