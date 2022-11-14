import { StyleSheet, Text, TouchableOpacity } from "react-native";

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

export default function ListaGastos({ navigation }) {
  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      fullName: "Pañales",
      timeStamp: "",
      recentText: "$6.543",
      avatarUrl:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      fullName: "Ropita",
      timeStamp: "",
      recentText: "$6.543",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      fullName: "Nestun",
      timeStamp: "",
      recentText: "$6.543",
      avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
    },
    {
      id: "68694a0f-3da1-431f-bd56-142371e29d72",
      fullName: "Libritos",
      timeStamp: "",
      recentText: "$6.543",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU",
    },
  ];
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" justifyContent="center" margin={10}>
        <Heading fontSize="xl" p="4" pb="3">
          Lista de Gastos
        </Heading>
        <FlatList
          data={data}
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
                    uri: item.avatarUrl,
                  }}
                />
                <VStack>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      navigation.navigate("Gasto");
                    }}
                  >
                  <Text
                    _dark={{
                      color: "warmGray.50",
                    }}
                    color="coolGray.800"
                    bold
                  >
                    {item.fullName}
                  </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      navigation.navigate("Gasto");
                    }}
                  >
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: "warmGray.200",
                    }}
                  >
                    {item.recentText}
                  </Text>
                  </TouchableOpacity>
                </VStack>
                <Spacer />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      navigation.navigate("Gasto");
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
        <Box margin={5}>
          <Button
            success
            margin={1}
            onPress={() => {
              navigation.navigate("AgregarGasto");
            }}
          >
            <Text>Agregar Gasto</Text>
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
