import { useContext, useEffect } from "react";
import { Button, View, StyleSheet } from "react-native"
//import { Avatar, Divider } from '@rneui/themed';
//import styles from "./styles";
import Authcontext from "../services/Authcontext";

const Logout = ({ navigation, route }) => {
    const {auth, setAuth} = useContext(Authcontext)

    useEffect(() => {
        console.log(auth);
    }, [])

    const logout = () => {
        setAuth(null)
    }

    return (
        <View>
            {/* ACA TENEMOS QUE INSTALAR E IMPORTAR LA LIBRERIA QUE USO EL PROFE */}
           {/*  <Avatar
              size={64}
              rounded
              source={{ uri: auth.picture }}
            />
            <Divider /> */}

            <Button
                
                title="Logout"
                onPress={logout}
             />
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
export default Logout