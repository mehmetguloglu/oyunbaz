import { View, Dimensions, Pressable, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Stack, Text, XStack, YStack } from "tamagui";
import { ImageBackground } from "expo-image";
import ExitButton from "../../components/ExitButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useStateWithCallbackLazy } from "use-state-with-callback";
import { orderBy } from "lodash";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const { width, height } = Dimensions.get("screen");

const Card = ({
  number,
  type,
  index,
  onPress,
  disabled = false,
  setDisabled = null,
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
          setDisabled != null ? setDisabled(true) : null;
          cardPosY.value = (height / 2 - 150) * -1;
          cardPosX.value = width / 2 - index * 35;
          onPress();
          setTimeout(() => {
            cardPosY.value = 100;
            cardPosX.value = index * 35;
            setDisabled != null ? setDisabled(false) : null;
          }, 3600);
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
//o elde oynanan kartlar için array oluştur

const BatakGame = () => {
  const [selectedCard, setSelectedCard] = useStateWithCallbackLazy(null);
  const [userCards, setUserCards] = useState([]);
  const [onePCards, setOnePCards] = useState([]);
  const [twoPCards, setTwoPCards] = useState([]);
  const [threePCards, setThreePCards] = useState([]);
  const [disabled, setDisabled] = useState(false);

  let usedCards = [];
  let currentCards = [];

  let selectedOnePCard;
  let selectedTwoPCard;
  let selectedThreePCard;

  let gameType = 1;

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
    newUserCards = orderBy(newUserCards, ["type", "number"]).reverse();
    newOnePCards = orderBy(newOnePCards, ["type", "number"]).reverse();
    newTwoPCards = orderBy(newTwoPCards, ["type", "number"]).reverse();
    newThreePCards = orderBy(newThreePCards, ["type", "number"]).reverse();
    setUserCards(newUserCards);
    setOnePCards(newOnePCards);
    setTwoPCards(newTwoPCards);
    setThreePCards(newThreePCards);
  };

  const cardPress = ({ item, index }) => {
    usedCards = [...usedCards, item];

    setSelectedCard(item, () => {
      let newCards = [...userCards];
      newCards.splice(index, 1);

      currentCards.length == 3
        ? (currentCards = [])
        : (currentCards = [...currentCards, item]);

      setTimeout(() => {
        // setUserCards(newCards);
        botPlay({ item: item, bot: 1 });
      }, 500);
      setTimeout(() => {
        setUserCards(newCards);
      }, 3500);
    });
  };

  const botPlay = ({ item, bot }) => {
    let currentType =
      currentCards.length != 0 ? currentCards[0].type : item.type;
    // debugger;
    let orderCurrentCards = orderBy(currentCards, ["type", "number"]);

    let newBotCards;

    let availableCards = [];

    if (bot == 1) {
      newBotCards = [...onePCards];
      // botPlay({ item: {}, bot: 2 });
    } else if (bot == 2) {
      newBotCards = [...twoPCards];
      // botPlay({ item: {}, bot: 3 });
    } else {
      newBotCards = [...threePCards];
    }

    let sameTypeCards = newBotCards?.filter((x) => x.type == currentType);
    // AYNI CİNS KART YOKSA
    if (sameTypeCards?.length == 0) {
      sameTypeCards = newBotCards.filter((x) => x.type == gameType);
      // KOZ DA YOKSA EN DÜŞÜK KART SEÇİLDİ
      if (sameTypeCards?.length == 0) {
        availableCards = [...newBotCards].sort((a, b) => {
          return a.number - b.number;
        })[0];
      }
      // KOZ VARSA
      else {
        let bigCurrentGameTypeCard = [...orderCurrentCards].filter(
          (x) => x.type == gameType
        )[0];
        if (
          bigCurrentGameTypeCard &&
          sameTypeCards.filter((x) => x.number > bigCurrentGameTypeCard.number)
            .length != 0
        ) {
          // DAHA ÖNCE KOZ OYNANMIŞSA VE OYNANAN EN BÜYÜK
          // KOZDAN DAHA BÜYÜK KOZ VARSA OYNANAN KOZDAN BÜYÜK
          // EN KÜÇÜK KOZ SEÇİLDİ

          availableCards = sameTypeCards
            .filter((x) => x.number > bigCurrentGameTypeCard.number)
            .reverse()[0];
        } else {
          //DAHA ÖNCE KOZ OYNANMAMIŞSA EN DÜŞÜK KOZ SEÇİLDİ
          availableCards = sameTypeCards.reverse()[0];
        }
      }
    }
    // AYNI CİNS KART VARSA
    else {
      //eldeki aynı tip kartlar küçükten büyüğe alındı
      let minToMaxSameTypeCards = [...sameTypeCards].reverse();
      // AYNI CİNS DAHA BÜYÜK KART VARSA
      for (let i = 0; i < minToMaxSameTypeCards.length; i++) {
        // eldeki kartlar ile for ile loop atıldı
        let checkCard = minToMaxSameTypeCards[i];
        let check = false;
        if (!check) {
          // o el kullanılmış kartların map ile eldeki
          // aynı tip kartlardan büyük olup olmadığı kontrol edildi
          currentCards.map((x) => {
            x.number > checkCard.number ? (check = true) : null;
          });
          if (!check) {
            availableCards = [...availableCards, checkCard];
          }
        }
      }

      if (availableCards?.length == 0) {
        availableCards = minToMaxSameTypeCards[0];
      } else {
        let availableMinCard = availableCards[0];
        let availableMaxCard = [...availableCards].reverse()[0];
        // let maxCardCount = 12 - availableMaxCard.number;
        let count = 0;
        let usedSameTypeCards = usedCards.filter((x) => {
          x.type == availableMaxCard.type;
        });

        usedSameTypeCards.map((x) => {
          x.number > availableMaxCard.number ? count++ : null;
        });

        // let usedSameTypeBigCardCount = usedCards.filter(
        //   (x) =>
        //     x.type == availableMaxCard.type &&
        //     x.number > availableMaxCard.number
        // ).length;

        if (availableMaxCard.number + count == 12 && currentCards.length != 3) {
          availableCards = availableMaxCard;
        } else {
          availableCards = availableMinCard;
        }
      }
    }
    // AYNI CİNS DAHA BÜYÜK KART YOKSA

    // if (!availableCards) {
    //   availableCards = minToMaxSameTypeCards[0];
    // }

    // if (
    //   currentCards.filter((y) => {
    //     sameTypeCards?.filter((x) => x.number > y.number);
    //   }).length == 0
    // ) {
    // EN KÜÇÜK KART SEÇİLDİ
    // availableCards = sameTypeCards.reverse()[0];
    // console.log(
    //   "aynı cins daha büyük kart yok oynanacak kart : ",
    //   availableCards
    // );
    // usedCards = [...usedCards, availableCards];

    // AYNI CİNS DAHA BÜYÜK KART VARSA
    // else {
    //   availableCards = sameTypeCards?.filter((x) => x.number > item.number);
    // let availableMaxCard = availableCards[0];
    // let availableMinCard = availableCards.reverse()[0];
    // let maxCardCount = 12 - availableMaxCard.number;
    // let usedSameTypeBigCardCount = usedCards.filter(
    //   (x) =>
    //     x.type == availableMaxCard.type &&
    //     x.number > availableMaxCard.number
    // ).length;
    // if (
    //   maxCardCount == usedSameTypeBigCardCount &&
    //   currentCards.length != 3
    // ) {
    //   availableCards = availableMaxCard;
    // } else {
    //   availableCards = availableMinCard;
    // }
    // }
    // }
    if (currentCards.length == 3) {
      currentCards = [];
    } else {
      currentCards = [...currentCards, availableCards];
    }

    usedCards = [...usedCards, availableCards];
    let availableCardIndex = newBotCards.findIndex((x) => x == availableCards);
    newBotCards.splice(availableCardIndex, 1);
    console.log(bot, ". botun kullandığı kart : ", availableCards);
    setTimeout(() => {
      if (bot == 1) {
        selectedOnePCard = availableCards;
        setOnePCards(newBotCards);
        botPlay({ item: availableCards, bot: 2 });
      } else if (bot == 2) {
        setTwoPCards(newBotCards);
        selectedTwoPCard = availableCards;

        botPlay({ item: availableCards, bot: 3 });
      } else {
        setThreePCards(newBotCards);
        selectedThreePCard = availableCards;
      }
    }, 750);
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

          {/* KOZ SEÇİMİ
          <XStack>
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

          {/* PLAYERS CARDS */}
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
            {userCards
              .filter((item, index) => index < 7)
              .map((item, index) => {
                return (
                  <Card
                    key={index}
                    onPress={() => cardPress({ item: item, index: index })}
                    setDisabled={setDisabled}
                    disabled={disabled}
                    number={item.number}
                    type={item.type}
                    index={index}
                  />
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
            {userCards
              .filter((x, index) => index >= 7)
              .map((item, index) => {
                return (
                  <Card
                    key={index}
                    onPress={() => cardPress({ item: item, index: index + 7 })}
                    disabled={disabled}
                    setDisabled={setDisabled}
                    number={item.number}
                    type={item.type}
                    index={index}
                  />
                );
              })}
          </XStack>

          <XStack
            pos="absolute"
            right={315}
            bottom={(height / 4) * 3}
            jc="center"
            zIndex={1}
          >
            {onePCards
              .filter((item, index) => index < 7)
              .map((item, index) => {
                return (
                  <Card
                    key={index}
                    onPress={() => cardPress({ item, index })}
                    setDisabled={setDisabled}
                    disabled={disabled}
                    number={item.number}
                    type={item.type}
                    index={index}
                  />
                );
              })}
          </XStack>
          <XStack
            pos="absolute"
            right={315}
            bottom={(height / 4) * 3 - 100}
            jc="center"
            zIndex={2}
          >
            {onePCards
              .filter((x, index) => index >= 7)
              .map((item, index) => {
                return (
                  <Card
                    key={index}
                    onPress={() => cardPress({ item: item, index: index + 7 })}
                    disabled={disabled}
                    setDisabled={setDisabled}
                    number={item.number}
                    type={item.type}
                    index={index}
                  />
                );
              })}
          </XStack>

          <XStack
            pos="absolute"
            left={(width - 265) / 2}
            top={-80}
            jc="center"
            zIndex={1}
          >
            {twoPCards
              .filter((item, index) => index < 7)
              .map((item, index) => {
                return (
                  <Card
                    key={index}
                    onPress={() => cardPress({ item, index })}
                    setDisabled={setDisabled}
                    disabled={disabled}
                    number={item.number}
                    type={item.type}
                    index={index}
                  />
                );
              })}
          </XStack>
          <XStack
            pos="absolute"
            left={(width - 265) / 2}
            top={20}
            jc="center"
            zIndex={2}
          >
            {twoPCards
              .filter((x, index) => index >= 7)
              .map((item, index) => {
                return (
                  <Card
                    key={index}
                    onPress={() => cardPress({ item: item, index: index + 7 })}
                    disabled={disabled}
                    setDisabled={setDisabled}
                    number={item.number}
                    type={item.type}
                    index={index}
                  />
                );
              })}
          </XStack>

          <XStack
            pos="absolute"
            left={15}
            bottom={(height / 4) * 3}
            jc="center"
            zIndex={1}
          >
            {threePCards
              .filter((item, index) => index < 7)
              .map((item, index) => {
                return (
                  <Card
                    key={index}
                    onPress={() => cardPress({ item, index })}
                    setDisabled={setDisabled}
                    disabled={disabled}
                    number={item.number}
                    type={item.type}
                    index={index}
                  />
                );
              })}
          </XStack>
          <XStack
            pos="absolute"
            left={15}
            bottom={(height / 4) * 3 - 100}
            jc="center"
            zIndex={2}
          >
            {threePCards
              .filter((x, index) => index >= 7)
              .map((item, index) => {
                return (
                  <Card
                    key={index}
                    onPress={() => cardPress({ item: item, index: index + 7 })}
                    disabled={disabled}
                    setDisabled={setDisabled}
                    number={item.number}
                    type={item.type}
                    index={index}
                  />
                );
              })}
          </XStack>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

export default BatakGame;
