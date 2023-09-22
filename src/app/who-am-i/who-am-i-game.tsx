import {
  View,
  SafeAreaView,
  Pressable,
  Modal,
  StyleSheet,
  Platform,
} from "react-native";
import React, { useRef, useState } from "react";
import ExitButton from "../../components/ExitButton";
import { Button, Stack, XStack, Text, YStack, ScrollView } from "tamagui";
import WhoAmIData from "./WhoAmIData";
import CountdownTimer from "../../components/CountdownTimer";
import SelectDropdown from "react-native-select-dropdown";
import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { useRouter } from "expo-router";
import BannerAds from "../../components/google-ads/BannerAds";
import { buttonBlue, modalMaxWidth } from "../../utils/colors";

const WhoAmI = () => {
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
  const [index, setIndex] = useState(
    Math.floor(Math.random() * WhoAmIData.length)
  );
  const [correct, setCorrect] = useState(0);
  const [pas, setPasses] = useState(3);
  const showWords = useRef<number[]>([index]);
  const [score, setScore] = useState([]);
  const [time, setTime] = useState(120);
  const randomWord = () => {
    if (showWords.current.length == WhoAmIData.length) {
      showWords.current = [];
    }
    let random = Math.floor(Math.random() * WhoAmIData.length);
    do {
      random = Math.floor(Math.random() * WhoAmIData.length);
    } while (showWords.current.includes(random));

    setIndex(random);
    showWords.current = [...showWords.current, random];
  };
  const trueButtonPress = () => {
    randomWord();
    setCorrect(correct + 1);
    Haptics.NotificationFeedbackType.Success;
  };
  const passButtonPress = () => {
    if (pas > 0) {
      randomWord();
      setPasses(pas - 1);
      Haptics.NotificationFeedbackType.Warning;
    }
  };

  const handleOnComplete = () => {
    setScore([correct, ...score]);
    setScoreModal(true);
  };
  const scoreModalStart = () => {
    setScoreModal(false);
    setCorrect(0);
    setPasses(3);
    randomWord();
    showWords.current = [];
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <ExitButton />
        <Modal animationType="slide" transparent={false} visible={openModal}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text fos={18} mb={8} fow={"700"}>
                Ben Kimim?
              </Text>
              <Text mb={12}>
                Nasıl Oynanır?{"\n"}
                Oyuncular telefonda yazan ismi, sadece evet ya da hayır şeklinde
                cevaplanabilecek sorularla tahmin etmeye çalışır. Belirlenen
                süre içinde en çok doğru tahmini yapan oyuncu veya takım
                kazanır.
              </Text>
              <SelectDropdown
                data={seconds}
                buttonStyle={{
                  backgroundColor: buttonBlue,
                  borderRadius: 20,
                }}
                defaultButtonText={"120 Saniye"}
                renderDropdownIcon={() => {
                  return (
                    <Feather name="chevron-down" size={24} color="white" />
                  );
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

              <XStack mt={10}>
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
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    {score.map((item, index) => {
                      let r = Math.floor(Math.random() * 256);
                      let g = Math.floor(Math.random() * 256);
                      let b = Math.floor(Math.random() * 256);
                      return (
                        <YStack
                          key={index}
                          p={12}
                          br={12}
                          mx={3}
                          ai="center"
                          borderWidth={2}
                          boc={`rgb(${r},${g},${b})`}
                        >
                          <Text fow={"600"} color={`rgb(${r},${g},${b})`}>
                            Skor
                          </Text>
                          <Text
                            mt={4}
                            fow={"600"}
                            color={`rgb(${r},${g},${b})`}
                            fos={18}
                          >
                            {item}
                          </Text>
                          <Stack
                            mt={5}
                            br={3}
                            py={2}
                            px={6}
                            bg={`rgb(${r},${g},${b})`}
                          >
                            <Text color={"white"} fos={10}>
                              {score.length - index}. Oyun
                            </Text>
                          </Stack>
                        </YStack>
                      );
                    })}
                  </ScrollView>
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
                  boc={buttonBlue}
                >
                  <Text fow={"500"} fos={16} color={buttonBlue}>
                    Çıkış
                  </Text>
                </Button>
                <Button
                  onPress={() => {
                    scoreModalStart();
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
        {!openModal && !scoreModal ? (
          <Stack
            jc="space-between"
            m={15}
            p={20}
            br={20}
            f={1}
            bg={"white"}
            shadowColor={"#000"}
            shadowOffset={{ width: 0, height: 12 }}
            shadowOpacity={0.58}
            shadowRadius={16}
            elevationAndroid={10}
          >
            <Stack f={1} ai="center" jc="center">
              <CountdownTimer
                fos={20}
                sow={8}
                onComplete={() => {
                  handleOnComplete();
                }}
                second={time}
                size={100}
              />
              <Stack f={1} ai="center" jc="center" bg={"white"}>
                <Stack
                  shadowColor={"#000"}
                  shadowOffset={{ width: 0, height: 5 }}
                  shadowOpacity={0.34}
                  shadowRadius={6.27}
                  elevationAndroid={10}
                  bg={"white"}
                  p={20}
                  m={10}
                  br={10}
                >
                  <Text ta="center" fos={21} fow={"600"}>
                    {WhoAmIData[index].name}
                  </Text>
                </Stack>
              </Stack>
            </Stack>

            <XStack ai="center" justifyContent="space-between">
              <View
                style={{
                  flex: 1,
                  marginRight: 5,
                }}
              >
                <Pressable
                  style={{
                    backgroundColor: "orange",
                    padding: 10,
                    borderRadius: 10,
                    marginBottom: 3,
                  }}
                  onPress={() => {
                    passButtonPress();
                  }}
                >
                  <Text fos={16} color={"white"} ta="center" fow={"600"}>
                    Pas
                  </Text>
                </Pressable>
                <View
                  style={{
                    backgroundColor: "orange",
                    padding: 4,
                    borderRadius: 8,
                  }}
                >
                  <Text color={"white"} fos={12} ta="center">
                    Kalan Pas: {pas}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1,

                  marginLeft: 5,
                }}
              >
                <Pressable
                  style={{
                    backgroundColor: "green",
                    padding: 10,
                    borderRadius: 10,
                    marginBottom: 3,
                  }}
                  onPress={() => {
                    trueButtonPress();
                  }}
                >
                  <Text fos={16} color={"white"} ta="center" fow={"600"}>
                    Doğru
                  </Text>
                </Pressable>
                <View
                  style={{
                    backgroundColor: "green",
                    padding: 4,
                    borderRadius: 8,
                  }}
                >
                  <Text color={"white"} fos={12} ta="center">
                    Doğru Sayısı: {correct}
                  </Text>
                </View>
              </View>
            </XStack>
          </Stack>
        ) : null}
      </SafeAreaView>
      <Stack bg={"white"} py={20}>
        <BannerAds />
      </Stack>
    </>
  );
};

export default WhoAmI;
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
