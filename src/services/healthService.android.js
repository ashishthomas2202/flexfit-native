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
      {
        accessType: "read",
        recordType: "Distance",
      },
      {
        accessType: "read",
        recordType: "FloorsClimbed",
      },
    ])
      .then((permissions) => {
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
  let distance = 0;
  let floorsClimbed = 0;

  steps = await fetchSteps({ startTime, endTime });

  activeCalories = await fetchActiveCaloriesBurned({ startTime, endTime });

  totalCalories = await fetchTotalCaloriesBurned({ startTime, endTime });

  distance = await fetchDistance({ startTime, endTime });

  floorsClimbed = await fetchFloorsClimbed({ startTime, endTime });

  console.log("steps::", steps);
  console.log("activeCalories::", activeCalories);
  console.log("totalCalories::", totalCalories);
  console.log("distance::", distance);
  console.log("floorsClimbed::", floorsClimbed);

  setData({
    stepCount: steps,
    distance: distance,
    flightsClimbed: floorsClimbed,
    caloriesBurned: totalCalories,
  });
};

const fetchSteps = async ({ startTime, endTime }) => {
  let steps = 0;

  let today = new Date();
  let sTime = new Date(today.setHours(0, 0, 0, 0)).toISOString(); // Midnight today
  let eTime = new Date(today.setHours(23, 59, 59, 999)).toISOString(); // End of today

  if (startTime && endTime) {
    sTime = startTime;
    eTime = endTime;
  }

  return await readRecords("Steps", {
    timeRangeFilter: {
      operator: "between",
      startTime: sTime,
      endTime: eTime,
    },
  })
    .then((res) => {
      res?.records?.forEach((record) => {
        steps += record?.count;
      });
      return steps;
    })
    .catch((err) => {
      return 0;
    });
};

// TOFO: Implement the following functions
const fetchActiveCaloriesBurned = async ({ startTime, endTime }) => {
  let activeCaloriesBurned = 0;

  let today = new Date();
  let sTime = new Date(today.setHours(0, 0, 0, 0)).toISOString(); // Midnight today
  let eTime = new Date(today.setHours(23, 59, 59, 999)).toISOString(); // End of today

  if (startTime && endTime) {
    sTime = startTime;
    eTime = endTime;
  }

  return await readRecords("ActiveCaloriesBurned", {
    timeRangeFilter: {
      operator: "between",
      startTime: sTime,
      endTime: eTime,
    },
  })
    .then((res) => {
      console.log("ActiveCaloriesBurned result", res);
      return activeCaloriesBurned;
    })
    .catch((err) => {
      console.log("ActiveCaloriesBurned error", err);
      return 0;
    });
};

const fetchDistance = async ({ startTime, endTime }) => {
  let distance = 0;

  let today = new Date();
  let sTime = new Date(today.setHours(0, 0, 0, 0)).toISOString(); // Midnight today
  let eTime = new Date(today.setHours(23, 59, 59, 999)).toISOString(); // End of today

  if (startTime && endTime) {
    sTime = startTime;
    eTime = endTime;
  }

  return await readRecords("Distance", {
    timeRangeFilter: {
      operator: "between",
      startTime: sTime,
      endTime: eTime,
    },
  })
    .then((res) => {
      // console.log("Distance result", res?.records);
      res?.records?.forEach((record) => {
        // console.log("Distance::", record?.distance?.inMiles);
        distance += record?.distance?.inMiles;
      });
      return distance;
    })
    .catch((err) => {
      // console.log("Distance error", err);
      return 0;
    });
};

const fetchTotalCaloriesBurned = async ({ startTime, endTime }) => {
  let totalCaloriesBurned = 0;

  let today = new Date();
  let sTime = new Date(today.setHours(0, 0, 0, 0)).toISOString(); // Midnight today
  let eTime = new Date(today.setHours(23, 59, 59, 999)).toISOString(); // End of today

  if (startTime && endTime) {
    sTime = startTime;
    eTime = endTime;
  }

  return await readRecords("TotalCaloriesBurned", {
    timeRangeFilter: {
      operator: "between",
      startTime: sTime,
      endTime: eTime,
    },
  })
    .then((res) => {
      res?.records?.forEach((record) => {
        // console.log("energy::", record?.energy?.inKilocalories);
        // console.log("energy Start Time::", record.startTime);
        // console.log("energy End Time::", record.endTime);

        totalCaloriesBurned += record?.energy?.inKilocalories;
      });
      // console.log("Total Calories Burned:", totalCaloriesBurned);
      return totalCaloriesBurned;
    })
    .catch((err) => {
      return 0;
    });
};

const fetchFloorsClimbed = async ({ startTime, endTime }) => {
  let floorsClimbed = 0;

  let today = new Date();
  let sTime = new Date(today.setHours(0, 0, 0, 0)).toISOString(); // Midnight today
  let eTime = new Date(today.setHours(23, 59, 59, 999)).toISOString(); // End of today

  if (startTime && endTime) {
    sTime = startTime;
    eTime = endTime;
  }

  return await readRecords("FloorsClimbed", {
    timeRangeFilter: {
      operator: "between",
      startTime: sTime,
      endTime: eTime,
    },
  })
    .then((res) => {
      console.log("Floors Climbed result", res);
      res?.records?.forEach((record) => {
        // console.log("energy::", record?.energy?.inKilocalories);
        // console.log("energy Start Time::", record.startTime);
        // console.log("energy End Time::", record.endTime);

        console.log("Floors Climbed::", record);
        // floorsClimbed += record?.energy?.inKilocalories;
      });
      // console.log("Total Calories Burned:", totalCaloriesBurned);
      return floorsClimbed;
    })
    .catch((err) => {
      return 0;
    });
};
