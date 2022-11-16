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

export default function AgregarPersona({ navigation }) {
  return (
    <NativeBaseProvider>
    
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Stack space={4} w="75%" maxW="300px" mx="auto">
          <Input size="md" placeholder="Nombre y Apellido" />
          <Input size="md" placeholder="Email" />
          <Input size="md" placeholder="Teléfono" />
          <Input size="md" placeholder="Direccion" />
        </Stack>

        <HStack
          alignItems="center"
          space={4}
          onPress={() => {
            console.log("hay que pasar true o false segun el rol que se elija");
          }}
        >
          <Text>Es Admin</Text>
          <Switch size="sm" />
        </HStack>

        <Button
          success
          margin={1}
          onPress={() => {
            console.log(
              "ACA TNEMOSQUE LLAMAR A SERVICIOS POST Y PASAR TODS ESTOS PARAMETROS"
            );
          }}
        >
          <Text>Agregar Cuidador</Text>
        </Button>
      </Box>
    </NativeBaseProvider>
  );
}
