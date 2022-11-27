import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View ,navigation, route} from "react-native";
import { useEffect, useState } from "react";
import {getTareas} from "../services/Tareas"
import {
  NativeBaseProvider,
  Box,
  HStack,
  Heading,
  Stack,
  Switch,
  Button
} from "native-base";

// los dastos estan en API y nosotros los consumimos para tenerlos en la lista---->ES ASI?????
//lo manejamos con state y effect?? 
//const [tareas,setTareas]=useState(tareas)
//useEffect(()=>{setTareas(()=>{getTareas})},tareas)
export default function Tarea({navigation,route}) {
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
       
        
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading color="emerald.400" size="lg" ml="-1">
            {route.params.item.detalle} 
            </Heading>
            <Text fontSize="xs" _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
              {route.params.item.nombreCreador} 
            </Text>
          </Stack>
          <Text fontWeight="400">
          {route.params.item.estado} 
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontWeight="400">
                {route.params.item.fechaCaducidad} 
              </Text>
            </HStack>
          </HStack>
        </Stack>
        
      </Box>
      <HStack alignItems="center" space={4}>
      <Heading size="md" ml="-1">
              Tarea completa: 
            </Heading>
      <Switch size="lg" />
    </HStack>
      </Box>
   
    </NativeBaseProvider>
  );
}
