import {
  NativeBaseProvider,
  Box,
  Button,
  Input,
  Stack,
  Text,
} from "native-base";
import { useCallback, useContext, useEffect, useState } from "react";
import tareasService from "../services/Tareas";

export default function AgregarTarea({ navigation }) {
  const [tarea, setTarea] = useState({});
  const [notValid, setNotValid] = useState(true);

  useEffect(
    useCallback(() => {
      const isComplete =
        tarea.titulo &&
        tarea.detalle &&
        tarea.fechaCaducidad &&
        tarea.nombreCreador;
      setNotValid(!isComplete);
    }),
    [tarea]
  );

  const addTarea = () => {
    console.log("Click en boton guardar tarea");
    const idd = route.params.id;
    console.log(tarea);
    gastosService.addTarea(tarea).then((res) => {
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
            placeholder="Titulo"
            value={tarea.titulo}
            onChangeText={(text) => setTarea({ ...tarea, titulo: text })}
          />
          <Input
            size="md"
            placeholder="Descripción"
            value={tarea.detalle}
            onChangeText={(text) => setTarea({ ...tarea, detalle: text })}
          />
          <Input
            size="md"
            placeholder="Fecha de Vencimiento"
            value={tarea.fechaCaducidad}
            onChangeText={(text) =>
              setTarea({ ...tarea, fechaCaducidad: text })
            }
          />
          <Input value={() => setTarea({ ...tarea, id: route.params.id })} />
        </Stack>

        <Button
          success
          margin={1}
          onPress={() => {
            addTarea(tarea);
            navigation.goBack();
          }}
          disabled={notValid}
        >
          <Text>Agregar Tarea</Text>
        </Button>
        <Button title="Cancel" onPress={() => navigation.goBack()}>
          <Text>Cancelar</Text>
        </Button>
      </Box>
    </NativeBaseProvider>
  );
}
