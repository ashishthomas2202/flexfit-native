import { View, Text } from "react-native";
import React from "react";
import { Slider, Slide } from "../../src/components/Slider";
import { Image } from "expo-image";
import { Link } from "expo-router";

export default function StarterPage() {
  return (
    <Slider>
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <Slide4 />
    </Slider>
  );
}

const Slide1 = () => {
  return (
    <Slide>
      <Image
        style={{
          flex: 1,
          width: "100%",
          opacity: 0.6,
        }}
        source="https://ik.imagekit.io/z1gqwes5lg/public/app/slide1.png?updatedAt=1728369157725"
        contentFit="cover"
        transition={1000}
      />
      {/* Overlay Image */}
      <Image
        style={{
          width: "100%",
          height: "100%",
          opacity: 0.6,
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
        source="https://ik.imagekit.io/z1gqwes5lg/public/app/bg-overlay.png?updatedAt=1728346956483"
        contentFit="cover"
        transition={1000}
      />
      <View
        style={{
          top: 0,
          position: "absolute",
          width: "100%",
          zIndex: 2,
          elevation: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: 30,
            textAlign: "center",
            color: "#fff",
            marginTop: 40,
          }}
        >
          FlexFit
        </Text>
      </View>
      <View
        style={{
          position: "absolute",
          paddingHorizontal: 15,
          zIndex: 2,
          elevation: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          bottom: "12%",
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: 30,
            textAlign: "center",
            color: "#fff",
            marginBottom: 20,
          }}
        >
          Welcome to FlexFit!
        </Text>

        <Text
          style={{
            color: "#fff",
            fontWeight: "200",
            fontSize: 20,
            textAlign: "center",
            color: "#fff",
          }}
        >
          Track your workouts and nutrition effortlessly. Sync across devices
          and stay on top of your fitness goals.
        </Text>
      </View>
    </Slide>
  );
};
const Slide2 = () => {
  return (
    <Slide>
      <Image
        style={{
          flex: 1,
          width: "100%",
          opacity: 0.6,
        }}
        source="https://ik.imagekit.io/z1gqwes5lg/public/app/slide2(1).png?updatedAt=1728369592800"
        contentFit="cover"
        transition={1000}
      />
      {/* Overlay Image */}
      <Image
        style={{
          width: "100%",
          height: "100%",
          opacity: 0.6,
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
        source="https://ik.imagekit.io/z1gqwes5lg/public/app/bg-overlay.png?updatedAt=1728346956483"
        contentFit="cover"
        transition={1000}
      />
      <View
        style={{
          top: 0,
          position: "absolute",
          width: "100%",
          zIndex: 2,
          elevation: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: 30,
            textAlign: "center",
            marginTop: 40,
          }}
        >
          FlexFit
        </Text>
      </View>
      <View
        style={{
          position: "absolute",
          paddingHorizontal: 15,
          zIndex: 2,
          elevation: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          bottom: "12%",
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: 30,
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          Tailored Fitness Plans
        </Text>

        <Text
          style={{
            color: "#fff",
            fontWeight: "200",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          Get customized workout and nutrition plans based on your fitness
          goals. No matter the device, your progress syncs seamlessly.
        </Text>
      </View>
    </Slide>
  );
};

const Slide3 = () => {
  return (
    <Slide>
      <Image
        style={{
          flex: 1,
          width: "100%",
          opacity: 0.6,
        }}
        source="https://ik.imagekit.io/z1gqwes5lg/public/app/roommates-sharing-happy-moments-together%201.png?updatedAt=1728372943618"
        contentFit="cover"
        transition={1000}
      />
      {/* Overlay Image */}
      <Image
        style={{
          width: "100%",
          height: "100%",
          opacity: 0.6,
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
        source="https://ik.imagekit.io/z1gqwes5lg/public/app/bg-overlay.png?updatedAt=1728346956483"
        contentFit="cover"
        transition={1000}
      />
      <View
        style={{
          position: "absolute",
          width: "100%",
          zIndex: 2,
          top: 0,
          paddingHorizontal: 15,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: 30,
            textAlign: "center",
            marginTop: 40,
          }}
        >
          FlexFit
        </Text>
      </View>

      <View
        style={{
          position: "absolute",
          paddingHorizontal: 15,
          zIndex: 2,
          bottom: "12%",
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: 30,
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          Share and Grow Together
        </Text>

        <Text
          style={{
            color: "#fff",
            fontWeight: "200",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          Connect with fellow fitness enthusiasts, share your progress, and
          motivate each other to reach new heights.
        </Text>
      </View>
    </Slide>
  );
};

const Slide4 = () => {
  return (
    <Slide>
      <Image
        style={{
          flex: 1,
          width: "100%",
          opacity: 0.6,
        }}
        source="https://ik.imagekit.io/z1gqwes5lg/public/app/workout-fitness-sport-concept-cheerful-mixed-race-couple-have-workout-raise-arms-with-dumbbells-hold-mats-have-training-gym-sporty-family-go-sport-together-healthy-lifestyle%201(1).png?updatedAt=1728374022903"
        contentFit="cover"
        transition={1000}
      />
      {/* Overlay Image */}
      <Image
        style={{
          width: "100%",
          height: "100%",
          opacity: 0.6,
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
        source="https://ik.imagekit.io/z1gqwes5lg/public/app/bg-overlay.png?updatedAt=1728346956483"
        contentFit="cover"
        transition={1000}
      />
      <View
        style={{
          position: "absolute",
          width: "100%",
          zIndex: 2,
          top: 0,
          paddingHorizontal: 15,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: 30,
            textAlign: "center",
            marginTop: 40,
          }}
        >
          FlexFit
        </Text>
      </View>

      <View
        style={{
          position: "absolute",
          paddingHorizontal: 15,
          zIndex: 2,
          bottom: "12%",
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: 30,
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          Ready to Get Started?
        </Text>

        <Text
          style={{
            color: "#fff",
            fontWeight: "200",
            fontSize: 20,
            textAlign: "center",
            marginBottom: 30,
          }}
        >
          Sign up to start your fitness journey or sign in to continue.
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            gap: 16,
          }}
        >
          <Link
            href="/auth/signup"
            style={{
              textAlign: "center",
              backgroundColor: "#ee0f55",
              paddingVertical: 8,
              borderRadius: 6,
              flex: 1,
            }}
            replace
          >
            <Text style={{ color: "#fff", fontSize: 16, textAlign: "center" }}>
              Sign Up
            </Text>
          </Link>
          <Link
            href="/auth/signin"
            style={{
              textAlign: "center",
              backgroundColor: "#fff",
              paddingVertical: 8,
              borderRadius: 6,
              flex: 1,
            }}
            replace
          >
            <Text
              style={{ color: "#ee0f55", fontSize: 16, textAlign: "center" }}
            >
              Sign In
            </Text>
          </Link>
        </View>
      </View>
    </Slide>
  );
};

// import React, { useRef, useState } from "react";
// import {
//   View,
//   Text,
//   Dimensions,
//   FlatList,
//   StyleSheet,
//   Image,
// } from "react-native";
// import { Link } from "expo-router";

// const { width } = Dimensions.get("window");

// export default function StarterPage() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Each slide can now have different content layouts
//   const slides = [
//     {
//       component: (
//         <View style={styles.layoutOne}>
//           <Image
//             style={styles.image}
//             source={{ uri: "https://via.placeholder.com/300" }}
//           />
//           <Text style={styles.slideText}>Welcome to FlexFit!</Text>
//         </View>
//       ),
//     },
//     {
//       component: (
//         <View style={styles.layoutTwo}>
//           <Text style={styles.slideText}>
//             Sync across all devices, no matter the fitness device you use.
//           </Text>
//         </View>
//       ),
//     },
//     {
//       component: (
//         <View style={styles.layoutThree}>
//           <Image
//             style={styles.image}
//             source={{ uri: "https://via.placeholder.com/150" }}
//           />
//           <Text style={styles.slideText}>
//             Achieve your fitness goals faster.
//           </Text>
//         </View>
//       ),
//     },
//     {
//       component: (
//         <View style={styles.layoutFour}>
//           <Text style={styles.slideText}>Join the community!</Text>
//           <Image
//             style={styles.image}
//             source={{ uri: "https://via.placeholder.com/200" }}
//           />
//         </View>
//       ),
//     },
//     {
//       component: (
//         <View style={styles.layoutFive}>
//           <Text style={styles.slideText}>Get Started with FlexFit!</Text>
//           <View style={styles.buttonsContainer}>
//             <Link href="/(user)/auth/signup" style={styles.button} replace>
//               <Text style={styles.buttonText}>Sign Up</Text>
//             </Link>
//             <Link href="/(user)/auth/signin" style={styles.button} replace>
//               <Text style={styles.buttonText}>Sign In</Text>
//             </Link>
//           </View>
//         </View>
//       ),
//     },
//   ];

//   const onViewRef = useRef(({ viewableItems }) => {
//     if (viewableItems.length > 0) {
//       setCurrentIndex(viewableItems[0].index);
//     }
//   });

//   const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

//   const renderSlide = ({ item }) => (
//     <View style={styles.slide}>{item.component}</View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={slides}
//         renderItem={renderSlide}
//         keyExtractor={(item, index) => index.toString()}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         onViewableItemsChanged={onViewRef.current}
//         viewabilityConfig={viewConfigRef.current}
//       />

//       {/* Dots for Tracking Slides */}
//       <View style={styles.dotsContainer}>
//         {slides.map((_, index) => (
//           <View
//             key={index}
//             style={[
//               styles.dot,
//               currentIndex === index ? styles.activeDot : styles.inactiveDot,
//             ]}
//           />
//         ))}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   slide: {
//     width,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
//   slideText: {
//     fontSize: 24,
//     textAlign: "center",
//     color: "#333",
//   },
//   image: {
//     width: 150,
//     height: 150,
//     marginBottom: 20,
//   },
//   buttonsContainer: {
//     marginTop: 40,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: "60%",
//   },
//   button: {
//     backgroundColor: "#ee0f55",
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 18,
//   },
//   dotsContainer: {
//     position: "absolute",
//     bottom: 20,
//     flexDirection: "row",
//     justifyContent: "center",
//     width: "100%",
//   },
//   dot: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     marginHorizontal: 5,
//   },
//   activeDot: {
//     backgroundColor: "#ee0f55",
//   },
//   inactiveDot: {
//     backgroundColor: "#bbb",
//   },
//   layoutOne: {
//     alignItems: "center",
//   },
//   layoutTwo: {
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f0f0f0",
//     padding: 40,
//   },
//   layoutThree: {
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#d4edda",
//     padding: 20,
//   },
//   layoutFour: {
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f8d7da",
//     padding: 30,
//   },
//   layoutFive: {
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#fff3cd",
//     padding: 50,
//   },
// });

// import React, { useRef, useState } from "react";
// import { View, Text, Dimensions, FlatList, StyleSheet } from "react-native";
// import { Link } from "expo-router";

// const { width } = Dimensions.get("window");

// export default function StarterPage() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Add the final "Get Started" slide to the array
//   const slides = [
//     {
//       text: "Welcome to FlexFit! Track your workouts and nutrition easily.",
//     },
//     {
//       text: "Sync across all devices. No matter the fitness device you use.",
//     },
//     {
//       text: "Achieve your fitness goals faster with personalized plans.",
//     },
//     {
//       text: "Join the community and share your progress with others!",
//     },
//     {
//       text: "Get Started with FlexFit!", // Final slide
//     },
//   ];

//   const onViewRef = useRef(({ viewableItems }) => {
//     if (viewableItems.length > 0) {
//       setCurrentIndex(viewableItems[0].index);
//     }
//   });

//   const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

//   const renderSlide = ({ item, index }) => (
//     <View style={styles.slide}>
//       <Text style={styles.slideText}>{item.text}</Text>

//       {/* Show buttons on the last slide */}
//       {index === slides.length - 1 && (
//         <View style={styles.buttonsContainer}>
//           <Link href="/(user)/auth/signup" style={styles.button} replace>
//             <Text style={styles.buttonText}>Sign Up</Text>
//           </Link>
//           <Link href="/(user)/auth/signin" style={styles.button} replace>
//             <Text style={styles.buttonText}>Sign In</Text>
//           </Link>
//         </View>
//       )}
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={slides}
//         renderItem={renderSlide}
//         keyExtractor={(item, index) => index.toString()}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         onViewableItemsChanged={onViewRef.current}
//         viewabilityConfig={viewConfigRef.current}
//       />

//       {/* Dots for Tracking Slides */}
//       <View style={styles.dotsContainer}>
//         {slides.map((_, index) => (
//           <View
//             key={index}
//             style={[
//               styles.dot,
//               currentIndex === index ? styles.activeDot : styles.inactiveDot,
//             ]}
//           />
//         ))}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   slide: {
//     width,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
//   slideText: {
//     fontSize: 24,
//     textAlign: "center",
//     color: "#333",
//   },
//   buttonsContainer: {
//     marginTop: 40,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: "60%",
//   },
//   button: {
//     backgroundColor: "#ee0f55",
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 18,
//   },
//   dotsContainer: {
//     position: "absolute",
//     bottom: 20,
//     flexDirection: "row",
//     justifyContent: "center",
//     width: "100%",
//   },
//   dot: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     marginHorizontal: 5,
//   },
//   activeDot: {
//     backgroundColor: "#ee0f55",
//   },
//   inactiveDot: {
//     backgroundColor: "#bbb",
//   },
// });
