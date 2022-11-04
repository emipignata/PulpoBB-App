import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  NativeBaseProvider,
  Box,
  Pressable,
  Menu,
  HamburgerIcon
} from "native-base";

export default function MenuH() {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
      <Box w="90%" alignItems="center">
      <Menu w="190" trigger={triggerProps => {
      return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
              <HamburgerIcon />
            </Pressable>
    }}>
        <Menu.Item>PulposBB</Menu.Item>
        <Menu.Item>Cuidadores</Menu.Item>
        <Menu.Item>Gastos</Menu.Item>
        <Menu.Item>Tareas</Menu.Item>
        <Menu.Item>Configuaracion</Menu.Item>
        <Menu.Item>Salir</Menu.Item>
      </Menu>
    </Box>
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
