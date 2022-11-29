import { StyleSheet, View, Image } from "react-native";
import { NativeBaseProvider, Box, Button, Text } from "native-base";
import Logout from "./Logout";

export default function Home({ navigation }) {
  return (
    <NativeBaseProvider>
      <Box style={styles.boxHeader}>
        <Text fontSize="5xl">Pulpo-BB</Text>
        <Image
          source={require("../assets/PulpoIcon.png")}
          style={{ borderRadius: 400 / 2 }}
        />
      </Box>
      <Box style={styles.container}>
        <View>
          <Button
            size="lg"
            margin={1}
            onPress={() => {
              navigation.navigate("ListaCuidadores");
            }}
          >
            <Text fontSize="xl">Cuidadores</Text>
          </Button>
          <Button
            size="lg"
            margin={1}
            onPress={() => {
              navigation.navigate("ListaPulpos");
            }}
          >
            <Text fontSize="xl">Pulpos</Text>
          </Button>
          <Button
            size="lg"
            margin={1}
            onPress={() => {
              navigation.navigate("ListaGastos");
            }}
          >
            <Text fontSize="xl">Gastos</Text>
          </Button>
          <Button
            size="lg"
            margin={1}
            onPress={() => {
              navigation.navigate("ListaTareas");
            }}
          >
            <Text fontSize="xl">Tareas</Text>
          </Button>
          <Button
            size="lg"
            margin={1}
            onPress={() => {
              navigation.navigate("Mapa");
            }}
          >
            <Text fontSize="xl">Mapa</Text>
          </Button>

          <Logout />
        </View>
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

  boxHeader: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 0,
  },
});
