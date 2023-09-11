import { Dimensions } from "react-native";
import React, { useState } from "react";
import { Button, XStack, YStack, Text, Image } from "tamagui";
import ExitButton from "../../components/ExitButton";
const { width, height } = Dimensions.get("screen");
const RollDice = () => {
  const [dice1, setDice1] = useState(6);
  const [dice2, setDice2] = useState(6);

  const roll = () => {
    const interval = setInterval(() => {
      const newDice1 = Math.floor(Math.random() * 6) + 1;
      const newDice2 = Math.floor(Math.random() * 6) + 1;

      setDice1(newDice1);
      setDice2(newDice2);
    }, 50);
    setTimeout(() => {
      clearInterval(interval);
    }, 500);

    const newDice1 = Math.floor(Math.random() * 6) + 1;
    const newDice2 = Math.floor(Math.random() * 6) + 1;

    setDice1(newDice1);
    setDice2(newDice2);
  };
  return (
    <YStack f={1} ai="center" jc="center">
      <XStack mx={15}>
        <Image
          source={
            dice1 === 1
              ? require("../../assets/roll-dice/dice1.png")
              : dice1 === 2
              ? require("../../assets/roll-dice/dice2.png")
              : dice1 === 3
              ? require("../../assets/roll-dice/dice3.png")
              : dice1 === 4
              ? require("../../assets/roll-dice/dice4.png")
              : dice1 === 5
              ? require("../../assets/roll-dice/dice5.png")
              : require("../../assets/roll-dice/dice6.png")
          }
          resizeMode="contain"
          style={{ width: width / 3, height: height / 3 }}
          mr={8}
        />
        <Image
          source={
            dice2 === 1
              ? require("../../assets/roll-dice/dice1.png")
              : dice2 === 2
              ? require("../../assets/roll-dice/dice2.png")
              : dice2 === 3
              ? require("../../assets/roll-dice/dice3.png")
              : dice2 === 4
              ? require("../../assets/roll-dice/dice4.png")
              : dice2 === 5
              ? require("../../assets/roll-dice/dice5.png")
              : require("../../assets/roll-dice/dice6.png")
          }
          resizeMode="contain"
          style={{ width: width / 3, height: height / 3 }}
          ml={8}
        />
      </XStack>
      <Button size={"$7"} borderWidth={1} boc={"green"} onPress={roll}>
        <Text fos={21} fow={"600"} color={"green"}>
          Zar At!
        </Text>
      </Button>
      <ExitButton />
    </YStack>
  );
};

export default RollDice;
