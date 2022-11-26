import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider, Box, Button } from "native-base";
import Logout from "./Logout";

export default function Home({ navigation }) {
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
          <Text>Cuidadores</Text>
        </Button>
        <Button
          success
          margin={1}
          onPress={() => {
            navigation.navigate("ListaPulpos");
          }}
        >
          <Text>Pulpos</Text>
        </Button>
        <Button
          success
          margin={1}
          onPress={() => {
            navigation.navigate("ListaGastos");
          }}
        >
          <Text>Gastos</Text>
        </Button>
        <Button
          success
          margin={1}
          onPress={() => {
            navigation.navigate("ListaTareas");
          }}
        >
          <Text>Tareas</Text>
        </Button>
        <Button
          success
          margin={1}
          onPress={() => {
            navigation.navigate("Mapa");
          }}
        >
          <Text>Mapa</Text>
        </Button>
      
        <Logout/>
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
