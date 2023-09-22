import React from "react";
import { Stack } from "expo-router";

const _layout = () => (
  <>
    <Stack
      initialRouteName="sudoku-game"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="sudoku-game" />
    </Stack>
  </>
);

export default _layout;
