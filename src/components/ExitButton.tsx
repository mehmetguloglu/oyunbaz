import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Dimensions, Pressable, SafeAreaView } from "react-native";
import { AlertDialog, Button, Text, XStack, YStack } from "tamagui";
const { width, height } = Dimensions.get("screen");
const ExitButton = (props) => {
  const router = useRouter();
  return (
    <AlertDialog>
      <AlertDialog.Trigger asChild>
        <Pressable
          style={{
            position: "absolute",
            left: 15,
            top: height * 0.05,
            zIndex: 999,
            padding: 8,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            backgroundColor: "#fff",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
        >
          <Ionicons name="chevron-back" size={24} color="black" />
          <Text fow={"600"}>Çıkış</Text>
        </Pressable>
      </AlertDialog.Trigger>

      <AlertDialog.Portal>
        <AlertDialog.Overlay
          key="overlay"
          animation="bouncy"
          opacity={0.5}
          // enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <AlertDialog.Content
          bordered
          elevate
          key="content"
          animation={[
            "lazy",
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          x={0}
          scale={1}
          opacity={1}
          y={0}
        >
          <YStack space>
            <AlertDialog.Description fontWeight={"600"}>
              Çıkış yapmak istediğinize emin misiniz?
            </AlertDialog.Description>

            <XStack space="$3" justifyContent="flex-end">
              <AlertDialog.Cancel asChild>
                <Button size={"$3"} borderWidth={1} boc={"black"}>
                  <Text fow={"700"} color={"black"}>
                    İptal
                  </Text>
                </Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action
                onPress={() => {
                  router.push("/");
                }}
                asChild
              >
                <Button size={"$3"} bg={"black"}>
                  <Text fow={"700"} color={"white"}>
                    Çıkış
                  </Text>
                </Button>
              </AlertDialog.Action>
            </XStack>
          </YStack>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog>
  );
};

export default ExitButton;
