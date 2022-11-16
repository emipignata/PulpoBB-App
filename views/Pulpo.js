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

export default function Pulpo({ navigation, route }) {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <VStack margin={5} space={2} alignItems="center">
          <Avatar
            bg="purple.600"
            alignSelf="center"
            size="2xl"
            source={{
              uri: route.params.pulpo.avatarUrl,
            }}
          >
            RB
          </Avatar>
          <Heading color="emerald.400">{route.params.pulpo.fullName}</Heading>
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
