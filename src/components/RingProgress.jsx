import { View } from "react-native";
import Svg, { Circle } from "react-native-svg";
import Animated, { useAnimatedProps } from "react-native-reanimated";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const RingProgress = ({ progress, radius = 100, strokeWidth = 35 }) => {
  const adjustedRadius = radius - strokeWidth / 2; // Adjust for stroke width
  const circumference = 2 * Math.PI * adjustedRadius;

  const animatedProps = useAnimatedProps(() => ({
    strokeDasharray: [circumference * progress, circumference],
  }));

  const color = "#ee0f55";

  return (
    <View
      style={{
        width: radius * 2,
        height: radius * 2,
        alignSelf: "center",
      }}
    >
      <Svg width={radius * 2} height={radius * 2}>
        {/* Background Circle */}
        <Circle
          cx={radius}
          cy={radius}
          r={adjustedRadius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          opacity={0.2}
        />
        {/* Foreground Progress Circle */}
        <AnimatedCircle
          animatedProps={animatedProps}
          cx={radius}
          cy={radius}
          r={adjustedRadius}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="none"
          rotation="-90"
          origin={`${radius}, ${radius}`}
        />
      </Svg>
    </View>
  );
};

export default RingProgress;
