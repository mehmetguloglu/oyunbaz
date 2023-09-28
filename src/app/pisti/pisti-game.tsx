import { View, Dimensions, Pressable, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { Button, Stack, Text, XStack, YStack } from "tamagui";
import { ImageBackground } from "expo-image";
import ExitButton from "../../components/ExitButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useStateWithCallbackLazy } from "use-state-with-callback";
import { orderBy } from "lodash";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Card from "../../components/pisti/Card";

const { width, height } = Dimensions.get("screen");

// const Card = ({
//   number = 13,
//   type = null,
//   index,
//   onPress,
//   disabled = false,
//   setDisabled = null,
// }) => {
//   const cardPosY = useSharedValue(100);
//   const cardPosX = useSharedValue(index * 35);
//   const cardAnimatedStyle = useAnimatedStyle(() => {
//     return {
//       top: cardPosY.value == 100 ? 100 : withTiming(cardPosY.value),
//       left:
//         cardPosX.value == index * 35 ? index * 35 : withTiming(cardPosX.value),
//     };
//   });
//   return (
//     <Animated.View
//       style={[
//         {
//           position: "absolute",
//           // transform: [{ rotate: `${(index - 3) * 4}deg` }],
//           zIndex: index,
//         },
//         cardAnimatedStyle,
//       ]}
//       key={index}
//     >
//       <Pressable
//         style={{ flex: 1 }}
//         onPress={() => {
//           setDisabled != null ? setDisabled(true) : null;
//           cardPosY.value = (height / 2 - 150) * -1;
//           onPress();
//           setTimeout(() => {
//             cardPosY.value = 100;
//             cardPosX.value = index * 35;
//             setDisabled != null ? setDisabled(false) : null;
//           }, 3600);
//         }}
//         disabled={disabled}
//       >
//         <View
//           style={{
//             shadowColor: "#000",
//             shadowOffset: {
//               width: 0,
//               height: 3,
//             },
//             shadowOpacity: 0.27,
//             shadowRadius: 4.65,

//             elevation: 6,
//             padding: 8,
//             width: 90,
//             borderRadius: 15,
//             height: 150,
//             backgroundColor: "white",
//           }}
//         >
//           <YStack alignItems="flex-start" jc={"flex-start"}>
//             <YStack ai="center">
//               <Text
//                 fos={16}
//                 color={type == 0 || type == 2 || !type ? "red" : "black"}
//               >
//                 {number < 9
//                   ? number + 2
//                   : number == 9
//                   ? "J"
//                   : number == 10
//                   ? "Q"
//                   : number == 11
//                   ? "K"
//                   : number == 12
//                   ? "A"
//                   : null}
//               </Text>
//               <MaterialCommunityIcons
//                 name={
//                   type == 0
//                     ? "cards-diamond"
//                     : type == 2
//                     ? "cards-heart"
//                     : type == 1
//                     ? "cards-club"
//                     : type == 3
//                     ? "cards-spade"
//                     : null
//                 }
//                 size={16}
//                 color={type == 0 || type == 2 ? "red" : "black"}
//               />
//             </YStack>
//           </YStack>

//           <Stack alignItems="center" jc="center" f={1}>
//             <MaterialCommunityIcons
//               name={
//                 type == 0
//                   ? "cards-diamond"
//                   : type == 2
//                   ? "cards-heart"
//                   : type == 1
//                   ? "cards-club"
//                   : type == 3
//                   ? "cards-spade"
//                   : "cards"
//               }
//               size={type != null ? 36 : 50}
//               color={type == 0 || type == 2 || type == null ? "red" : "black"}
//             />
//           </Stack>

//           <YStack alignItems="flex-end" jc={"flex-end"}>
//             <YStack rotate="180deg" jc="center" ai="center">
//               <Text
//                 fos={16}
//                 color={type == 0 || type == 2 || !type ? "red" : "black"}
//               >
//                 {number < 9
//                   ? number + 2
//                   : number == 9
//                   ? "J"
//                   : number == 10
//                   ? "Q"
//                   : number == 11
//                   ? "K"
//                   : number == 12
//                   ? "A"
//                   : null}
//               </Text>
//               <MaterialCommunityIcons
//                 name={
//                   type == 0
//                     ? "cards-diamond"
//                     : type == 2
//                     ? "cards-heart"
//                     : type == 1
//                     ? "cards-club"
//                     : type == 3
//                     ? "cards-spade"
//                     : null
//                 }
//                 size={16}
//                 color={type == 0 || type == 2 || !type ? "red" : "black"}
//               />
//             </YStack>
//           </YStack>
//         </View>
//       </Pressable>
//     </Animated.View>
//   );
// };
//o elde oynanan kartlar için array oluştur

const BatakGame = () => {
  const [userCards, setUserCards] = useState([]);
  const [computerCards, setComputerCards] = useState([]);

  const [disabled, setDisabled] = useState(false);

  let userWinCards = [];
  let computerWinCards = [];

  let usedCards = [];
  let unUsedCards = [
    {
      type: 0,
      number: 0,
    },
    {
      type: 0,
      number: 1,
    },
    {
      type: 0,
      number: 2,
    },
    {
      type: 0,
      number: 3,
    },
    {
      type: 0,
      number: 4,
    },
    {
      type: 0,
      number: 5,
    },
    {
      type: 0,
      number: 6,
    },
    {
      type: 0,
      number: 7,
    },
    {
      type: 0,
      number: 8,
    },
    {
      type: 0,
      number: 9,
    },
    {
      type: 0,
      number: 10,
    },
    {
      type: 0,
      number: 11,
    },
    {
      type: 0,
      number: 12,
    },

    {
      type: 1,
      number: 0,
    },
    {
      type: 1,
      number: 1,
    },
    {
      type: 1,
      number: 2,
    },
    {
      type: 1,
      number: 3,
    },
    {
      type: 1,
      number: 4,
    },
    {
      type: 1,
      number: 5,
    },
    {
      type: 1,
      number: 6,
    },
    {
      type: 1,
      number: 7,
    },
    {
      type: 1,
      number: 8,
    },
    {
      type: 1,
      number: 9,
    },
    {
      type: 1,
      number: 10,
    },
    {
      type: 1,
      number: 11,
    },
    {
      type: 1,
      number: 12,
    },

    {
      type: 2,
      number: 0,
    },
    {
      type: 2,
      number: 1,
    },
    {
      type: 2,
      number: 2,
    },
    {
      type: 2,
      number: 3,
    },
    {
      type: 2,
      number: 4,
    },
    {
      type: 2,
      number: 5,
    },
    {
      type: 2,
      number: 6,
    },
    {
      type: 2,
      number: 7,
    },
    {
      type: 2,
      number: 8,
    },
    {
      type: 2,
      number: 9,
    },
    {
      type: 2,
      number: 10,
    },
    {
      type: 2,
      number: 11,
    },
    {
      type: 2,
      number: 12,
    },
    {
      type: 3,
      number: 0,
    },
    {
      type: 3,
      number: 1,
    },
    {
      type: 3,
      number: 2,
    },
    {
      type: 3,
      number: 3,
    },
    {
      type: 3,
      number: 4,
    },
    {
      type: 3,
      number: 5,
    },
    {
      type: 3,
      number: 6,
    },
    {
      type: 3,
      number: 7,
    },
    {
      type: 3,
      number: 8,
    },
    {
      type: 3,
      number: 9,
    },
    {
      type: 3,
      number: 10,
    },
    {
      type: 3,
      number: 11,
    },
    {
      type: 3,
      number: 12,
    },
  ];
  let currentCards = [];
  const [showCard, setShowCard] = useState([]);
  let selectedComputerCard;

  const dealCards = () => {
    let count = 0;
    let newUserCards = [];
    let newComputerCards = [];

    do {
      let randomCard = {};
      let sameCard = false;
      if (count < 4) {
        do {
          sameCard = false;
          let randomType = Math.floor(Math.random() * 4);
          let randomNumber = Math.floor(Math.random() * 13);
          randomCard = { type: randomType, number: randomNumber };
          sameCard = usedCards.some((item) => {
            return item.type === randomType && item.number === randomNumber;
          });
        } while (sameCard || unUsedCards.some((x) => x == randomCard));
        newUserCards = [...newUserCards, randomCard];
        usedCards = [...usedCards, randomCard];
      } else if (count < 8) {
        do {
          sameCard = false;
          let randomType = Math.floor(Math.random() * 4);
          let randomNumber = Math.floor(Math.random() * 13);
          randomCard = { type: randomType, number: randomNumber };
          sameCard = usedCards.some((item) => {
            return item.type === randomType && item.number === randomNumber;
          });
        } while (sameCard || unUsedCards.some((x) => x == randomCard));
        newComputerCards = [...newComputerCards, randomCard];
        usedCards = [...usedCards, randomCard];
      }

      count++;
    } while (count < 52);
    newUserCards = orderBy(newUserCards, ["type", "number"]).reverse();
    newComputerCards = orderBy(newComputerCards, ["type", "number"]).reverse();
    setUserCards(newUserCards);
    setComputerCards(newComputerCards);
  };

  const playButtonPress = () => {
    dealCards();
  };

  const cardPress = ({ item = null }) => {
    let availableCards;
    // usedCards = [...usedCards, item];
    // unUsedCards.splice(
    //   unUsedCards.findIndex((x) => x == item),
    //   1
    // );
    // setSelectedCard(item, () => {
    //   let newCards = [...userCards];
    //   newCards.splice(index, 1);
    //   currentCards = [...currentCards, item];
    //   setTimeout(() => {
    //     botPlay({ item: item });
    //   }, 500);
    //   setTimeout(() => {
    //     setUserCards(newCards);
    //   }, 3500);
    // });
    if (item != null) {
      if (computerCards.some((x) => x.number == item.number)) {
        availableCards = computerCards.find((x) => x.number == item.number);
      } else {
        availableCards =
          computerCards[
            Math.floor(Math.random() * computerCards.length - 0.001)
          ];
      }
    }

    setShowCard([availableCards]);
    currentCards = [...currentCards, availableCards];
  };

  const botPlay = ({ item }) => {};

  return (
    <>
      <ImageBackground
        style={{
          width: width,
          height: height,
          flex: 1,
          zIndex: -1,
        }}
        contentFit="fill"
        source={require("../../assets/pisti/pistibg.png")}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <ExitButton />

          <Button mt={200} onPress={playButtonPress}>
            Başla
          </Button>

          {/* OYUNCU */}
          <XStack
            left={15}
            position="absolute"
            bottom={height / 20}
            bg={"darkgreen"}
            ai="center"
            px={8}
            py={2}
            br={15}
            overflow="hidden"
          >
            <Stack>
              <Text color={"white"} fos={18}>
                Oyuncu{" "}
              </Text>
            </Stack>
            <Stack bg={"black"} px={5} py={2} br={15}>
              <Text color={"white"} fos={18}>
                0
              </Text>
            </Stack>
          </XStack>

          {/* TUĞBA */}
          <XStack
            top={height / 20}
            position="absolute"
            right={15}
            bg={"darkgreen"}
            ai="center"
            px={8}
            py={2}
            br={15}
            overflow="hidden"
          >
            <Stack>
              <Text color={"white"} fos={18}>
                Tuğba{" "}
              </Text>
            </Stack>
            <Stack bg={"black"} px={5} py={2} br={15}>
              <Text color={"white"} fos={18}>
                0
              </Text>
            </Stack>
          </XStack>

          {/* PLAYERS CARDS */}
          <XStack
            pos="absolute"
            left={
              (width -
                (35 * (userCards.length > 6 ? 6 : userCards.length - 1) + 90)) /
              2
            }
            bottom={240}
            jc="center"
            zIndex={1}
          >
            {userCards.map((item, index) => {
              return (
                <Card
                  key={index}
                  onPress={() => cardPress({ item: item })}
                  setDisabled={setDisabled}
                  disabled={disabled}
                  number={item.number}
                  type={item.type}
                  index={index}
                />
              );
            })}
          </XStack>

          <Stack
            pos="absolute"
            left={(width - 265) / 2}
            top={-80}
            jc="center"
            zIndex={1}
          >
            {showCard.length != 0 ? (
              <Card
                pos={1}
                setDisabled={setDisabled}
                disabled={false}
                number={showCard[0].number}
                type={showCard[0].type}
              />
            ) : null}
          </Stack>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

export default BatakGame;
