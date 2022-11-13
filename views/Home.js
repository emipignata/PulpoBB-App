import { StyleSheet, Text, View } from "react-native";
import {
  NativeBaseProvider,
  Box,
  Button,
} from "native-base";

export default function Home({ navigation }) {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Button
          success
          margin={1}
          onPress={() => {
            navigation.navigate("LoginG");
          }}
        >
          <Text>Login Google</Text>
        </Button>
        <Button
          success
          margin={1}
          onPress={() => {
            navigation.navigate("ListaCuidadores");
          }}
        >
          <Text>Tus Cuidadores</Text>
        </Button>
        <Button
          success
          margin={1}
          onPress={() => {
            navigation.navigate("ListaPulpos");
          }}
        >
          <Text>Tus Pulpos</Text>
        </Button>
        <Button
          success
          margin={1}
          onPress={() => {
            navigation.navigate("ListaGastos");
          }}
        >
          <Text>Tus Gastos</Text>
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
            navigation.navigate("Login");
          }}
        >
          <Text>Login</Text>
        </Button>
        <Button
          success
          margin={1}
          onPress={() => {
            navigation.navigate("Signin");
          }}
        >
          <Text>Signin</Text>
        </Button>
        <Button
          success
          margin={1}
          onPress={() => {
            navigation.navigate("Persona");
          }}
        >
          <Text>Persona</Text>
        </Button>
        <Button
          success
          margin={1}
          onPress={() => {
            navigation.navigate("Tarea");
          }}
        >
          <Text>Tarea</Text>
        </Button>
        <Button
          success
          margin={1}
          onPress={() => {
            navigation.navigate("Gasto");
          }}
        >
          <Text>Gasto</Text>
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
