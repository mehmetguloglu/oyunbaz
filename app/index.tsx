import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Dimensions,
  ImageBackground,
  Pressable,
  SafeAreaView,
} from "react-native";
import { Stack, XStack, Text, YStack, Button, ScrollView, View } from "tamagui";
const { width, height } = Dimensions.get("screen");
const HomeScreen = () => {
  const router = useRouter();

  return (
    <Stack f={1} bg={"white"}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar hidden />
        <ScrollView f={1} bg={"white"}>
          <XStack mt={15} jc="space-between">
            <Stack mr={5} ml={15} f={1} ai="center">
              <ImageBackground
                style={{
                  width: width * 0.44,
                  height: width * 0.44,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.23,
                  shadowRadius: 2.62,
      


          
                  
                  elevation: 4,

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
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.23,
                  shadowRadius: 2.62,

                  elevation: 4,
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
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.23,
                  shadowRadius: 2.62,

                  elevation: 4,
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
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.23,
                  shadowRadius: 2.62,

                  elevation: 4,
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
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.23,
                  shadowRadius: 2.62,

                  elevation: 4,
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
            {/* <Stack mr={5} ml={15} f={1} ai="center">
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
                onPress={() => router.push("/animation")}
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
                    animasyon
                  </Text>
                </Stack>
              </Pressable>
            </XStack>
          </ImageBackground>
        </Stack> */}

            <Stack
              //  ml={5}
              mr={15}
              f={1}
              ai="center"
            >
              <ImageBackground
                style={{
                  width: width * 0.44,
                  height: width * 0.44,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.23,
                  shadowRadius: 2.62,

                  elevation: 4,
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
  );
};

export default HomeScreen;
