import React from "react";
import { StyleSheet, View } from "react-native";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

function Ball() {
  const isPressed = useSharedValue(false);
  const offset = useSharedValue({ x: 0, y: 0 });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: offset.value.x },
        { translateY: offset.value.y },
        { scale: withSpring(isPressed.value ? 1.2 : 1) },
      ],
      backgroundColor: isPressed.value ? "darkred" : "blue",
    };
  });

  const gesture = Gesture.Pan()
    .onBegin(() => {
      "worklet";
      isPressed.value = true;
    })
    .onChange((e) => {
      "worklet";
      offset.value = {
        x: e.changeX + offset.value.x,
        y: e.changeY + offset.value.y,
      };
    })
    .onFinalize(() => {
      "worklet";
      isPressed.value = false;
    });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.ball, animatedStyles]} />
    </GestureDetector>
  );
}

export default function Example() {
  return (
    <View style={styles.container}>
      <Ball />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ball: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: "blue",
    alignSelf: "center",
  },
});

// import { View, Text, SafeAreaView, Dimensions } from "react-native";
// import React from "react";
// import { Button, Stack, XStack } from "tamagui";
// import Animated, {
//   useAnimatedStyle,
//   useSharedValue,
//   withSpring,
//   withTiming,
// } from "react-native-reanimated";
// const { width, height } = Dimensions.get("window");
// const CarkGame = () => {
//   const position = 30;
//   const rotate = useSharedValue("0deg");
//   const left = useSharedValue(width / 2);
//   const bottom = useSharedValue(height / 2);

//   const TankAniStyle = useAnimatedStyle(() => {
//     return {
//       transform: [{ rotateY: rotate.value }],
//       left: left.value,
//       bottom: bottom.value,
//     };
//   });

//   return (
//     <>
//       <SafeAreaView style={{ flex: 1, justifyContent: "flex-end" }}>
//         <XStack>
//           <Button
//             onPress={() => (left.value = withTiming(left.value - position))}
//           >
//             <Text>Sol</Text>
//           </Button>
//           <Button
//             onPress={() => (bottom.value = withTiming(bottom.value - position))}
//           >
//             <Text>aşağı</Text>
//           </Button>
//           <Button
//             onPress={() => (bottom.value = withTiming(bottom.value + position))}
//           >
//             <Text>yukarı</Text>
//           </Button>
//           <Button
//             onPress={() => (left.value = withTiming(left.value + position))}
//           >
//             <Text>sağ</Text>
//           </Button>
//         </XStack>
//       </SafeAreaView>
//       <Animated.Image
//         source={require("../../assets/tank.png")}
//         style={[
//           {
//             width: 50,
//             height: 50,
//             position: "absolute",
//           },
//           TankAniStyle,
//         ]}
//       />
//     </>
//   );
// };

// export default CarkGame;
