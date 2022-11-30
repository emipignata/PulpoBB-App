import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { Text } from 'native-base'
import * as React from "react"
import * as Google from "expo-auth-session/providers/google";
import { useEffect, useContext } from "react";
import Authcontext from "../services/Authcontext";
import { EXPO_CLIENT_ID } from "@env"
import {
  NativeBaseProvider,
  Box,
} from "native-base";

//image={require (https://oblador.github.io/react-native-vector-icons/)}

export default function LoginG({ navigation, value }) {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: EXPO_CLIENT_ID
  });
  const { setAuth } = useContext(Authcontext)
  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      console.log("authentication LOGIN", authentication);
      setAuth(authentication.accessToken)
    }
  }, [response]);

  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Text
          fontSize="5xl"
        >Pulpo-BB</Text>
        <Image
          source={require("../assets/PulpoIcon.png")}
          style={{ borderRadius: 400 / 2 }}
        />
        <TouchableOpacity
          margin={1}
          onPress={() => {
            promptAsync();
          }}
        >
          <Image source={require('../assets/login-google.jpg')} />
        </TouchableOpacity>
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

  boxHeader: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 0
  }
});
