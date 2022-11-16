import { StyleSheet, Text, View } from "react-native";
import * as React from "react"
import * as Google from "expo-auth-session/providers/google";
import { useEffect } from "react";
import { createContext } from "react";
// import { MyContext } from "../App";
import Home from "./Home";
import {
  NativeBaseProvider,
  Box,
  Button,
  Stack,
} from "native-base";
// import App from "../App";

export default function LoginG({ navigation,change}) {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      '1057533054522-p4514gdp6epjjccgspcd6sd20us068nd.apps.googleusercontent.com'
  });
  
  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      console.log("authenticationEMI",authentication);
      change();
    }
  }, [response]);

  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Button
          success
          margin={1}
          onPress={() => {
            promptAsync();
          }}
        >
          <Text>Logeate con Google</Text>
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
