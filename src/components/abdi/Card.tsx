import { View, Dimensions } from "react-native";
import React from "react";
import { ScrollView, Stack, Text, XStack, YStack } from "tamagui";
import {
  FontAwesome5,
  Entypo,
  MaterialIcons,
  FontAwesome,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";

const Card = ({ number, type }) => {
  return (
    <View
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 3,
        padding: 10,
        width: 120,
        borderRadius: 15,
        height: 180,
        backgroundColor: "white",
      }}
    >
      <Stack f={1} ai="center" jc="center">
        {number == 1 ? (
          // <Text ta="center" fow={"600"}>
          //   Oynama sırası ters döner.
          // </Text>
          <Stack rotate="45deg">
            <FontAwesome5 name="exchange-alt" size={50} color="darkblue" />
          </Stack>
        ) : number == 2 ? (
          // <Text ta="center" fow={"600"}>
          //   Kartı çeken kişi içer.
          // </Text>
          <Stack rotate="-10deg">
            <Text color="orange" fos={50} fow={"800"}>
              1x
            </Text>
          </Stack>
        ) : number == 3 ? (
          // <Text ta="center" fow={"600"}>
          //   Kartı çeken kişi şarkı söylemeye başlar ve şarkının istediği bir
          //   kısmında durup oyun sırasına göre yanındaki kişi devam eder. Şarkıyı
          //   devam ettiremeyip takılan kişi içer. Eğer şarkıyı herkes takılmadan
          //   devam ettirip başlatan kişiye dönerse o kişi içer.
          // </Text>

          <XStack>
            <FontAwesome5 name="music" size={45} color="orange" />
          </XStack>
        ) : number == 4 ? (
          // <Text ta="center" fow={"600"}>
          //   Pas geçme kartı. Kimse içmez, sıra devam eder.
          // </Text>
          <XStack>
            <FontAwesome name="pause-circle-o" size={60} color="gray" />
          </XStack>
        ) : number == 5 ? (
          // <Text ta="center" fow={"600"}>
          //   Kartı çeken kişinin seçtiği bir kişi içer.
          // </Text>
          <XStack>
            <Entypo name="users" size={50} color="darkgreen" />
          </XStack>
        ) : number == 6 ? (
          // <Text ta="center" fow={"600"}>
          //   Kartı çeken kişi seçtiği bir kişiyle beraber içer.
          // </Text>
          <XStack>
            <FontAwesome5 name="glass-cheers" size={50} color="darkred" />
          </XStack>
        ) : number == 7 ? (
          // <Text ta="center" fow={"600"}>
          //   Kartı çeken kişi isim söyler. Oyun sırasına göre diğer oyuncular son
          //   söylenen ismin son harfiyle başlayan yeni bir isim söylerler.
          //   Söyleyemeyen veya söylenmiş bir ismi tekrar söyleyen kişi içer.
          // </Text>
          <XStack>
            <MaterialCommunityIcons
              name="sort-alphabetical-variant"
              size={50}
              color="darkred"
            />
          </XStack>
        ) : number == 8 ? (
          // <Text ta="center" fow={"600"}>
          //   Kartı çeken kişi hariç herkes içer.
          // </Text>
          <XStack>
            <FontAwesome5 name="smile" size={50} color="green" />
          </XStack>
        ) : number == 9 ? (
          // <Text ta="center" fow={"600"}>
          //   Tüm oyuncular sağ işaret parmağını masaya koyar. Son koyan oyuncu
          //   içer.
          // </Text>
          <XStack>
            <Entypo name="fingerprint" size={50} color="orangered" />
          </XStack>
        ) : number == 10 ? (
          // <Text ta="center" fow={"600"}>
          //   Kartı çeken kişi 2x içer.
          // </Text>
          <Stack rotate="-10deg">
            <Text color="orangered" fos={45} fow={"800"}>
              2x
            </Text>
          </Stack>
        ) : number == 11 ? (
          // <Text ta="center" fow={"600"}>
          //   Kartı çeken kişi içer ve tekrar kart çeker.
          // </Text>
          <XStack>
            <MaterialIcons name="mood-bad" size={60} color="orangered" />
          </XStack>
        ) : number == 12 ? (
          // <Text ta="center" fow={"600"}>
          //   Kadınlar içer.
          // </Text>
          <XStack>
            <AntDesign name="woman" size={60} color="orange" />
          </XStack>
        ) : number == 13 ? (
          // <Text ta="center" fow={"600"}>
          //   Erkekler içer.
          // </Text>
          <XStack>
            <AntDesign name="man" size={60} color="orange" />
          </XStack>
        ) : null}
      </Stack>
    </View>
  );
};
export default Card;
