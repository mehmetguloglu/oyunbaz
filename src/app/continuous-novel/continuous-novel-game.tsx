import {
  View,
  SafeAreaView,
  Dimensions,
  Modal,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import ExitButton from "../../components/ExitButton";
import {
  Button,
  ScrollView,
  Stack,
  TextArea,
  YStack,
  Text,
  XStack,
} from "tamagui";
import { ImageBackground } from "expo-image";
import { buttonBlue, buttonRed, modalMaxWidth } from "../../utils/colors";
import { useRouter } from "expo-router";
import BannerAds from "../../components/google-ads/BannerAds";
import DismissKeyboardView from "../../HOC/DismissKeyboardHOC";
const { width, height } = Dimensions.get("screen");
const ContinuousNovelGame = () => {
  const router = useRouter();
  const [finishNovel, setFinishNovel] = useState(false);
  const [openModal, setOpenModal] = useState(true);
  const [novel, setNovel] = useState([]);
  const [newSentence, setNewSentence] = useState("");
  const [lastSentence, setLastSentence] = useState("");

  const _finishButtonPress = () => {
    setNovel([...novel, newSentence]);
    let newSentenceArray = newSentence.split(".");

    newSentenceArray[newSentenceArray.length - 1] == "" ||
    newSentenceArray[newSentenceArray.length - 1] == " " ||
    newSentenceArray[newSentenceArray.length - 1] == "  "
      ? newSentenceArray.splice(newSentenceArray.length - 1, 1)
      : null;

    setLastSentence(newSentenceArray[newSentenceArray.length - 1]);

    newSentenceArray.splice(newSentenceArray.length - 1, 1);

    setNewSentence("");
  };

  const _novelFinishButtonPress = () => {
    _finishButtonPress();
    setFinishNovel(true);
  };

  const tryAgainButton = () => {
    setNovel([]);
    setNewSentence("");
    setLastSentence("");
    setFinishNovel(false);
  };

  return (
    <>
      <ImageBackground
        source={require("../../assets/continuousNovel/novelbg.png")}
        contentFit="fill"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />

      {!openModal && !finishNovel ? (
        <DismissKeyboardView style={{ flex: 1 }}>
          <ExitButton />
          <SafeAreaView style={{ flex: 1 }}>
            <YStack f={1} mx={15} ai="center" jc="center">
              <ScrollView mt={width * 0.1}>
                <Stack
                  shadowColor={"#000"}
                  shadowOffset={{ height: 1, width: 0 }}
                  shadowOpacity={0.22}
                  shadowRadius={2.22}
                  elevationAndroid={2}
                >
                  <TextArea
                    placeholder="Yazmaya Başla"
                    onChangeText={(e) => setNewSentence(e)}
                    value={newSentence}
                    fontSize={15}
                  />
                </Stack>
                {lastSentence != "" ? (
                  <Stack
                    p={10}
                    m={5}
                    br={10}
                    bg={"white"}
                    ai="center"
                    jc="center"
                  >
                    <Text fos={15} fow={"500"}>
                      Aşağıdaki cümle ilk cümlen olarak şekilde hikayeyi devam
                      ettir.
                      {"\n"}
                    </Text>
                    <Stack bg={"gray"} p={5} br={5}>
                      <Text color={"white"}>{lastSentence}</Text>
                    </Stack>
                  </Stack>
                ) : null}
              </ScrollView>
            </YStack>
            <XStack mx={15}>
              <Button
                disabled={novel.length == 0}
                onPress={() => _novelFinishButtonPress()}
                boc={novel.length == 0 ? "gray" : buttonRed}
                mr={5}
                f={1}
              >
                <Text
                  fos={14}
                  fow={"600"}
                  color={novel.length == 0 ? "gray" : buttonRed}
                  ta="center"
                >
                  Romanı Bitir ve Oku
                </Text>
              </Button>
              <Button
                f={1}
                ml={5}
                onPress={() => _finishButtonPress()}
                boc={newSentence == "" ? "gray" : buttonBlue}
                disabled={newSentence == ""}
              >
                <Text
                  color={newSentence == "" ? "gray" : buttonBlue}
                  fos={15}
                  fow={"600"}
                >
                  Bitir
                </Text>
              </Button>
            </XStack>
            <Stack mt={15}>
              <BannerAds />
            </Stack>
          </SafeAreaView>
        </DismissKeyboardView>
      ) : null}
      <Modal animationType="slide" transparent={false} visible={openModal}>
        <View style={styles.centeredView}>
          <ImageBackground
            source={require("../../assets/continuousNovel/novelbg.png")}
            contentFit="fill"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          />
          <View style={styles.modalView}>
            <XStack>
              <Text fos={18} mb={8} fow={"700"}>
                Sürekli Roman
              </Text>
            </XStack>
            <YStack mb={15}>
              <ScrollView
                style={{ maxHeight: height * 0.34 }}
                showsVerticalScrollIndicator={false}
              >
                <Text>
                  Nasıl Oynanır?{"\n"}
                  {"\n"}
                  Bu keyifli ve etkileşimli oyun, çılgın bir hayal gücüne sahip
                  birkaç arkadaşla oynamak için idealdir.
                  {"\n"}
                  {"\n"}
                  Oyuna başlayacak kişiyi belirlemek için çıkış yapıp "Zar At"
                  oyunumuzu oynayın ve en yüksek zar atan kişiyi seçin.
                  {"\n"}
                  {"\n"}
                  Oyunun başlayacak kişisi, diğer oyunculara göstermeden 5-6
                  satır uzunluğunda bir hikaye yazmaya başlar. Hikaye yazarken,
                  cümleler arasına nokta (.) işareti eklemeyi unutmamalıdır.
                  {"\n"}
                  {"\n"}
                  Hikayeyi yazmayı tamamlayan oyuncu, "Bitir" düğmesine tıklar
                  ve ekranında yazdığı hikayenin son cümlesi görüntülenir.
                  {"\n"}
                  {"\n"}
                  Sıra diğer oyuncuya geçer. Önceki oyuncunun son cümlesini
                  dikkate alarak hikayeyi devam ettirir ve aynı şekilde "Bitir"
                  düğmesine tıklar. Tüm oyuncular hikayelerini tamamladığında
                  "Romanı Bitir ve Oku" düğmesine tıklanır.
                  {"\n"}
                  {"\n"}
                  Şimdi arkadaşlarınızın yarattığı edebi karışıklığı yüksek
                  sesle okuyun. Bu sırada kahkaha krizlerine girebilirsiniz! Bu
                  eğlenceli oyunu keyifle oynayın ve yaratıcı hikayelerin tadını
                  çıkarın.
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
      <Modal animationType="slide" transparent={false} visible={finishNovel}>
        <View style={styles.centeredView}>
          <ImageBackground
            source={require("../../assets/continuousNovel/novelbg.png")}
            contentFit="fill"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          />
          <View style={styles.modalView}>
            <Text fos={18} mb={8} fow={"700"}>
              Romanımız
            </Text>
            <ScrollView mb={10} maxHeight={600}>
              <Text>{novel}</Text>
            </ScrollView>
            <XStack>
              <Button
                onPress={() => {
                  setFinishNovel(false);
                  setTimeout(() => {
                    router.push("/");
                  }, 500);
                }}
                mr={5}
                f={1}
                borderWidth={1}
                boc={buttonBlue}
              >
                <Text fow={"500"} fos={16} color={buttonBlue}>
                  Çıkış
                </Text>
              </Button>
              <Button
                onPress={() => {
                  tryAgainButton();
                }}
                ml={5}
                f={1}
                bg={buttonBlue}
              >
                <Text ta="center" fow={"500"} fos={16} color={"white"}>
                  Tekrar Oyna
                </Text>
              </Button>
            </XStack>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ContinuousNovelGame;
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
