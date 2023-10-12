import { View, SafeAreaView, Dimensions } from "react-native";
import React, { useState } from "react";
import { Button, Stack, Text } from "tamagui";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Image, ImageBackground } from "expo-image";
import BannerAds from "../../components/google-ads/BannerAds";
import ExitButton from "../../components/ExitButton";
import { buttonBlue } from "../../utils/colors";
const { width, height } = Dimensions.get("screen");
const AnimatedImage = Animated.createAnimatedComponent(Image);

const SpinBottleGame = () => {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const ImageRotate = useSharedValue("0deg");

  const ImageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: ImageRotate.value }],
    };
  });

  return (
    <Stack f={1} bg={"#fdf5e6"}>
      <ExitButton />
      <SafeAreaView style={{ flex: 1 }}>
        <Stack f={1} ai="center" jc="center">
          <AnimatedImage
            source={require("../../assets/spin-bottle/spinBottle.png")}
            contentFit={"fill"}
            style={[
              {
                height: Math.floor(width - 50),
                width: Math.floor(((width - 50) / 440) * 200),
              },
              ImageAnimatedStyle,
            ]}
          />
        </Stack>
        <Button
          disabled={buttonDisabled}
          mx={15}
          borderWidth={1}
          boc={buttonDisabled ? "gray" : buttonBlue}
          size={"$6"}
          onPress={() => {
            setButtonDisabled(true);
            let deg;

            deg = Math.floor(Math.random() * 10000);

            ImageRotate.value = withTiming(`${deg}deg`, {
              duration: 3500,
            });
            setTimeout(() => {
              setButtonDisabled(false);
            }, 3500);
          }}
        >
          <Text
            fos={21}
            fow={"600"}
            color={buttonDisabled ? "gray" : buttonBlue}
          >
            Çevir!
          </Text>
        </Button>
        <Stack mt={15}>
          <BannerAds />
        </Stack>
      </SafeAreaView>
    </Stack>
  );
};

export default SpinBottleGame;
