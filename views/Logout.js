import { NativeBaseProvider, Button, Box,Text } from "native-base";
import { useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
//import { Avatar, Divider } from '@rneui/themed';
//import styles from "./styles";
import Authcontext from "../services/Authcontext";

const Logout = ({ navigation, route }) => {
  const { auth, setAuth } = useContext(Authcontext);

  useEffect(() => {
    console.log(auth);
  }, []);

  const logout = () => {
    setAuth(null);
  };

  return (
    <View>
      <Button success title="Logout" margin={1} onPress={logout}>
        <Text fontSize="xl">Logout</Text>
      </Button>

      {/* <Button
                title="Logout"
                onPress={logout()}
             /> */}
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
