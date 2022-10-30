import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  NativeBaseProvider,
  Box,
  Popover,
  Button,
  Center,
  Tooltip,
  Pressable,
  HStack,
  Badge,
  Spacer,
  Flex,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Image
} from "native-base";

export default function Login() {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
      <View>
      <Heading size="2xl">
        PulpoBB App
      </Heading>
      <Heading color="emerald.400">
        Bienvenido, un oceano de posibilidades te espera.
      </Heading>
      <Text pt="3">
        Administra las tareas, gastos y cuidadores para tu PulpoBB y hacé que tu vida sea más fácil.
      </Text>
    </View>
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading
            size="lg"
            fontWeight="600"
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
          >
            Loggeate para continuar
          </Heading>
          <Heading
            mt="1"
            _dark={{
              color: "warmGray.200",
            }}
            color="coolGray.600"
            fontWeight="medium"
            size="xs"
          >
            Sign in to continue!
          </Heading>

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input type="password" />
              <Link
                _text={{
                  fontSize: "xs",
                  fontWeight: "500",
                  color: "indigo.500",
                }}
                alignSelf="flex-end"
                mt="1"
              >
                Olvidaste tu Password?
              </Link>
            </FormControl>
            <Button mt="2" colorScheme="indigo">
              Login
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text
                fontSize="sm"
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
              >
                Si sos un nuevo usuario.{" "}
              </Text>
              <Link
                _text={{
                  color: "indigo.500",
                  fontWeight: "medium",
                  fontSize: "sm",
                }}
                href="#"
              >
                Registrate
              </Link>
            </HStack>
          </VStack>
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
