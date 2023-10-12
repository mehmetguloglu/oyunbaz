import { View, Dimensions } from "react-native";
import React from "react";
import { Stack, Text, XStack, YStack } from "tamagui";
import {
  FontAwesome5,
  Entypo,
  MaterialIcons,
  Ionicons,
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
        width: 150,
        borderRadius: 15,
        height: 200,
        backgroundColor: "white",
      }}
    >
      {/* <YStack alignItems="flex-start" jc={"flex-start"}>
        <YStack ai="center">
          <Text
            fos={16}
            color={type == 0 || type == 2 || !type ? "red" : "black"}
          >
            {number < 11 && number > 1
              ? number
              : number == 11
              ? "J"
              : number == 12
              ? "Q"
              : number == 13
              ? "K"
              : number == 1
              ? "A"
              : null}
          </Text>
          <MaterialCommunityIcons
            name={
              type == 0
                ? "cards-heart"
                : type == 1
                ? "cards-spade"
                : type == 2
                ? "cards-diamond"
                : type == 3
                ? "cards-club"
                : null
            }
            size={16}
            color={type == 0 || type == 2 ? "red" : "black"}
          />
        </YStack>
      </YStack>

      <Stack alignItems="center" jc="center" f={1}>
        <MaterialCommunityIcons
          name={
            type == 0
              ? "cards-heart"
              : type == 1
              ? "cards-spade"
              : type == 2
              ? "cards-diamond"
              : type == 3
              ? "cards-club"
              : null
          }
          size={36}
          color={type == 0 || type == 2 ? "red" : "black"}
        />
      </Stack>

      <YStack alignItems="flex-end" jc={"flex-end"}>
        <YStack rotate="180deg" ai="center">
          <Text
            fos={16}
            color={type == 0 || type == 2 || !type ? "red" : "black"}
          >
            {number < 11 && number > 1
              ? number
              : number == 11
              ? "J"
              : number == 12
              ? "Q"
              : number == 13
              ? "K"
              : number == 1
              ? "A"
              : null}
          </Text>
          <MaterialCommunityIcons
            name={
              type == 0
                ? "cards-heart"
                : type == 1
                ? "cards-spade"
                : type == 2
                ? "cards-diamond"
                : type == 3
                ? "cards-club"
                : null
            }
            size={16}
            color={type == 0 || type == 2 || !type ? "red" : "black"}
          />
        </YStack>
      </YStack> */}
      <Stack ai="flex-start" jc="center"></Stack>
      <Stack f={1} ai="center" jc="center">
        {number == 1 ? (
          <Text ta="center" fow={"600"}>
            Oynama sırası ters döner.
          </Text>
        ) : number == 2 ? (
          <Text ta="center" fow={"600"}>
            Kartı çeken kişi içer.
          </Text>
        ) : number == 3 ? (
          <Text ta="center" fow={"600"}>
            Kartı çeken kişi şarkı söylemeye başlar ve şarkının istediği bir
            kısmında durup oyun sırasına göre yanındaki kişi devam eder. Şarkıyı
            devam ettiremeyip takılan kişi içer. Eğer şarkıyı herkes takılmadan
            devam ettirip başlatan kişiye dönerse o kişi içer.
          </Text>
        ) : number == 4 ? (
          <Text ta="center" fow={"600"}>
            Pas geçme kartı. Kimse içmez, sıra devam eder.
          </Text>
        ) : number == 5 ? (
          <Text ta="center" fow={"600"}>
            Kartı çeken kişinin seçtiği bir kişi içer.
          </Text>
        ) : number == 6 ? (
          <Text ta="center" fow={"600"}>
            Kartı çeken kişi seçtiği bir kişiyle beraber içer.
          </Text>
        ) : number == 7 ? (
          <Text ta="center" fow={"600"}>
            Kartı çeken kişi isim söyler. Oyun sırasına göre diğer oyuncular son
            söylenen ismin son harfiyle başlayan yeni bir isim söylerler.
            Söyleyemeyen veya söylenmiş bir ismi tekrar söyleyen kişi içer.
          </Text>
        ) : number == 8 ? (
          <Text ta="center" fow={"600"}>
            Kartı çeken kişi hariç herkes içer.
          </Text>
        ) : number == 9 ? (
          <Text ta="center" fow={"600"}>
            Tüm oyuncular sağ işaret parmağını masaya koyar. Son koyan oyuncu
            içer.
          </Text>
        ) : number == 10 ? (
          <Text ta="center" fow={"600"}>
            Kartı çeken kişi 2x içer.
          </Text>
        ) : number == 11 ? (
          <Text ta="center" fow={"600"}>
            Kartı çeken kişi içer ve tekrar kart çeker.
          </Text>
        ) : number == 12 ? (
          <Text ta="center" fow={"600"}>
            Kadınlar içer.
          </Text>
        ) : number == 13 ? (
          <Text ta="center" fow={"600"}>
            Erkekler içer.
          </Text>
        ) : null}
      </Stack>
      <XStack jc="space-between" ai="center">
        <Entypo name="drink" size={22} color="orange" />
        <FontAwesome5 name="wine-glass-alt" size={22} color="red" />
        <FontAwesome5 name="beer" size={22} color="orange" />
        <Stack>
          <XStack>
            <MaterialIcons name="local-drink" size={12} color="lightblue" />
            <MaterialIcons name="local-drink" size={12} color="lightblue" />
          </XStack>
          <XStack>
            <MaterialIcons name="local-drink" size={12} color="lightblue" />
            <MaterialIcons name="local-drink" size={12} color="lightblue" />
          </XStack>
        </Stack>
      </XStack>
    </View>
  );
};
export default Card;
