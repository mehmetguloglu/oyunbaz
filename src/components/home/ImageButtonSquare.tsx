import { Dimensions, Pressable } from "react-native";
import React from "react";
import { Image, ImageBackground } from "expo-image";
import { Stack, XStack, Text } from "tamagui";
import { router } from "expo-router";
const { width, height } = Dimensions.get("screen");

const ImageButtonSquare = ({ source, onPress, text, bgcolor }) => {
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  return (
    <ImageBackground
      style={{
        width: width * 0.44,
        height: width * 0.44,
        borderRadius: width * 0.05,
        overflow: "hidden",
      }}
      placeholder={blurhash}
      contentFit="cover"
      transition={1000}
      source={source}
    >
      <XStack f={1}>
        <Pressable
          onPress={onPress}
          style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}
        >
          <Stack px={12} py={8} br={width * 0.1} bg={bgcolor}>
            <Text ta="center" color={"white"} fontSize={16} fontWeight={"700"}>
              {text}
            </Text>
          </Stack>
        </Pressable>
      </XStack>
    </ImageBackground>
  );
};

export default ImageButtonSquare;
