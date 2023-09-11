import { StyleSheet, Pressable, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { Stack, XStack, YStack, Text, Button } from "tamagui";
import ExitButton from "../../components/ExitButton";

const chars = [
  ["A", "B", "C", "Ç", "D", "E"],
  ["F", "G", "Ğ", "H", "I", "İ"],
  ["J", "K", "L", "M", "N", "O"],
  ["Ö", "P", "R", "S", "Ş", "T", "U"],
  ["Ü", "V", "Y", "Z", "Q", "X", "W"],
];
const data = [
  "KUMBARA",
  "GÖKYÜZÜ",
  "DENİZ",
  "KALEM",
  "KİTAPLIK",
  "ÇİÇEK",
  "UÇURTMA",
  "ŞELALE",
  "GÜNEŞ",
  "YELKENLİ",
  "ORMAN",
  "DAĞ",
  "BALON",
  "RÜZGAR",
  "GÖZLÜK",
  "MASA",
  "SANDALYE",
  "BULUT",
  "AY",
  "YILDIZ",
  "PAPATYA",
  "KUŞ",
  "DALGA",
  "KUM",
  "KAPI",
  "PENCERE",
  "ANAHTAR",
  "YOL",
  "ARABA",
  "BİSİKLET",
  "KUŞAK",
  "SAAT",
  "GÖLET",
  "KÖPRÜ",
  "KASABA",
  "PARK",
  "EV",
  "KUŞAK",
  "RÜYA",
  "GÖZLÜK",
  "TELESKOP",
  "KUMSAL",
  "ŞAPKA",
  "AYAKKABI",
  "BAVUL",
  "KAMP",
  "TURİST",
  "ŞEHİR",
  "MEYVE",
  "MEYVE SUYU",
  "ÇİM",
  "DİNOZOR",
  "KÖPEK",
  "KEDİ",
  "BALIK",
  "ORMAN",
  "KÖY",
  "KÜTÜPHANE",
  "DÜŞ",
  "KÖPRÜ",
  "GEMİ",
  "HEDİYE",
  "TELEFON",
  "TELEVİZYON",
  "YILDIZ",
  "GECE",
  "GÜN",
  "İNSAN",
  "DÜNYA",
  "UYDU",
  "KAYA",
  "KUM",
  "GÜNEŞ",
  "AY",
  "YAĞMUR",
  "GÜNEŞLİK",
  "KAMERA",
  "GÖZLÜK",
  "GÜNEŞ KREMİ",
  "DENİZ",
  "KUMBARA",
  "RÜZGAR",
  "YELKENLİ",
  "MASA",
  "KOLTUK",
  "RADYO",
  "BİLGİSAYAR",
  "TELEFON",
  "KUM",
  "DENİZ",
  "ORMAN",
  "DAĞ",
  "GÖLET",
  "GÖL",
  "NEHİR",
  "KÖPRÜ",
  "ŞELALE",
  "KUŞ",
  "KEDİ",
  "KÖPEK",
  "AT",
  "KOYUN",
  "YILAN",
  "KAPLUMBAĞA",
  "BALIK",
  "MAYMUN",
  "ASLAN",
  "KÖY",
  "ŞEHİR",
  "ÜLKE",
  "DÜNYA",
  "GEZEGEN",
  "UYDU",
  "YILDIZ",
  "GECE",
  "GÜNDÜZ",
  "GÜNBATIMI",
  "GÜNEŞ",
  "AY",
  "YELKENLİ",
  "GEMİ",
  "TEKNE",
  "UÇAK",
  "HELİKOPTER",
  "OTOBÜS",
  "TREN",
  "ARABA",
  "BİSİKLET",
  "MOTOSİKLET",
  "BAVUL",
  "ÇANTA",
  "VALİZ",
  "CÜZDAN",
  "ANAHTAR",
  "KAPI",
  "PENCERE",
  "DUVAR",
  "KALEM",
  "DEFTER",
  "KİTAP",
  "DERGİ",
  "GAZETE",
  "BİLGİSAYAR",
  "EKRAN",
  "KLAVYE",
  "FARE",
  "HOPARLÖR",
  "TELEVİZYON",
  "KUMANDA",
  "KAMERA",
  "FOTOĞRAF",
  "VİDEO",
  "MÜZİK",
  "ŞARKI",
  "DANS",
  "SES",
  "MELODİ",
  "RENK",
  "SİYAH",
  "BEYAZ",
  "MAVİ",
  "YEŞİL",
  "KIRMIZI",
  "SARI",
  "TURUNCU",
  "PEMBE",
  "MOR",
  "YEMEK",
  "KAHVALTI",
  "ÖĞLE",
  "AKŞAM",
  "MEYVE",
  "SEBZE",
  "ET",
  "TAVUK",
  "BAL",
  "PASTA",
  "ÇİKOLATA",
  "SÜT",
  "SU",
  "ÇAY",
  "KAHVE",
  "ŞEKER",
  "TUZ",
  "EKMEK",
  "PİZZA",
  "HAMBURGER",
  "DONDURMA",
  "MEYVE SUYU",
  "SPOR",
  "FUTBOL",
  "BASKETBOL",
  "VOLEYBOL",
  "YÜZME",
  "KOŞU",
  "YOGA",
  "DANS",
  "EĞLENCE",
  "OYUN",
  "PARTİ",
  "SİNEMA",
  "TİYATRO",
  "YIL",
  "AY",
  "GÜN",
  "HAFTA",
  "PAZAR",
  "PAZARTESİ",
  "SALI",
  "ÇARŞAMBA",
  "PERŞEMBE",
  "CUMA",
  "CUMARTESİ",
  "OCAK",
  "ŞUBAT",
  "MART",
  "NİSAN",
  "MAYIS",
  "HAZİRAN",
  "TEMMUZ",
  "AĞUSTOS",
  "EYLÜL",
  "EKİM",
  "KASIM",
  "ARALIK",
  "TARİH",
  "ZAMAN",
  "SAAT",
  "DAKİKA",
  "SANİYE",
  "ROMAN",
  "HİKAYE",
  "ŞİİR",
  "OYUN",
  "MASAL",
  "EDEBİYAT",
  "YAZAR",
  "ŞAİR",
  "YAYINEVİ",
  "YAYIN",
  "KİTAP",
  "KİTAPLIK",
  "KÜTÜPHANE",
  "KARAKTER",
  "KURGU",
  "ANLATI",
  "EDİTÖR",
  "OKUMA",
  "YAZMA",
  "ANLATIM",
  "ÜSLUP",
  "DİALOG",
  "ŞAHIS",
  "TASVİR",
  "AÇIKLAMA",
  "İRONİ",
  "SÜRPRİZ",
  "ÇATIŞMA",
  "ÇÖZÜM",
  "MESAJ",
  "METAFOR",
  "SEMBOL",
  "MEKAN",
  "ZAMAN",
];
let word = data[Math.floor(Math.random() * data.length)];
const Hangman = () => {
  const [keys, setKeys] = useState<Array<string>>([]);
  const [wrongWords, setWrongWords] = useState<Array<string>>([]);

  const handlePress = (item: string) => {
    !keys.find((key) => key == item) ? setKeys([...keys, item]) : null;
  };
  useEffect(() => {
    const wrong = keys.filter((item) => !word.includes(item));
    setWrongWords(wrong);
  }, [keys, word]);

  return (
    <Stack f={1} ai="center" jc="space-between">
      {/* Kaybettin */}
      {wrongWords.length == 6 ? (
        <Stack
          bg={"red"}
          width={"100%"}
          height={"100%"}
          position="absolute"
          zIndex={2}
          opacity={0.8}
          ai="center"
          jc="center"
        >
          <Stack ai="center" jc="center" p={20} bg={"white"} br={20}>
            <Text fow={"500"}>Çöp Adam Öldü!</Text>
            <Text my={20} fos={18} fow={"800"}>
              {word}
            </Text>
            <Button
              onPress={() => {
                word = data[Math.floor(Math.random() * data.length)];
                setKeys([]);
                setWrongWords([]);
              }}
              bg={"green"}
            >
              <Text color={"white"}>Tekrar Oyna</Text>
            </Button>
          </Stack>
        </Stack>
      ) : null}
      {/* Kazandın */}
      {word.split("").every((item) => keys.includes(item)) ? (
        <Stack
          bg={"green"}
          width={"100%"}
          height={"100%"}
          position="absolute"
          zIndex={2}
          opacity={0.9}
          ai="center"
          jc="center"
        >
          <Stack ai="center" jc="center" p={20} bg={"white"} br={20}>
            <Text fow={"500"}>Kazandın!</Text>
            <Text my={20} fos={18} fow={"800"}>
              {word}
            </Text>
            <Button
              onPress={() => {
                word = data[Math.floor(Math.random() * data.length)];
                setKeys([]);
                setWrongWords([]);
              }}
              bg={"green"}
            >
              <Text color={"white"}>Tekrar Oyna</Text>
            </Button>
          </Stack>
        </Stack>
      ) : null}
      {/* Çöp Adam */}
      <SafeAreaView
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
          flex: 1,
        }}
      >
        {wrongWords.length > 0 ? (
          <Stack br={50} width={60} height={60} borderWidth={4} boc={"brown"} />
        ) : null}
        <XStack>
          {wrongWords.length > 2 ? (
            <Stack
              transform={[{ rotate: "45deg" }]}
              height={60}
              borderWidth={2}
              boc={"brown"}
              br={50}
            />
          ) : null}
          {wrongWords.length > 1 ? (
            <Stack
              mx={18}
              width={1}
              height={100}
              borderWidth={2}
              boc={"brown"}
            />
          ) : null}
          {wrongWords.length > 3 ? (
            <Stack
              transform={[{ rotate: "-45deg" }]}
              height={60}
              borderWidth={2}
              boc={"brown"}
              br={50}
            />
          ) : null}
        </XStack>
        <XStack mt={-12}>
          {wrongWords.length > 4 ? (
            <Stack
              transform={[{ rotate: "45deg" }]}
              height={60}
              borderWidth={2}
              boc={"brown"}
              br={50}
            />
          ) : null}
          <Stack mx={18} />
          {wrongWords.length > 5 ? (
            <Stack
              transform={[{ rotate: "-45deg" }]}
              height={60}
              borderWidth={2}
              boc={"brown"}
              br={50}
            />
          ) : null}
        </XStack>
      </SafeAreaView>
      {/* Kelime */}
      <XStack my={25} ai="center" jc="center">
        {word.split("").map((item, index) => {
          const isExist = keys.some((x) => x === item);
          if (item == " ") {
            return (
              <Text key={index} fow={"800"} fos={25} ta="center" jc="center">
                {"    "}
              </Text>
            );
          }

          if (isExist) {
            return (
              <Text key={index} fow={"800"} fos={25} ta="center" jc="center">
                {item}
              </Text>
            );
          }
          return (
            <Stack
              mx={2}
              width={25}
              height={1}
              borderWidth={1}
              boc={"black"}
              key={index}
            />
          );
        })}
      </XStack>
      {/* Harfler */}
      <SafeAreaView>
        <Stack my={8}>
          {wrongWords.length > 0 ? (
            <>
              <Text ta="center" my={15}>
                Hatalı Harfler
              </Text>
              <Text fos={18} fow={"600"} ta="center">
                {wrongWords}
              </Text>
            </>
          ) : null}
        </Stack>
        {/* Klavye */}
        <YStack ai="center" jc="center">
          {chars.map((item, index) => (
            <XStack key={index}>
              {item.map((item, index) => (
                <Pressable
                  key={index}
                  onPress={() => handlePress(item)}
                  style={[
                    styles.keyButton,
                    {
                      backgroundColor: keys.includes(item) ? "gray" : "white",
                    },
                  ]}
                  disabled={keys.includes(item)}
                >
                  <Text style={styles.keyText}>{item}</Text>
                </Pressable>
              ))}
            </XStack>
          ))}
        </YStack>
      </SafeAreaView>
      <ExitButton />
    </Stack>
  );
};

export default Hangman;

const styles = StyleSheet.create({
  keyButton: {
    // padding: 8,
    width: 40,
    height: 40,
    margin: 3,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  keyText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
});
