import { Link, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Dimensions,
  ImageBackground,
  Pressable,
  SafeAreaView,
  Modal,
  StyleSheet,
  Alert,
  Share,
  Platform,
  Linking,
} from "react-native";
import {
  Stack,
  XStack,
  Text,
  YStack,
  Button,
  ScrollView,
  View,
  Image,
} from "tamagui";
import {
  Ionicons,
  FontAwesome,
  Entypo,
  FontAwesome5,
} from "@expo/vector-icons";
import * as StoreReview from "expo-store-review";
import * as WebBrowser from "expo-web-browser";
// import * as Linking from "expo-linking";

const { width, height } = Dimensions.get("screen");
const HomeScreen = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [result, setResult] = useState(null);

  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync("https://onelink.to/baqs7k");
    setResult(result);
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        url: "https://apps.apple.com/tr/app/oyunbaz/id6465395235?l=tr",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  const storeReviewOpen = async () => {
    let hasAction = await StoreReview.hasAction();
    if (hasAction) {
      StoreReview.requestReview();
    }
  };

  return (
    <>
      <StatusBar hidden={true} />

      {!showModal ? (
        <>
          <Stack f={1} bg={"white"}>
            <SafeAreaView style={{ flex: 1 }}>
              <XStack
                ai="center"
                mt={Platform.OS == "android" ? 15 : 0}
                mb={15}
                mx={15}
              >
                <Button
                  p={0}
                  br={50}
                  width={42}
                  height={42}
                  ai="center"
                  jc="center"
                  right={0}
                  zIndex={1}
                  pos="absolute"
                  bg={"white"}
                  onPress={() => {
                    setShowModal(!showModal);
                  }}
                >
                  <Entypo name="info-with-circle" size={24} color="#5c5752" />
                </Button>
                <XStack ai="center" jc="center" f={1}>
                  <Image
                    source={require("../assets/icon.png")}
                    style={{ width: 42, height: 42, marginRight: 10 }}
                  />
                  <Text ta="center" fow={"800"} fos={18}>
                    Oyunbaz
                  </Text>
                </XStack>
              </XStack>

              <ScrollView f={1} bg={"white"}>
                <XStack mt={15} jc="space-between">
                  <Stack mr={5} ml={15} f={1} ai="center">
                    <ImageBackground
                      style={{
                        width: width * 0.44,
                        height: width * 0.44,
                      }}
                      borderRadius={20}
                      resizeMode="cover"
                      source={require("../assets/home-page/bannedWord.png")}
                    >
                      <XStack f={1}>
                        <Pressable
                          onPress={() => router.push("/banned-words/")}
                          style={{ flex: 1, justifyContent: "flex-end" }}
                        >
                          <Stack br={20} bg={"#EEAFC0a0"}>
                            <Text
                              p={12}
                              ta="center"
                              color={"white"}
                              fontSize={16}
                              fontWeight={"700"}
                            >
                              Yasaklı Kelimeler
                            </Text>
                          </Stack>
                        </Pressable>
                      </XStack>
                    </ImageBackground>
                  </Stack>

                  <YStack ml={5} mr={15} f={1} ai="center">
                    <ImageBackground
                      style={{
                        width: width * 0.44,
                        height: width * 0.2,
                        marginBottom: width * 0.02,
                      }}
                      borderRadius={10}
                      resizeMode="cover"
                      source={require("../assets//home-page/cube.png")}
                    >
                      <XStack f={1}>
                        <Pressable
                          onPress={() => router.push("/roll-dice")}
                          style={{ flex: 1, justifyContent: "flex-end" }}
                        >
                          <Stack bg={"#000000a0"} br={20}>
                            <Text
                              p={16}
                              color={"white"}
                              fontSize={16}
                              fontWeight={"700"}
                            >
                              Zar At
                            </Text>
                          </Stack>
                        </Pressable>
                      </XStack>
                    </ImageBackground>
                    <ImageBackground
                      style={{
                        width: width * 0.44,
                        height: width * 0.2,
                        marginTop: width * 0.02,
                      }}
                      borderRadius={10}
                      resizeMode="cover"
                      source={require("../assets//home-page/hangman.png")}
                    >
                      <XStack f={1}>
                        <Pressable
                          onPress={() => router.push("/hangman")}
                          style={{ flex: 1, justifyContent: "flex-end" }}
                        >
                          <Stack bg={"#000000a0"} br={20}>
                            <Text
                              p={16}
                              color={"white"}
                              fontSize={16}
                              fontWeight={"700"}
                            >
                              Adam Asmaca
                            </Text>
                          </Stack>
                        </Pressable>
                      </XStack>
                    </ImageBackground>
                  </YStack>
                </XStack>

                <XStack mt={15} jc="space-between">
                  <Stack mr={5} ml={15} f={1} ai="center">
                    <ImageBackground
                      style={{
                        width: width * 0.44,
                        height: width * 0.44,
                      }}
                      borderRadius={20}
                      resizeMode="cover"
                      source={require("../assets/home-page/quiz.png")}
                    >
                      <XStack f={1}>
                        <Pressable
                          onPress={() => router.push("/quiz")}
                          style={{ flex: 1, justifyContent: "flex-end" }}
                        >
                          <Stack br={20} bg={"#7D4628a0"}>
                            <Text
                              p={12}
                              ta="center"
                              color={"white"}
                              fontSize={16}
                              fontWeight={"700"}
                            >
                              Cahilmetre
                            </Text>
                          </Stack>
                        </Pressable>
                      </XStack>
                    </ImageBackground>
                  </Stack>

                  <Stack ml={5} mr={15} f={1} ai="center">
                    <ImageBackground
                      style={{
                        width: width * 0.44,
                        height: width * 0.44,
                      }}
                      borderRadius={20}
                      resizeMode="cover"
                      source={require("../assets/home-page/whoami.png")}
                    >
                      <XStack f={1}>
                        <Pressable
                          onPress={() => router.push("/who-am-i")}
                          style={{ flex: 1, justifyContent: "flex-end" }}
                        >
                          <Stack br={20} bg={"#46422Da0"}>
                            <Text
                              p={12}
                              ta="center"
                              color={"white"}
                              fontSize={16}
                              fontWeight={"700"}
                            >
                              Ben Kimim?
                            </Text>
                          </Stack>
                        </Pressable>
                      </XStack>
                    </ImageBackground>
                  </Stack>
                </XStack>

                <XStack mt={15} jc="space-between">
                  <Stack mr={5} ml={15} f={1} ai="center">
                    <ImageBackground
                      style={{
                        width: width * 0.44,
                        height: width * 0.44,
                      }}
                      borderRadius={20}
                      resizeMode="cover"
                      source={require("../assets/home-page/sudoku.png")}
                    >
                      <XStack f={1}>
                        <Pressable
                          onPress={() => router.push("/sudoku")}
                          style={{ flex: 1, justifyContent: "flex-end" }}
                        >
                          <Stack br={20} bg={"#5C6D89a0"}>
                            <Text
                              p={12}
                              ta="center"
                              color={"white"}
                              fontSize={16}
                              fontWeight={"700"}
                            >
                              Sudoku
                            </Text>
                          </Stack>
                        </Pressable>
                      </XStack>
                    </ImageBackground>
                  </Stack>

                  <Stack ml={5} mr={15} f={1} ai="center">
                    <ImageBackground
                      style={{
                        width: width * 0.44,
                        height: width * 0.44,
                      }}
                      borderRadius={20}
                      resizeMode="cover"
                      source={require("../assets/home-page/jump.png")}
                    >
                      <XStack f={1}>
                        <Pressable
                          onPress={() => router.push("/jump")}
                          style={{ flex: 1, justifyContent: "flex-end" }}
                        >
                          <Stack br={20} bg={"#5A6902a0"}>
                            <Text
                              p={12}
                              ta="center"
                              color={"white"}
                              fontSize={16}
                              fontWeight={"700"}
                            >
                              Top Sektir
                            </Text>
                          </Stack>
                        </Pressable>
                      </XStack>
                    </ImageBackground>
                  </Stack>
                </XStack>
              </ScrollView>
            </SafeAreaView>
          </Stack>
        </>
      ) : null}

      <Modal animationType="fade" transparent={true} visible={showModal}>
        <SafeAreaView style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* HEADER */}
            <XStack ai="center" mt={Platform.OS == "android" ? 15 : 0} mb={15}>
              <Button
                backgroundColor={"white"}
                width={42}
                height={42}
                br={25}
                ai="center"
                p={0}
                jc="center"
                right={15}
                zIndex={1}
                position="absolute"
                onPress={() => {
                  setShowModal(!showModal);
                }}
              >
                <Ionicons name="home" size={20} color="#5c5752" />
              </Button>
              <XStack ai="center" jc="center" f={1}>
                <Image
                  source={require("../assets/icon.png")}
                  style={{ width: 42, height: 42, marginRight: 10 }}
                />
                <Text color={"#5c5752"} ta="center" fow={"800"} fos={18}>
                  Oyunbaz
                </Text>
              </XStack>
            </XStack>
            {/* BODY */}
            <ScrollView bg={"white"} mx={15}>
              {/* UPDATE */}
              <XStack ai="center">
                <Text f={1} color={"#5c5752"}>
                  Uygulamamızdaki tüm veriler düzenli olarak güncelleniyor. Oyun
                  zevkini en üst düzeyde yaşamak için uygulamayı güncellemeyi
                  unutma!
                </Text>

                <Pressable
                  style={{
                    width: 90,
                    height: 90,
                    backgroundColor: "white",
                    borderWidth: 1,
                    borderColor: "#1870e2",
                    marginLeft: 5,
                    flexDirection: "column",
                    borderRadius: 20,
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 10,
                  }}
                  onPress={() => _handlePressButtonAsync()}
                >
                  {Platform.OS == "android" ? (
                    <FontAwesome5
                      name="google-play"
                      size={22}
                      color="#1870e2"
                    />
                  ) : (
                    <FontAwesome5 name="app-store" size={24} color="#1870e2" />
                  )}
                  <Text mt={10} color={"#1870e2"}>
                    Güncelle
                  </Text>
                </Pressable>
              </XStack>

              <XStack mt={15} ai="center">
                <Text f={1} color={"#5c5752"}>
                  Uygulamamızı beğendin mi?{" "}
                  {Platform.OS == "android" ? "Google Play" : "App"} Store'da
                  uygulamamızı değerlendir!
                </Text>

                <Pressable
                  style={{
                    width: 90,
                    height: 90,
                    backgroundColor: "white",
                    borderWidth: 1,
                    borderColor: "orange",
                    marginLeft: 5,
                    flexDirection: "column",
                    borderRadius: 20,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={() => storeReviewOpen()}
                >
                  <FontAwesome name="star" size={22} color="orange" />
                  <Text fos={13} mt={10} color={"#5c5752"}>
                    Değerlendir
                  </Text>
                </Pressable>
              </XStack>

              <XStack mt={15} ai="center">
                <Text f={1} color={"#5c5752"}>
                  Oyunu paylaş, geliştiricilerimize destek ol ve arkadaşlarınla
                  birlikte oynamanın keyfini çıkar!
                </Text>

                <Pressable
                  style={{
                    width: 90,
                    height: 90,
                    backgroundColor: "white",
                    borderWidth: 1,
                    borderColor: "green",
                    marginLeft: 5,
                    flexDirection: "column",
                    borderRadius: 20,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={() => onShare()}
                >
                  <FontAwesome
                    name="share-alt-square"
                    size={24}
                    color="green"
                  />
                  <Text fos={13} mt={10} color={"#5c5752"}>
                    Paylaş
                  </Text>
                </Pressable>
              </XStack>

              <XStack mt={15} ai="center">
                <Text f={1} color={"#5c5752"}>
                  Görüşlerinizi önemsiyoruz. Görüş, Öneri ve Şikayetlerinizi
                  bildirmek için bizimle iletişime geçin.
                </Text>

                <Pressable
                  style={{
                    width: 90,
                    height: 90,
                    backgroundColor: "white",
                    borderWidth: 1,
                    borderColor: "black",
                    marginLeft: 5,
                    flexDirection: "column",
                    borderRadius: 20,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    Linking.openURL("mailto:av.mehmetguloglu@gmail.com");
                  }}
                >
                  <Entypo name="mail" size={21} color="black" />
                  <Text fos={13} mt={5} color="black">
                    İletişim
                  </Text>
                </Pressable>
              </XStack>
            </ScrollView>
          </View>
        </SafeAreaView>
      </Modal>
    </>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: "white",
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
