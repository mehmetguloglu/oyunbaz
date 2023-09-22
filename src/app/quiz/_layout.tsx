import React from "react";
import { Stack } from "expo-router";

const _layout = () => (
  <>
    <Stack initialRouteName="quiz-game" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="quiz-game" options={{}} />
    </Stack>
  </>
);

export default _layout;
