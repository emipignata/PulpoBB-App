import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import {
  NativeBaseProvider,
  Box,
  Popover,
  Button,
  Center,
  HStack,
  Heading,
  Image,
  AspectRatio,
  Stack
} from "native-base";

//Atributos const[]=useState{}
/* 
const[idPulpo,setIdPulpo]=useState()
const[idGasto,setIdGasto]=useState()
const[idCreadorGasto,setIdCreadorGasto]=useState()
const[descripcion,setDescripcion]=useState()
const[monto,setMonto]=useState()
const[fechaCreacion,setFechaCreacion]=useState()
const[estaSaldado,setEstaSaldado]=useState() */



export default function Gasto() {
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
            valor 321.645 $$$$$
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              Concepto y Tipo del gasto
            </Heading>
            <Text fontSize="xs" _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
              Descripción del gasto 
            </Text>
          </Stack>
          <Text fontWeight="400">
            Nombre del creador del gasto
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
