import React from "react";
import { Stack } from "expo-router";
import { AppProvider } from "../src/providers/AppProvider"; // Import your context provider

export default function RootLayout({ children }) {
  return (
    <AppProvider>
      <Stack
        screenOptions={{
          statusBarColor: "#000",
          headerShown: false, // Customize if needed
          backgroundColor: "#fff",
        }}
      >
        {children}
      </Stack>
    </AppProvider>
  );
}
