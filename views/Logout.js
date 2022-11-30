import { NativeBaseProvider, Button, Box, Text } from "native-base";
import { useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import AsyncStorage from "../services/AsyncStorage";
//import { Avatar, Divider } from '@rneui/themed';
//import styles from "./styles";
import Authcontext from "../services/Authcontext";

const Logout = ({ navigation, route }) => {
  const { auth, setAuth } = useContext(Authcontext);

  useEffect(() => {
    console.log(auth);
  }, []);

  const logout = () => {
    //AsyncStorage.clearAll();
    setAuth(null);
    console.log("ejecuto LOGOUT  auth:  >>>>", auth);
  };

  return (
    <View>
      <Button success title="Logout" margin={1} onPress={logout}>
        <Text fontSize="xl">Logout</Text>
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Logout;
