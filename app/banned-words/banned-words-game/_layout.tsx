import React from "react";
import { Stack } from "expo-router";

const _layout = () => (
  <>
    <Stack
      initialRouteName="[name]"
      screenOptions={{ headerShown: false, gestureEnabled: false }}
    >
      <Stack.Screen
        name="[name]"
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
    </Stack>
  </>
);

export default _layout;
