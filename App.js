import { StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState, useCallback } from "react";
import * as React from "react";
import ListaCuidadores from "./views/ListaCuidadores";
import Persona from "./views/Persona";
import Mapa from "./views/Mapa";
import ListaTareas from "./views/ListaTareas";
import ListaPulpos from "./views/ListaPulpos";
import Tarea from "./views/Tarea";
import Gasto from "./views/Gasto";
import ListaGastos from "./views/ListaGastos";
import Pulpo from "./views/Pulpo";
import Home from "./views/Home";
import LoginG from "./views/LoginG";
import AgregarPersona from "./views/AgregarPersona";
import AgregarPulpo from "./views/AgregarPulpo";
import AgregarGasto from "./views/AgregarGasto";
import AgregarTarea from "./views/AgregarTarea";
import Authcontext from "./services/Authcontext";
import { authData } from "./services/Authcontext";
import AsyncStorage from "./services/AsyncStorage";

// **********************************************************
// apaga el WARNING
import { LogBox } from "react-native";
LogBox.ignoreLogs(["EventEmitter.removeListener"]);
// **********************************************************
const Stack = createNativeStackNavigator();


export default function App() {
  const [auth, setAuth] = useState(authData);

  useEffect(useCallback(() => {
    console.log("Aqui tengo que verificar si existe data en la cache del dispositivo");
    AsyncStorage.getData('AuthData')
      .then(data => {
        // console.log("Encontro data???", data);
        if (data) {
          setAuth(data)
        }
      })
  }), [])

  useEffect(useCallback(() => {
    
    setTimeout(() => {
      if (auth) {
        AsyncStorage.storeData('AuthData', auth)
        console.log("entra en Store DATA el segundo effect");
      } else {
        AsyncStorage.clearAll()
      }
    });
  }), [auth])

  return (
      <Authcontext.Provider value={{auth, setAuth}}>
        <NavigationContainer>
          <Stack.Navigator>
            <>
              {auth ? (
                <>
                  <Stack.Screen name="Home" component={Home} />
                </>
              ) : (
                <Stack.Screen name="Login" component={LoginG} />
              )}
              <Stack.Screen name="ListaCuidadores" component={ListaCuidadores} />
              <Stack.Screen name="ListaTareas" component={ListaTareas} />
              <Stack.Screen name="ListaPulpos" component={ListaPulpos} />
              <Stack.Screen name="ListaGastos" component={ListaGastos} />
              <Stack.Screen name="Persona" component={Persona} />
              <Stack.Screen name="Tarea" component={Tarea} />
              <Stack.Screen name="Gasto" component={Gasto} />
              <Stack.Screen name="Pulpo" component={Pulpo} />
              <Stack.Screen name="AgregarPersona" component={AgregarPersona} />
              <Stack.Screen name="AgregarPulpo" component={AgregarPulpo} />
              <Stack.Screen name="AgregarTarea" component={AgregarTarea} />
              <Stack.Screen name="AgregarGasto" component={AgregarGasto} />
              <Stack.Screen name="Mapa" component={Mapa} />
             
            </>
          </Stack.Navigator>
        </NavigationContainer>
      </Authcontext.Provider>
    
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
