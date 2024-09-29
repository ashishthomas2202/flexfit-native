import { View, Text, StyleSheet } from "react-native";

const Stats = ({ label, value }) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    color: "#fff",
  },
  value: {
    fontSize: 45,
    color: "#AFB3BE",
  },
});
