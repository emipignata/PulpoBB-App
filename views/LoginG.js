import { StyleSheet, Text, View } from "react-native";
import * as Google from "expo-auth-session/providers/google";
import { NativeBaseProvider, Box, Button } from "native-base";
import { useEffect } from "react";

export default function LoginG({ navigation }) {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      '1057533054522-p4514gdp6epjjccgspcd6sd20us068nd.apps.googleusercontent.com'
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      console.log("authenticationEMI",authentication);
     // <MyContext.Provider value={(true)}/>;
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
