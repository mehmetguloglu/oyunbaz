import React, { useRef, useState } from "react";
import { useRouter } from "expo-router";
import Word from "./Word";
import CountdownTimer from "./../../components/CountdownTimer";
import { Stack, YStack, Text, Separator, XStack, Button } from "tamagui";
import { Feather, FontAwesome5, FontAwesome } from "@expo/vector-icons";
import {
  Modal,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Platform,
  SafeAreaView,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import ExitButton from "./../../components/ExitButton";
import BannerAds from "../../components/google-ads/BannerAds";
import { buttonBlue, buttonRed, modalMaxWidth } from "../../utils/colors";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
const { width, height } = Dimensions.get("window");
const AnimatedYStack = Animated.createAnimatedComponent(YStack);
const BannedWordsGame = () => {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(true);
  const [scoreModal, setScoreModal] = useState(false);
  const seconds = [
    "60 Saniye",
    "90 Saniye",
    "120 Saniye",
    "150 Saniye",
    "180 Saniye",
    "240 Saniye",
  ];
  const [team, setTeam] = useState("Mavi");
  const [index, setIndex] = useState(Math.floor(Math.random() * Word.length));
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [pas, setPasses] = useState(3);
  const showWords = useRef<number[]>([index]);
  const [blueScore, setBlueScore] = useState(0);
  const [redScore, setRedScore] = useState(0);
  const [time, setTime] = useState(120);

  const randomWord = () => {
    if (showWords.current.length == Word.length) {
      showWords.current = [];
    }
    let random = Math.floor(Math.random() * Word.length);
    do {
      random = Math.floor(Math.random() * Word.length);
    } while (showWords.current.includes(random));

    setIndex(random);
    showWords.current = [...showWords.current, random];
  };
  const trueButtonPress = () => {
    randomWord();
    setCorrect(correct + 1);
  };
  const passButtonPress = () => {
    if (pas > 0) {
      randomWord();
      setPasses(pas - 1);
    }
  };

  const falseButtonPress = () => {
    randomWord();
    setWrong(wrong + 1);
  };

  const handleOnComplete = () => {
    if (team == "Mavi") {
      setBlueScore(blueScore + correct - wrong);
      setTeam("Kırmızı");
    } else {
      setRedScore(redScore + correct - wrong);
      setTeam("Mavi");
    }

    setScoreModal(true);
  };
  const scoreModalStart = () => {
    setScoreModal(false);
    setTime(time);
    setCorrect(0);
    setWrong(0);
    setPasses(3);
    randomWord();
    showWords.current = [];
  };

  const rotate = useSharedValue("0deg");
  const left = useSharedValue(width / 20);
  const bottom = useSharedValue<string | number>(0);
  const scale = useSharedValue(1);
  const AnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: rotate.value }, { scale: scale.value }],
      left: left.value,
      bottom: bottom.value == 0 ? "auto" : bottom.value,
    };
  });

  return (
    <>
      <Modal animationType="slide" transparent={false} visible={openModal}>
        <View style={[styles.centeredView]}>
          <View style={styles.modalView}>
            <Text fos={18} mb={8} fow={"700"}>
              Yasaklı Kelimeler
            </Text>
            <YStack mb={15}>
              <ScrollView
                style={{ maxHeight: height * 0.25 }}
                showsVerticalScrollIndicator={false}
              >
                <Text ta="justify">
                  Nasıl Oynanır?{"\n"}
                  1- Katılımcılar,{" "}
                  <Text color={buttonBlue} fow={"500"}>
                    Mavi
                  </Text>{" "}
                  ve{" "}
                  <Text color={buttonRed} fow={"500"}>
                    Kırmızı
                  </Text>{" "}
                  olmak üzere iki farklı takıma ayrılırlar. Oyuna Mavi takım
                  başlar. {"\n"}
                  2- Her tur için ne kadar süre verileceği, aşağıda yer alan
                  zamanlayıcı ile belirlenmelidir. {"\n"}
                  3- Mavi takımdan seçilecek ilk oyuncu, yani "İpucu Verici,"
                  ekranda görünen ana kelimeyi takım arkadaşlarına açıklamaya
                  çalışır. Ancak, ekranın alt kısmında belirtilen yasaklı
                  kelimeleri kullanmak kesinlikle yasaktır. Takım arkadaşları,
                  İpucu Verici'nin sunduğu açıklamalardan hareketle kelimeyi
                  tahmin etmeye çalışır. {"\n"}
                  4- Her turda, belirtilen süre zarfında maksimum sayıda
                  kelimeyi tamamlamayı hedefleyin. Doğru tahmin başına
                  takımınıza bir puan eklenir.{"\n"}
                  5- Eğer İpucu Verici, yasaklı kelimelerden herhangi birini
                  kullanırsa, "Hata" butonuna tıklanmalı ve bir sonraki kelimeye
                  geçilmelidir. {"\n"}
                  6- Zamanlayıcı'nın süresi dolduğunda, oyun sırası diğer takıma
                  geçer. Her yeni turda, farklı bir katılımcı "İpucu Verici"
                  rolünü üstlenir.
                  {"\n"}
                  7- Her turun sonunda takımların puanları gösterilir. En yüksek
                  puanı toplayan takım, oyunun galibi olarak ilan edilir.
                </Text>
              </ScrollView>
            </YStack>
            <SelectDropdown
              data={seconds}
              buttonStyle={{
                backgroundColor: buttonBlue,
                borderRadius: 20,
              }}
              defaultButtonText={"120 Saniye"}
              renderDropdownIcon={() => {
                return <Feather name="chevron-down" size={24} color="white" />;
              }}
              dropdownStyle={{
                backgroundColor: "gray",
                borderRadius: 20,
              }}
              rowTextStyle={{
                color: "white",
                fontSize: 14,
                fontWeight: "bold",
              }}
              dropdownIconPosition={"right"}
              buttonTextStyle={{
                color: "white",
                fontSize: 15,
                fontWeight: "bold",
              }}
              selectedRowStyle={{
                backgroundColor: buttonBlue,
              }}
              onSelect={(selectedItem, index) => {
                {
                  index == 1
                    ? setTime(90)
                    : index == 2
                    ? setTime(120)
                    : index == 3
                    ? setTime(150)
                    : index == 4
                    ? setTime(180)
                    : index == 5
                    ? setTime(240)
                    : setTime(60);
                }
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
            />
            <XStack my={18}>
              <Text fow={"700"} fos={16} color={buttonBlue}>
                Mavi
              </Text>
              <Text fos={16}> takım anlatacak.</Text>
            </XStack>
            <XStack zIndex={5}>
              <Button
                onPress={() => {
                  setOpenModal(false);
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
                  setOpenModal(false);
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
      <Modal animationType="slide" transparent={false} visible={scoreModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text fos={21} mb={8} fow={"700"}>
              Skor
            </Text>

            <YStack my={18}>
              <XStack>
                <YStack
                  p={12}
                  br={12}
                  mr={4}
                  ai="center"
                  borderWidth={2}
                  boc={"green"}
                >
                  <Text fow={"600"} color={"green"}>
                    Doğru Sayısı
                  </Text>
                  <Text mt={4} fow={"600"} color={"green"} fos={18}>
                    {correct}
                  </Text>
                </YStack>
                <YStack
                  p={12}
                  br={12}
                  ml={4}
                  ai="center"
                  borderWidth={2}
                  boc={"orangered"}
                >
                  <Text fow={"600"} color={"orangered"}>
                    Hata Sayısı
                  </Text>
                  <Text mt={4} fow={"600"} color={"orangered"} fos={18}>
                    {wrong}
                  </Text>
                </YStack>
              </XStack>
              <YStack my={8} overflow="hidden" ai="center">
                <XStack position="absolute" ai="center">
                  <Text
                    mt={8}
                    fos={16}
                    fow={"800"}
                    color={buttonBlue}
                    zIndex={1}
                    f={1}
                    ta="right"
                    mr={4}
                  >
                    TOPLAM
                  </Text>
                  <Text
                    mt={8}
                    fos={16}
                    fow={"800"}
                    color={buttonRed}
                    zIndex={1}
                    f={1}
                    ta="left"
                    ml={4}
                  >
                    SKOR
                  </Text>
                </XStack>
                <XStack>
                  <Stack
                    borderTopWidth={2}
                    borderBottomWidth={2}
                    borderLeftWidth={2}
                    boc={buttonBlue}
                    borderTopLeftRadius={20}
                    borderBottomLeftRadius={20}
                    p={12}
                    pt={32}
                    f={1}
                    ai="center"
                    jc="center"
                  >
                    <Text fow={"800"} color={buttonBlue} fos={21}>
                      {blueScore}
                    </Text>
                  </Stack>
                  <Stack
                    borderTopWidth={2}
                    borderBottomWidth={2}
                    borderRightWidth={2}
                    boc={buttonRed}
                    borderTopRightRadius={20}
                    borderBottomRightRadius={20}
                    p={12}
                    pt={32}
                    f={1}
                    ai="center"
                    jc="center"
                  >
                    <Text fow={"800"} color={buttonRed} fos={21}>
                      {redScore}
                    </Text>
                  </Stack>
                </XStack>
              </YStack>

              <XStack ai="center" jc="center">
                <Text
                  fow={"700"}
                  fos={16}
                  color={team == "Mavi" ? buttonBlue : buttonRed}
                >
                  {team}
                </Text>
                <Text fos={16}> takım anlatacak.</Text>
              </XStack>
            </YStack>
            <XStack>
              <Button
                onPress={() => {
                  setScoreModal(false);
                  setTimeout(() => {
                    router.push("/");
                  }, 500);
                }}
                mr={5}
                f={1}
                boc={team == "Mavi" ? buttonBlue : buttonRed}
                borderWidth={1}
              >
                <Text
                  fow={"500"}
                  fos={16}
                  color={team == "Mavi" ? buttonBlue : buttonRed}
                >
                  Çıkış
                </Text>
              </Button>
              <Button
                onPress={() => {
                  scoreModalStart();
                }}
                ml={5}
                f={1}
                bg={team == "Mavi" ? buttonBlue : buttonRed}
              >
                <Text fow={"500"} fos={16} color={"white"}>
                  Başla
                </Text>
              </Button>
            </XStack>
          </View>
        </View>
      </Modal>
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        {!openModal && !scoreModal ? (
          <>
            <Stack
              style={{ bottom: "" }}
              bg={"white"}
              f={1}
              ai="center"
              jc="center"
              mt={5}
            >
              <CountdownTimer
                fos={24}
                sow={8}
                size={100}
                second={time}
                onComplete={() => {
                  handleOnComplete();
                }}
              />
              <Stack width={width} f={1} ai="center" jc="center">
                <AnimatedYStack
                  style={AnimatedStyle}
                  pos={"absolute"}
                  width={"90%"}
                  // maxWidth={766}
                  bg={"white"}
                  // m={15}
                  br={20}
                  shadowColor={"#000"}
                  shadowOffset={{
                    width: 0,
                    height: 12,
                  }}
                  shadowOpacity={0.58}
                  shadowRadius={16.0}
                  elevation={Platform.OS == "android" ? 24 : 0}
                  pb={10}
                >
                  <Stack
                    borderTopLeftRadius={20}
                    borderTopRightRadius={20}
                    width={"100%"}
                    bg={team == "Mavi" ? buttonBlue : buttonRed}
                    p={15}
                    ai="center"
                  >
                    <Text ta="center" color={"white"} fow={"600"} fontSize={21}>
                      {Word[index].spokenWord}
                    </Text>
                  </Stack>
                  <Separator
                    my={1}
                    borderColor={team == "Mavi" ? buttonBlue : buttonRed}
                  />
                  <Separator
                    my={0}
                    borderColor={team == "Mavi" ? buttonBlue : buttonRed}
                  />
                  <Separator
                    my={1}
                    borderColor={team == "Mavi" ? buttonBlue : buttonRed}
                  />
                  <YStack>
                    <Text my={10} ta="center" fontSize={17} fow={"600"}>
                      {Word[index].forbiddenWords[0]}
                    </Text>
                    <Text my={10} ta="center" fontSize={17} fow={"600"}>
                      {Word[index].forbiddenWords[1]}
                    </Text>
                    <Text my={10} ta="center" fontSize={17} fow={"600"}>
                      {Word[index].forbiddenWords[2]}
                    </Text>
                    <Text my={10} ta="center" fontSize={17} fow={"600"}>
                      {Word[index].forbiddenWords[3]}
                    </Text>
                    <Text my={10} ta="center" fontSize={17} fow={"600"}>
                      {Word[index].forbiddenWords[4]}
                    </Text>
                  </YStack>
                </AnimatedYStack>
              </Stack>

              <XStack mx={15} jc="center">
                <YStack maxWidth={250} mr={4} f={1}>
                  <Button
                    onPress={() => {
                      rotate.value = withTiming("20deg", {
                        duration: 500,
                      });
                      left.value = withTiming(-1 * width - 50, {
                        duration: 500,
                        easing: Easing.inOut(Easing.back(3)),
                      });
                      setTimeout(() => {
                        left.value = width + 50;
                        rotate.value = "0deg";
                        falseButtonPress();
                        left.value = withTiming(width / 20, {
                          duration: 500,
                          easing: Easing.inOut(Easing.back(3)),
                        });
                      }, 500);
                    }}
                    bg={"red"}
                    fd="column"
                    size={"$6"}
                    p={0}
                    shadowColor={"#000"}
                    shadowOffset={{
                      width: 0,
                      height: 2,
                    }}
                    shadowOpacity={0.25}
                    shadowRadius={3.84}
                    elevation={Platform.OS == "android" ? 5 : 0}
                  >
                    <FontAwesome name="times" size={32} color="white" />
                  </Button>
                  <Stack br={10} my={6} bg={"red"}>
                    <Text p={3} ta="center" color={"white"} fos={12}>
                      Hata Sayısı: {wrong}
                    </Text>
                  </Stack>
                </YStack>

                <YStack maxWidth={250} f={1} mx={4}>
                  <Button
                    onPress={() => {
                      rotate.value = withTiming("20deg", {
                        duration: 500,
                      });
                      bottom.value = withTiming(-height, {
                        duration: 500,
                        easing: Easing.inOut(Easing.back(3)),
                      });
                      scale.value = withTiming(0, {
                        duration: 500,
                      });
                      setTimeout(() => {
                        bottom.value = height;
                        rotate.value = "0deg";
                        passButtonPress();
                        scale.value = withTiming(1, {
                          duration: 500,
                        });
                        bottom.value = withTiming(0, {
                          duration: 500,
                          easing: Easing.inOut(Easing.back(3)),
                        });
                      }, 500);
                    }}
                    bg={pas == 0 ? "gray" : "$yellow8Light"}
                    fd="column"
                    size={"$6"}
                    p={0}
                    disabled={pas == 0}
                    shadowColor={"#000"}
                    shadowOffset={{
                      width: 0,
                      height: 2,
                    }}
                    shadowOpacity={0.25}
                    shadowRadius={3.84}
                    elevation={Platform.OS == "android" ? 5 : 0}
                  >
                    <FontAwesome5 name="exchange-alt" size={32} color="white" />
                  </Button>
                  <Stack
                    p={3}
                    br={10}
                    my={6}
                    bg={pas == 0 ? "gray" : "$yellow8Light"}
                  >
                    <Text ta="center" color={"white"} fos={12}>
                      Kalan Pas: {pas}
                    </Text>
                  </Stack>
                </YStack>

                <YStack maxWidth={250} ml={4} f={1}>
                  <Button
                    onPress={() => {
                      rotate.value = withTiming("-20deg", {
                        duration: 500,
                      });
                      left.value = withTiming(width + 50, {
                        duration: 500,
                        easing: Easing.inOut(Easing.back(3)),
                      });
                      setTimeout(() => {
                        left.value = -1 * width;
                        rotate.value = "0deg";
                        trueButtonPress();
                        left.value = withTiming(width / 20, {
                          duration: 500,
                          easing: Easing.inOut(Easing.back(3)),
                        });
                      }, 500);
                    }}
                    bg={"$green9Light"}
                    fd="column"
                    size={"$6"}
                    p={0}
                    shadowColor={"#000"}
                    shadowOffset={{
                      width: 0,
                      height: 2,
                    }}
                    shadowOpacity={0.25}
                    shadowRadius={3.84}
                    elevation={Platform.OS == "android" ? 5 : 0}
                  >
                    <Feather name="check" size={42} color="white" />
                  </Button>
                  <Stack br={10} p={3} my={6} bg={"$green9Light"}>
                    <Text ta="center" color={"white"} fos={12}>
                      Doğru Sayısı {correct}
                    </Text>
                  </Stack>
                </YStack>
              </XStack>
            </Stack>
            <Stack bg={"white"}>
              <BannerAds />
            </Stack>
            <ExitButton />
          </>
        ) : null}
      </SafeAreaView>
    </>
  );
};

export default BannedWordsGame;
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
