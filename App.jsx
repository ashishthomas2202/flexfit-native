import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Stats from "./src/components/Stats";
import RingProgress from "./src/components/RingProgress";

export default function App() {
  return (
    <View style={styles.container}>
      <RingProgress progress={0.25} />

      <View style={styles.statsContainer}>
        <Stats label="Steps" value="1219" />
        <Stats label="Distance" value="0.75 miles" />
        <Stats label="Flights Climbed" value="12" />
      </View>

      <StatusBar style="auto" />
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
