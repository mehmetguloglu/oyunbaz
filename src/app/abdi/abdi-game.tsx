import {
  Dimensions,
  Modal,
  SafeAreaView,
  View,
  StyleSheet,
} from "react-native";
import React, { useMemo, useRef, useState } from "react";
import ExitButton from "../../components/ExitButton";
import { Button, Stack, Text, ScrollView, XStack } from "tamagui";
import Card from "../../components/abdi/Card";
import { Image, ImageBackground } from "expo-image";
import { buttonBlue, buttonRed, modalMaxWidth } from "../../utils/colors";
import BannerAds from "../../components/google-ads/BannerAds";
import { router } from "expo-router";
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

const AbdiGame = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [showModal, setShowModal] = useState(true);
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

  const _handlePress = () => {
    let index = Math.floor(Math.random() * unusedCard.current.length - 0.0001);
    setSelectedCard(unusedCard.current[index]);
    unusedCard.current.splice(index, 1);
  };

  const tryAgainPress = () => unusedCard.current.push(...cards.current);

  return (
    <>
      <ImageBackground
        source={require("../../assets/woodbg.png")}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: -10,
        }}
        contentFit="fill"
      />
      {!showModal ? (
        <>
          <SafeAreaView style={{ flex: 1 }}>
            <ExitButton />
            <Stack jc="center" ai="center" f={1}>
              {selectedCard != null ? (
                <>
                  <Card number={selectedCard.number} type={selectedCard.type} />
                </>
              ) : null}
            </Stack>
            <Stack
              p={15}
              br={10}
              m={15}
              bg={"white"}
              shac={"#000"}
              shadowOffset={{
                width: 0,
                height: 2,
              }}
              shadowRadius={3.84}
              shadowOpacity={0.25}
              elevationAndroid={4}
            >
              {selectedCard != null ? (
                selectedCard.number == 1 ? (
                  <Text>Oynama sırası ters döner.</Text>
                ) : selectedCard.number == 2 ? (
                  <Text>Kartı çeken kişi içer.</Text>
                ) : selectedCard.number == 3 ? (
                  <Text>
                    Kartı çeken kişi şarkı söylemeye başlar ve şarkının istediği
                    bir kısmında durup oyun sırasına göre yanındaki kişi devam
                    eder. Şarkıyı devam ettiremeyip takılan kişi içer. Eğer
                    şarkıyı herkes takılmadan devam ettirip başlatan kişiye
                    dönerse o kişi içer.
                  </Text>
                ) : selectedCard.number == 4 ? (
                  <Text>Pas geçme kartı. Kimse içmez, sıra devam eder.</Text>
                ) : selectedCard.number == 5 ? (
                  <Text>Kartı çeken kişinin seçtiği bir kişi içer.</Text>
                ) : selectedCard.number == 6 ? (
                  <Text>
                    Kartı çeken kişi seçtiği bir kişiyle beraber içer.
                  </Text>
                ) : selectedCard.number == 7 ? (
                  <Text>
                    Kartı çeken kişi herhangi bir sektörden bir marka söyler.
                    Oyun sırasına göre diğer oyuncular aynı sektörde marka
                    isimleri söylemeye devam ederler. Söyleyemeyen veya
                    söylenmiş bir markayı tekrar söyleyen kişi içer.
                  </Text>
                ) : selectedCard.number == 8 ? (
                  <Text>Kartı çeken kişi hariç herkes içer.</Text>
                ) : selectedCard.number == 9 ? (
                  <Text>
                    Tüm oyuncular sağ işaret parmağını masaya koyar. Son koyan
                    oyuncu içer.
                  </Text>
                ) : selectedCard.number == 10 ? (
                  <Text>Kartı çeken kişi 2x içer.</Text>
                ) : selectedCard.number == 11 ? (
                  <Text>Kartı çeken kişi içer ve tekrar kart çeker.</Text>
                ) : selectedCard.number == 12 ? (
                  <Text>Kadınlar içer.</Text>
                ) : selectedCard.number == 13 ? (
                  <Text>Erkekler içer.</Text>
                ) : null
              ) : null}
            </Stack>
            {unusedCard.current.length != 0 ? (
              <Button
                disabled={disabled}
                borderWidth={1}
                boc={disabled ? "gray" : buttonBlue}
                mx={15}
                size={"$6"}
                onPress={() => {
                  setDisabled(true);
                  _handlePress();
                  setTimeout(() => {
                    setDisabled(false);
                  }, 1000);
                }}
              >
                <Text
                  color={disabled ? "gray" : buttonBlue}
                  fos={18}
                  fow={"600"}
                >
                  Kart Çek
                </Text>
              </Button>
            ) : (
              <Button
                disabled={disabled}
                borderWidth={1}
                boc={buttonRed}
                mx={15}
                size={"$6"}
                onPress={() => {
                  setDisabled(true);
                  tryAgainPress();
                  _handlePress();
                  setTimeout(() => {
                    setDisabled(false);
                  }, 1000);
                }}
              >
                <Text color={buttonRed} fos={18} fow={"600"}>
                  Tekrar Oyna
                </Text>
              </Button>
            )}
            <Stack
              ai="center"
              jc="center"
              pos="absolute"
              right={15}
              bg={"white"}
              top={50}
              p={10}
              br={10}
            >
              <Text>Kalan Kart</Text>
              <Text fow={"600"}>{unusedCard.current.length}/52</Text>
            </Stack>
            <Stack mt={10}>
              <BannerAds />
            </Stack>
          </SafeAreaView>
          <XStack
            pos="absolute"
            left={width / 2 - (150 + unusedCard.current.length * 3) / 2 + 30}
            top={0}
            zIndex={-9}
          >
            {unusedCard.current.map((item, index) => {
              return (
                <Image
                  key={index}
                  source={require("../../assets/defaultCard.png")}
                  style={{
                    left: index * 3,
                    height: 150,
                    width: 90,
                    position: "absolute",
                    borderRadius: 8,
                    transform: [{ rotate: "90deg" }],
                  }}
                  contentFit="fill"
                />
              );
            })}
          </XStack>
        </>
      ) : null}
      <Modal animationType="fade" transparent={false} visible={showModal}>
        <View style={styles.centeredView}>
          <ImageBackground
            source={require("../../assets/woodbg.png")}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              zIndex: -10,
            }}
            contentFit="fill"
          />
          <View style={styles.modalView}>
            <Text fos={18} mb={8} fow={"700"}>
              Abdi
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
                {"\n"}
                Abdi oyunu genellikle 4-8 kişi ile oynanır. Oyuncu sayısı kadar
                küçük bardak gerekmektedir. Oyunun temeli içecek içmek
                üzerinedir. Oyuncular istediği herhangi bir içecek seçerek bu
                oyunu oynayabilirler.
                {"\n"}
                {"\n"}
                Oyuncular sırayla birer kart çeker. Sıranın kimden başlayacığı
                zar atarak belirlenebilir. Çıkış yapıp "Zar At" oyunumuzdan zar
                atarak düşük atan kişinin başlayacağı kararlaştırılabilir.
                {"\n"}
                {"\n"}
                Her çekilen kartın numarasına göre çeken kişinin veya diğer
                oyuncuların yapması gereken talimatlar bulunmaktadır. Talimat
                yapıldıktan sonra sıra bir sonraki oyuncuya geçer. Kartlar
                bitene kadar oyun devam eder.
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

export default AbdiGame;
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
