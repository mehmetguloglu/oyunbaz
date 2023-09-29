import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { Text } from "tamagui";
import Colors from "../../constants/Colors";
import { StarSVG } from "../../assets/svg";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const maxStartSize = 32;
const getStarSize = () => Math.floor(Math.random() * maxStartSize);
const min = -screenWidth + getStarSize();
const max = screenWidth - getStarSize();
function getRandomPosition() {
  const x = Math.floor(Math.random() * screenWidth);
  const y = Math.floor(Math.random() * screenHeight);
  return { x, y };
}
const getRandomOpacity = () => Math.random() * 0.99;
const getRandomTranslateX = () => Math.floor(Math.random() * (max - min) + min);
const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const StarFall: React.FC = () => {
  const stars = alphabet.map((_, index) => {
    const starSize = getStarSize();

    const opacity = getRandomOpacity();
    const translateY = useSharedValue<number>(-starSize);
    const translateX = useSharedValue<number>(0);
    const rotate = useSharedValue<number>(0);
    const translateXRandom = getRandomTranslateX();
    const { x, y } = getRandomPosition();

    /**
     * Y ekseninde anime et
     */
    translateY.value = withRepeat(
      withSequence(
        withDelay(
          index * 100, // Her yıldızın düşüşünü geciktir
          withSpring(screenHeight - starSize, {
            damping: 5,
            stiffness: 0.2, // Aşağı düşüş hızını değiştir
            mass: 5,
          })
        ),
        withSpring(-starSize, {
          damping: 2,
          stiffness: 0.5, // Yukarı çıkış hızını değiştir
          mass: 5,
        })
      ),
      -1, // Animasyonu sonsuz döngüye al
      true // Yavaşlama olmadan tekrar et
    );
    /**
     * Kendi etrafında çevir
     */
    rotate.value = withRepeat(
      withSequence(
        withDelay(
          index * x + 360,
          withSpring(360, { damping: 2, stiffness: 1, mass: 5 })
        ),
        withSpring(0, { damping: 2, stiffness: 1, mass: 5 })
      ),
      -1,
      true
    );

    /**
     * X Ekseninde random anime et
     */
    translateX.value = withRepeat(
      withSequence(
        withDelay(
          index * 100,
          withSpring(translateXRandom, {
            damping: 15,
            stiffness: 1,
            mass: 5,
          })
        ),
        withDelay(
          index * 100,
          withSpring(-translateXRandom, {
            damping: 15,
            stiffness: 1,
            mass: 5,
          })
        )
      ),
      -1,
      false
    );

    /**
     * Anime ettiğin değerleri animated style ile view'ın stylelarına ver
     */
    const animatedStyle = useAnimatedStyle(() => {
      "worklet";
      return {
        transform: [
          { translateY: translateY.value },
          { translateX: translateX.value },

          { rotateX: `${rotate.value}deg` },
          { rotateZ: `${rotate.value}deg` },
          { rotateY: `${rotate.value}deg` },
        ],
        left: x,
        width: starSize,
        height: starSize,
        position: "absolute",
        opacity: opacity,
      };
    });

    return (
      <Animated.View key={`star-${index}`} style={animatedStyle}>
        <StarSVG width={16} height={starSize} fill={Colors.light.secondary} />
      </Animated.View>
    );
  });

  return <View style={styles.container}>{stars}</View>;
};

const styles = StyleSheet.create({
  container: {
    zIndex: -1,
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});

export default StarFall;
