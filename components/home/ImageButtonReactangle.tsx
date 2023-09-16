import { Pressable, Dimensions } from "react-native";
import React from "react";
import { router } from "expo-router";
import { XStack, Text, Stack } from "tamagui";
import { Image } from "expo-image";

const { width, height } = Dimensions.get("screen");

const ImageButtonReactangle = ({ source, onPress, text, bgcolor }) => {
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  return (
    <Image
      style={{
        width: width * 0.44,
        height: width * 0.2,
        borderRadius: 10,
      }}
      placeholder={blurhash}
      contentFit="cover"
      transition={1000}
      source={source}
    >
      <XStack f={1}>
        <Pressable
          onPress={onPress}
          style={{ flex: 1, justifyContent: "flex-end" }}
        >
          <Stack bg={bgcolor} br={20}>
            <Text p={16} color={"white"} fontSize={16} fontWeight={"700"}>
              {text}
            </Text>
          </Stack>
        </Pressable>
      </XStack>
    </Image>
  );
};

export default ImageButtonReactangle;