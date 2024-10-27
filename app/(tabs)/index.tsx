import { StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    // 安全区域
    <SafeAreaView className="flex-1 items-center justify-center bg-white text-red-300">
      <Text>asddddddddd</Text>
      <StatusBar style="auto"></StatusBar>
    </SafeAreaView>
  );
}
