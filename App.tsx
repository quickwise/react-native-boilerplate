import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import { SafeScreen } from "./components/SafeView";
export default function App() {
  return (
    <SafeScreen>
      <View
        className="items-center justify-center bg-white"
        style={{ borderRadius: 40 }}
      >
        <View className="rounded-md bg-red-500 px-4 py-2">
          <Text className="text-right text-white font-bold">
            Open up App.tsx to start working on your app!
          </Text>
        </View>

        <StatusBar style="auto" />
      </View>
    </SafeScreen>
  );
}
