import { StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import * as React from "react";
import ListaCuidadores from "./views/ListaCuidadores";
import Signin from "./views/Signin";
import Login from "./views/Login";
import Persona from "./views/Persona";
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
import * as Google from "expo-auth-session/providers/google";
import { createContext } from "react";
import Authcontext from "./services/Authcontext";
import { authData } from "./services/Authcontext";

// **********************************************************
// apaga el WARNING
import { LogBox } from "react-native";
LogBox.ignoreLogs(["EventEmitter.removeListener"]);
// **********************************************************
const Stack = createNativeStackNavigator();


export default function App() {
  const [auth, setAuth] = useState(authData);

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
                <Stack.Screen name="LoginG" component={LoginG} />
              )}
              <Stack.Screen name="ListaCuidadores" component={ListaCuidadores} />
              <Stack.Screen name="ListaTareas" component={ListaTareas} />
              <Stack.Screen name="ListaPulpos" component={ListaPulpos} />
              <Stack.Screen name="ListaGastos" component={ListaGastos} />
              <Stack.Screen name="Signin" component={Signin} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Persona" component={Persona} />
              <Stack.Screen name="Tarea" component={Tarea} />
              <Stack.Screen name="Gasto" component={Gasto} />
              <Stack.Screen name="Pulpo" component={Pulpo} />
              <Stack.Screen name="AgregarPersona" component={AgregarPersona} />
              <Stack.Screen name="AgregarPulpo" component={AgregarPulpo} />
              <Stack.Screen name="AgregarTarea" component={AgregarTarea} />
              <Stack.Screen name="AgregarGasto" component={AgregarGasto} />
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
