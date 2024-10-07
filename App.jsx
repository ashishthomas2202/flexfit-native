import "expo-dev-client";
import React, { useEffect, useState, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView } from "react-native";
import Stats from "./src/components/Stats";
import RingProgress from "./src/components/RingProgress";
import { useHealthData } from "./src/hooks/useHealthData";
import { FitnessTracker } from "./src/components/FitnessTracker";

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

      <StatusBar style="light" />
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
