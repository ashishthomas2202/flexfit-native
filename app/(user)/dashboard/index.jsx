import "expo-dev-client";
import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import Stats from "../../../src/components/Stats";
import { useHealthData } from "../../../src/hooks/useHealthData";
import { FitnessTracker } from "../../../src/components/FitnessTracker";
import { Link } from "expo-router";

export default function App() {
  const { stepCount, distance, flightsClimbed, caloriesBurned } =
    useHealthData();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FitnessTracker
        stepCount={stepCount}
        distance={distance}
        caloriesBurned={caloriesBurned}
      />
      <View style={styles.statsContainer}>
        <Stats label="Steps" value={stepCount} />
        <Stats label="Distance" value={`${distance.toFixed(2)} mi`} />
        <Stats label="Flights Climbed" value={flightsClimbed} />
        <Stats
          label="Calories Burned"
          value={`${caloriesBurned.toFixed(0)} kcal`}
        />
      </View>

      {/* <StatusBar style="dark" /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
