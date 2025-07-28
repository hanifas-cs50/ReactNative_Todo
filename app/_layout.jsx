import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack screenOptions={{ headerTitleAlign: "left" }}>
      <Stack.Screen name="index" options={{ title: "Todo App" }} />
    </Stack>
  );
};

export default RootLayout;
