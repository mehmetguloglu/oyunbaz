import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  Modal,
  StyleSheet,
  Alert,
  Share,
  Platform,
  Linking,
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
import StarFall from "../components/home/BGanimated";
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

      <Stack f={1} bg={"white"}>
        <SafeAreaView style={{ flex: 1 }}>
          {/* HEADER */}
          <XStack
            ai="center"
            mt={Platform.OS == "android" ? 15 : 0}
            mb={10}
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
                style={{
                  width: 42,
                  height: 42,
                  marginRight: 10,
                  borderRadius: 21,
                }}
              />
              <Text ta="center" fow={"800"} fos={18}>
                Oyunbaz
              </Text>
            </XStack>
          </XStack>
          {/* BODY */}

          <ScrollView showsVerticalScrollIndicator={false} f={1} bg={"white"}>
            {/* <StarFall /> */}
            <XStack f={1} mx={width * 0.04} py={10}>
              <YStack mr={width * 0.02}>
                <Stack mb={width * 0.02}>
                  <ImageButtonSquare
                    bgcolor={"#d69eada0"}
                    onPress={() => router.push("/banned-words")}
                    source={require("../assets/home-page/bannedWord.png")}
                    text={"Yasaklı Kelimeler"}
                  />
                </Stack>
                <Stack mb={width * 0.02}>
                  <ImageButtonSquare
                    bgcolor={"#7D4628a0"}
                    onPress={() => router.push("/quiz")}
                    source={require("../assets/home-page/quiz.png")}
                    text={"Cahilmetre"}
                  />
                </Stack>

                {/* <Stack mb={width * 0.02}>
                  <ImageButtonSquare
                    bgcolor={"#383524a0"}
                    onPress={() => router.push("/batak")}
                    source={require("../assets/home-page/batak.png")}
                    text={"Batak"}
                  />
                </Stack> */}
                {/* <Stack mb={width * 0.02}>
                  <ImageButtonSquare
                    bgcolor={"#383524a0"}
                    onPress={() => router.push("/pisti")}
                    source={require("../assets/home-page/pisti.png")}
                    text={"Pişti"}
                  />
                </Stack> */}
                <Stack mb={width * 0.02}>
                  <ImageButtonSquare
                    bgcolor={"#473b2ea0"}
                    onPress={() => router.push("/abdi")}
                    source={require("../assets/home-page/abdi.png")}
                    text={"Abdi"}
                  />
                </Stack>
                <Stack mb={width * 0.04}>
                  <ImageButtonReactangle
                    bgcolor={"#666666a0"}
                    onPress={() => router.push("/spin-bottle")}
                    source={require("../assets/home-page/spin.png")}
                    text={"Şişe Çevir"}
                  />
                </Stack>
              </YStack>
              <YStack ml={width * 0.02}>
                <Stack mb={width * 0.04}>
                  <ImageButtonReactangle
                    bgcolor={"#31062ba0"}
                    onPress={() => router.push("/tictactoe")}
                    source={require("../assets/home-page/tictactoe.png")}
                    text={"X-O-X"}
                  />
                </Stack>
                <Stack mb={width * 0.02}>
                  <ImageButtonReactangle
                    bgcolor={"#46422Da0"}
                    onPress={() => router.push("/who-am-i")}
                    source={require("../assets/home-page/whoami.png")}
                    text={"Ben Kimim"}
                  />
                </Stack>
                <Stack mb={width * 0.04}>
                  <ImageButtonReactangle
                    bgcolor={"#a5cedaa0"}
                    onPress={() => router.push("/hangman")}
                    source={require("../assets/home-page/hangman.png")}
                    text={"Adam Asmaca"}
                  />
                </Stack>
                <Stack mb={width * 0.02}>
                  <ImageButtonReactangle
                    bgcolor={"#5C6D89a0"}
                    onPress={() => router.push("/sudoku")}
                    source={require("../assets/home-page/sudoku.png")}
                    text={"Sudoku"}
                  />
                </Stack>
                <Stack mb={width * 0.04}>
                  <ImageButtonReactangle
                    bgcolor={"#634128a0"}
                    onPress={() => router.push("/jump")}
                    source={require("../assets/home-page/jump.png")}
                    text={"Top Sektir"}
                  />
                </Stack>
                {/* <Stack mb={width * 0.02}>
                  <ImageButtonReactangle
                    bgcolor={"#000000a0"}
                    onPress={() => router.push("/pisti")}
                    source={require("../assets/home-page/pisti.png")}
                    text={"Pişti"}
                  />
                </Stack> */}
                <Stack mb={width * 0.02}>
                  <ImageButtonReactangle
                    bgcolor={"#000000a0"}
                    onPress={() => router.push("/carkifelek")}
                    source={require("../assets/home-page/carkifelek.png")}
                    text={"Çevir ve İç!"}
                  />
                </Stack>
                <Stack mb={width * 0.04}>
                  <ImageButtonReactangle
                    bgcolor={"#000000a0"}
                    onPress={() => router.push("/roll-dice")}
                    source={require("../assets//home-page/cube.png")}
                    text={"Zar At"}
                  />
                </Stack>
              </YStack>
            </XStack>
          </ScrollView>
        </SafeAreaView>
      </Stack>

      <Modal animationType="slide" transparent={true} visible={showModal}>
        <SafeAreaView style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* MODAL HEADER */}
            <XStack ai="center" mt={Platform.OS == "android" ? 15 : 0} mb={10}>
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
                  style={{
                    width: 42,
                    height: 42,
                    marginRight: 10,
                    borderRadius: 21,
                  }}
                />
                <Text color={"#5c5752"} ta="center" fow={"800"} fos={18}>
                  Oyunbaz
                </Text>
              </XStack>
            </XStack>
            {/* BODY */}
            <ScrollView bg={"white"}>
              <YStack bg={"white"} mx={15}>
                {/* UPDATE */}
                <XStack ai="center">
                  <Text f={1} color={"#5c5752"}>
                    Uygulamamızdaki tüm veriler düzenli olarak güncelleniyor.
                    Oyun zevkini en üst düzeyde yaşamak için uygulamayı
                    güncellemeyi unutma!
                  </Text>

                  <Button
                    width={90}
                    height={90}
                    bg={"white"}
                    borderWidth={1}
                    p={0}
                    boc={"#1870e2"}
                    br={20}
                    ml={5}
                    fd="column"
                    onPress={() => _handlePressButtonAsync()}
                  >
                    {Platform.OS == "android" ? (
                      <FontAwesome5
                        name="google-play"
                        size={22}
                        color="#1870e2"
                      />
                    ) : (
                      <FontAwesome5
                        name="app-store"
                        size={24}
                        color="#1870e2"
                      />
                    )}
                    <Text color={"#1870e2"}>Güncelle</Text>
                  </Button>
                </XStack>
                {/* RATİNG */}
                <XStack mt={15} ai="center">
                  <Text f={1} color={"#5c5752"}>
                    Uygulamamızı beğendin mi?{" "}
                    {Platform.OS == "android" ? "Google Play" : "App"} Store'da
                    uygulamamızı değerlendir!
                  </Text>

                  <Button
                    width={90}
                    height={90}
                    bg={"white"}
                    borderWidth={1}
                    p={0}
                    boc={"orange"}
                    br={20}
                    ml={5}
                    fd="column"
                    onPress={() => storeReviewOpen()}
                  >
                    <FontAwesome name="star" size={22} color="orange" />
                    <Text fos={13} color={"#5c5752"}>
                      Değerlendir
                    </Text>
                  </Button>
                </XStack>
                {/* SHARE */}
                <XStack mt={15} ai="center">
                  <Text f={1} color={"#5c5752"}>
                    Oyunu paylaş, geliştiricilerimize destek ol ve
                    arkadaşlarınla birlikte oynamanın keyfini çıkar!
                  </Text>

                  <Button
                    width={90}
                    height={90}
                    bg={"white"}
                    borderWidth={1}
                    p={0}
                    boc={"green"}
                    br={20}
                    ml={5}
                    fd="column"
                    onPress={() => onShare()}
                  >
                    <FontAwesome
                      name="share-alt-square"
                      size={24}
                      color="green"
                    />
                    <Text color={"#5c5752"}>Paylaş</Text>
                  </Button>
                </XStack>
                {/* CONTACT MAİL */}
                <XStack mt={15} ai="center">
                  <Text f={1} color={"#5c5752"}>
                    Görüşlerinizi önemsiyoruz. Görüş, Öneri ve Şikayetlerinizi
                    bildirmek için bizimle iletişime geçin.
                  </Text>

                  <Button
                    width={90}
                    height={90}
                    bg={"white"}
                    borderWidth={1}
                    p={0}
                    boc={"black"}
                    br={20}
                    ml={5}
                    fd="column"
                    onPress={() => {
                      Linking.openURL("mailto:av.mehmetguloglu@gmail.com");
                    }}
                  >
                    <Entypo name="mail" size={21} color="black" />
                    <Text color="black">İletişim</Text>
                  </Button>
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
                      color={isLoaded ? "#054582" : "gray"}
                    >
                      Reklam İzle
                    </Text>
                  </Button>
                </XStack>
              </YStack>
              {/* BANNER ADS */}
              <Stack mt={15}>
                <BannerAds />
              </Stack>
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
  },
});

{
  /* <ScrollView f={1} bg={"white"}>
  <XStack mt={15} jc="space-between">
    <Stack mr={5} ml={15} f={1} ai="center">
      <ImageButtonSquare
        bgcolor={"#EEAFC0a0"}
        onPress={() => router.push("/banned-words")}
        source={require("../assets/home-page/bannedWord.png")}
        text={"Yasaklı Kelimeler"}
      />
    </Stack>

    <YStack ml={5} mr={15} f={1} ai="center">
      <Stack mb={10}>
        <ImageButtonReactangle
          bgcolor={"#39062Da0"}
          onPress={() => router.push("/tictactoe")}
          source={require("../assets/home-page/tictactoe.png")}
          text={"X-O-X"}
        />
      </Stack>
      <Stack mt={10}>
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
    <YStack ml={5} mr={15} f={1} ai="center">
      <Stack mb={10}>
        <ImageButtonReactangle
          bgcolor={"#5C6D89a0"}
          onPress={() => router.push("/sudoku")}
          source={require("../assets/home-page/sudoku.png")}
          text={"Sudoku"}
        />
      </Stack>
      <Stack mt={10}>
        <ImageButtonReactangle
          bgcolor={"#634128a0"}
          onPress={() => router.push("/jump")}
          source={require("../assets/home-page/jump.png")}
          text={"Top Sektir"}
        />
      </Stack>
    </YStack>
  </XStack>
  <XStack mt={15} jc="space-between">
    <Stack mr={5} ml={15} f={1} ai="center">
      <ImageButtonSquare
        bgcolor={"#46422Da0"}
        onPress={() => router.push("/who-am-i")}
        source={require("../assets/home-page/whoami.png")}
        text={"Ben Kimim"}
      />
    </Stack>

    <YStack ml={5} mr={15} f={1} ai="center">
      <Stack mb={10}>
        <ImageButtonReactangle
          bgcolor={"#000000a0"}
          onPress={() => router.push("/roll-dice")}
          source={require("../assets//home-page/cube.png")}
          text={"Zar At"}
        />
      </Stack>
    </YStack>
  </XStack>

  <XStack mt={15} jc="space-between">
    <Stack mr={5} ml={15} f={1} ai="center">
      <ImageButtonSquare
        bgcolor={"#46422Da0"}
        onPress={() => router.push("/batak")}
        source={require("../assets/home-page/batak.png")}
        text={"Batak"}
      />
    </Stack>

    <YStack ml={5} mr={15} f={1} ai="center">
      <Stack mb={10}>
      
      </Stack>
    </YStack>
  </XStack>
</ScrollView>; */
}
