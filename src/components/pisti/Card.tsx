import { View, Dimensions, Pressable } from "react-native";
import React from "react";
import { Stack, Text, XStack, YStack } from "tamagui";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");

const Card = ({ number, type = null }) => {
  return (
    <View
      style={{
        position: "absolute",
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
            {number < 10
              ? number + 1
              : number == 10
              ? "J"
              : number == 11
              ? "Q"
              : number == 12
              ? "K"
              : number == 13
              ? "A"
              : null}
          </Text>
          <MaterialCommunityIcons
            name={
              type == 0
                ? "cards-heart"
                : type == 1
                ? "cards-spade"
                : type == 2
                ? "cards-diamond"
                : type == 3
                ? "cards-club"
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
              ? "cards-heart"
              : type == 1
              ? "cards-spade"
              : type == 2
              ? "cards-diamond"
              : type == 3
              ? "cards-club"
              : null
          }
          size={type != null ? 36 : 50}
          color={type == 0 || type == 2 || type == null ? "red" : "black"}
        />
      </Stack>

      <YStack alignItems="flex-end" jc={"flex-end"}>
        <YStack rotate="180deg" ai="center">
          <Text
            fos={16}
            color={type == 0 || type == 2 || !type ? "red" : "black"}
          >
            {number < 10
              ? number + 1
              : number == 10
              ? "J"
              : number == 11
              ? "Q"
              : number == 12
              ? "K"
              : number == 13
              ? "A"
              : null}
          </Text>
          <MaterialCommunityIcons
            name={
              type == 0
                ? "cards-heart"
                : type == 1
                ? "cards-spade"
                : type == 2
                ? "cards-diamond"
                : type == 3
                ? "cards-club"
                : null
            }
            size={16}
            color={type == 0 || type == 2 || !type ? "red" : "black"}
          />
        </YStack>
      </YStack>
    </View>
  );
};
export default Card;
