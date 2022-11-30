import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Pulpos from "../services/Pulpos";
import { useEffect, useState } from "react";
import {
  NativeBaseProvider,
  Box,
  Button,
  HStack,
  Spacer,
  Heading,
  VStack,
  FlatList,
  Avatar,
} from "native-base";

export default function ListaPulpos({ navigation, route }) {
  const [pulpos, setPulpos] = useState([]);

  let generarId = () => pulpos.length + 1;

  useEffect(() => {
    Pulpos.getPulpos()
      .then((data) => {
        console.log(data);
        setPulpos(data);
        console.log();
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" justifyContent="center" margin={3}>
        <Heading fontSize="xl" p="4" pb="3">
          List de PulposBB
        </Heading>
        <FlatList
          data={pulpos}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <Box
              borderBottomWidth="1"
              _dark={{
                borderColor: "muted.50",
              }}
              borderColor="muted.800"
              pl={["0", "4"]}
              pr={["0", "5"]}
              py="2"
            >
              <HStack space={[2, 3]} justifyContent="space-between">
                <Avatar
                  size="30px"
                  source={{
                    uri: item.avatarUrl,
                  }}
                />
                <VStack>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      navigation.navigate("Pulpo", { item: item });
                    }}
                  >
                    <Text
                      _dark={{
                        color: "warmGray.50",
                      }}
                      color="coolGray.800"
                      bold
                    >
                     Nombre: {item.nombre}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      navigation.navigate("Pulpo", { item: item });
                    }}
                  >
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: "warmGray.200",
                      }}
                    >
                      Nro Carnet: {item.carnetObraSocial}
                    </Text>
                  </TouchableOpacity>
                </VStack>
                <Spacer />
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    navigation.navigate("Pulpo", { item: item });
                  }}
                >
                 
                </TouchableOpacity>
              </HStack>
            </Box>
          )}
        />

        <Button
          margin={5}
          onPress={() => {
            navigation.navigate("AgregarPulpo", { id: generarId() });
          }}
        >
          <Text>Agregar PulpoBB</Text>
        </Button>
        <Button title="GoBack" onPress={() => navigation.goBack()}>
          <Text>Volver atrás</Text>
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
