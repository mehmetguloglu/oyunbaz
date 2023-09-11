import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import { GameEngine } from "react-native-game-engine";
import entities from "./entities";
import Physics from "./physics";
import { YStack, Text, Stack } from "tamagui";
import ExitButton from "../../components/ExitButton";

export default function App() {
  const [running, setRunning] = useState(false);
  const [gameEngine, setGameEngine] = useState(null);
  const [currentPoints, setCurrentPoints] = useState(0);
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  useEffect(() => {
    setRunning(false);
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ExitButton />
      <Text
        style={{
          textAlign: "center",
          fontSize: 30,
          fontWeight: "bold",
          zIndex: 9,
        }}
      >
        {currentPoints}
      </Text>
      <GameEngine
        ref={(ref) => {
          setGameEngine(ref);
        }}
        systems={[Physics]}
        entities={entities()}
        running={running}
        onEvent={(e) => {
          switch (e.type) {
            case "game_over":
              setRunning(false);
              gameEngine.stop();
              break;
            case "new_point":
              setCurrentPoints(currentPoints + 1);
              break;
          }
        }}
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <StatusBar style="auto" hidden={true} />
      </GameEngine>

      {!running ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            opacity: 0.9,
          }}
        >
          {currentPoints != 0 ? (
            <YStack
              my={15}
              p={12}
              br={12}
              mx={3}
              ai="center"
              borderWidth={2}
              boc={"#557273"}
            >
              <Text fow={"600"} color={"#557273"}>
                Skor
              </Text>
              <Text mt={4} fow={"600"} color={"#557273"} fos={18}>
                {currentPoints}
              </Text>
              <Stack mt={5} br={3} py={2} px={6} bg={"#557273"}></Stack>
            </YStack>
          ) : null}

          <TouchableOpacity
            style={{
              backgroundColor: "#77a0a1",
              paddingHorizontal: 30,
              paddingVertical: 10,
              borderRadius: 10,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.23,
              shadowRadius: 2.62,

              elevation: 4,
            }}
            onPress={() => {
              setCurrentPoints(0);
              setRunning(true);
              gameEngine.swap(entities());
            }}
          >
            <Text style={{ fontWeight: "bold", color: "white", fontSize: 30 }}>
              Oyna
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </SafeAreaView>
  );
}
