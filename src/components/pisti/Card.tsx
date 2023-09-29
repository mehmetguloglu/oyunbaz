import { View, Dimensions, Pressable } from "react-native";
import React from "react";
import { Button, Stack, Text, XStack, YStack } from "tamagui";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { orderBy } from "lodash";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const { width, height } = Dimensions.get("screen");

const Card = ({
  pos = -1,
  number = 13,
  type = null,
  index = 1,
  onPress = () => {},
  disabled = false,
  setDisabled = null,
}) => {
  const cardPosY = useSharedValue(100);
  const cardPosX = useSharedValue(index * 35);
  const cardAnimatedStyle = useAnimatedStyle(() => {
    return {
      top: cardPosY.value == 100 ? 100 : withTiming(cardPosY.value),
      left: index * 35,
    };
  });
  return (
    <Animated.View
      style={[
        {
          position: "absolute",
          // transform: [{ rotate: `${(index - 3) * 4}deg` }],
          zIndex: index,
        },
        cardAnimatedStyle,
      ]}
      key={index}
    >
      <Pressable
        style={{ flex: 1 }}
        onPress={() => {
          setDisabled != null ? setDisabled(true) : null;
          cardPosY.value = (height / 2 - 150) * pos;
          onPress();
          setTimeout(() => {
            setDisabled != null ? setDisabled(false) : null;
          }, 3600);
        }}
        disabled={disabled}
      >
        <View
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
            padding: 8,
            width: 90,
            borderRadius: 15,
            height: 150,
            backgroundColor: "white",
          }}
        >
          <YStack alignItems="flex-start" jc={"flex-start"}>
            <YStack ai="center">
              <Text
                fos={16}
                color={type == 0 || type == 2 || !type ? "red" : "black"}
              >
                {number < 9
                  ? number + 2
                  : number == 9
                  ? "J"
                  : number == 10
                  ? "Q"
                  : number == 11
                  ? "K"
                  : number == 12
                  ? "A"
                  : null}
              </Text>
              <MaterialCommunityIcons
                name={
                  type == 0
                    ? "cards-diamond"
                    : type == 2
                    ? "cards-heart"
                    : type == 1
                    ? "cards-club"
                    : type == 3
                    ? "cards-spade"
                    : null
                }
                size={16}
                color={type == 0 || type == 2 ? "red" : "black"}
              />
            </YStack>
          </YStack>

          <Stack alignItems="center" jc="center" f={1}>
            <MaterialCommunityIcons
              name={
                type == 0
                  ? "cards-diamond"
                  : type == 2
                  ? "cards-heart"
                  : type == 1
                  ? "cards-club"
                  : type == 3
                  ? "cards-spade"
                  : "cards"
              }
              size={type != null ? 36 : 50}
              color={type == 0 || type == 2 || type == null ? "red" : "black"}
            />
          </Stack>

          <YStack alignItems="flex-end" jc={"flex-end"}>
            <YStack rotate="180deg" jc="center" ai="center">
              <Text
                fos={16}
                color={type == 0 || type == 2 || !type ? "red" : "black"}
              >
                {number < 9
                  ? number + 2
                  : number == 9
                  ? "J"
                  : number == 10
                  ? "Q"
                  : number == 11
                  ? "K"
                  : number == 12
                  ? "A"
                  : null}
              </Text>
              <MaterialCommunityIcons
                name={
                  type == 0
                    ? "cards-diamond"
                    : type == 2
                    ? "cards-heart"
                    : type == 1
                    ? "cards-club"
                    : type == 3
                    ? "cards-spade"
                    : null
                }
                size={16}
                color={type == 0 || type == 2 || !type ? "red" : "black"}
              />
            </YStack>
          </YStack>
        </View>
      </Pressable>
    </Animated.View>
  );
};
export default Card;
