import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Gastos from "../services/Gastos";
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


export default function ListaGastos({ navigation, route }) {
  const [gastos, setGastos] = useState([]);

  let generarId = () => gastos.length + 1;

  useEffect(() => {
    Gastos.getGastos()
      .then((data) => {
        console.log(data);
        setGastos(data);
        console.log();
      })
      .catch((err) => console.error(err));
  }, []);

  const nav = useNavigation();

  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" justifyContent="center" margin={3}>
        <Heading fontSize="xl" p="4" pb="3">
          Lista de Gastos
        </Heading>
        <FlatList
          data={gastos}
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
                <Avatar size="48px" name="money" />
                <VStack>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      navigation.navigate("Gasto", { item: item });
                    }}
                  >
                    <Text
                      _dark={{
                        color: "warmGray.50",
                      }}
                      color="coolGray.800"
                      bold
                    >
                      {item.titulo} {/* ACA TRAEMOS LA DATA DE UN SOLO ITEM */}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      navigation.navigate("Gasto", { item: item });
                      console.log(item.id);
                    }}
                  >
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: "warmGray.200",
                      }}
                    >
                      ${item.monto}
                    </Text>
                  </TouchableOpacity>
                </VStack>
                <Spacer />
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    navigation.navigate("Gasto", { item: item });
                  }}
                >
                  <Text
                    fontSize="xs"
                    _dark={{
                      color: "warmGray.50",
                    }}
                    color="coolGray.800"
                    alignSelf="flex-start"
                  >
                    {item.fechaCreacion}
                  </Text>
                </TouchableOpacity>
              </HStack>
            </Box>
          )}
        />
        <Box margin={5}>
          <Button
            success
            margin={1}
            onPress={() => {
              navigation.navigate("AgregarGasto", { id: generarId() });
            }}
          >
            <Text>Agregar Gasto</Text>
          </Button>
          <Button title="GoBack" onPress={() => navigation.goBack()}>
            <Text>Volver atr??s</Text>
          </Button>
        </Box>
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
