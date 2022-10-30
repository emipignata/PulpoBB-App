import { StatusBar } from "expo-status-bar";
import { useState } from "react";
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
  Image,
  Icon,
  FlatList,
  Avatar,
  Menu,
  HamburgerIcon,
  AspectRatio,
  Stack
} from "native-base";
import { useState } from "react";

//Atributos const[]=useState{}
const[rol,setRol]=useState()
const[idCuidador,setIdCuidador]=useState()
const[listaIdPulposBb,setListaIdPulposBb]=useState()
const[listaIdTareas,setListaIdTareas]=useState()
const[nombre,setNombre]=useState()
const[apellido,setApellido]=useState()
const[descripcion,setDescripcion]=useState()
const[mail,setMail]=useState()
const[password,setPassword]=useState()
const[fechaNacimiento,setFechaNacimientno]=useState()



export default function Persona() {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
      <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image source={{
            uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
          }} alt="image" />
          </AspectRatio>
          <Center bg="violet.500" _dark={{
          bg: "violet.400"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
            Admin | Cuidador
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              Cuidador: Aru
            </Heading>
            <Text fontSize="xs" _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
              Tia fana del Yoga 
            </Text>
          </Stack>
          <Text fontWeight="400">
            Agregar dirtección y tareas asignadas
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontWeight="400">
                6 mins ago
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
      </Box>
    </NativeBaseProvider>
  );
}
