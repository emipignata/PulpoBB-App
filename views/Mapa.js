import * as React from "react";
import * as Location from "expo-location";
import { StyleSheet, View, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_KEY } from "@env";
import { Button } from "native-base";

export default function Mapa() {
  const [origin, setOrigin] = React.useState({
    latitude: -34.48908,
    longitude: -58.58399,
  });

  const [destination, setDestination] = React.useState({
    latitude: -34.5570602,
    longitude: -58.4787301,
  });

  const [pulpoHogar, setPulpoHogar] = React.useState({
    latitude: -34.5570602,
    longitude: -58.4787301,
  });

  const [pediatra, setPediatra] = React.useState({
    latitude: -34.5609713,
    longitude: -58.4933025,
  });

  const [guardiaPediatrica1, setGuardiaPediatrica1] = React.useState({
    latitude: -34.556922,
    longitude: -58.495030,
  });

  const [guardiaPediatrica2, setGuardiaPediatrica2] = React.useState({
    latitude: -34.5424338,
    longitude: -58.4759676,
  });

  const [jardin, setJardin] = React.useState({
    latitude: -34.5520225,
    longitude:-58.4705515,
  });





  React.useEffect(() => {
    getLocationPermission();
  }, []);
  async function getLocationPermission() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      alert("Sin Acceso a la Ubicación del Usuario");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    const current = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };

    setOrigin(current);
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}
      >
        <Marker
          title={"ubicación del Pulpo BB"}
          coordinate={origin}
          image={require(".././assets/PulpoIcon.png")}
        />
        <Marker  
          title={"Casa del pulpito"}
          description={"Hogar del pulpoBB"} 
          coordinate={pulpoHogar}
          onPress={() =>setDestination(pulpoHogar)}
          image={require(".././assets/casaIcon.png")}
          
        />
          <Marker 
          title={"pediatra de cabecera"}   
          description={"Pediatra de cabecera con su historial clinico. Consultorios externos del CEMIC. En el detalle del pulpito se encuentra el carnet de Obra Social"} 
          coordinate={pediatra}
          onPress={() =>setDestination(pediatra)}
          image={require(".././assets/pediatriaIcon.png")}          
        />
          <Marker  
          title={"guardia peditrica"} 
          description={"Guardia de cabecera con su historial clinico. En el detalle del pulpito el carnet de Obra Social"} 
          coordinate={guardiaPediatrica1}
          image={require(".././assets/hospitalIcon.jpeg")}
          onPress={() =>setDestination(guardiaPediatrica1)}
        />
          <Marker  
          title={"guardia peditrica"} 
          description={"Guardia alternativa por si la principal se encuentra colapsada. En el detalle del pulpito se encuentra el carnet de Obra Social"} 
          coordinate={guardiaPediatrica2}
          image={require(".././assets/hospitalIcon.jpeg")}
          onPress={() =>setDestination(guardiaPediatrica2)}
        />
          <Marker
          title={"Jardín"} 
          description={"Siempre delantalcito, 2 juguetes con su nombre"}  
          coordinate={jardin}
          image={require(".././assets/JardinIcon.png")}
          onPress={() =>setDestination(jardin)}
        />
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_KEY}
          strokeColor="purple"
          strokeWidth={6}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
