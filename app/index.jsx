import { View } from "react-native";
import { Image } from "expo-image";
import React, { useContext, useEffect } from "react";
import { AppContext } from "../src/providers/AppProvider";
import { useRouter } from "expo-router";
import { ActivityIndicator } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from "react-native-reanimated";

export default function HomePage() {
  const { isFirstTime, isAuthenticated } = useContext(AppContext);
  const router = useRouter();

  const opacity = useSharedValue(1);

  useEffect(() => {
    const animationTimer = setTimeout(() => {
      opacity.value = withTiming(0, { duration: 1000 });
    }, 4000);
    // Start the fade-out effect after 7 seconds, transition at 8 seconds
    const navigationTimer = setTimeout(() => {
      if (isFirstTime === true) {
        router.replace("/starter");
      } else if (isAuthenticated === true) {
        router.replace("/(user)/dashboard");
      } else {
        router.replace("/(user)/auth/signin");
      }
    }, 5000); // Wait for 7 seconds before starting fade-out
    return () => {
      clearTimeout(animationTimer);
      clearTimeout(navigationTimer);
    }; // Clean up timer on unmount
  }, [isFirstTime, isAuthenticated, opacity, router]);

  // Animated style for opacity
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  // Show loading while checking the first-time and authentication status
  return (
    <Animated.View
      style={[
        {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        },
        animatedStyle, // Apply animated opacity style here
      ]}
    >
      {/* Background Image */}
      <Image
        style={{
          flex: 1,
          width: "100%",
        }}
        source="https://ik.imagekit.io/z1gqwes5lg/public/app/bg.png?updatedAt=1728346957158"
        contentFit="cover"
        contentPosition="top"
        transition={1000}
      />
      {/* Overlay Image */}
      <Image
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
        source="https://ik.imagekit.io/z1gqwes5lg/public/app/bg-overlay.png?updatedAt=1728346956483"
        contentFit="cover"
        transition={3000}
      />
      {/* Logo */}
      <Image
        style={{
          width: "80%",
          height: "80%",
          position: "absolute",
          zIndex: 1,
        }}
        source="https://ik.imagekit.io/z1gqwes5lg/public/app/flex-fit-logo.png?updatedAt=1728346956050"
        contentFit="contain"
        transition={{
          duration: 2000,
          timing: "ease-in",
          effect: "cross-dissolve",
        }}
      />
      {/* Loading Spinner */}
      <ActivityIndicator
        size="large"
        color="#ee0f55"
        style={{ position: "absolute", bottom: 40, zIndex: 2 }}
      />
    </Animated.View>
  );
}
