// src/services/healthService.ios.js
import AppleHealthKit from "react-native-health";

const permissions = {
  permissions: {
    read: [
      AppleHealthKit.Constants.Permissions.StepCount,
      AppleHealthKit.Constants.Permissions.DistanceWalkingRunning,
      AppleHealthKit.Constants.Permissions.FlightsClimbed,
      AppleHealthKit.Constants.Permissions.ActiveEnergyBurned,
    ],
  },
};

export const initializeHealthKit = (setHasPermission) => {
  AppleHealthKit.isAvailable((err, available) => {
    if (err) {
      console.error("Error checking HealthKit availability", err);
      return;
    }

    if (available) {
      AppleHealthKit.initHealthKit(permissions, (err, results) => {
        if (err) {
          console.error("Error initializing HealthKit", err);
          setHasPermission(false);
          return;
        }
        setHasPermission(true);
      });
    }
  });
};

export const fetchHealthData = (setData) => {
  // Fetch step count
  AppleHealthKit.getStepCount(
    {
      date: new Date().toISOString(),
      includeManuallyAdded: true,
    },
    (err, results) => {
      if (err) {
        console.error("Error fetching steps", err);
        return;
      }
      console.log("Step count results", results);
      setData((prevState) => ({ ...prevState, stepCount: results.value }));
    }
  );

  // Fetch distance walked or run
  AppleHealthKit.getDistanceWalkingRunning(
    {
      unit: "mile", // optional; default 'meter'
      date: new Date(2016, 5, 1).toISOString(), // optional; default now
      includeManuallyAdded: true, // optional: default true
    },
    (err, results) => {
      if (err) {
        console.error("Error fetching distance", err);
        return;
      }
      console.log("Distance results", results);
      setData((prevState) => ({ ...prevState, distance: results.value }));
    }
  );

  // Fetch flights climbed
  AppleHealthKit.getFlightsClimbed(
    {
      date: new Date().toISOString(), // optional; default now
      includeManuallyAdded: true, // optional: default true
    },
    (err, results) => {
      if (err) {
        console.error("Error fetching flights climbed", err);
        return;
      }
      console.log("Flights climbed results", results);
      setData((prevState) => ({ ...prevState, flightsClimbed: results.value }));
    }
  );

  // Fetch calories burned
  AppleHealthKit.getActiveEnergyBurned(
    {
      startDate: new Date().toISOString(), // required
    },
    (err, results) => {
      if (err) {
        console.error("Error fetching active energy", err);
        return;
      }

      let totalCalories = 0;
      results.forEach((result) => {
        totalCalories += result.value;
      });

      console.log("Active energy results", totalCalories);
      setData((prevState) => ({ ...prevState, caloriesBurned: totalCalories }));
    }
  );
};
