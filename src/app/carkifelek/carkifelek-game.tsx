import {
  View,
  SafeAreaView,
  Dimensions,
  Modal,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { Button, ScrollView, Stack, Text, XStack } from "tamagui";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Image, ImageBackground } from "expo-image";
import BannerAds from "../../components/google-ads/BannerAds";
import ExitButton from "../../components/ExitButton";
import { buttonBlue, modalMaxWidth } from "../../utils/colors";
import { useRouter } from "expo-router";
const { width, height } = Dimensions.get("screen");
const AnimatedImage = Animated.createAnimatedComponent(Image);

const CarkifelekGame = () => {
  const router = useRouter();
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const ImageRotate = useSharedValue("0deg");
  const ArrowRotate = useSharedValue("-90deg");
  const ImageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: ImageRotate.value }],
    };
  });
  const ArrowAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: ArrowRotate.value }],
    };
  });
  return (
    <>
      {!showModal ? (
        <Stack f={1}>
          <ImageBackground
            source={require("../../assets/woodbg.png")}
            contentFit="fill"
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              zIndex: -10,
            }}
          />
          <ExitButton />
          <SafeAreaView style={{ flex: 1 }}>
            <Stack f={1} ai="center" jc="center">
              <AnimatedImage
                source={require("../../assets/carkifelek/cark.png")}
                contentFit={"fill"}
                style={[
                  {
                    height: Math.floor((width / 20) * 19),
                    width: Math.floor((width / 20) * 19),
                  },
                  ImageAnimatedStyle,
                ]}
              />
              <AnimatedImage
                source={require("../../assets/carkifelek/arrow.png")}
                contentFit="fill"
                style={[
                  {
                    width: Math.floor(width / 9),
                    height: Math.floor(width / 9),
                    marginTop: Math.floor(width / -15),
                  },
                  ArrowAnimatedStyle,
                ]}
              />
            </Stack>

            <Button
              disabled={buttonDisabled}
              mx={15}
              borderWidth={1}
              boc={buttonDisabled ? "gray" : buttonBlue}
              size={"$5"}
              onPress={() => {
                setButtonDisabled(true);
                let deg;

                deg = Math.floor(Math.random() * 10000);

                ImageRotate.value = withTiming(`${deg}deg`, {
                  duration: 3500,
                });
                ArrowRotate.value = withTiming(`${-45}deg`, {
                  duration: 1750,
                });
                setTimeout(() => {
                  ArrowRotate.value = withTiming(`${-90}deg`, {
                    duration: 1750,
                  });
                }, 1750);
                setTimeout(() => {
                  setButtonDisabled(false);
                }, 3500);
              }}
            >
              <Text
                fos={21}
                fow={"600"}
                color={buttonDisabled ? "gray" : buttonBlue}
              >
                Çevir!
              </Text>
            </Button>
            <Stack mt={15}>
              <BannerAds />
            </Stack>
          </SafeAreaView>
        </Stack>
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
              Çevir ve İç!
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
                Oyunun temeli içecek içmek üzerinedir. Oyuncu sayısı kadar küçük
                bardak gerekmektedir. Oyuncular istediği herhangi bir içecek
                seçerek bu oyunu oynayabilirler.
                {"\n"}
                {"\n"}
                Oyuncular sırayla birer kere çarkıfeleği çevirerek çarkıfelekte
                yazanı yapar. Sıranın kimden başlayacığı zar atarak
                belirlenebilir. Çıkış yapıp "Zar At" oyunumuzdan zar atarak
                düşük atan kişinin başlayacağı kararlaştırılabilir.
                {"\n"}
                {"\n"}
                İçecek bitene kadar oyun devam eder.
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

export default CarkifelekGame;
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
