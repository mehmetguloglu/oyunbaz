import { Dimensions } from "react-native";
import React from "react";
import { Stack } from "tamagui";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
const { width, height } = Dimensions.get("screen");
const AnimatedStack = Animated.createAnimatedComponent(Stack);
const Snake = () => {
  const isPressed = useSharedValue(false);
  const offset = useSharedValue({ x: 0, y: 0 });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: offset.value.x },
        { translateY: offset.value.y },
      ],
    };
  });

  const gesture = Gesture.Pan()
    .onBegin((e) => {
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
    .onFinalize((e) => {
      ("worklet");
      isPressed.value = false;
    });

  return (
    <Stack f={1}>
      <GestureDetector gesture={gesture}>
        <AnimatedStack
          style={animatedStyles}
          width={30}
          height={30}
          bg={"black"}
          br={15}
        />
      </GestureDetector>
    </Stack>
  );
};

export default Snake;
