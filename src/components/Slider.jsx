import React, { useState, useRef, useEffect } from "react";
import { FlatList, View, Dimensions, StyleSheet } from "react-native";

export const Slider = ({ children, dotStyle = {}, activeDotStyle = {} }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    Dimensions.get("window").width
  ); // Track window width

  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  });

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  // Add event listener for orientation changes
  useEffect(() => {
    const handleDimensionsChange = () => {
      const { width } = Dimensions.get("window");
      setWindowWidth(width); // Update state with new width
      console.log("Window Width:", width);
    };

    // Listen to orientation changes
    const subscription = Dimensions.addEventListener(
      "change",
      handleDimensionsChange
    );

    return () => {
      // Clean up listener on component unmount
      if (subscription?.remove) {
        subscription.remove(); // For React Native >= 0.65
      } else {
        Dimensions.removeEventListener("change", handleDimensionsChange); // For older versions
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={React.Children.toArray(children)} // Convert children to an array
        renderItem={({ item }) => item} // Render the individual slide (which is already styled)
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        getItemLayout={(data, index) => ({
          length: windowWidth,
          offset: windowWidth * index,
          index,
        })}
      />

      {/* Dots for Tracking Slides */}
      <View style={styles.dotsContainer}>
        {React.Children.toArray(children).map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              dotStyle,
              currentIndex === index ? [styles.activeDot, activeDotStyle] : {},
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export const Slide = ({ children }) => {
  const windowWidth = Dimensions.get("window").width;
  return <View style={[styles.slide, { width: windowWidth }]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dotsContainer: {
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: "#eee",
  },
  activeDot: {
    backgroundColor: "#ee0f55",
  },

  slide: {
    justifyContent: "center",
    alignItems: "center",
  },
});
