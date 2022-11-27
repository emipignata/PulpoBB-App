import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Personas from "../services/Personas";
import { useEffect, useState } from "react";
import {
  NativeBaseProvider,
  Box,
  Button,
  HStack,
  Spacer,
  Heading,
  VStack,
  Image,
  FlatList,
  Avatar,
} from "native-base";

export default function ListaCuidadores({ navigation, route }) {
  const [personas, setPersonas] = useState([]);
  let generarId = () => personas.length + 1;

  useEffect(() => {
    Personas.getPersonas()
      .then((data) => {
        console.log(data);
        setPersonas(data);
        console.log();
      })
      .catch((err) => console.error(err));
  }, []);

  const nav = useNavigation();
 
  return (
    <NativeBaseProvider>
      <Box
        flex={1}
        bg="#fff"
        alignItems="center"
        justifyContent="center"
        margin={0}
      >
        <Image
          size={150}
          borderRadius={100}
          source={{
            uri: "https://wallpaperaccess.com/full/317501.jpg",
          }}
          alt="Alternate Text"
        />
        <Heading fontSize="xl" p="4" pb="3">
          Cuidadores
        </Heading>
        <FlatList
          data={personas}
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
                  size="48px"
                  source={{
                    /* uri: item.avatarUrl, */
                  }}
                />
                <VStack>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      navigation.navigate("Persona", { item: item });
                    }}
                  >
                    <Text
                      _dark={{
                        color: "warmGray.50",
                      }}
                      color="coolGray.800"
                      bold
                    >
                      {item.nombreApellido}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      navigation.navigate("Persona", { item: item });
                    }}
                  >
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: "warmGray.200",
                      }}
                    >
                      {item.email}
                    </Text>
                  </TouchableOpacity>
                </VStack>
                <Spacer />
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    navigation.navigate("Persona", { item: item });
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
                    {item.timeStamp}
                  </Text>
                </TouchableOpacity>
              </HStack>
            </Box>
          )}
          keyExtractor={(item) => item.id}
        />
        <Box
          margin={1}
          onPress={() => {
          }}
        >
          <Button
            success
            margin={1}
            onPress={() => {
              navigation.navigate("AgregarPersona",{ id: generarId() });
            }}
          >
            <Text>Agregar Cuidador</Text>
          </Button>
          <Button title="GoBack" onPress={() => navigation.goBack()}>
            <Text>Volver atrás</Text>
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
