import React from "react";
import { Alert, Modal, StyleSheet, View } from "react-native";
import { Stack, XStack } from "tamagui";
import { getFontSize, Text } from "tamagui";
import { Feather } from "@expo/vector-icons";
import SelectDropdown from "react-native-select-dropdown";
import { Button } from "tamagui";
import { useRouter } from "expo-router";
const BannedWordsOpenModal = ({ openModal, setOpenModal }) => {
  const router = useRouter();
  const seconds = [
    "60 Saniye",
    "90 Saniye",
    "120 Saniye",
    "150 Saniye",
    "180 Saniye",
    "240 Saniye",
  ];
  return (
    <Stack bg={"blue"}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={openModal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setOpenModal(!openModal);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text fos={18} mb={8} fow={"700"}>
              Yasaklı Kelimeler
            </Text>
            <SelectDropdown
              data={seconds}
              buttonStyle={{
                backgroundColor: "#0092cc",
                borderRadius: 20,
              }}
              defaultButtonText={"120 Saniye"}
              renderDropdownIcon={() => {
                return <Feather name="chevron-down" size={24} color="white" />;
              }}
              dropdownStyle={{
                backgroundColor: "#0092cc",
                borderRadius: 20,
              }}
              rowTextStyle={{
                color: "white",
                fontSize: getFontSize(16),
                fontWeight: "bold",
              }}
              dropdownIconPosition={"right"}
              buttonTextStyle={{
                color: "white",
                fontSize: getFontSize(16),
                fontWeight: "bold",
              }}
              onSelect={(selectedItem, index) => {}}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
            />
            <XStack my={18}>
              <Text fow={"700"} fos={16} color={"#0092cc"}>
                Mavi
              </Text>
              <Text fos={16}> takım anlatacak.</Text>
            </XStack>
            <XStack>
              <Button
                onPress={() => {
                  router.push("/");
                }}
                mr={5}
                f={1}
                boc={"#0092cc"}
              >
                <Text fow={"500"} fos={16} color={"#0092cc"}>
                  İptal
                </Text>
              </Button>
              <Button
                onPress={() => {
                  setOpenModal(false);
                }}
                ml={5}
                f={1}
                bg={"#0092cc"}
              >
                <Text fow={"500"} fos={16} color={"white"}>
                  Başla
                </Text>
              </Button>
            </XStack>
          </View>
        </View>
      </Modal>
    </Stack>
  );
};

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

export default BannedWordsOpenModal;
