import { View, Text, Dimensions, Pressable } from "react-native";
import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Image } from "expo-image";

export interface DiceImageRefs {
  roll: () => void;
}

interface DiceImageProps {
  diceNumber: number;
}

const { width, height } = Dimensions.get("screen");
const DiceImage: React.ForwardRefRenderFunction<
  DiceImageRefs,
  DiceImageProps
> = ({ diceNumber }, ref) => {
  const [dice1, setDice1] = useState(6);

  useImperativeHandle(ref, () => ({
    roll,
  }));

  const roll = () => {
    const interval = setInterval(() => {
      const newDice1 = Math.floor(Math.random() * 6) + 1;

      setDice1(newDice1);
    }, 50);
    setTimeout(() => {
      clearInterval(interval);
    }, 500);

    const newDice1 = Math.floor(Math.random() * 6) + 1;

    setDice1(newDice1);
  };

  return (
    <Pressable>
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
        contentFit="contain"
        style={{
          width: width / (diceNumber <= 0 ? diceNumber + 3 : diceNumber + 1),
          height: width / (diceNumber <= 0 ? diceNumber + 3 : diceNumber + 1),
          marginRight: 8,
        }}
      />
    </Pressable>
  );
};

export default forwardRef(DiceImage);
