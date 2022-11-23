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
import pulposService from "../services/Pulpos";

export default function AgregarPulpo({ navigation }) {
  const [pulpo, setPulpo] = useState({});
  const [notValid, setNotValid] = useState(true);

  useEffect(
    useCallback(() => {
      const isComplete =
        pulpo.nombre &&
        pulpo.fechaNac &&
        pulpo.peso &&
        pulpo.carnetObraSocial &&
        pulpo.estatura;
      setNotValid(!isComplete);
    }),
    [pulpo]
  );

  const addPulpo = () => {
    console.log("Click en boton guardar pulpo");

    console.log(pulposService);

    pulposService.addPulpo(pulpo).then((res) => {
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
            placeholder="Nombre"
            value={pulpo.nombre}
            onChangeText={(text) => setPulpo({ ...pulpo, nombre: text })}
          />
          <Input
            size="md"
            placeholder="Fecha de Nacimiento"
            value={pulpo.fechaNac}
            onChangeText={(text) => setPulpo({ ...pulpo, fechaNac: text })}
          />
          <Input
            size="md"
            placeholder="Peso"
            keyboardType={"decimal-pad"}
            value={pulpo.peso}
            onChangeText={(text) => setPulpo({ ...pulpo, peso: text })}
          />
          <Input
            size="md"
            placeholder="Carnet Obra Social"
            keyboardType={"numeric"}
            value={pulpo.carnetObraSocial}
            onChangeText={(text) =>
              setPulpo({ ...pulpo, carnetObraSocial: text })
            }
          />
          <Input
            size="md"
            placeholder="Estatura"
            keyboardType={"decimal-pad"}
            value={pulpo.estatura}
            onChangeText={(text) => setPulpo({ ...pulpo, estatura: text })}
          />
        </Stack>

        <Button
          success
          title="Agregar Pulpo"
          margin={1}
          onPress={() => {
            addPulpo;
          }}
          disabled={notValid}
        >
          <Text>Agregar PulpoBB</Text>
        </Button>
        <Button title="Cancel" onPress={() => navigation.goBack()}>
          <Text>Cancelar</Text>
        </Button>
      </Box>
    </NativeBaseProvider>
  );
}
