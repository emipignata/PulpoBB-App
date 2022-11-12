import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  NativeBaseProvider,
  Box,
  Button,
  HStack,
  Spacer,
  Heading,
  VStack,
  Image,
  FlatList,
  Avatar,
} from "native-base";

export default function LoginG({ navigation }) {
  return (
    <NativeBaseProvider>
    <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
      <Button
        success
        margin={1}
        onPress={() => {
          navigation.navigate("ListaCuidadores");
        }}
      >
        <Text>Logeate con Google</Text>
      </Button>
    </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
