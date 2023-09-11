import React from "react";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { Text } from "tamagui";

const CountdownTimer = ({
  child = null,
  second = 15,
  size,
  onComplete,
  fos,
  sow,
  isPlaying = true,
}) => (
  <CountdownCircleTimer
    isPlaying={isPlaying}
    duration={second}
    strokeWidth={sow}
    colors={["#0D4E01", "#79de79", "#E4CB42", "#E05355", "#770304"]}
    colorsTime={[second, second / 2, second / 3, second / 4, 0]}
    size={size}
    onComplete={() => {
      onComplete();
    }}
  >
    {({ remainingTime, color }) => (
      <Text fow={"500"} color={color} fontSize={fos}>
        {remainingTime}
      </Text>
    )}
  </CountdownCircleTimer>
);

export default CountdownTimer;
