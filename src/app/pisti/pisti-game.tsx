import React, { useMemo, useRef, useState } from "react";
import { SafeAreaView } from "react-native";
import { Button, Text, XStack, YStack } from "tamagui";

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
  const [botCards, setBotCards] = useState<Card[]>([]);
  const [playerCard, setPlayerCard] = useState<Card[]>([]);
  const [currentGameCard, setCurrentGameCard] = useState<Card[]>([]);
  const [playerWinCard, setPlayerWinCard] = useState<Array<Card[]>>([]);
  const [botWinCard, setBotWinCard] = useState<Array<Card[]>>([]);
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
    <YStack>
      <SafeAreaView />
      <Button onPress={playGame}>Dağıt piç</Button>
      <Text>Bot cards</Text>
      {botCards.map((item, index) => {
        return (
          <Button>
            <Text>
              {CardType[item.type]} - {item.number}
            </Text>
          </Button>
        );
      })}
      <Text>Player cards</Text>
      {playerCard.map((item, index) => {
        return (
          <Button onPress={() => _handlePlayerCardPress(item, index)}>
            <Text>
              {CardType[item.type]} - {item.number}
            </Text>
          </Button>
        );
      })}
      <Text>currentGameCard</Text>
      {currentGameCard.map((item, index) => {
        return (
          <Text>
            {CardType[item.type]} - {item.number}
          </Text>
        );
      })}
      <Text>botWinCard</Text>
      {botWinCard.map((item, index) => {
        return (
          <XStack>
            {item.map((card, cardIndex) => {
              return (
                <Text>
                  {CardType[card.type]} - {card.number} /
                </Text>
              );
            })}
          </XStack>
        );
      })}
      <Text>playerWinCard</Text>
      {playerWinCard.map((item, index) => {
        return (
          <XStack>
            {item.map((card, cardIndex) => {
              return (
                <Text>
                  {CardType[card.type]} - {card.number} /
                </Text>
              );
            })}
          </XStack>
        );
      })}
    </YStack>
  );
};

export default Game;
