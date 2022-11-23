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

export default function AgregarGasto({ navigation }) {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Stack space={4} w="75%" maxW="300px" mx="auto">
          <Input size="md" placeholder="Monto" />
          <Input size="md" placeholder="Descripción" />
        </Stack>

        <Button
          success
          margin={1}
          onPress={() => {
            console.log(
              "ACA TNEMOSQUE LLAMAR A SERVICIOS POST Y PASAR TODS ESTOS PARAMETROS"
            );
            console.log("prueba de commit");
          }}
        >
          <Text>Agregar Gasto</Text>
        </Button>
      </Box>
    </NativeBaseProvider>
  );
}
