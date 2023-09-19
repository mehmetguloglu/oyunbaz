import {
  Dimensions,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
} from "react-native";
import React, { useRef, useState } from "react";
import { Stack, XStack, YStack, Text, Button } from "tamagui";
import questions from "./questions";
import CountdownTimer from "../../components/CountdownTimer";
import ExitButton from "../../components/ExitButton";
import * as Burnt from "burnt";
import { useRouter } from "expo-router";
import BannerAds from "../../components/google-ads/BannerAds";
const { width, height } = Dimensions.get("window");
const Quiz = () => {
  const router = useRouter();
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [openModal, setOpenModal] = useState(true);
  const [finishModal, setFinishModal] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(
    Math.floor(Math.random() * questions[Math.floor(questionCount / 4)].length)
  );
  const showQuestions = useRef<number[]>([questionIndex]);
  const [isFinished, setIsFinished] = useState(false);
  const data = questions[Math.floor(questionCount / 4)][questionIndex];
  const [selected, setSelected] = useState(4);

  const randomQuestions = () => {
    if (
      showQuestions.current.length ==
      questions[Math.floor(questionCount / 4)].length
    ) {
      showQuestions.current = [];
    }
    let newQuestionCount = questionCount + 1;
    if (questionCount == 15) {
      newQuestionCount = 1;
    }
    let random;

    do {
      random = Math.floor(
        Math.random() * questions[Math.floor(newQuestionCount / 4)].length
      );
    } while (
      showQuestions.current.includes(random) ||
      random >= questions[Math.floor(newQuestionCount / 4)].length
    );

    setQuestionIndex(random);

    showQuestions.current = [...showQuestions.current, random];
  };

  const handleChooseAnswer = (index: number) => {
    if (selected === index) {
      setIsFinished(true);
      if (index == data.answer) {
        Burnt.toast({
          title: "Doğru Cevap!",
          haptic: "success",
          preset: "done",
          duration: 2,
        });
      } else {
        Burnt.toast({
          title: "Yanlış Cevap!",
          haptic: "error",
          preset: "error",
          duration: 2,
        });
      }
      setTimeout(() => {
        if (index == data.answer) {
          setCorrect(correct + 1);
        } else {
          setWrong(wrong + 1);
        }
        let qcount = questionCount + 1;
        if (qcount > 15) {
          setFinishModal(true);
        } else {
          setQuestionCount(qcount);
          randomQuestions();
          setSelected(4);
          setIsFinished(false);
        }
      }, 3000);
    } else setSelected(index);
  };
  const tryAgainButton = () => {
    setQuestionCount(0);
    setQuestionIndex(
      Math.floor(Math.random() * questions[Math.floor(1 / 4)].length)
    );
    setCorrect(0);
    setWrong(0);
    showQuestions.current = [];

    setFinishModal(false);
    randomQuestions();
    setSelected(4);
    setIsFinished(false);
  };

  return (
    <>
      <Modal animationType="slide" transparent={false} visible={openModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <XStack>
              <Text fos={18} mb={8} fow={"700"}>
                Cahilmetre
              </Text>
            </XStack>
            <YStack mb={15}>
              <ScrollView
                style={{ maxHeight: height * 0.34 }}
                showsVerticalScrollIndicator={false}
              >
                <Text>
                  Nasıl Oynanır?{"\n"}
                  1- 16 sorudan oluşan bu bilgi yarışmasında, katılımcılar 30
                  saniye içerisinde sorulan soruya doğru cevabı seçmelidir.
                  {"\n"}
                  2- Dördüncü sorudan sonra katılımcıya cehalet seviyesini
                  belirleyen Cahilmetre gösterilir.
                  {"\n"}
                  3- 16. soruya kadar her bir soruya doğru cevap veren
                  katılımcılar, Cahilmetredeki en üst seviyeye ulaşabilirler.
                  Yanlış cevap verdikçe katılımcıların seviyesi düşecektir.
                  {"\n"}
                  4- Bilgi yarışması 16. soruya kadar devam eder. 16. sorudan
                  sonra katılımcıların doğru cevap sayısı ve Cahilmetre
                  gösterilir.
                  {"\n"}
                  5- Oyun seviyeleri düşükten yükseğe doğru şu şekildedir:{"\n"}
                  Yarı Cahil, Cahil, Ortalama Altı Zeka, Ortalama Zeka, Zeki,
                  Aydın, Entelektüel ve Elittir. Bu seviyelerin dışında sadece
                  en üst seviye kullanıcıların ulaşabileceği gizli bir seviye de
                  mevcuttur.
                </Text>
              </ScrollView>
            </YStack>

            <XStack>
              <Button
                onPress={() => {
                  setOpenModal(false);
                  setTimeout(() => {
                    router.push("/");
                  }, 500);
                }}
                mr={5}
                f={1}
                boc={"#837c75"}
                borderWidth={1}
              >
                <Text fow={"500"} fos={16} color={"#837c75"}>
                  Çıkış
                </Text>
              </Button>
              <Button
                onPress={() => {
                  setOpenModal(false);
                }}
                ml={5}
                f={1}
                bg={"#aea69c"}
              >
                <Text fow={"500"} fos={16} color={"white"}>
                  Başla
                </Text>
              </Button>
            </XStack>
          </View>
        </View>
      </Modal>

      <Modal animationType="slide" transparent={false} visible={finishModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text fos={21} mb={8} fow={"700"}>
              Skor
            </Text>

            <XStack my={18}>
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
                mr={4}
                ai="center"
                borderWidth={2}
                boc={"red"}
              >
                <Text fow={"600"} color={"red"}>
                  Yanlış Sayısı
                </Text>
                <Text mt={4} fow={"600"} color={"red"} fos={18}>
                  {wrong}
                </Text>
              </YStack>
            </XStack>

            <YStack mb={15} ai="center">
              <Stack
                width={height / 7}
                height={height / 7}
                br={height / 14}
                borderWidth={height / 140}
                bg={
                  correct / questionCount <= 2 &&
                  correct / questionCount > 0.9 &&
                  questionCount >= 10
                    ? "#00004d"
                    : "white"
                }
                boc={
                  questionCount >= 4
                    ? correct / questionCount <= 0.25
                      ? "darkred"
                      : correct / questionCount <= 0.35
                      ? "red"
                      : correct / questionCount <= 0.45
                      ? "orangered"
                      : correct / questionCount <= 0.6
                      ? "orange"
                      : correct / questionCount <= 0.75
                      ? "#00b300"
                      : correct / questionCount <= 0.85
                      ? "#008000"
                      : correct / questionCount <= 2 &&
                        correct / questionCount > 0.9 &&
                        questionCount >= 10
                      ? "white"
                      : correct / questionCount <= 1
                      ? "#003300"
                      : "black"
                    : "black"
                }
                ai="center"
                jc="center"
              >
                <Text
                  color={
                    questionCount >= 4
                      ? correct / questionCount <= 0.25
                        ? "darkred"
                        : correct / questionCount <= 0.35
                        ? "red"
                        : correct / questionCount <= 0.45
                        ? "orangered"
                        : correct / questionCount <= 0.6
                        ? "orange"
                        : correct / questionCount <= 0.75
                        ? "#00b300"
                        : correct / questionCount <= 0.85
                        ? "#008000"
                        : correct / questionCount <= 2 &&
                          correct / questionCount > 0.9 &&
                          questionCount >= 10
                        ? "white"
                        : correct / questionCount <= 1
                        ? "#003300"
                        : "black"
                      : "black"
                  }
                  fos={height / 48}
                  fow={"600"}
                  ta="center"
                  p={5}
                >
                  {questionCount == 0
                    ? "İlk Soru"
                    : questionCount == 1
                    ? "İkinci Soru"
                    : questionCount == 2
                    ? "Üçüncü Soru"
                    : questionCount == 3
                    ? "Dördüncü Soru"
                    : correct / questionCount <= 0.25
                    ? "Yarı Cahil"
                    : correct / questionCount <= 0.35
                    ? "Cahil"
                    : correct / questionCount <= 0.45
                    ? "Ortalama Altı Zeka"
                    : correct / questionCount <= 0.6
                    ? "Ortalama Zeka"
                    : correct / questionCount <= 0.75
                    ? "Zeki"
                    : correct / questionCount <= 0.85
                    ? "Aydın"
                    : correct / questionCount <= 2 &&
                      correct / questionCount > 0.9 &&
                      questionCount >= 10
                    ? "İlber Ortaylı"
                    : correct / questionCount <= 1
                    ? "Elit"
                    : null}
                </Text>
              </Stack>
            </YStack>

            <XStack>
              <Button
                onPress={() => {
                  setFinishModal(false);
                  setTimeout(() => {
                    router.push("/");
                  }, 500);
                }}
                mr={5}
                f={1}
                borderWidth={1}
                boc={"#0092cc"}
              >
                <Text fow={"500"} fos={16} color={"#0092cc"}>
                  Çıkış
                </Text>
              </Button>
              <Button
                onPress={() => {
                  tryAgainButton();
                }}
                ml={5}
                f={1}
                bg={"#0092cc"}
              >
                <Text fow={"500"} fos={16} color={"white"}>
                  Tekrar Oyna
                </Text>
              </Button>
            </XStack>
          </View>
        </View>
      </Modal>
      {!openModal && !finishModal ? (
        <SafeAreaView
          style={{
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "#dacfc3",
          }}
        >
          {/* Question */}
          <Stack f={1} jc="center">
            <YStack mx={15} br={10} p={10}>
              {!isFinished && (
                <Stack
                  width={50}
                  height={50}
                  backgroundColor={"white"}
                  ai="center"
                  jc="center"
                  br={25}
                  position="absolute"
                  zIndex={2}
                  top={-25}
                  right={-10}
                  shadowColor={"#000"}
                  shadowOffset={{
                    width: 0,
                    height: 2,
                  }}
                  shadowOpacity={0.25}
                  shadowRadius={3.84}
                  elevationAndroid={5}
                >
                  <CountdownTimer
                    sow={4}
                    second={30}
                    fos={12}
                    size={35}
                    onComplete={() => {
                      setIsFinished(true);
                      Burnt.toast({
                        title: "Süre Doldu!",
                        haptic: "error",
                        preset: "error",
                        duration: 2,
                      });
                      setTimeout(() => {
                        let qcount = questionCount + 1;
                        if (qcount > 15) {
                          setFinishModal(true);
                        } else {
                          setQuestionCount(qcount);
                          randomQuestions();
                        }

                        setSelected(4);
                        setIsFinished(false);
                      }, 3000);
                    }}
                  />
                </Stack>
              )}
              <XStack my={15} ai="center">
                <Stack ai="center" jc="center" f={1}>
                  <Text color={"black"} fos={16} fow={"600"} ta="center">
                    {data?.question}
                  </Text>
                </Stack>
              </XStack>
              {/* Answers */}
              <YStack mx={5}>
                {selected != 4 && !isFinished ? (
                  <Stack
                    borderWidth={1}
                    boc={"orangered"}
                    bg={"white"}
                    p={5}
                    br={10}
                  >
                    <Text color={"orangered"} fos={14} fow={"600"} ta="center">
                      Emin misiniz?
                    </Text>
                  </Stack>
                ) : null}

                {data?.options.map((item, index) => {
                  return (
                    <Pressable
                      key={index}
                      disabled={isFinished}
                      style={{
                        width: "100%",
                        padding: 10,
                        marginVertical: 4,
                        borderRadius: 10,
                        backgroundColor:
                          isFinished && index == data.answer
                            ? "green"
                            : isFinished &&
                              index != data.answer &&
                              selected == index
                            ? "red"
                            : selected == index
                            ? "orange"
                            : "white",
                        shadowColor: "#000",
                        shadowOffset: {
                          width: 0,
                          height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                      }}
                      onPress={() => {
                        handleChooseAnswer(index);
                      }}
                    >
                      <Text
                        fos={15}
                        fow={"600"}
                        color={
                          selected == index ||
                          (isFinished && data.answer == index)
                            ? "white"
                            : "black"
                        }
                      >
                        {item}
                      </Text>
                    </Pressable>
                  );
                })}
              </YStack>
            </YStack>
          </Stack>
          <YStack my={15} ai="center">
            <Stack
              width={height / 7}
              height={height / 7}
              br={height / 14}
              borderWidth={height / 140}
              bg={
                correct / questionCount <= 2 &&
                correct / questionCount > 0.9 &&
                questionCount >= 10
                  ? "#00004d"
                  : "white"
              }
              boc={
                questionCount >= 4
                  ? correct / questionCount <= 0.25
                    ? "darkred"
                    : correct / questionCount <= 0.35
                    ? "red"
                    : correct / questionCount <= 0.45
                    ? "orangered"
                    : correct / questionCount <= 0.6
                    ? "orange"
                    : correct / questionCount <= 0.75
                    ? "#00b300"
                    : correct / questionCount <= 0.85
                    ? "#008000"
                    : correct / questionCount <= 2 &&
                      correct / questionCount > 0.9 &&
                      questionCount >= 10
                    ? "white"
                    : correct / questionCount <= 1
                    ? "#003300"
                    : "black"
                  : "black"
              }
              ai="center"
              jc="center"
            >
              <Text
                color={
                  questionCount >= 4
                    ? correct / questionCount <= 0.25
                      ? "darkred"
                      : correct / questionCount <= 0.35
                      ? "red"
                      : correct / questionCount <= 0.45
                      ? "orangered"
                      : correct / questionCount <= 0.6
                      ? "orange"
                      : correct / questionCount <= 0.75
                      ? "#00b300"
                      : correct / questionCount <= 0.85
                      ? "#008000"
                      : correct / questionCount <= 2 &&
                        correct / questionCount > 0.9 &&
                        questionCount >= 10
                      ? "white"
                      : correct / questionCount <= 1
                      ? "#003300"
                      : "black"
                    : "black"
                }
                fos={height / 48}
                fow={"600"}
                ta="center"
                p={5}
              >
                {questionCount == 0
                  ? "İlk Soru"
                  : questionCount == 1
                  ? "İkinci Soru"
                  : questionCount == 2
                  ? "Üçüncü Soru"
                  : questionCount == 3
                  ? "Dördüncü Soru"
                  : correct / questionCount <= 0.25
                  ? "Yarı Cahil"
                  : correct / questionCount <= 0.35
                  ? "Cahil"
                  : correct / questionCount <= 0.45
                  ? "Ortalama Altı Zeka"
                  : correct / questionCount <= 0.6
                  ? "Ortalama Zeka"
                  : correct / questionCount <= 0.75
                  ? "Zeki"
                  : correct / questionCount <= 0.85
                  ? "Aydın"
                  : correct / questionCount <= 2 &&
                    correct / questionCount > 0.9 &&
                    questionCount >= 10
                  ? "İlber Ortaylı"
                  : correct / questionCount <= 1
                  ? "Elit"
                  : null}
              </Text>
            </Stack>
          </YStack>
          <ExitButton />
          <Stack bg={"#dacfc3"} pt={20}>
            <BannerAds />
          </Stack>
        </SafeAreaView>
      ) : null}
    </>
  );
};

export default Quiz;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dacfc3",
  },
  modalView: {
    padding: 20,
    margin: 20,
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
