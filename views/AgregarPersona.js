import {
  NativeBaseProvider,
  Box,
  Button,
  HStack,
  Input,
  Stack,
  Switch,
  Text,
} from "native-base";
import { useCallback, useContext, useEffect, useState } from "react";
import personasService from "../services/Personas";

export default function AgregarPersona({ navigation, route }) {
  const [persona, setPersona] = useState({});
  const [notValid, setNotValid] = useState(true);

  useEffect(
    useCallback(() => {
      const isComplete =
        persona.nombreApellido && persona.email && persona.vinculo;
      setNotValid(!isComplete);
    }),
    [persona]
  );

  const addPersona = () => {
    console.log("Click en boton guardar persona");
    console.log(persona);
    personasService.addPersona(persona).then((res) => {
      console.log(res);
      navigation.goBack();
    });
  };

  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Stack space={4} w="75%" maxW="300px" mx="auto">
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
          <Input
            size="md"
            placeholder="Rol: Admin | Cuidador"
            value={persona.rol}
            onChangeText={(text) => setPersona({ ...persona, rol: text })}
          />
          <Input
            isDisabled
            placeholder="id *No es necesario completar"
            value={() => setPersona({ ...persona, id: route.params.id })}
          />
          <Input
            isDisabled
            placeholder="id Pulpo *No es necesario completar"
            value={() => setPersona({ ...persona, idPulpo: 999 })}
          />
          <Input
            isDisabled
            placeholder="*No es necesario completar"
            value={() => setPersona({ ...persona, idtestPulpo: 111 })}
          />
        </Stack>

        <HStack
          alignItems="center"
          space={4}
          // onPress={() => {
          //   console.log("hay que pasar true o false segun el rol que se elija");
          // }}
        >
          {/*  <Text>Es Admin</Text>

           <Switch
            size="sm"
            onPress={(value) => {
              console.log("si el switch es true es admin");
              if (isDisabled) {
                setPersona({ ...persona, rol: "Cuidador" });
              } else {
                setPersona({ ...persona, rol: "Administrador" });
              }
            }}
          /> */}
        </HStack>

        <Button
          success
          margin={1}
          onPress={() => {
            addPersona(persona);
            navigation.goBack();
          }}
          disabled={notValid}
        >
          <Text>Agregar Persona</Text>
        </Button>
        <Button title="Cancel" onPress={() => navigation.goBack()}>
          <Text>Cancelar</Text>
        </Button>
      </Box>
    </NativeBaseProvider>
  );
}
