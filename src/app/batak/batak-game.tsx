import { View, Dimensions, Pressable, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Stack, Text, XStack, YStack } from "tamagui";
import { ImageBackground } from "expo-image";
import ExitButton from "../../components/ExitButton";
import { cards } from "./cards";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useStateWithCallbackLazy } from "use-state-with-callback";
import { orderBy } from "lodash";

const { width, height } = Dimensions.get("screen");

const Card = ({ number, type }) => {
  return (
    <Pressable
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
              ? number
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
    </Pressable>
  );
};

const BatakGame = () => {
  const [userCards, setUserCards] = useState([]);
  const [onePCards, setOnePCards] = useState([]);
  const [twoPCards, setTwoPCards] = useState([]);
  const [threePCards, setThreePCards] = useState([]);
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
          {/* ESRA */}
          <XStack
            left={-15}
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
                Esra{" "}
              </Text>
            </Stack>
            <Stack bg={"black"} px={5} py={2} br={15}>
              <Text color={"white"} fos={18}>
                0
              </Text>
            </Stack>
          </XStack>
          <XStack
            width={width}
            // ai="center"
            jc="center"
            pos="absolute"
            bottom={150}
            left={(width - 300) / 2}
          >
            {userCards.map((item, index) => {
              return (
                <>
                  {index < 7 ? (
                    <Pressable
                      style={{
                        position: "absolute",
                        top:
                          0 < (index - 3) * 3
                            ? (index - 3) * 3
                            : (index - 3) * -3,
                        left: index * 35,
                        transform: [{ rotate: `${(index - 3) * 4}deg` }],
                      }}
                      key={index}
                      onPress={() => {}}
                    >
                      <Card number={item.number} type={item.type} />
                    </Pressable>
                  ) : null}
                </>
              );
            })}
          </XStack>
          <XStack
            width={width}
            jc="center"
            pos="absolute"
            bottom={90}
            left={(width - 300) / 2}
          >
            {userCards.map((item, index) => {
              return (
                <>
                  {index >= 7 ? (
                    <Stack
                      rotate={`${(index - 9.5) * 4}deg`}
                      top={
                        0 < (index - 10) * 3
                          ? (index - 10) * 3
                          : (index - 10) * -3
                      }
                      key={index}
                      pos="absolute"
                      left={(index - 6.5) * 35}
                    >
                      <Card number={item.number} type={item.type} />
                    </Stack>
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
