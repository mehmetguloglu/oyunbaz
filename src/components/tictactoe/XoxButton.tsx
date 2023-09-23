import { View, Text, Dimensions } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Button } from "tamagui";
import { Image } from "expo-image";
const AnimatedImage = Animated.createAnimatedComponent(Image);

const { width, height } = Dimensions.get("screen");
const XoxButton = ({ item, idx, index, _handlePress, gameover }) => {
  const textScale = useSharedValue(0);

  const textAniStyle = useAnimatedStyle(() => {
    "worklet";
    return {
      transform: [{ scale: withSpring(textScale.value) }],
    };
  });

  useEffect(() => {
    if (gameover) textScale.value = 0;
  }, [gameover]);

  return (
    <Button
      m={2}
      alignItems="center"
      jc="center"
      p={0}
      key={index}
      bg={"white"}
      height={Math.floor(height / 8.1)}
      width={Math.floor(width / 3.0)}
      onPress={() => {
        _handlePress({ rowIndex: idx, colIndex: index });
        textScale.value = 1;
      }}
      disabled={item != 0 || gameover}
    >
      {gameover ? (
        <Image
          source={
            item == 1
              ? require("../../assets/tictactoe/x.png")
              : item == 2
              ? require("../../assets/tictactoe/o.png")
              : null
          }
          style={{
            width: 40,
            height: 40,
          }}
        />
      ) : (
        <AnimatedImage
          source={
            item == 1
              ? require("../../assets/tictactoe/x.png")
              : item == 2
              ? require("../../assets/tictactoe/o.png")
              : null
          }
          style={[
            ,
            textAniStyle,
            {
              width: 40,
              height: 40,
            },
          ]}
        />
      )}
    </Button>
  );
};

export default XoxButton;
