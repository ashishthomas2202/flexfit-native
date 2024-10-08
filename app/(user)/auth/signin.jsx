import React, { useContext, useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { AppContext } from "../../../src/providers/AppProvider";
import { Link, router } from "expo-router";

export default function SignIn() {
  const { clearAppData } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    // Add your sign-in logic here
    console.log("Email:", email);
    console.log("Password:", password);
    router.replace("/(user)/dashboard");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Sign In Button */}
      <Pressable style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </Pressable>

      {/* Clear Data Button */}
      <Pressable
        style={styles.clearButton}
        onPress={() => {
          clearAppData();
        }}
      >
        <Text style={styles.clearButtonText}>Clear Data</Text>
      </Pressable>

      <Text
        style={{
          textAlign: "center",
          marginTop: 16,
          color: "#333",
        }}
      >
        Don't have an account?{" "}
        <Link href="/auth/signup" replace>
          Sign Up
        </Link>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 32,
  },
  input: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 16,
    fontSize: 16,
  },
  signInButton: {
    backgroundColor: "#ee0f55",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  signInButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  clearButton: {
    marginTop: 16,
    alignItems: "center",
    paddingVertical: 10,
  },
  clearButtonText: {
    color: "#777",
    fontSize: 16,
  },
});
