import React from "react";
import { View } from "react-native";
import RingProgress from "./RingProgress";

const STEP_GOAL = 1000;
const DISTANCE_GOAL = 5;
const Calories_GOAL = 500;

export const FitnessTracker = ({
  stepCount = 0,
  distance = 0,
  caloriesBurned = 0,
}) => {
  //   let stepColorScheme = ["#e01e37", "#ffba08", "#00b4d8"];
  let stepColorScheme = ["#85182a", "#b21e35", "#e01e37"];
  //   let distanceColorScheme = ["#3c096c", "#9d4edd", "#e0aaff"];
  let distanceColorScheme = ["#2b9348", "#aacc00", "#dddf00", "#ffff3f"];
  let caloriesColorScheme = ["#0077b6", "#00b4d8", "#90e0ef"];

  return (
    <View
      style={{
        position: "relative",
        height: 300,
      }}
    >
      <RingProgress
        style={{
          position: "absolute",
        }}
        radius={140}
        strokeWidth={30}
        // progress={stepCount / STEP_GOAL}
        progress={1.8}
        colorScheme={stepColorScheme}
      />
      <RingProgress
        style={{
          position: "absolute",
          top: 30,
        }}
        radius={110}
        strokeWidth={30}
        // progress={distance / DISTANCE_GOAL}
        progress={2.3}
        colorScheme={distanceColorScheme}
      />

      <RingProgress
        style={{
          position: "absolute",
          top: 60,
        }}
        radius={80}
        strokeWidth={30}
        progress={caloriesBurned / Calories_GOAL}
        // progress={1.6}
        colorScheme={caloriesColorScheme}
      />
    </View>
  );
};
