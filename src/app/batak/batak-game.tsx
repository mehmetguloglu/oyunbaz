import { View, Dimensions, Pressable, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Stack, Text, XStack, YStack } from "tamagui";
import { ImageBackground } from "expo-image";
import ExitButton from "../../components/ExitButton";
import { cards } from "./cards";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useStateWithCallbackLazy } from "use-state-with-callback";
import { orderBy } from "lodash";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { setUser } from "@sentry/core";

const { width, height } = Dimensions.get("screen");

const Card = ({
  number,
  type,
  index,
  userCards,
  setUserCards,
  setSelectedCard,
  onPress,
  disabled,
  setDisabled,
}) => {
  const cardPosY = useSharedValue(100);
  const cardPosX = useSharedValue(index * 35);
  const cardAnimatedStyle = useAnimatedStyle(() => {
    return {
      top: cardPosY.value == 100 ? 100 : withTiming(cardPosY.value),
      left:
        cardPosX.value == index * 35 ? index * 35 : withTiming(cardPosX.value),
    };
  });
  return (
    <Animated.View
      style={[
        {
          position: "absolute",
          // transform: [{ rotate: `${(index - 3) * 4}deg` }],
          zIndex: index,
        },
        cardAnimatedStyle,
      ]}
      key={index}
    >
      <Pressable
        style={{ flex: 1 }}
        onPress={() => {
          setDisabled(true);
          cardPosY.value = (height / 2 - 75) * -1;
          cardPosX.value = width / 2 - 90;
          onPress();
          setTimeout(() => {
            cardPosY.value = 100;
            cardPosX.value = index * 35;
            setDisabled(false);
          }, 1500);
        }}
        disabled={disabled}
      >
        <View
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
            padding: 8,
            width: 90,
            borderRadius: 15,
            height: 150,
            backgroundColor: "white",
          }}
        >
          <YStack alignItems="flex-start" jc={"flex-start"}>
            <YStack ai="center">
              <Text fos={16} color={type == 0 || type == 2 ? "red" : "black"}>
                {number < 9
                  ? number + 2
                  : number == 9
                  ? "J"
                  : number == 10
                  ? "Q"
                  : number == 11
                  ? "K"
                  : number == 12
                  ? "A"
                  : null}
              </Text>
              <MaterialCommunityIcons
                name={
                  type == 0
                    ? "cards-diamond"
                    : type == 2
                    ? "cards-heart"
                    : type == 1
                    ? "cards-club"
                    : type == 3
                    ? "cards-spade"
                    : "cards-variant"
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
                  ? "cards-diamond"
                  : type == 2
                  ? "cards-heart"
                  : type == 1
                  ? "cards-club"
                  : type == 3
                  ? "cards-spade"
                  : "cards-variant"
              }
              size={36}
              color={type == 0 || type == 2 ? "red" : "black"}
            />
          </Stack>

          <YStack alignItems="flex-end" jc={"flex-end"}>
            <YStack rotate="180deg" jc="center" ai="center">
              <Text fos={16} color={type == 0 || type == 2 ? "red" : "black"}>
                {number < 9
                  ? number + 2
                  : number == 9
                  ? "J"
                  : number == 10
                  ? "Q"
                  : number == 11
                  ? "K"
                  : number == 12
                  ? "A"
                  : null}
              </Text>
              <MaterialCommunityIcons
                name={
                  type == 0
                    ? "cards-diamond"
                    : type == 2
                    ? "cards-heart"
                    : type == 1
                    ? "cards-club"
                    : type == 3
                    ? "cards-spade"
                    : "cards-variant"
                }
                size={16}
                color={type == 0 || type == 2 ? "red" : "black"}
              />
            </YStack>
          </YStack>
        </View>
      </Pressable>
    </Animated.View>
  );
};

const BatakGame = () => {
  const [userCards, setUserCards] = useState([]);
  const [onePCards, setOnePCards] = useState([]);
  const [twoPCards, setTwoPCards] = useState([]);
  const [threePCards, setThreePCards] = useState([]);
  const [selectedCard, setSelectedCard] = useStateWithCallbackLazy(null);
  const [disabled, setDisabled] = useState(false);
  let gameType = 4;

  const playButtonPress = () => {
    let count = 0;
    let newUserCards = [];
    let newOnePCards = [];
    let newTwoPCards = [];
    let newThreePCards = [];
    let usedCards = [];
    do {
      let randomCard = {};
      let sameCard = false;
      if (count < 13) {
        do {
          sameCard = false;
          let randomType = Math.floor(Math.random() * 4);
          let randomNumber = Math.floor(Math.random() * 13);
          randomCard = { type: randomType, number: randomNumber };
          sameCard = usedCards.some((item) => {
            return item.type === randomType && item.number === randomNumber;
          });
        } while (sameCard);
        newUserCards = [...newUserCards, randomCard];
        usedCards = [...usedCards, randomCard];
      } else if (count < 26) {
        do {
          sameCard = false;
          let randomType = Math.floor(Math.random() * 4);
          let randomNumber = Math.floor(Math.random() * 13);
          randomCard = { type: randomType, number: randomNumber };
          sameCard = usedCards.some((item) => {
            return item.type === randomType && item.number === randomNumber;
          });
        } while (sameCard);
        newOnePCards = [...newOnePCards, randomCard];
        usedCards = [...usedCards, randomCard];
      } else if (count < 39) {
        do {
          sameCard = false;
          let randomType = Math.floor(Math.random() * 4);
          let randomNumber = Math.floor(Math.random() * 13);
          randomCard = { type: randomType, number: randomNumber };
          sameCard = usedCards.some((item) => {
            return item.type === randomType && item.number === randomNumber;
          });
        } while (sameCard);
        newTwoPCards = [...newTwoPCards, randomCard];
        usedCards = [...usedCards, randomCard];
      } else if (count < 52) {
        do {
          sameCard = false;
          let randomType = Math.floor(Math.random() * 4);
          let randomNumber = Math.floor(Math.random() * 13);
          randomCard = { type: randomType, number: randomNumber };
          sameCard = usedCards.some((item) => {
            return item.type === randomType && item.number === randomNumber;
          });
        } while (sameCard);
        newThreePCards = [...newThreePCards, randomCard];
        usedCards = [...usedCards, randomCard];
      }
      count++;
    } while (count < 52);
    newUserCards = orderBy(newUserCards, ["type", "number"]);
    setUserCards(newUserCards);
    setOnePCards(newOnePCards);
    setTwoPCards(newTwoPCards);
    setThreePCards(newThreePCards);
  };

  return (
    <>
      <ImageBackground
        style={{
          width: width,
          height: height,
          flex: 1,
          zIndex: -1,
        }}
        contentFit="fill"
        source={require("../../assets/batak/batakbg.png")}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <ExitButton />

          <Button mt={200} onPress={playButtonPress}>
            Başla
          </Button>
          <Button
            onPress={() => {
              console.log(userCards);
              console.log(onePCards);
              console.log(twoPCards);
              console.log(threePCards);
            }}
          >
            console
          </Button>
          {/* <XStack>
            <Button
              onPress={() => {
                gameType = 0;
              }}
            >
              karo
            </Button>
            <Button
              onPress={() => {
                gameType = 1;
              }}
            >
              sinek
            </Button>
            <Button
              onPress={() => {
                gameType = 2;
              }}
            >
              kupa
            </Button>
            <Button
              onPress={() => {
                gameType = 3;
              }}
            >
              maça
            </Button>
          </XStack> */}
          {/* OYUNCU */}
          <XStack
            right={15}
            position="absolute"
            bottom={160}
            bg={"darkgreen"}
            ai="center"
            px={8}
            py={2}
            br={15}
            overflow="hidden"
          >
            <Stack>
              <Text color={"white"} fos={18}>
                Oyuncu{" "}
              </Text>
            </Stack>
            <Stack bg={"black"} px={5} py={2} br={15}>
              <Text color={"white"} fos={18}>
                0
              </Text>
            </Stack>
          </XStack>
          {/* KADİR */}
          <XStack
            right={-20}
            rotate="90deg"
            position="absolute"
            top={160}
            bg={"darkgreen"}
            ai="center"
            px={8}
            py={2}
            br={15}
            overflow="hidden"
          >
            <Stack>
              <Text color={"white"} fos={18}>
                Kadir{" "}
              </Text>
            </Stack>
            <Stack bg={"black"} px={5} py={2} br={15}>
              <Text color={"white"} fos={18}>
                0
              </Text>
            </Stack>
          </XStack>
          {/* TUĞBA */}
          <XStack
            top={25}
            position="absolute"
            right={15}
            bg={"darkgreen"}
            ai="center"
            px={8}
            py={2}
            br={15}
            overflow="hidden"
          >
            <Stack>
              <Text color={"white"} fos={18}>
                Tuğba{" "}
              </Text>
            </Stack>
            <Stack bg={"black"} px={5} py={2} br={15}>
              <Text color={"white"} fos={18}>
                0
              </Text>
            </Stack>
          </XStack>
          {/* ŞEVKET */}
          <XStack
            left={-25}
            rotate="-90deg"
            position="absolute"
            top={160}
            bg={"darkgreen"}
            ai="center"
            px={8}
            py={2}
            br={15}
            overflow="hidden"
          >
            <Stack>
              <Text color={"white"} fos={18}>
                Şevket{" "}
              </Text>
            </Stack>
            <Stack bg={"black"} px={5} py={2} br={15}>
              <Text color={"white"} fos={18}>
                0
              </Text>
            </Stack>
          </XStack>

          {/* PLAYER CARDS */}
          <XStack
            pos="absolute"
            left={
              (width -
                (35 * (userCards.length > 6 ? 6 : userCards.length - 1) + 90)) /
              2
            }
            bottom={240}
            jc="center"
            zIndex={1}
          >
            {userCards.map((item, index) => {
              return (
                <>
                  {index < 7 ? (
                    <Card
                      onPress={() => {
                        setSelectedCard(
                          {
                            type: item.type,
                            number: item.number,
                          },
                          () => {
                            let newCards = [...userCards];
                            newCards.splice(index, 1);

                            setTimeout(() => {
                              setUserCards(newCards);
                              setSelectedCard(null, () => {});
                            }, 1500);
                          }
                        );
                      }}
                      setDisabled={setDisabled}
                      disabled={disabled}
                      number={item.number}
                      type={item.type}
                      index={index}
                      userCards={userCards}
                      setUserCards={setUserCards}
                      setSelectedCard={setSelectedCard}
                    />
                  ) : null}
                </>
              );
            })}
          </XStack>
          <XStack
            pos="absolute"
            left={(width - 265) / 2}
            bottom={180}
            jc="center"
            zIndex={2}
          >
            {userCards.map((item, index) => {
              return (
                <>
                  {index >= 7 ? (
                    <Card
                      onPress={() => {
                        setSelectedCard(
                          {
                            type: item.type,
                            number: item.number,
                          },
                          () => {
                            let newCards = [...userCards];
                            newCards.splice(index, 1);

                            setTimeout(() => {
                              setUserCards(newCards);
                              setSelectedCard(null, () => {});
                            }, 1500);
                          }
                        );
                      }}
                      disabled={disabled}
                      setDisabled={setDisabled}
                      number={item.number}
                      type={item.type}
                      index={index - 7}
                      userCards={userCards}
                      setUserCards={setUserCards}
                      setSelectedCard={setSelectedCard}
                    />
                  ) : null}
                </>
              );
            })}
          </XStack>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

export default BatakGame;
