import { View } from "react-native";
import Svg, { Circle } from "react-native-svg";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import { AntDesign } from "@expo/vector-icons";
import { useEffect } from "react";
import chroma from "chroma-js"; // You can install chroma using 'npm install chroma-js'

const RingProgress = ({
  progress,
  radius = 100,
  strokeWidth = 35,
  style = {},
  colorScheme = [],
}) => {
  const totalProgress = progress; // e.g., 1.5 for 150%

  // Split progress into full rings (integer part) and remaining (decimal part)
  const numberOfFullRings = Math.floor(totalProgress); // Full 100% rings (integer part)
  const remainingProgress = (totalProgress % 1) * 100; // Convert decimal part to percentage (0.x -> x%)

  // Create an array representing progress for each ring
  const ringProgresses = [
    ...Array(numberOfFullRings).fill(100), // Fill with full 100% rings
    remainingProgress, // Add the remaining progress as the last ring
  ];

  let colorScaleOptions = [];

  let defaultColorScheme = ["#e01e37", "#ffba08", "#00b4d8"];
  if (colorScheme && colorScheme.length > 0) {
    colorScaleOptions = colorScheme;
  } else {
    colorScaleOptions = defaultColorScheme;
  }
  colorScaleOptions = colorScaleOptions.slice(0, ringProgresses.length);

  // Create a color scale from baseColor to targetColor
  const colorScale = chroma
    .scale(colorScaleOptions)
    .colors(ringProgresses.length);

  return (
    <View
      style={{
        width: radius * 2,
        height: radius * 2,
        alignSelf: "center",
        ...style,
      }}
    >
      {ringProgresses.map((ringProgress, index) => (
        <Ring
          key={index}
          progress={ringProgress / 100} // Convert to 0-1 range for the Ring component
          radius={radius}
          strokeWidth={strokeWidth}
          color={colorScale[index]} // Dynamically assign the interpolated color
          base={index === 0} // Only show base for the first ring
          delay={index * 1000} // Delay animation for each ring
        />
      ))}
    </View>
  );
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const Ring = ({
  progress,
  radius = 2,
  strokeWidth = 35,
  color = "#ee0f55",
  base = false,
  delay = 0,
}) => {
  const adjustedRadius = radius - strokeWidth / 2; // Adjust for stroke width
  const circumference = 2 * Math.PI * adjustedRadius;

  const circleDefaultProps = {
    cx: radius,
    cy: radius,
    r: adjustedRadius,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    fill: "none",
    rotation: "-90",
    origin: `${radius}, ${radius}`,
  };
  const fill = useSharedValue(0);

  const animatedProps = useAnimatedProps(() => ({
    strokeDasharray: [circumference * fill.value, circumference],
  }));

  useEffect(() => {
    fill.value = withDelay(delay, withTiming(progress, { duration: 1000 }));
  }, [progress]);

  return (
    <View
      style={{
        position: "absolute",
        width: radius * 2,
        height: radius * 2,
        alignSelf: "center",
      }}
    >
      <Svg width={radius * 2} height={radius * 2}>
        {/* Background Circle */}
        {base && (
          <Circle {...circleDefaultProps} stroke={color} opacity={0.2} />
        )}
        {/* Foreground Progress Circle */}
        <AnimatedCircle
          {...circleDefaultProps}
          stroke={color}
          animatedProps={animatedProps}
          elevation={10}
        />
      </Svg>

      <AntDesign
        name="arrowright"
        size={strokeWidth * 0.6}
        color="#000"
        style={{
          position: "absolute",
          alignSelf: "center",
          top: strokeWidth * 0.2,
        }}
      />
    </View>
  );
};

// const Ring = ({
//   progress,
//   color,
//   radius = (radius = 2),
//   strokeWidth = 35,
// }) => {};

export default RingProgress;
