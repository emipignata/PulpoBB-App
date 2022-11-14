import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import {
  NativeBaseProvider,
  Box,
  Button,
  Heading,
  VStack,
  Avatar,
} from "native-base";

//Atributos const[]=useState{}

/* const [listaIdCuidadores,setlistaIdCuidadores]=useState()
const [listaIdTareas,setlistaIdTareas]=useState()
const [idPulpo,setIdPulpo]=useState()
const [nombre,setNombre]=useState()
const [apellido,setApellido]=useState()
const [descripcion,setDescripcion]=useState()
const [listaIdGastos,setListaIdGastos]=useState()
const [fechaNacimiento,setFechaNacimientno]=useState() */

export default function Pulpo({ navigation }) {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <VStack margin={5} space={3} alignItems="center">
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
            <Heading>
              A component library for the{" "}
              <Heading color="emerald.400">React Ecosystem</Heading>
            </Heading>
            <Text pt="3">
              NativeBase is a simple, modular and accessible component library
              that gives you building blocks to build you React applications.
            </Text>
          </View>
          <Button onPress={() => {
                      navigation.navigate("AgregarGasto");
                    }}>
            <Text>Agregar Gasto</Text>
          </Button>
          <Button onPress={() => {
                      navigation.navigate("AgregarTarea");
                    }}>
            <Text>Agregar Tarea</Text>
          </Button>
          <Button onPress={() => {
                      navigation.navigate("AgregarTarea");
                    }}>
            <Text>Asignar Tarea</Text>
          </Button>
          <Button onPress={() => {
                      navigation.navigate("AgregarPersona");
                    }}>
            <Text>Agregar Cuidador</Text>
          </Button>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});
