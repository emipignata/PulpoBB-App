import {
  NativeBaseProvider,
  Box,
  Button,
  HStack,
  Input,
  Stack,
  Text,
} from "native-base";
import { useCallback, useContext, useEffect, useState } from "react";
import personasService from "../services/Personas";
import { Switch } from 'react-native';

export default function AgregarPersona({ navigation, route }) {
  const [persona, setPersona] = useState({});
  const [notValid, setNotValid] = useState(true);
  const [rol, setRol] = useState(false);

  const toggleSwitch = () => {
    setRol(!rol)
  }

  useEffect(
    useCallback(() => {
      const isComplete =
        persona.nombreApellido && persona.email && persona.vinculo;
      setNotValid(!isComplete);
    }),
    [persona]
  );

  const addPersona = () => {
    setPersona({ ...persona, id: route.params.id })
    console.log(persona)
    // const rolPersona = rol ? "Cuidador" : "Administrador"
    // setPersona({ ...persona, rol: rolPersona })
    personasService.addPersona(persona).then((res) => {
      console.log(res);
      navigation.goBack();
    });
  };

  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Stack space={2} w="75%" maxW="300px" mx="auto">
          <Input
            size="md"
            placeholder="Nombre y Apellido"
            value={persona.nombreApellido}
            onChangeText={(text) =>
              setPersona({ ...persona, nombreApellido: text })
            }
          />

          <Input
            size="md"
            placeholder="Email"
            keyboardType={"email-address"}
            value={persona.email}
            onChangeText={(text) => setPersona({ ...persona, email: text })}
          />
          <Input
            size="md"
            placeholder="Vinculo"
            value={persona.vinculo}
            onChangeText={(text) => setPersona({ ...persona, vinculo: text })}
          />
          {/* <Input
            size="md"
            placeholder="Rol: Admin | Cuidador"
            value={persona.rol}
            onChangeText={(text) => setPersona({ ...persona, rol: text })}
          /> */}
          <HStack alignItems="center" justifyContent="center">
            <Text>Admin</Text>
            <Switch
              trackColor={{ false: "#81b0ff", true: "#81b0ff" }}
              thumbColor={rol ? "#f4f3f4" : "#f4f3f4"}
              onValueChange={toggleSwitch}
              value={rol}
            />
            <Text>Cuidador</Text>
          </HStack>

        </Stack>
        <Button
          success
          margin={1}
          onPress={() => {
            addPersona(persona);
            navigation.navigate("ListaCuidadores")
            /* navigation.goBack(); */
          }}
          disabled={notValid}
        >
          <Text>Agregar Persona</Text>
        </Button>
        <Button title="Cancel" onPress={() => navigation.goBack()}>
          <Text>Cancelar</Text>
        </Button>
      </Box>
      {/* <Input
        isDisabled
        placeholder="id *No es necesario completar"
        value={() => setPersona({ ...persona, id: route.params.id })}
      /> */}
    </NativeBaseProvider>
  );
}
