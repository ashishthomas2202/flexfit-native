// src/services/healthService.android.js

import {
  initialize,
  requestPermission,
  readRecords,
} from "react-native-health-connect";

export const initializeHealthConnect = async (setHasPermission) => {
  try {
    const isInitialized = await initialize();

    const grantedPermissions = await requestPermission([
      { accessType: "read", recordType: "Steps" },
      { accessType: "read", recordType: "ActiveCaloriesBurned" },
      {
        accessType: "read",
        recordType: "TotalCaloriesBurned",
      },
    ])
      .then((permissions) => {
        // console.log("permissions", permissions);
        setHasPermission(true);
      })
      .catch((err) => {
        console.log("permissions error", err);
      });
  } catch (error) {
    console.error("Error initializing Health Connect", error);
    setHasPermission(false);
  }
};

export const fetchHealthData = async (setData) => {
  let today = new Date();
  let startTime = new Date(today.setHours(0, 0, 0, 0)).toISOString(); // Midnight today
  let endTime = new Date(today.setHours(23, 59, 59, 999)).toISOString(); // End of today

  let steps = 0;
  let activeCalories = 0;
  let totalCalories = 0;

  await readRecords("ActiveCaloriesBurned", {
    timeRangeFilter: {
      operator: "between",
      startTime: startTime,
      endTime: endTime,
    },
  })
    .then((res) => {
      console.log("ActiveCaloriesBurned result", res);
    })
    .catch((err) => {
      console.log("ActiveCaloriesBurned error", err);
    });

  await readRecords("TotalCaloriesBurned", {
    timeRangeFilter: {
      operator: "between",
      startTime: startTime,
      endTime: endTime,
    },
  })
    .then((res) => {
      // let totalCalories = 0;
      // console.log("TotalCaloriesBurned result", res);
      res?.records?.forEach((record) => {
        console.log("\nenergy::", record?.energy);
        console.log("\nmetadata::", record?.metadata);
        // Log the energy directly to verify the value
        // console.log("Energy in Calories:", record?.energy?.inCalories);

        // Assuming record.energy.inCalories is already in calories
        totalCalories += record?.energy?.inKilocalories;
      });
      console.log("Total Calories Burned:", totalCalories);
    })
    .catch((err) => {
      console.log("TotalCaloriesBurned error", err);
    });

  await readRecords("Steps", {
    timeRangeFilter: {
      operator: "between",
      startTime: startTime,
      endTime: endTime,
    },
  })
    .then((res) => {
      // let count = 0;
      res?.records?.forEach((record) => {
        steps += record?.count;
      });
      console.log("steps count", steps);
      // console.log("Steps result", res);
    })
    .catch((err) => {
      console.log("Steps error", err);
    });

  setData({
    stepCount: steps,
    distance: 800,
    flightsClimbed: 10,
    caloriesBurned: totalCalories.toFixed(0),
  });
};
// // src/services/healthService.android.js
// import HealthConnect from "react-native-health-connect"; // Assuming you use a Health Connect wrapper library

// export const initializeHealthConnect = (setHasPermission) => {
//   // Initialize Health Connect for Android
//   HealthConnect.isAvailable((available) => {
//     if (available) {
//       // Request permissions
//       HealthConnect.requestPermissions(
//         ["Steps", "Distance", "FloorsClimbed", "CaloriesBurned"],
//         (err, grantedPermissions) => {
//           if (err) {
//             console.error("Error requesting permissions", err);
//             setHasPermission(false);
//             return;
//           }
//           setHasPermission(true);
//         }
//       );
//     }
//   });
// };

// export const fetchHealthData = (setData) => {
//   const options = {
//     date: new Date().toISOString(),
//   };

//   // Fetch step count
//   HealthConnect.getSteps(options, (err, steps) => {
//     if (err) {
//       console.error("Error fetching steps", err);
//       return;
//     }
//     setData((prevState) => ({ ...prevState, stepCount: steps }));
//   });

//   // Fetch distance walked
//   HealthConnect.getDistance(options, (err, distance) => {
//     if (err) {
//       console.error("Error fetching distance", err);
//       return;
//     }
//     setData((prevState) => ({ ...prevState, distance }));
//   });

//   // Fetch flights climbed
//   HealthConnect.getFloorsClimbed(options, (err, floors) => {
//     if (err) {
//       console.error("Error fetching floors climbed", err);
//       return;
//     }
//     setData((prevState) => ({ ...prevState, flightsClimbed: floors }));
//   });

//   // Fetch calories burned
//   HealthConnect.getCaloriesBurned(options, (err, calories) => {
//     if (err) {
//       console.error("Error fetching calories", err);
//       return;
//     }
//     setData((prevState) => ({ ...prevState, caloriesBurned: calories }));
//   });
// };
