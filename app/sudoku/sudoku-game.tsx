import {
  View,
  SafeAreaView,
  Dimensions,
  Pressable,
  Modal,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { Stack, XStack, Text, Button, YStack } from "tamagui";
import { FontAwesome5 } from "@expo/vector-icons";
import ExitButton from "../../components/ExitButton";
import board from "./board";
import * as Burnt from "burnt";
import { useRouter } from "expo-router";
import BannerAds from "../../components/google-ads/BannerAds";

const { width, height } = Dimensions.get("screen");
const SudokuGame = () => {
  const router = useRouter();
  const [selectedButton, setSelectedButton] = useState(null);
  const [boardIndex, setBoardIndex] = useState(0);
  const [gameBoard, setGameBoard] = useState(board[boardIndex][0]);
  const [gameFinishModal, setGameFinishModal] = useState(false);
  const [wrong, setWrong] = useState(0);
  const buttons = [
    ["1", "2", "3", "4", "5"],
    ["6", "7", "8", "9"],
  ];
  const line = width / 10;

  return (
    <>
      {!gameFinishModal ? (
        <SafeAreaView
          style={{
            backgroundColor: "white",
            flex: 1,
          }}
        >
          <ExitButton />

          <Stack mt={40} f={1} ai="center" jc="center">
            <Text fos={26} fow={"700"}>
              {wrong}
            </Text>
            {gameBoard.map((item, index) => {
              const idx = index;
              return (
                <XStack key={index}>
                  {item.map((item, index) => {
                    return (
                      <Pressable
                        key={index}
                        style={{
                          width: line,
                          height: line,
                          backgroundColor:
                            (idx < 3 && index < 3) ||
                            (idx < 6 && index < 6 && index > 2 && idx > 2) ||
                            (idx < 3 && index < 9 && index > 5) ||
                            (idx < 9 && index < 3 && idx > 5) ||
                            (idx < 9 && index < 9 && idx > 5 && index > 5)
                              ? "lightgray"
                              : "white",
                          borderWidth: 1,
                          borderColor: "black",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: 2,
                        }}
                        onPress={() => {
                          let newBoard = [...gameBoard];
                          if (
                            board[boardIndex][1][idx][index] == selectedButton
                          ) {
                            newBoard[idx][index] = selectedButton;
                            setGameBoard(newBoard);

                            let gamefinish = true;
                            gameBoard.map((item, index) => {
                              const idx = index;
                              item.map((item, index) => {
                                item != board[boardIndex][1][idx][index]
                                  ? (gamefinish = false)
                                  : null;
                              });
                            });
                            if (gamefinish) {
                              setGameFinishModal(true);
                            }
                          } else {
                            if (
                              (newBoard[idx][index] == "" ||
                                newBoard[idx][index] == "-") &&
                              selectedButton != null
                            ) {
                              setWrong(wrong + 1);
                              Burnt.toast({
                                duration: 3,
                                preset: "error",
                                title: "Hatalı Hamle!",
                                haptic: "warning",
                              });
                            }
                          }
                        }}
                      >
                        <Text color={"black"} fow={"600"} fos={line / 2.2}>
                          {item == "-" ? "" : item}
                        </Text>
                      </Pressable>
                    );
                  })}
                </XStack>
              );
            })}
            <YStack my={15}>
              <XStack jc="center">
                {buttons[0].map((item) => {
                  return (
                    <Button
                      bg={item == selectedButton ? "#425D8C" : "white"}
                      key={item}
                      mx={4}
                      shadowColor={"#000"}
                      shadowOffset={{ width: 0, height: 0 }}
                      shadowOpacity={0.25}
                      shadowRadius={3.84}
                      elevationAndroid={5}
                      onPress={() => setSelectedButton(item)}
                    >
                      <Text
                        color={item == selectedButton ? "white" : "black"}
                        fos={16}
                        fow={"600"}
                      >
                        {item}
                      </Text>
                    </Button>
                  );
                })}
              </XStack>
              <XStack my={10} jc="center">
                {buttons[1].map((item) => {
                  return (
                    <Button
                      bg={item == selectedButton ? "#425D8C" : "white"}
                      key={item}
                      mx={4}
                      shadowColor={"#000"}
                      shadowOffset={{ width: 0, height: 0 }}
                      shadowOpacity={0.25}
                      shadowRadius={3.84}
                      elevationAndroid={5}
                      onPress={() => {
                        setSelectedButton(item);
                      }}
                    >
                      <Text
                        color={item == selectedButton ? "white" : "black"}
                        fos={16}
                        fow={"600"}
                      >
                        {item}
                      </Text>
                    </Button>
                  );
                })}
              </XStack>
            </YStack>
          </Stack>
        </SafeAreaView>
      ) : null}
      <Modal
        animationType="slide"
        transparent={false}
        visible={gameFinishModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text fos={21} mb={8} fow={"700"}>
              Oyun Bitti
            </Text>

            <XStack my={18}>
              <YStack
                p={12}
                br={12}
                mr={4}
                ai="center"
                borderWidth={2}
                boc={"red"}
              >
                <Text fow={"600"} color={"red"}>
                  Hata Sayısı
                </Text>
                <Text mt={4} fow={"600"} color={"red"} fos={18}>
                  {wrong}
                </Text>
              </YStack>
            </XStack>

            <XStack>
              <Button
                onPress={() => {
                  setGameFinishModal(false);
                  setTimeout(() => {
                    router.push("/");
                  }, 500);
                }}
                mr={5}
                f={1}
                boc={"#0092cc"}
                borderWidth={1}
              >
                <Text fow={"500"} fos={16} color={"#0092cc"}>
                  Çıkış
                </Text>
              </Button>
              <Button
                onPress={() => {
                  setWrong(0);
                  setBoardIndex(boardIndex + 1);
                  setGameBoard(board[boardIndex + 1][0]);
                  setSelectedButton(null);

                  setGameFinishModal(false);
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
      <Stack bg={"white"} py={20}>
        <BannerAds />
      </Stack>
    </>
  );
};

export default SudokuGame;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
