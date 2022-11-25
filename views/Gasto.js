
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, useEffect, navigation, route } from "react-native";
import { useState } from "react";
import Gastos from "../services/Gastos";

import {
  NativeBaseProvider,
  Box,
  Center,
  HStack,
  Heading,
  Image,
  AspectRatio,
  Stack
} from "native-base";


//COMO RECIBIR UN ITEM DE LA FLATLIST SI TENEMOS LE ID LO BUSCAMOS CON EL GETGASTO(ID) SI RECIBIMOS EL ITEM ENTERO PODRIAMOS USARLO Y SERIA MEJOR OPCION
export default function Gasto({navigation,route}) {

  /* useEffect(() => {
    Gastos.getGasto(item.id)
    .then((data)=>{
      console.log(data)
      setGastos(data)
      console.log()
    }).catch((err)=>console.error(err))
  }, []); */

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
            Monto: ${route.params.item.monto} 
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
            {route.params.item.detalle} 
            </Heading>
            <Text fontSize="xs" _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
              Descripción del gasto API 
            </Text>
          </Stack>
          <Text fontWeight="400">
            Nombre del creador del gasto API 
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontWeight="400">
                FECHA DE CREACION 6 mins ago API
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
      </Box>
    </NativeBaseProvider>
  );
}
