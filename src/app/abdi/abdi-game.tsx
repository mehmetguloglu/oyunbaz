import {
  Dimensions,
  Modal,
  SafeAreaView,
  View,
  StyleSheet,
  ImageBackground,
} from "react-native";
import React, { useMemo, useRef, useState } from "react";
import ExitButton from "../../components/ExitButton";
import { Button, Stack, Text, ScrollView, XStack } from "tamagui";
import Card from "../../components/abdi/Card";
import { Image } from "expo-image";
import { buttonBlue, buttonRed, modalMaxWidth } from "../../utils/colors";
import BannerAds from "../../components/google-ads/BannerAds";
import { router } from "expo-router";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import {
  FontAwesome5,
  Entypo,
  MaterialIcons,
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
const { width, height } = Dimensions.get("screen");
enum CardType {
  "Kupa",
  "Maca",
  "Karo",
  "Sinek",
}
interface Card {
  // type: CardType;
  number: number;
}

const AnimatedImage = Animated.createAnimatedComponent(Image);
const AnimatedStack = Animated.createAnimatedComponent(Stack);

const AbdiGame = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  let numb = selectedCard?.number % 13;

  if (numb == 0) {
    numb = 13;
  }
  const [disabled, setDisabled] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const unusedCard = useRef<Card[]>([]);
  const cards = useRef<Card[]>([]);

  useMemo(() => {
    for (let i = 1; i < 53; i++) {
      cards.current.push({
        number: i,
      });
      unusedCard.current.push({
        number: i,
      });
    }
  }, []);

  const ImageRotateY = useSharedValue(180);
  const StackRotateY = useSharedValue("90deg");
  const ImageLeft = useSharedValue(-40);
  const ImageTop = useSharedValue(height / 2 - 180);
  const ImageZIndex = useSharedValue(11);
  const TextStackScale = useSharedValue(0);

  const StackStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateY: StackRotateY.value,
        },
      ],
    };
  });
  const ImageStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateY: `${ImageRotateY.value}deg`,
        },
      ],
      left: ImageLeft.value,
      top: ImageTop.value,
      zIndex: ImageZIndex.value,
    };
  });

  const TextStackStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: TextStackScale.value }],
    };
  });

  const _handlePress = () => {
    let index = Math.floor(Math.random() * unusedCard.current.length);
    index == unusedCard.current.length ? (index = index - 1) : null;

    setSelectedCard(unusedCard.current[index]);
    unusedCard.current.splice(index, 1);

    StackRotateY.value = "90deg";
    ImageRotateY.value = 180;
    ImageLeft.value = -40;
    TextStackScale.value = 0;
    ImageRotateY.value = withTiming(90, { duration: 500 });

    ImageLeft.value = withTiming(width / 2 - 60, { duration: 500 });
    setTimeout(() => {
      StackRotateY.value = withTiming("0deg", {
        duration: 500,
      });
      TextStackScale.value = withTiming(1, { duration: 500 });
    }, 500);

    setTimeout(() => {
      setDisabled(false);
    }, 1200);
    setDisabled(true);
  };

  const tryAgainPress = () => unusedCard.current.push(...cards.current);
  return (
    <>
      {!showModal ? (
        <>
          <Stack f={1} bg={"$gray8"}>
            <SafeAreaView style={{ flex: 1 }}>
              <ExitButton />
              <Stack f={1} />
              <AnimatedStack
                p={15}
                br={10}
                mx={15}
                mb={10}
                bg={"white"}
                shac={"#000"}
                shadowOffset={{
                  width: 0,
                  height: 2,
                }}
                shadowRadius={3.84}
                shadowOpacity={0.25}
                elevationAndroid={4}
                style={TextStackStyle}
              >
                {selectedCard != null ? (
                  numb == 1 ? (
                    <Text>Oynama sırası ters döner.</Text>
                  ) : numb == 2 ? (
                    <Text>Kartı çeken kişi içer.</Text>
                  ) : numb == 3 ? (
                    <Text>
                      Kartı çeken kişi şarkı söylemeye başlar ve şarkının
                      istediği bir kısmında durup oyun sırasına göre yanındaki
                      kişi devam eder. Şarkıyı devam ettiremeyip takılan kişi
                      içer. Eğer şarkıyı herkes takılmadan devam ettirip
                      başlatan kişiye dönerse o kişi içer.
                    </Text>
                  ) : numb == 4 ? (
                    <Text>Pas geçme kartı. Kimse içmez, sıra devam eder.</Text>
                  ) : numb == 5 ? (
                    <Text>Kartı çeken kişinin seçtiği bir kişi içer.</Text>
                  ) : numb == 6 ? (
                    <Text>
                      Kartı çeken kişi seçtiği bir kişiyle beraber içer.
                    </Text>
                  ) : numb == 7 ? (
                    <Text>
                      Kartı çeken kişi isim söyler. Oyun sırasına göre diğer
                      oyuncular son söylenen ismin son harfiyle başlayan yeni
                      bir isim söylerler. Söyleyemeyen veya söylenmiş bir ismi
                      tekrar söyleyen kişi içer.
                    </Text>
                  ) : numb == 8 ? (
                    <Text>Kartı çeken kişi hariç herkes içer.</Text>
                  ) : numb == 9 ? (
                    <Text>
                      Tüm oyuncular sağ işaret parmağını masaya koyar. Son koyan
                      oyuncu içer.
                    </Text>
                  ) : numb == 10 ? (
                    <Text>Kartı çeken kişi 2x içer.</Text>
                  ) : numb == 11 ? (
                    <Text>Kartı çeken kişi içer ve tekrar kart çeker.</Text>
                  ) : numb == 12 ? (
                    <Text>Kadınlar içer.</Text>
                  ) : numb == 13 ? (
                    <Text>Erkekler içer.</Text>
                  ) : null
                ) : null}
              </AnimatedStack>
              {unusedCard.current.length != 0 ? (
                <Button
                  disabled={disabled}
                  borderWidth={1}
                  boc={disabled ? "gray" : buttonBlue}
                  mx={15}
                  size={"$6"}
                  onPress={() => {
                    _handlePress();
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
              <Stack pos="absolute" right={15} top={10} zIndex={12}>
                <XStack ai="flex-end">
                  <Entypo
                    style={{ marginHorizontal: 2 }}
                    name="drink"
                    size={20}
                    color="darkorange"
                  />
                  <FontAwesome5
                    style={{ marginHorizontal: 2 }}
                    name="wine-glass-alt"
                    size={20}
                    color="darkred"
                  />
                  <FontAwesome5
                    style={{ marginHorizontal: 2 }}
                    name="beer"
                    size={20}
                    color="orange"
                  />
                  <MaterialIcons
                    name="local-drink"
                    size={10}
                    color="darkblue"
                  />
                  <MaterialIcons
                    name="local-drink"
                    size={10}
                    color="darkblue"
                  />
                </XStack>
                <Stack ai="center" jc="center" bg={"white"} p={10} br={10}>
                  <Text>Kalan Kart</Text>
                  <Text fow={"600"}>{unusedCard.current.length}/52</Text>
                </Stack>
              </Stack>
              <Stack mt={10}>
                <BannerAds />
              </Stack>
            </SafeAreaView>
            {unusedCard.current.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    left: -40,
                    top:
                      height / 2 -
                      unusedCard.current.length * 1 -
                      180 +
                      index * 1,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 3,
                    padding: 8,
                    borderRadius: 15,

                    height: 180,
                    width: 120,
                    backgroundColor: "white",
                    zIndex: -9,
                    position: "absolute",
                  }}
                />
              );
            })}
            {selectedCard != null ? (
              <AnimatedStack
                zIndex={9}
                pos="absolute"
                top={height / 2 - 180}
                left={width / 2 - 60}
                style={StackStyle}
              >
                <Card number={numb} />
              </AnimatedStack>
            ) : null}
            <AnimatedImage
              source={require("../../assets/abdi/abdiCard.png")}
              style={[
                ImageStyle,
                {
                  height: 180,
                  width: 120,
                  position: "absolute",
                  borderRadius: 15,
                  zIndex: 9,
                },
              ]}
              contentFit="fill"
            />
            {unusedCard.current.length != 0 ? (
              <Image
                source={require("../../assets/abdi/abdiCard.png")}
                style={[
                  {
                    top: height / 2 - 180,
                    left: -40,
                    height: 180,
                    width: 120,
                    position: "absolute",
                    borderRadius: 15,
                    zIndex: 9,
                    transform: [{ rotateY: "180deg" }],
                  },
                ]}
                contentFit="fill"
              />
            ) : null}
          </Stack>
        </>
      ) : null}

      <Modal animationType="fade" transparent={false} visible={showModal}>
        <Stack f={1} ai="center" jc={"center"} bg={"$gray8"}>
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
        </Stack>
      </Modal>
    </>
  );
};

export default AbdiGame;
const styles = StyleSheet.create({
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
