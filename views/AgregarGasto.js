import {
  NativeBaseProvider,
  Box,
  Button,
  Input,
  Stack,
  Text,
} from "native-base";

import { useCallback, useContext, useEffect, useState } from "react";
import gastosService from "../services/Gastos";

export default function AgregarGasto({ navigation }) {
  const [gasto, setGasto] = useState({});
  const [notValid, setNotValid] = useState(true);

  useEffect(
    useCallback(() => {
      const isComplete = gasto.monto && gasto.detalle;
      setNotValid(!isComplete);
    }),
    [gasto]
  );

  const addGasto = () => {
    console.log("Click en boton guardar gasto");
    console.log(gastosService);

    gastosService.addGasto(gasto).then((res) => {
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
            placeholder="Monto"
            keyboardType={"decimal-pad"}
            value={gasto.monto}
            onChangeText={(text) => setGasto({ ...gasto, monto: text })}
          />
          <Input
            size="md"
            placeholder="Descripción"
            value={gasto.detalle}
            onChangeText={(text) => setGasto({ ...gasto, detalle: text })}
          />
        </Stack>

        <Button
          success
          margin={1}
          onPress={() => {
            addGasto()
          }}
          disabled={notValid}
        >
          <Text>Agregar Gasto</Text>
        </Button>
        <Button title="Cancel" onPress={() => navigation.goBack()}>
          <Text>Cancelar</Text>
        </Button>
      </Box>
    </NativeBaseProvider>
  );
}
