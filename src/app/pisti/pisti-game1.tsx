// import { View, Dimensions, Pressable, SafeAreaView } from "react-native";
// import React, { useState } from "react";
// import { Button, Stack, Text, XStack, YStack } from "tamagui";
// import { ImageBackground } from "expo-image";
// import ExitButton from "../../components/ExitButton";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { useStateWithCallbackLazy } from "use-state-with-callback";
// import { orderBy } from "lodash";
// import Animated, {
//   useAnimatedStyle,
//   useSharedValue,
//   withTiming,
// } from "react-native-reanimated";
// import Card from "../../components/pisti/Card";

// const { width, height } = Dimensions.get("screen");
// const AnimatedStack = Animated.createAnimatedComponent(Stack);

// const BatakGame = () => {
//   const [userCards, setUserCards] = useState([]);
//   const [computerCards, setComputerCards] = useState([]);

//   const [disabled, setDisabled] = useState(false);

//   let userWinCards = [];
//   let computerWinCards = [];

//   let usedCards = [];
//   let unUsedCards = [
//     {
//       type: 0,
//       number: 0,
//     },
//     {
//       type: 0,
//       number: 1,
//     },
//     {
//       type: 0,
//       number: 2,
//     },
//     {
//       type: 0,
//       number: 3,
//     },
//     {
//       type: 0,
//       number: 4,
//     },
//     {
//       type: 0,
//       number: 5,
//     },
//     {
//       type: 0,
//       number: 6,
//     },
//     {
//       type: 0,
//       number: 7,
//     },
//     {
//       type: 0,
//       number: 8,
//     },
//     {
//       type: 0,
//       number: 9,
//     },
//     {
//       type: 0,
//       number: 10,
//     },
//     {
//       type: 0,
//       number: 11,
//     },
//     {
//       type: 0,
//       number: 12,
//     },

//     {
//       type: 1,
//       number: 0,
//     },
//     {
//       type: 1,
//       number: 1,
//     },
//     {
//       type: 1,
//       number: 2,
//     },
//     {
//       type: 1,
//       number: 3,
//     },
//     {
//       type: 1,
//       number: 4,
//     },
//     {
//       type: 1,
//       number: 5,
//     },
//     {
//       type: 1,
//       number: 6,
//     },
//     {
//       type: 1,
//       number: 7,
//     },
//     {
//       type: 1,
//       number: 8,
//     },
//     {
//       type: 1,
//       number: 9,
//     },
//     {
//       type: 1,
//       number: 10,
//     },
//     {
//       type: 1,
//       number: 11,
//     },
//     {
//       type: 1,
//       number: 12,
//     },

//     {
//       type: 2,
//       number: 0,
//     },
//     {
//       type: 2,
//       number: 1,
//     },
//     {
//       type: 2,
//       number: 2,
//     },
//     {
//       type: 2,
//       number: 3,
//     },
//     {
//       type: 2,
//       number: 4,
//     },
//     {
//       type: 2,
//       number: 5,
//     },
//     {
//       type: 2,
//       number: 6,
//     },
//     {
//       type: 2,
//       number: 7,
//     },
//     {
//       type: 2,
//       number: 8,
//     },
//     {
//       type: 2,
//       number: 9,
//     },
//     {
//       type: 2,
//       number: 10,
//     },
//     {
//       type: 2,
//       number: 11,
//     },
//     {
//       type: 2,
//       number: 12,
//     },
//     {
//       type: 3,
//       number: 0,
//     },
//     {
//       type: 3,
//       number: 1,
//     },
//     {
//       type: 3,
//       number: 2,
//     },
//     {
//       type: 3,
//       number: 3,
//     },
//     {
//       type: 3,
//       number: 4,
//     },
//     {
//       type: 3,
//       number: 5,
//     },
//     {
//       type: 3,
//       number: 6,
//     },
//     {
//       type: 3,
//       number: 7,
//     },
//     {
//       type: 3,
//       number: 8,
//     },
//     {
//       type: 3,
//       number: 9,
//     },
//     {
//       type: 3,
//       number: 10,
//     },
//     {
//       type: 3,
//       number: 11,
//     },
//     {
//       type: 3,
//       number: 12,
//     },
//   ];
//   const [currentCards, setCurrentCards] = useState([]);
//   const [showCard, setShowCard] = useState([]);
//   let selectedComputerCard;

//   const dealCards = () => {
//     let count = 0;
//     let newUserCards = [];
//     let newComputerCards = [];

//     do {
//       let randomCard = {};
//       let sameCard = false;
//       if (count < 4) {
//         do {
//           sameCard = false;
//           let randomType = Math.floor(Math.random() * 4);
//           let randomNumber = Math.floor(Math.random() * 13);
//           randomCard = { type: randomType, number: randomNumber };
//           sameCard = usedCards.some((item) => {
//             return item.type === randomType && item.number === randomNumber;
//           });
//         } while (sameCard || unUsedCards.some((x) => x == randomCard));
//         newUserCards = [...newUserCards, randomCard];
//         usedCards = [...usedCards, randomCard];
//       } else if (count < 8) {
//         do {
//           sameCard = false;
//           let randomType = Math.floor(Math.random() * 4);
//           let randomNumber = Math.floor(Math.random() * 13);
//           randomCard = { type: randomType, number: randomNumber };
//           sameCard = usedCards.some((item) => {
//             return item.type === randomType && item.number === randomNumber;
//           });
//         } while (sameCard || unUsedCards.some((x) => x == randomCard));
//         newComputerCards = [...newComputerCards, randomCard];
//         usedCards = [...usedCards, randomCard];
//       }

//       count++;
//     } while (count < 52);
//     setUserCards(newUserCards);
//     setComputerCards(newComputerCards);
//   };

//   const playButtonPress = () => {
//     setCurrentCards([]);
//     setShowCard([]);
//     setUserCards([]);
//     setComputerCards([]);
//     userWinCards = [];
//     computerWinCards = [];
//     dealCards();
//   };

//   const cardPress = ({ item = null }) => {
//     let spliceIndex;
//     let newUserCards = [...userCards];
//     let computerSpliceIndex;
//     let newComputerCards = [...computerCards];

//     let availableCards;

//     if (item != null) {
//       if (computerCards.some((x) => x.number == item.number)) {
//         debugger;
//         availableCards = computerCards.find((x) => x.number == item.number);
//         setCurrentCards([...currentCards, item, availableCards]);
//         computerWinCards = [
//           ...computerWinCards,
//           ...currentCards,
//           item,
//           availableCards,
//         ];
//         console.log(computerWinCards.length);
//       } else {
//         availableCards =
//           computerCards[
//             Math.floor(Math.random() * computerCards.length - 0.001)
//           ];
//         setCurrentCards([...currentCards, item, availableCards]);
//       }
//     }
//     spliceIndex = userCards.findIndex((x) => x == availableCards);
//     newComputerCards.splice(spliceIndex, 1);
//     setUserCards(newUserCards);

//     computerSpliceIndex = computerCards.findIndex((x) => x == availableCards);
//     newUserCards.splice(computerSpliceIndex, 1);
//     setComputerCards(newComputerCards);

//     computerCardAni.value = withTiming(height / 2 - 150);
//   };

//   const botPlay = ({ item }) => {};

//   const computerCardAni = useSharedValue(-80);
//   const cardAnimatedStyle = useAnimatedStyle(() => {
//     return {
//       top: computerCardAni.value,
//     };
//   });

//   return (
//     <>
//       <ImageBackground
//         style={{
//           width: width,
//           height: height,
//           flex: 1,
//           zIndex: -1,
//         }}
//         contentFit="fill"
//         source={require("../../assets/pisti/pistibg.png")}
//       >
//         <SafeAreaView style={{ flex: 1 }}>
//           <ExitButton />

//           <Button mt={200} onPress={playButtonPress}>
//             Başla
//           </Button>

//           {/* OYUNCU */}
//           <XStack
//             left={15}
//             position="absolute"
//             bottom={height / 20}
//             bg={"darkgreen"}
//             ai="center"
//             px={8}
//             py={2}
//             br={15}
//             overflow="hidden"
//           >
//             <Stack>
//               <Text color={"white"} fos={18}>
//                 Oyuncu{" "}
//               </Text>
//             </Stack>
//             <Stack bg={"black"} px={5} py={2} br={15}>
//               <Text color={"white"} fos={18}>
//                 0
//               </Text>
//             </Stack>
//           </XStack>

//           {/* TUĞBA */}
//           <XStack
//             top={height / 20}
//             position="absolute"
//             right={15}
//             bg={"darkgreen"}
//             ai="center"
//             px={8}
//             py={2}
//             br={15}
//             overflow="hidden"
//           >
//             <Stack>
//               <Text color={"white"} fos={18}>
//                 Tuğba{" "}
//               </Text>
//             </Stack>
//             <Stack bg={"black"} px={5} py={2} br={15}>
//               <Text color={"white"} fos={18}>
//                 0
//               </Text>
//             </Stack>
//           </XStack>

//           {/* PLAYERS CARDS */}
//           <XStack
//             pos="absolute"
//             left={
//               (width -
//                 (35 * (userCards.length > 6 ? 6 : userCards.length - 1) + 90)) /
//               2
//             }
//             bottom={240}
//             jc="center"
//             zIndex={1}
//           >
//             {userCards.map((item, index) => {
//               return (
//                 <Card
//                   key={index}
//                   onPress={() => cardPress({ item: item })}
//                   setDisabled={setDisabled}
//                   disabled={disabled}
//                   number={item.number}
//                   type={item.type}
//                   index={index}
//                 />
//               );
//             })}
//           </XStack>

//           {/* COMPUTER CARDS */}

//           <XStack
//             pos="absolute"
//             left={
//               (width -
//                 (35 * (userCards.length > 6 ? 6 : userCards.length - 1) + 90)) /
//               2
//             }
//             top={-80}
//             jc="center"
//             zIndex={1}
//           >
//             {computerCards.map((item, index) => {
//               return (
//                 <Card
//                   key={index}
//                   onPress={() => cardPress({ item: item })}
//                   setDisabled={setDisabled}
//                   disabled={disabled}
//                   number={item.number}
//                   type={item.type}
//                   index={index}
//                 />
//               );
//             })}
//           </XStack>

//           {/* CURRENT CARDS */}
//           {currentCards.length != 0 ? (
//             <XStack
//               pos="absolute"
//               left={
//                 (width -
//                   (35 * (userCards.length > 6 ? 6 : userCards.length - 1) +
//                     90)) /
//                 2
//               }
//               bottom={height / 2 + 190}
//               jc="center"
//               zIndex={1}
//             >
//               {currentCards.map((item, index) => {
//                 return (
//                   <Card
//                     key={index}
//                     onPress={() => cardPress({ item: item })}
//                     setDisabled={setDisabled}
//                     disabled={disabled}
//                     number={item.number}
//                     type={item.type}
//                     index={index / 6}
//                   />
//                 );
//               })}
//             </XStack>
//           ) : null}
//         </SafeAreaView>
//       </ImageBackground>
//     </>
//   );
// };

// export default BatakGame;
