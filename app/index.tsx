import { Box } from "@/components/ui/box";
import { Text, View } from "react-native";
import "../global.css";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to the SST-Dashboard App!
      </Text>
      <Box className="bg-black p-5 rounded-2xl">
        <Text className="text-white">This is the Box</Text>
      </Box>
    </View>
  );
}