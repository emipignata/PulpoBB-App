import { Text } from "react-native";
import Gastos from "../services/Gastos";
import {
  NativeBaseProvider,
  Box,
  Center,
  HStack,
  Heading,
  Image,
  AspectRatio,
  Stack,
  Button,
} from "native-base";

export default function Gasto({ navigation, route }) {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Box
          maxW="80"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: "gray.50",
          }}
        >
          <Box>
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image
                source={{
                  uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
                }}
                alt="image"
              />
            </AspectRatio>
            <Center
              bg="violet.500"
              _dark={{
                bg: "violet.400",
              }}
              _text={{
                color: "warmGray.50",
                fontWeight: "700",
                fontSize: "xs",
              }}
              position="absolute"
              bottom="0"
              px="3"
              py="1.5"
            >
              Monto: ${route.params.item.monto}
            </Center>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                {route.params.item.titulo}
              </Heading>
              <Text
                fontSize="xs"
                _light={{
                  color: "violet.500",
                }}
                _dark={{
                  color: "violet.400",
                }}
                fontWeight="500"
                ml="-0.5"
                mt="-1"
              >
                {route.params.item.detalle}
              </Text>
            </Stack>

            <HStack
              alignItems="center"
              space={4}
              justifyContent="space-between"
            >
              <HStack alignItems="center">
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                  fontWeight="400"
                >
                  {route.params.item.fechaCreacion}
                </Text>
              </HStack>
            </HStack>
            <Button
              size="lg"
              margin={1}
              onPress={() => {
                Gastos.deleteGasto(route.params.item.id);
                navigation.goBack();
              }}
            >
              Borrar Gasto
            </Button>
          </Stack>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
}
