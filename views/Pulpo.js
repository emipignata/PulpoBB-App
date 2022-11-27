import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider, Box, Heading, VStack, Avatar } from "native-base";

export default function Pulpo({ navigation, route }) {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <VStack margin={3} space={1} alignItems="center">
          <Avatar
            bg="purple.600"
            alignSelf="center"
            size="2xl"
            source={{
              uri: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
            }}
          >
            RB
          </Avatar>

          <View>
            <Heading>Nombre: {route.params.item.nombre}</Heading>
            <Heading color="emerald.400">
              Nacimiento: {route.params.item.fechaNac}
            </Heading>

            <Text pt="3"> Estatura: {route.params.item.estatura} </Text>
            <Text pt="3"> Peso: {route.params.item.peso} </Text>
            <Text pt="3">
              {" "}
              Nro Obra Social: {route.params.item.carnetObraSocial}{" "}
            </Text>
          </View>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});
