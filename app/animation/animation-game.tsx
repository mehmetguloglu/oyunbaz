import React, { useRef, useState } from "react";
import {
  View,
  Animated,
  StyleSheet,
  PanResponder,
  SafeAreaView,
  Pressable,
  Dimensions,
} from "react-native";
import { ScrollView, Separator, Stack, Text, XStack } from "tamagui";
import { FontAwesome } from "@expo/vector-icons";
import ExitButton from "../../components/ExitButton";
const { width, height } = Dimensions.get("window");
const App = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const springValue = useRef(new Animated.Value(currentValue)).current;

  const RightButtonPress = () => {
    let newValue =
      currentValue + 20 > width - 20 ? width - 20 : currentValue + 20;
    setCurrentValue(newValue);
    Animated.spring(springValue, {
      toValue: newValue,
      friction: 3,
      tension: 10,
      useNativeDriver: true,
    }).start();
  };
  const LeftButtonPress = () => {
    let newValue = currentValue < 20 ? 0 : currentValue - 20;
    setCurrentValue(newValue);
    Animated.spring(springValue, {
      toValue: newValue,
      friction: 3,
      tension: 10,
      useNativeDriver: true,
    }).start();
  };
  const DownButtonPress = () => {
    let newValue = currentValue < 20 ? 0 : currentValue - 20;
    setCurrentValue(newValue);
    Animated.spring(springValue, {
      toValue: newValue,
      friction: 3,
      tension: 10,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ExitButton />
      <ScrollView mt={40}>
        <Animated.View
          style={[styles.box, { transform: [{ translateX: springValue }] }]}
        />
        <XStack mt={20}>
          <Stack height={3} br={5} width={200} bg={"red"} mr={20} />
          <Stack height={3} br={5} width={"100%"} bg={"red"} />
        </XStack>
      </ScrollView>
      <XStack>
        <Pressable
          onPress={LeftButtonPress}
          style={{
            flex: 1,
            padding: 20,
            backgroundColor: "red",
            alignItems: "center",
            borderWidth: 2,
          }}
        >
          <Text>
            <FontAwesome name="angle-left" size={24} color="black" />
          </Text>
        </Pressable>
        <Pressable
          onPress={DownButtonPress}
          style={{
            flex: 1,
            padding: 20,
            backgroundColor: "red",
            alignItems: "center",
            borderWidth: 2,
          }}
        >
          <Text>
            <FontAwesome name="angle-down" size={24} color="black" />
          </Text>
        </Pressable>
        <Pressable
          onPress={RightButtonPress}
          style={{
            flex: 1,
            padding: 20,
            backgroundColor: "red",
            alignItems: "center",
            borderWidth: 2,
          }}
        >
          <Text>
            <FontAwesome name="angle-right" size={24} color="black" />
          </Text>
        </Pressable>
      </XStack>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  box: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: "tomato",
    position: "absolute",
  },
});

export default App;
