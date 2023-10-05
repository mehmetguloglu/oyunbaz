import { View, Dimensions } from "react-native";
import React from "react";
import { Stack, Text, YStack } from "tamagui";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Card = ({ number, type }) => {
  return (
    <View
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 3,
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
            {number < 11 && number > 1
              ? number
              : number == 11
              ? "J"
              : number == 12
              ? "Q"
              : number == 13
              ? "K"
              : number == 1
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
          size={36}
          color={type == 0 || type == 2 ? "red" : "black"}
        />
      </Stack>

      <YStack alignItems="flex-end" jc={"flex-end"}>
        <YStack rotate="180deg" ai="center">
          <Text
            fos={16}
            color={type == 0 || type == 2 || !type ? "red" : "black"}
          >
            {number < 11 && number > 1
              ? number
              : number == 11
              ? "J"
              : number == 12
              ? "Q"
              : number == 13
              ? "K"
              : number == 1
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
