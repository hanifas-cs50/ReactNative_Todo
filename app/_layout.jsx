import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const RootLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          paddingTop: 10,
          height: 90,
        },
        tabBarActiveTintColor: "#1e293b",
        tabBarInactiveTintColor: "#64748b",
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: ({ focused }) => {
        return <Ionicons size={24} name={focused ? "home" : "home-outline"} color={focused ? "#1e293b" : "#64748b"} />
      } }} />
      <Tabs.Screen name="about" options={{ title: "About", tabBarIcon: ({ focused }) => {
        return <Ionicons size={24} name={focused ? "person" : "person-outline"} color={focused ? "#1e293b" : "#64748b"} />
      } }} />
    </Tabs>
  );
};

export default RootLayout;
