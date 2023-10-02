import React, { useMemo, useRef, useState } from "react";
import { Dimensions, Pressable, SafeAreaView } from "react-native";
import { Button, Stack, Text, XStack, YStack } from "tamagui";
import ExitButton from "../../components/ExitButton";
import Card from "../../components/pisti/Card";
import { ImageBackground } from "expo-image";
const { width, height } = Dimensions.get("screen");
enum CardType {
  "Kupa",
  "Maca",
  "Karo",
  "Sinek",
}
interface Card {
  type: CardType;
  number: number;
}

const Game = () => {
  const [play, setPlay] = useState(false);
  const [botCards, setBotCards] = useState<Card[]>([]);
  const [playerCard, setPlayerCard] = useState<Card[]>([]);
  const [currentGameCard, setCurrentGameCard] = useState<Card[]>([]);
  const [playerWinCard, setPlayerWinCard] = useState<Array<Card[]>>([]);
  const [botWinCard, setBotWinCard] = useState<Array<Card[]>>([]);
  const [playerScore, setPlayerScore] = useState(0);
  const [botScore, setBotScore] = useState(0);
  const unusedCard = useRef<Card[]>([]);
  const cards = useRef<Card[]>([]);
  useMemo(() => {
    for (let c = 0; c < 4; c++) {
      for (let i = 1; i < 14; i++) {
        let cardType: CardType;
        switch (c) {
          case 0:
            cardType = CardType.Karo;
            break;
          case 1:
            cardType = CardType.Kupa;
            break;
          case 2:
            cardType = CardType.Maca;
            break;
          case 3:
            cardType = CardType.Sinek;
            break;

          default:
            break;
        }
        cards.current.push({
          type: cardType,
          number: i,
        });
        unusedCard.current.push({
          type: cardType,
          number: i,
        });
      }
    }
  }, []);

  const dealCard = () => {
    if (unusedCard.current.length != 0) {
      for (let i = 0; i < 8; i++) {
        let randomCardIndex = parseInt(
          (Math.random() * unusedCard.current.length).toFixed(0)
        );
        let randomCard = unusedCard.current[randomCardIndex];
        do {
          randomCardIndex = parseInt(
            (Math.random() * unusedCard.current.length).toFixed(0)
          );
          randomCard = unusedCard.current[randomCardIndex];
        } while (randomCard == null);
        if (i < 4) {
          // player card
          setPlayerCard((x) => [...x, randomCard]);
        } else {
          // bot card
          setBotCards((x) => [...x, randomCard]);
        }
        unusedCard.current.splice(randomCardIndex, 1);
      }
    }

    console.log(unusedCard.current);
  };

  const _handlePlayerCardPress = (card: Card, cardIndex: number) => {
    let clonePlayerCard = [...playerCard];
    clonePlayerCard.splice(cardIndex, 1);
    setPlayerCard(clonePlayerCard);
    if (currentGameCard.length > 0) {
      // ORTADA KART VARSA
      const beforeCard = currentGameCard[currentGameCard.length - 1];
      if (beforeCard.number == card.number || card.number == 11) {
        setPlayerWinCard([...playerWinCard, [...currentGameCard, card]]);

        let botCardIndex: number | null = null;
        for (let b = 0; b < botCards.length; b++) {
          const element = botCards[b];
          if (element.number != 11) {
            botCardIndex = b;
            break;
          }
        }
        if (botCardIndex == null) {
          botCardIndex = 0;
        }

        setCurrentGameCard([botCards[botCardIndex]]);
        let cloneBotCard = [...botCards];
        cloneBotCard.splice(botCardIndex, 1);
        setBotCards(cloneBotCard);

        if (cloneBotCard.length == 0 && clonePlayerCard.length == 0) {
          dealCard();
        }
        return;
      }
    }
    let availableCard: Card;
    let setCardIndex = botCards.findIndex((x) => x.number == card.number);
    if (setCardIndex < 0) {
      setCardIndex = botCards.findIndex((x) => x.number == 11);
    }
    if (setCardIndex > -1) {
      availableCard = botCards[setCardIndex];
    }
    if (!availableCard) {
      availableCard = botCards[0];
      setCardIndex = 0;
    }
    let cloneBotCard = [...botCards];
    cloneBotCard.splice(setCardIndex, 1);
    setBotCards(cloneBotCard);
    if (availableCard.number == card.number || availableCard.number == 11) {
      setBotWinCard([...botWinCard, [...currentGameCard, card, availableCard]]);
      setCurrentGameCard([]);
    } else {
      setCurrentGameCard([...currentGameCard, card, availableCard]);
    }
    if (cloneBotCard.length == 0 && clonePlayerCard.length == 0) {
      dealCard();
    }
  };

  const playGame = () => {
    setPlay(true);
    unusedCard.current = [...cards.current];
    for (let i = 0; i < 4; i++) {
      let randomCardIndex = parseInt(
        (Math.random() * unusedCard.current.length).toFixed(0)
      );
      let randomCard = unusedCard.current[randomCardIndex];
      do {
        randomCardIndex = parseInt(
          (Math.random() * unusedCard.current.length).toFixed(0)
        );
        randomCard = unusedCard.current[randomCardIndex];
      } while (randomCard == null);
      setCurrentGameCard((x) => [...x, randomCard]);
      unusedCard.current.splice(randomCardIndex, 1);
    }
    dealCard();
  };

  return (
    <YStack bg={"white"} f={1}>
      <ImageBackground
        contentFit="fill"
        style={{
          position: "absolute",
          zIndex: -10,
          width: "100%",
          height: "100%",
        }}
        source={require("../../assets/pisti/pistibg.png")}
      />
      <ExitButton />
      <SafeAreaView />
      {!play ? (
        <Stack
          f={1}
          w={"100%"}
          h={"100%"}
          alignItems="center"
          jc="center"
          position="absolute"
          zIndex={10}
        >
          <Button onPress={playGame}>Oyna</Button>
        </Stack>
      ) : null}

      <YStack
        p={5}
        br={5}
        bg={"#6c321c"}
        position="absolute"
        bottom={120}
        right={15}
        ai="center"
        jc="center"
        shadowColor={"#000"}
        shadowOffset={{
          height: 2,
          width: 0,
        }}
        shadowRadius={3.84}
        shadowOpacity={0.25}
        elevationAndroid={5}
      >
        <Text color={"white"} fow={"600"} fos={16}>
          Siz
        </Text>
        <Stack
          mt={5}
          br={5}
          p={5}
          bg={"white"}
          shadowColor={"#000"}
          shadowOffset={{
            height: 2,
            width: 0,
          }}
          shadowRadius={3.84}
          shadowOpacity={0.25}
          elevationAndroid={5}
        >
          <Text fos={16}>{playerScore}</Text>
        </Stack>
      </YStack>

      <XStack
        pos="absolute"
        bottom={100}
        left={
          Dimensions.get("screen").width / 2 -
          ((playerCard.length - 1) * 40 + 90) / 2
        }
      >
        {playerCard.map((item, index) => {
          return (
            <Pressable
              key={index}
              style={{ position: "absolute", left: 40 * index }}
              onPress={() => _handlePlayerCardPress(item, index)}
            >
              {/* <Text>
              {CardType[item.type]} - {item.number}
            </Text> */}
              <Card number={item.number} type={item.type} />
            </Pressable>
          );
        })}
      </XStack>

      {/* <XStack zIndex={-1} pos="absolute" bottom={170} left={40}>
        {playerWinCard.map((item, index) => {
          item.map((item, index) => {
            return (
              <Stack
                rotate="90deg"
                key={index}
                style={{ position: "absolute", left: 5 * index }}
                onPress={() => _handlePlayerCardPress(item, index)}
              >
                <Card number={item.number} type={item.type} />
              </Stack>
            );
          });
        })}
      </XStack> */}

      <YStack
        p={5}
        br={5}
        bg={"#6c321c"}
        position="absolute"
        top={100}
        left={15}
        ai="center"
        shadowColor={"#000"}
        shadowOffset={{
          height: 2,
          width: 0,
        }}
        shadowRadius={3.84}
        shadowOpacity={0.25}
        elevationAndroid={5}
      >
        <Text color={"white"} fow={"600"} fos={16}>
          Kadir
        </Text>
        <Stack
          mt={5}
          br={5}
          p={5}
          bg={"white"}
          shadowColor={"#000"}
          shadowOffset={{
            height: 2,
            width: 0,
          }}
          shadowRadius={3.84}
          shadowOpacity={0.25}
          elevationAndroid={5}
        >
          <Text fos={16}>{botScore}</Text>
        </Stack>
      </YStack>

      <XStack
        pos="absolute"
        top={0}
        right={
          Dimensions.get("screen").width / 2 -
          ((botCards.length - 1) * 40 + 90) / 2
        }
      >
        {botCards.map((item, index) => {
          return (
            <Pressable
              key={index}
              style={{ position: "absolute", right: 40 * index }}
            >
              {/* <Text>
              {CardType[item.type]} - {item.number}
            </Text> */}
              <Card number={item.number} type={item.type} />
            </Pressable>
          );
        })}
      </XStack>

      <XStack
        pos="absolute"
        bottom={height / 2 + 75}
        left={width / 2 - ((currentGameCard.length - 1) * 5 + 90) / 2}
      >
        {currentGameCard.map((item, index) => {
          return (
            <Pressable
              key={index}
              style={{ position: "absolute", left: 5 * index }}
              onPress={() => _handlePlayerCardPress(item, index)}
            >
              <Card number={item.number} type={item.type} />
            </Pressable>
          );
        })}
      </XStack>
    </YStack>
  );
};

export default Game;
