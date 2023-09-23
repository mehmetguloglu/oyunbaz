import { Dimensions, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { Button, Stack, XStack, Text, YStack } from "tamagui";
import { Image } from "expo-image";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import ExitButton from "../../components/ExitButton";
import * as Burnt from "burnt";
import { buttonBlue } from "../../utils/colors";
import XoxButton from "../../components/tictactoe/XoxButton";
import { useStateWithCallbackLazy } from "use-state-with-callback";

const { width, height } = Dimensions.get("screen");

const AnimatedImage = Animated.createAnimatedComponent(Image);

const TicTacToeGame = () => {
  const [button, setButton] = useState(1);
  const [count, setCount] = useState([0, 0]);
  // 1 - X
  // 2 - O
  const [xox, setXox] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [gameover, setGameover] = useStateWithCallbackLazy(false);
  const switchPos = useSharedValue(-50);
  const switchRotate = useSharedValue("180");
  const refreshImageRotate = useSharedValue("180");

  const switchStyle = useAnimatedStyle(() => {
    "worklet";
    return {
      marginLeft: withSpring(switchPos.value),
      transform: [{ rotate: withSpring(`${switchRotate.value}deg`) }],
    };
  });
  const refreshImageStyle = useAnimatedStyle(() => {
    "worklet";
    return {
      transform: [
        {
          rotate: withSpring(`${refreshImageRotate.value}deg`),
        },
      ],
    };
  });

  const _handlePress = ({ rowIndex, colIndex }) => {
    let newXox = [...xox];
    newXox[rowIndex][colIndex] = button;
    setXox(newXox);

    if (
      (newXox[rowIndex][0] == newXox[rowIndex][1] &&
        newXox[rowIndex][1] == newXox[rowIndex][2]) ||
      (newXox[0][colIndex] == newXox[1][colIndex] &&
        newXox[1][colIndex] == newXox[2][colIndex]) ||
      (((newXox[0][0] == newXox[1][1] && newXox[1][1] == newXox[2][2]) ||
        (newXox[0][2] == newXox[1][1] && newXox[1][1] == newXox[2][0])) &&
        newXox[1][1] != 0)
    ) {
      setCount([
        button == 1 ? count[0] + 1 : count[0],
        button == 2 ? count[1] + 1 : count[1],
      ]);
      setGameover(true, () => {});
      refreshImageRotate.value =
        refreshImageRotate.value == "180" ? "0" : "180";
      Burnt.toast({
        duration: 1,
        haptic: "error",
        preset: button == 1 ? "error" : "done",
        title: button == 1 ? "X kazandı." : "O kazandı.",
      });
    } else {
      let control = false;
      newXox.map((item) => {
        item.map((item) => {
          if (item == 0) control = true;
        });
      });
      if (!control) setGameover(true, () => {});
      setButton(button == 1 ? 2 : 1);
      switchPos.value = switchPos.value == 50 ? -50 : 50;
      switchRotate.value = switchRotate.value == "360" ? "180" : "360";
    }
  };

  const tryAgainPress = () => {
    function refresh() {
      const newXox = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];
      setXox([...newXox]);

      refreshImageRotate.value =
        refreshImageRotate.value == "180" ? "0" : "180";
      setGameover(false, () => {});
    }
    if (!gameover)
      setGameover(true, () => {
        refresh();
      });
    else {
      refresh();
    }
  };
  return (
    <>
      <ExitButton />
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <Stack ai="center" jc="center" f={1}>
          <Stack ai="center" jc="center">
            <YStack zIndex={1}>
              {xox.map((item, index) => {
                const idx = index;
                return (
                  <XStack zIndex={1} key={idx}>
                    {item.map((item, index) => (
                      <XoxButton
                        key={index}
                        index={index}
                        idx={idx}
                        item={item}
                        _handlePress={_handlePress}
                        gameover={gameover}
                      />
                    ))}
                  </XStack>
                );
              })}
            </YStack>
            <YStack zIndex={0} pos="absolute" alignItems="center" jc="center">
              <XStack>
                <Stack
                  height={Math.floor(height) / 8}
                  width={Math.floor(width) / 3}
                />
                <Stack
                  bg={buttonBlue}
                  height={Math.floor(height) / 8}
                  width={4}
                />
                <Stack
                  height={Math.floor(height) / 8}
                  width={Math.floor(width) / 3}
                />
                <Stack
                  bg={buttonBlue}
                  height={Math.floor(height) / 8}
                  width={4}
                />
                <Stack
                  height={Math.floor(height) / 8}
                  width={Math.floor(width) / 3}
                />
              </XStack>
              <Stack
                bg={buttonBlue}
                height={4}
                width={Math.floor(width) - 30}
              />
              <XStack>
                <Stack
                  height={Math.floor(height) / 8}
                  width={Math.floor(width) / 3}
                />
                <Stack
                  bg={buttonBlue}
                  height={Math.floor(height) / 8}
                  width={4}
                />
                <Stack
                  height={Math.floor(height) / 8}
                  width={Math.floor(width) / 3}
                />
                <Stack
                  bg={buttonBlue}
                  height={Math.floor(height) / 8}
                  width={4}
                />
                <Stack
                  height={Math.floor(height) / 8}
                  width={Math.floor(width) / 3}
                />
              </XStack>
              <Stack
                bg={buttonBlue}
                height={4}
                width={Math.floor(width) - 30}
              />
              <XStack>
                <Stack
                  height={Math.floor(height) / 8}
                  width={Math.floor(width) / 3}
                />
                <Stack
                  bg={buttonBlue}
                  height={Math.floor(height) / 8}
                  width={4}
                />
                <Stack
                  height={Math.floor(height) / 8}
                  width={Math.floor(width) / 3}
                />
                <Stack
                  bg={buttonBlue}
                  height={Math.floor(height) / 8}
                  width={4}
                />
                <Stack
                  height={Math.floor(height) / 8}
                  width={Math.floor(width) / 3}
                />
              </XStack>
            </YStack>
          </Stack>
        </Stack>
        <Button
          width={90}
          height={90}
          my={5}
          br={50}
          fd="column"
          ai="center"
          jc="center"
          p={5}
          bg={"white"}
          mt={20}
          shadowColor={"#000"}
          shadowOffset={{
            width: 0,
            height: 2,
          }}
          shadowOpacity={0.23}
          shadowRadius={2.63}
          elevationAndroid={4}
          onPress={() => tryAgainPress()}
        >
          <AnimatedImage
            source={require("../../assets/tictactoe/refresh.png")}
            contentFit={"fill"}
            style={[
              refreshImageStyle,
              {
                width: 40,
                height: 40,
              },
            ]}
          />
          <Text color={buttonBlue}>Tekrar</Text>
        </Button>
        <XStack my={10} ai="center">
          <Text f={1} ta="center" fow={"900"} fos={24} color={buttonBlue}>
            {count[0]}
          </Text>
          <Image
            style={{
              width: 40,
              height: 40,
            }}
            contentFit="cover"
            source={require("../../assets/tictactoe/x.png")}
          />
          <XStack
            ai={"center"}
            jc="center"
            mx={10}
            width={120}
            height={60}
            br={30}
            bg={"white"}
            shadowColor={"#000"}
            shadowOffset={{
              width: 0,
              height: 3,
            }}
            shadowOpacity={0.29}
            shadowRadius={4.65}
            elevationAndroid={7}
          >
            <Animated.View
              style={[
                switchStyle,
                {
                  alignItems: "center",
                  justifyContent: "center",
                  width: 48,
                  height: 48,
                  borderRadius: 24,
                  backgroundColor: "white",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },
                  shadowOpacity: 0.29,
                  shadowRadius: 4.65,

                  elevation: 7,
                },
              ]}
            >
              <Image
                style={{
                  width: 35,
                  height: 35,
                }}
                contentFit="cover"
                source={require("../../assets/tictactoe/arrow.png")}
              />
            </Animated.View>
          </XStack>
          <AnimatedImage
            style={[
              {
                width: 40,
                height: 40,
              },
            ]}
            contentFit={"cover"}
            source={require("../../assets/tictactoe/o.png")}
          />
          <Text f={1} ta="center" fow={"900"} fos={24} color={buttonBlue}>
            {count[1]}
          </Text>
        </XStack>
      </SafeAreaView>
    </>
  );
};

export default TicTacToeGame;
