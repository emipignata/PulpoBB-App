import {
    NativeBaseProvider,
    Box,
    Button,
    Input,
    Stack,
    Text,
  } from "native-base";
  
  export default function AgregarTarea({ navigation }) {
    return (
      <NativeBaseProvider>
      
        <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
          <Stack space={4} w="75%" maxW="300px" mx="auto">
            <Input size="md" placeholder="Titulo" />
            <Input size="md" placeholder="Descripción" />
            <Input size="md" placeholder="Fecha de Vencimiento" />
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
            <Text>Agregar Tarea</Text>
          </Button>
        </Box>
      </NativeBaseProvider>
    );
  }
  