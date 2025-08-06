import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useColorScheme } from "react-native";
import Colors from "../../constants/Colors";
import ThemedView from "../components/themed/ThemedView";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  const insets = useSafeAreaInsets();

  return (
    <ThemedView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.background,
            paddingTop: 20,
            marginBottom: insets.bottom,
          },
          tabBarActiveTintColor: theme.tabBarActive,
          tabBarInactiveTintColor: theme.tabBarInactive,
          animation: "fade",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ focused }) => {
              return <Ionicons
                size={24}
                name={focused ? "home" : "home-outline"}
                color={focused ? theme.tabBarActive : theme.tabBarInactive}
              />
            }
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            title: "About",
            tabBarIcon: ({ focused }) => {
            return <Ionicons
              size={24}
              name={focused ? "person" : "person-outline"}
              color={focused ? theme.tabBarActive : theme.tabBarInactive}
            />
            }
          }}
        />
      </Tabs>
    </ThemedView>
  );
};

export default RootLayout;
