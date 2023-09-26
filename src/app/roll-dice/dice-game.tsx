import { Dimensions, SafeAreaView } from "react-native";
import React, { useRef, useState } from "react";
import { Button, XStack, YStack, Text, Image, Stack } from "tamagui";
import ExitButton from "../../components/ExitButton";
import BannerAds from "../../components/google-ads/BannerAds";
import { buttonBlue, buttonRed } from "../../utils/colors";
import DiceImage, { DiceImageRefs } from "../../components/roll-dice/DiceImage";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");
const RollDice = () => {
  const [diceNumber, setDiceNumber] = useState(2);
  const [rollDisabled, setRollDisabled] = useState(false);
  const dice1 = useRef<DiceImageRefs>();
  const dice2 = useRef<DiceImageRefs>();
  const dice3 = useRef<DiceImageRefs>();
  const dice4 = useRef<DiceImageRefs>();
  const dice5 = useRef<DiceImageRefs>();
  const dice6 = useRef<DiceImageRefs>();
  const roll = () => {
    setRollDisabled(true);
    if (dice1.current) {
      dice1.current.roll();
    }
    if (dice2.current) {
      dice2.current.roll();
    }
    if (dice3.current) {
      dice3.current.roll();
    }
    if (dice4.current) {
      dice4.current.roll();
    }
    if (dice5.current) {
      dice5.current.roll();
    }
    if (dice6.current) {
      dice6.current.roll();
    }
    setTimeout(() => {
      setRollDisabled(false);
    }, 500);
  };

  const diceArray = new Array(diceNumber).fill(0);
  return (
    <>
      <Stack f={1} bg={"white"}>
        <SafeAreaView style={{ flex: 1 }}>
          <YStack pt={40} bg={"white"} f={1} ai="center" jc="center">
            <XStack my={10}>
              {diceArray.map((item, index) => {
                if (index < 3) {
                  return (
                    <DiceImage
                      key={index}
                      ref={(r) =>
                        index == 0
                          ? (dice1.current = r)
                          : index == 1
                          ? (dice2.current = r)
                          : index == 2
                          ? (dice3.current = r)
                          : null
                      }
                      diceNumber={diceNumber > 3 ? 3 : diceNumber}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </XStack>
            <XStack my={10}>
              {diceArray.map((item, index) => {
                if (index < 3) {
                  return null;
                } else {
                  return (
                    <DiceImage
                      key={index}
                      ref={(r) =>
                        index == 3
                          ? (dice4.current = r)
                          : index == 4
                          ? (dice5.current = r)
                          : index == 5
                          ? (dice6.current = r)
                          : null
                      }
                      diceNumber={diceNumber > 3 ? 3 : diceNumber}
                    />
                  );
                }
              })}
            </XStack>
          </YStack>
          <YStack m={15}>
            <XStack jc="space-between" my={20}>
              <Button
                width={60}
                height={60}
                p={0}
                br={30}
                bg={"white"}
                borderWidth={1}
                boc={diceNumber == 1 ? "gray" : buttonRed}
                ai="center"
                jc="center"
                disabled={diceNumber == 1}
                onPress={() => {
                  setDiceNumber(diceNumber + -1);
                }}
              >
                <MaterialIcons
                  name="remove-circle-outline"
                  size={35}
                  color={diceNumber == 1 ? "gray" : buttonRed}
                />
              </Button>
              <Button
                width={60}
                height={60}
                p={0}
                br={30}
                bg={"white"}
                borderWidth={1}
                boc={diceNumber == 6 ? "gray" : buttonBlue}
                ai="center"
                jc="center"
                disabled={diceNumber == 6}
                onPress={() => {
                  setDiceNumber(diceNumber + 1);
                }}
              >
                <MaterialIcons
                  name="add-circle-outline"
                  size={35}
                  color={diceNumber == 6 ? "gray" : buttonBlue}
                />
              </Button>
            </XStack>
            <Button
              disabled={rollDisabled}
              size={"$7"}
              borderWidth={1}
              boc={buttonBlue}
              onPress={roll}
            >
              <Text fos={21} fow={"600"} color={buttonBlue}>
                Zar At!
              </Text>
            </Button>
          </YStack>
          <Stack bg={"white"}>
            <BannerAds />
          </Stack>
          <ExitButton />
        </SafeAreaView>
      </Stack>
    </>
  );
};

export default RollDice;
