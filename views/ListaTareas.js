import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useToast } from "native-base";
import * as React from "react";
import {
  NativeBaseProvider,
  Box,
  HStack,
  Heading,
  VStack,
  Input,
  Icon,
  IconButton,
  Checkbox,
} from "native-base";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

export default function ListaTareas({ navigation }) {
  const instState = [
    {
      title: "Code",
      isCompleted: true,
    },
    {
      title: "Meeting with team at 9",
      isCompleted: false,
    },
    {
      title: "Check Emails",
      isCompleted: false,
    },
    {
      title: "Write an article",
      isCompleted: false,
    },
  ];
  const [list, setList] = React.useState(instState);
  const [inputValue, setInputValue] = React.useState("");
  const toast = useToast();

  const addItem = (title) => {
    if (title === "") {
      toast.show({
        title: "Please Enter Text",
        status: "warning",
      });
      return;
    }

    setList((prevList) => {
      return [
        ...prevList,
        {
          title: title,
          isCompleted: false,
        },
      ];
    });
  };

  const handleDelete = (index) => {
    setList((prevList) => {
      const temp = prevList.filter((_, itemI) => itemI !== index);
      return temp;
    });
  };

  const handleStatusChange = (index) => {
    setList((prevList) => {
      const newList = [...prevList];
      newList[index].isCompleted = !newList[index].isCompleted;
      return newList;
    });
  };
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Box maxW="300" w="100%">
          <Heading mb="3" size="md">
            Agrega tareas para que tu PulpoBB siempre esté a gusto:
          </Heading>
          <VStack space={4}>
            <HStack space={2}>
              <Input
                flex={1}
                onChangeText={(v) => setInputValue(v)}
                value={inputValue}
                placeholder="Agrega tu Tarea"
              />
              <IconButton
                borderRadius="lg"
                variant="solid"
                icon={
                  <Icon
                    as={Ionicons}
                    name="add-circle-outline"
                    size="lg"
                    color="warmGray.50"
                  />
                }
                onPress={() => {
                  addItem(inputValue);
                  setInputValue("");
                  //ACA deberiamos enviar a la API la tarea tambien!!!!!!!!!!!!!!!!!!!!!!!!!!!
                }}
              />
            </HStack>
            <VStack space={2}>
              {list.map((item, itemI) => (
                <HStack
                  w="100%"
                  justifyContent="space-between"
                  alignItems="center"
                  key={item.title + itemI.toString()}
                >
                  <Checkbox
                    aria-label="checked"
                    isChecked={item.isCompleted}
                    onChange={() => handleStatusChange(itemI)}
                    value={item.title}
                  ></Checkbox>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      navigation.navigate("Tarea");
                    }}
                  >
                    <Text
                      width="100%"
                      flexShrink={1}
                      textAlign="left"
                      mx="2"
                      strikeThrough={item.isCompleted}
                      _light={{
                        color: item.isCompleted ? "gray.400" : "coolGray.800",
                      }}
                      _dark={{
                        color: item.isCompleted ? "gray.400" : "coolGray.50",
                      }}
                      onPress={() => handleStatusChange(itemI)}
                    >
                      {item.title}
                    </Text>
                  </TouchableOpacity>

                  <IconButton
                    size="sm"
                    colorScheme="trueGray"
                    icon={
                      <Icon
                        as={Ionicons}
                        name="trash"
                        size="xs"
                        color="trueGray.400"
                      />
                    }
                    onPress={() => handleDelete(itemI)}
                  />
                </HStack>
              ))}
            </VStack>
          </VStack>
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
