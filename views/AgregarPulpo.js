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
  
  export default function AgregarPulpo({ navigation }) {
    return (
      <NativeBaseProvider>
      
        <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
          <Stack space={4} w="75%" maxW="300px" mx="auto">
            <Input size="md" placeholder="Nombre y Apellido" />
            <Input size="md" placeholder="Fecha Nacimiento" />
            <Input size="md" placeholder="Descripción" />
          </Stack>
  
          <Button
            success
            margin={1}
            onPress={() => {
              console.log(
                "ACA TNEMOSQUE LLAMAR A SERVICIOS POST Y PASAR TODS ESTOS PARAMETROS"
              );
            }}
          >
            <Text>Agregar PulpoBB</Text>
          </Button>
        </Box>
      </NativeBaseProvider>
    );
  }
  