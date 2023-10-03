import React, { useMemo, useRef, useState } from "react";
import { Dimensions, Modal, Pressable, View, StyleSheet } from "react-native";
import { Button, ScrollView, Stack, Text, XStack, YStack } from "tamagui";
import ExitButton from "../../components/ExitButton";
import Card from "../../components/pisti/Card";
import { Image, ImageBackground } from "expo-image";
import useStateWithCallback from "use-state-with-callback";
import { useRouter } from "expo-router";
import { buttonBlue, modalMaxWidth } from "../../utils/colors";
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
  const router = useRouter();
  // const [play, setPlay] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [currentGameCard, setCurrentGameCard] = useState<Card[]>([]);
  const [winAdd, setWinAdd] = useState("");
  // OYUNCU KARTLARI, SKORU, KAZANDIĞI KARTLARI VE SCORE HESAPLAMA CALLBACK FONKSİYONU
  const [playerCard, setPlayerCard] = useState<Card[]>([]);
  const [playerScore, setPlayerScore] = useState(0);
  const [playerTotalScore, setPlayerTotalScore] = useState(0);
  const [playerWinCard, setPlayerWinCard] = useStateWithCallback<Array<Card[]>>(
    [],
    () => {
      setWinAdd("player");
      let pScore = 0;
      playerWinCard.map((item) => {
        if (item.length == 2 && item[0].number == item[1].number) {
          pScore += 10;
        }
        item.map((x) => {
          if (x.type == 3 && x.number == 2) {
            pScore = pScore + 2;
          }
          if (x.type == 0 && x.number == 10) {
            pScore = pScore + 3;
          }
          if (x.number == 11 || x.number == 1) {
            pScore = pScore + 1;
          }
        });
        setPlayerScore(pScore);
      });
    }
  );
  // BOT KARTLARI, SKORU, KAZANDIĞI KARTLARI VE SCORE HESAPLAMA CALLBACK FONKSİYONU
  const [botCards, setBotCards] = useState<Card[]>([]);
  const [botScore, setBotScore] = useState(0);
  const [botTotalScore, setBotTotalScore] = useState(0);
  const [botWinCard, setBotWinCard] = useStateWithCallback<Array<Card[]>>(
    [],
    () => {
      setWinAdd("bot");
      let bScore = 0;
      botWinCard.map((item) => {
        if (item.length == 2 && item[0].number == item[1].number) {
          bScore += 10;
        }
        item.map((x) => {
          if (x.type == 3 && x.number == 2) {
            bScore = bScore + 2;
          }
          if (x.type == 0 && x.number == 10) {
            bScore = bScore + 3;
          }
          if (x.number == 11 || x.number == 1) {
            bScore = bScore + 1;
          }
        });
        setBotScore(bScore);
      });
    }
  );
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
  };

  const _handlePlayerCardPress = (card: Card, cardIndex: number) => {
    let clonePlayerCard = [...playerCard];
    clonePlayerCard.splice(cardIndex, 1);
    setPlayerCard(clonePlayerCard);
    if (currentGameCard.length > 0) {
      // ORTADA KART VARSA
      const beforeCard = currentGameCard[currentGameCard.length - 1];
      if (beforeCard.number == card.number || card.number == 11) {
        // ÖNCEKİ KARTLA PLAYER KART AYNIYSA VEYA ATILAN KART JOKERSE
        // PLAYER KAZANIR BOT JOKER HARİCİ BİR KART ATAR
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
    if (
      cloneBotCard.length == 0 &&
      clonePlayerCard.length == 0 &&
      unusedCard.current.length == 0
    ) {
      if (winAdd == "player") {
        setPlayerWinCard([...playerWinCard, [...currentGameCard, card]]);
        setCurrentGameCard([]);
      } else if (winAdd == "bot") {
        setBotWinCard([
          ...botWinCard,
          [...currentGameCard, card, availableCard],
        ]);
        setCurrentGameCard([]);
      }
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
    <>
      <ImageBackground
        source={require("../../assets/pisti/pistibg.png")}
        style={{
          position: "absolute",
          zIndex: -10,
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
        contentFit="fill"
      />
      {botCards.length == 0 &&
      playerCard.length == 0 &&
      unusedCard.current.length == 0 &&
      currentGameCard.length == 0 ? (
        <Stack width={"100%"} height={"100%"} ai="center" jc="center">
          <ExitButton />
          <YStack
            p={5}
            br={5}
            bg={"black"}
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
            <Text color={"white"} fow={"600"} fos={15}>
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
              <Text fow={"800"} fos={16}>
                {playerScore}
              </Text>
            </Stack>
          </YStack>
          <YStack
            p={5}
            br={5}
            bg={"black"}
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
            <Text color={"white"} fow={"600"} fos={15}>
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
              <Text fow={"800"} fos={16}>
                {botScore}
              </Text>
            </Stack>
          </YStack>
          <Button
            onPress={() => {
              playGame();
            }}
          >
            Dağıt
          </Button>
        </Stack>
      ) : !showModal ? (
        <YStack f={1}>
          <ExitButton />

          {/* PLAYER */}
          <YStack
            p={5}
            br={5}
            bg={"black"}
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
            <Text color={"white"} fow={"600"} fos={15}>
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
              <Text fow={"800"} fos={16}>
                {playerScore}
              </Text>
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
                  <Card number={item.number} type={item.type} />
                </Pressable>
              );
            })}
          </XStack>

          {/* BOT */}
          <YStack
            p={5}
            br={5}
            bg={"black"}
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
            <Text color={"white"} fow={"600"} fos={15}>
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
              <Text fow={"800"} fos={16}>
                {botScore}
              </Text>
            </Stack>
          </YStack>

          <XStack
            pos="absolute"
            top={-50}
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
                  <Image
                    style={{
                      width: 90,
                      height: 150,
                      borderRadius: 7,
                    }}
                    source={require("../../assets/defaultCard.png")}
                  />
                </Pressable>
              );
            })}
          </XStack>

          {/* CURRENT CARDS */}
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
                >
                  <Card number={item.number} type={item.type} />
                </Pressable>
              );
            })}
          </XStack>

          {/* UNUSED CARDS */}

          {unusedCard.current.length != 0
            ? unusedCard.current.map((item, index) => {
                return (
                  <ImageBackground
                    key={index}
                    style={{
                      width: 90,
                      height: 150,
                      borderRadius: 7,
                      position: "absolute",
                      left: -40,
                      zIndex: 300 - index,
                      bottom: height / 2 - 80 - index,
                      overflow: "hidden",
                    }}
                    source={require("../../assets/defaultCard.png")}
                  >
                    <Stack f={1} alignItems="flex-end" jc="center">
                      <Stack bg={"#000"} px={10} py={8} br={10}>
                        <Text fow={"800"} fos={16} color={"white"}>
                          {unusedCard.current.length}
                        </Text>
                      </Stack>
                    </Stack>
                  </ImageBackground>
                );
              })
            : null}
        </YStack>
      ) : null}
      {}
      <Modal animationType="fade" transparent={false} visible={showModal}>
        <View style={styles.centeredView}>
          <ImageBackground
            contentFit="fill"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
            source={require("../../assets/pisti/pistibg.png")}
          />
          <View style={styles.modalView}>
            <Text fos={18} mb={8} fow={"700"}>
              Pişti
            </Text>
            <ScrollView
              contentContainerStyle={{
                alignItems: "center",
              }}
              maxHeight={300}
              showsVerticalScrollIndicator={false}
            >
              <Text mb={12}>
                Nasıl Oynanır?{"\n"}
                Pişti oyunu, günümüzde bilinen zevkli iskambil oyunlarından
                birisidir. 52 kağıtlık tek bir desteyle iki kişi ile oynanır.
                {"\n"}
                İki kağıdın rakam değeri aynı ise bu iki kağıt aynı kabul
                edilmektedir. Örneğin kupa onlu ile karo onlu veya karo papazı
                ile sinek papazı aynıdır.
                {"\n"}
                Oyun başladığında oyunculara 4 er kağıt dağıtılır. Yere 3 kapalı
                1 açık kağıt konulur. Oyuncular sırasıyla ellerindeki bir kağıdı
                yerdekinin üstüne atarlar.
                {"\n"}
                Elinde en üstte bulunan kağıdın aynısından bulunan oyuncu onu
                atarak yerdeki bütün kağıtları alır.
                {"\n"}
                Bunun dışında vale(J) yerdeki kağıdın ne olduğuna bakılmaksızın
                yerdeki bütün kağıtları alan bir kağıttır.
                {"\n"}
                Yerde hiç kağıt yokken rakibiniz yere bir kağıt attığında, siz
                bu kağıtla aynı olan bir kağıdı yere atarsanız pişti yapmış
                olursunuz.Yerdeki kağıtları alırsınız ve oyun diğer oyuncunun
                attığı kağıtla devam eder.
                {"\n"}
                İki oyuncunun elindeki kağıtlar bitince yeniden 4’er kağıt
                dağıtılır. Destede kağıt bitince o elde kazanılan puanlar
                hesaplandıktan sonra yeni ele geçilir. Herhangi bir oyuncu 101
                puana ulaştığında oyun biter.
                {"\n"} {"\n"}
                <Text fow={"600"}>Puanlama</Text> {"\n"}
                Pişti: 10 puan{"\n"}
                As: 1 puan {"\n"}
                Sinek 2’li: 2 puan{"\n"}
                Karo 10’lu: 3 Puan{"\n"}
                Vale: 1 puan
                {/* Eldeki kâğıt sayısı rakibe göre fazla olan oyuncuya 3 puan
                eklenir. */}
              </Text>
            </ScrollView>
            <XStack mt={10}>
              <Button
                onPress={() => {
                  setShowModal(false);
                  setTimeout(() => {
                    router.push("/");
                  }, 500);
                }}
                mr={5}
                f={1}
                boc={buttonBlue}
                borderWidth={1}
              >
                <Text fow={"500"} fos={16} color={buttonBlue}>
                  Çıkış
                </Text>
              </Button>
              <Button
                onPress={() => {
                  setShowModal(false);

                  // setPlay(true);
                  playGame();
                }}
                ml={5}
                f={1}
                bg={buttonBlue}
              >
                <Text fow={"500"} fos={16} color={"white"}>
                  Başla
                </Text>
              </Button>
            </XStack>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Game;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    padding: 20,
    margin: 20,
    maxWidth: modalMaxWidth,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
