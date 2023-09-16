import { Link, useFocusEffect, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useState } from "react";
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
  Vibration,
} from "react-native";
import { Image } from "expo-image";
import {
  Stack,
  XStack,
  Text,
  YStack,
  Button,
  ScrollView,
  View,
  Spinner,
} from "tamagui";
import {
  Ionicons,
  FontAwesome,
  Entypo,
  FontAwesome5,
} from "@expo/vector-icons";
import * as StoreReview from "expo-store-review";
import * as WebBrowser from "expo-web-browser";
import { getRewardedAds } from "../bussiness/actions/getAds";
import ImageButtonSquare from "../components/home/ImageButtonSquare";
import ImageButtonReactangle from "../components/home/ImageButtonReactangle";
import BannerAds from "../components/google-ads/BannerAds";

const { width, height } = Dimensions.get("screen");
const HomeScreen = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [result, setResult] = useState(null);
  const { isLoaded, isShowing, show } = getRewardedAds();

  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync("https://onelink.to/baqs7k");
    setResult(result);
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        title: "Oyunbaz",
        message: "Oyunbaz",
        url: "https://onelink.to/baqs7k",
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

      <>
        <Stack f={1} bg={"white"}>
          <SafeAreaView style={{ flex: 1 }}>
            {/* HEADER */}
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
            {/* BODY */}
            <ScrollView f={1} bg={"white"}>
              <XStack mt={15} jc="space-between">
                <Stack mr={5} ml={15} f={1} ai="center">
                  <ImageButtonSquare
                    bgcolor={"#EEAFC0a0"}
                    onPress={() => router.push("/banned-words/banned-game")}
                    source={require("../assets/home-page/bannedWord.png")}
                    text={"Yasaklı Kelimeler"}
                  />
                </Stack>

                <YStack ml={5} mr={15} f={1} ai="center">
                  <Stack mb={width * 0.02}>
                    <ImageButtonReactangle
                      bgcolor={"#000000a0"}
                      onPress={() => router.push("/roll-dice")}
                      source={require("../assets//home-page/cube.png")}
                      text={"Zar At"}
                    />
                  </Stack>
                  <Stack mt={width * 0.02}>
                    <ImageButtonReactangle
                      bgcolor={"#000000a0"}
                      onPress={() => router.push("/hangman")}
                      source={require("../assets//home-page/hangman.png")}
                      text={"Adam Asmaca"}
                    />
                  </Stack>
                </YStack>
              </XStack>

              <XStack mt={15} jc="space-between">
                <Stack mr={5} ml={15} f={1} ai="center">
                  <ImageButtonSquare
                    bgcolor={"#7D4628a0"}
                    onPress={() => router.push("/quiz")}
                    source={require("../assets/home-page/quiz.png")}
                    text={"Cahilmetre"}
                  />
                </Stack>

                <Stack ml={5} mr={15} f={1} ai="center">
                  <ImageButtonSquare
                    bgcolor={"#46422Da0"}
                    onPress={() => router.push("/who-am-i")}
                    source={require("../assets/home-page/whoami.png")}
                    text={"Ben Kimim"}
                  />
                </Stack>
              </XStack>

              <XStack mt={15} jc="space-between">
                <Stack mr={5} ml={15} f={1} ai="center">
                  <ImageButtonSquare
                    bgcolor={"#5C6D89a0"}
                    onPress={() => router.push("/sudoku")}
                    source={require("../assets/home-page/sudoku.png")}
                    text={"Sudoku"}
                  />
                </Stack>

                <Stack ml={5} mr={15} f={1} ai="center">
                  <ImageButtonSquare
                    bgcolor={"#5A6902a0"}
                    onPress={() => router.push("/jump")}
                    source={require("../assets/home-page/jump.png")}
                    text={"Top Sektir"}
                  />
                </Stack>
              </XStack>
            </ScrollView>
            {/* BANNER ADS */}
            <Stack pt={10}>
              <BannerAds />
            </Stack>
          </SafeAreaView>
        </Stack>
      </>

      <Modal animationType="slide" transparent={true} visible={showModal}>
        <SafeAreaView style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* MODAL HEADER */}
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
              {/* RATİNG */}
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
              {/* SHARE */}
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
              {/* CONTACT MAİL */}
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
              {/* WATCH ADS */}
              <XStack mt={15} ai="center">
                <Text f={1} color={isLoaded ? "#054582" : "#5c5752"}>
                  Uygulamamızı beğendiysen reklam izleyerek bize destek
                  olabilirsin!
                </Text>

                <Button
                  width={90}
                  height={90}
                  bg={"white"}
                  borderWidth={1}
                  p={0}
                  boc={isLoaded ? "#054582" : "gray"}
                  br={20}
                  ml={5}
                  fd="column"
                  onPress={() => {
                    if (isLoaded) show();
                  }}
                  disabled={!isLoaded}
                >
                  {isLoaded ? (
                    <FontAwesome
                      name="play-circle"
                      size={22}
                      color={isLoaded ? "#054582" : "gray"}
                    />
                  ) : (
                    <Spinner color="#054582" />
                  )}
                  <Text
                    ta="center"
                    fos={13}
                    mt={0}
                    color={isLoaded ? "#054582" : "gray"}
                  >
                    Reklam İzle
                  </Text>
                </Button>
              </XStack>
            </ScrollView>
            {/* BANNER ADS */}
            <Stack pt={10}>
              <BannerAds />
            </Stack>
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
