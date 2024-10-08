import React, { useRef, useState } from "react";
import { View, Text, Dimensions, FlatList, StyleSheet } from "react-native";
import { Link } from "expo-router";

const { width } = Dimensions.get("window");

export default function StarterPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Add the final "Get Started" slide to the array
  const slides = [
    {
      text: "Welcome to FlexFit! Track your workouts and nutrition easily.",
    },
    {
      text: "Sync across all devices. No matter the fitness device you use.",
    },
    {
      text: "Achieve your fitness goals faster with personalized plans.",
    },
    {
      text: "Join the community and share your progress with others!",
    },
    {
      text: "Get Started with FlexFit!", // Final slide
    },
  ];

  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  });

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  const renderSlide = ({ item, index }) => (
    <View style={styles.slide}>
      <Text style={styles.slideText}>{item.text}</Text>

      {/* Show buttons on the last slide */}
      {index === slides.length - 1 && (
        <View style={styles.buttonsContainer}>
          <Link href="/(user)/auth/signup" style={styles.button} replace>
            <Text style={styles.buttonText}>Sign Up</Text>
          </Link>
          <Link href="/(user)/auth/signin" style={styles.button} replace>
            <Text style={styles.buttonText}>Sign In</Text>
          </Link>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        renderItem={renderSlide}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
      />

      {/* Dots for Tracking Slides */}
      <View style={styles.dotsContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  slide: {
    width,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  slideText: {
    fontSize: 24,
    textAlign: "center",
    color: "#333",
  },
  buttonsContainer: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  button: {
    backgroundColor: "#ee0f55",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  dotsContainer: {
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#ee0f55",
  },
  inactiveDot: {
    backgroundColor: "#bbb",
  },
});
