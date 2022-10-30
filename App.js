import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import ListaCuidadores from "./views/ListaCuidadores";
import Signin from "./views/Signin";
import Login from "./views/Login";
import MenuH from "./views/MenuH";
import Persona from "./views/Persona";
import ListaTareas from "./views/ListaTareas";
import ListaPulpos from "./views/ListaPulpos";
import Tarea from "./views/Tarea";
import Gasto from "./views/Gasto";
import ListaGastos from "./views/ListaGastos";
import Pulpo from "./views/Pulpo";
// **********************************************************
// apaga el WARNING
import { LogBox } from "react-native";

LogBox.ignoreLogs(["EventEmitter.removeListener"]);
// **********************************************************

import {
  NativeBaseProvider,
  Box,
  
} from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        {/* <MenuH /> */}
         <ListaCuidadores />
        {/*  <ListaTareas /> */}
        {/* <ListaPulpos /> */}
        {/* <ListaGastos /> */}
        {/* <Signin/> */}
        {/* <Login/> */}
        {/* <Persona/> */}
        {/* <Tarea/> */}
        {/* <Gasto/> */}
       {/*  <Pulpo/> */}

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
